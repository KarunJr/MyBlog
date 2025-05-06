import express from "express";
import { addComment, addPost, getAllPost, getComment, getPost } from "../controllers/blogs.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/add-post",addPost)
router.get("/get-all-post", getAllPost)
router.get("/get-post/:slug", getPost)
router.post("/add-comment",protectRoute, addComment)
router.get("/get-comment/:slug", getComment)

export default router;
