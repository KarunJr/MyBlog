import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - No access token provdied",
      });
    }

    try {
      const decoded = jwt.verify(accessToken, process.env.ACESS_TOKEN_SECRET);
      const user = await User.findById(decoded.userId).select("-password");
      req.user = user;
      next();
    } catch (error) {
      if (error.name === "TOKENEXPIREERRO") {
        return res.status(500).json({
          success: false,
          message: "Unauthorized - Access Toekn expired",
        });
      }
    }
  } catch (error) {
    console.log("Error in protectRoute function", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const adminRoute = async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res
      .status(403)
      .json({ success: false, message: "Only admins can visit this" });
  }
};

export const getProfile = async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    console.log("Error in getProfile function", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
