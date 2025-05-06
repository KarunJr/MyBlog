import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { redis } from "../lib/redis.js";

const generateToken = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.ACESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

const storeRefreshToken = async(userId, refreshToken)=>{
  await redis.set(`refreshToken: ${userId}`, refreshToken, "EX", 7*24*60*60) //7days
}

const setCookies = (res, accessToken, refreshToken) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true, //prevents from XSS attacks, cross site scripting attacks
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", //prevents CSRF attack, cross-site request forgery attack
    maxAge: 15 * 60 * 1000, //15minutes
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, //7days
  });
};

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist." });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Password must be at least 6 characters long",
        });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    const { accessToken, refreshToken } = generateToken(user._id);

    setCookies(res, accessToken, refreshToken)

    await storeRefreshToken(user._id, refreshToken)

    res.status(201).json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
      },
      message: "User created successfully",
    });
  } catch (error) {
    console.log("Error in signup function", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await User.findOne({email})

    if(!user){
      return res.status(400).json({success: false, message: "User doesn't exist"})
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password)

    if(!isPasswordValid){
      return res.status(400).json({success: false, message: "Invalid password"})
    }

    const {accessToken, refreshToken} = generateToken(user._id)

    setCookies(res,accessToken, refreshToken)

    await storeRefreshToken(user._id, refreshToken)

    await user.save()

    res.status(200).json({success: true, 
      user:{
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      message: "User login successfully."
    })
  } catch (error) {
    console.log("Error in login function", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken
    if(refreshToken){
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
      await redis.del(`refresh_token:${decoded.userId}`)
    }
    res.clearCookie("accessToken")
    res.clearCookie("refreshToken")
    res.status(200).json({success: true, message: `Logout successfully`})
  } catch (error) {
    console.log("Error in logout function", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};


// implement re generate accessToken