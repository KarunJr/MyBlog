import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import {
  adminRoute,
  getProfile,
  protectRoute,
} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/profile", protectRoute, getProfile);
router.get("/admin",protectRoute, adminRoute);
export default router;
