import { create } from "zustand";
import axios from "../lib/axios";
import toast from "react-hot-toast";

export const useBlogStore = create((set, get) => ({
  singleBlog:[],
  allBlogs: [],
  comments: [],
  message: null,
  isLoading: false,

  addBlog: async (title, summary, category, image, content) => {
    try {
      const res = await axios.post("/blogs/add-post", { title, summary, category, image, content });
      set({ blogs: res.data, message: res.message });
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occured");
    }
  },

  getAllBlog: async () => {
    set({isLoading: true})
    try {
      const res = await axios.get("/blogs/get-all-post");
      console.log(res.data.blog);
      set({allBlogs: res.data.blog, message: res.data, isLoading: false})
    } catch (error) {
      set({allBlogs: [], isLoading: false})
      toast.error(error.response?.data?.message || "An error occured");
      console.error(error.message);
    }
  },

  getBlog: async(slug)=>{
    set({isLoading: true})
    try {
      const res = await axios.get(`/blogs/get-post/${slug}`)
      console.log(res.data.blog);
      set({singleBlog: res.data.blog,  isLoading: false})
    } catch (error) {
      set({isLoading: false})
      toast.error(error.response?.data?.message || "An error occured");
      console.error(error.message);
    }
  },

  postComment: async(comment, blogId)=>{
    try {
      const res = await axios.post("/blogs/add-comment", {comment, blogId})
      console.log("Blog data is:", res.data.comments);
      set({comments:res.data.comments , isLoading: false})
    } catch (error) {
      toast.error("Please log in to comment!");
      // toast.error(error.response?.data?.message || "An error occured");
      console.error(error.message);
    }
  },

  getComment: async(slug) =>{
    try {
      const res = await axios.get(`/blogs/get-comment/${slug}`)
      console.log("Blog",res.data.comments);
      set({comments: res.data.comments})
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occured");
      console.error(error.message);
    }
  }
}));
