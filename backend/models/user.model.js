import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    email: {
        type: String,
        unique: true,
        lowercase: true, // Ensures emails are always stored in lowercase to avoid case-sensitive issues. 
        trim: true, // Removes extra spaces before and after the email to prevent accidental errors.
        require: [true, "E-mail is required"],
    },

    password: {
        type: String,
        require: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters long"],
    },

    role:{
        type: String,
        enum: ["admin", "user"],
        default: "user",
    }
}, {timestamps: true}) // timestamps give createdAt and updatedAt time as well 

const User = mongoose.model("User", userSchema) 

export default User;