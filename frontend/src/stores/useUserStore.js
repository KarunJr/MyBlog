import { create } from "zustand";
import axios from "../lib/axios";
import toast from "react-hot-toast";

export const useUserStore = create((set, get) => ({
  user: null,
  isLoading: false,
  checkingAuth: true,

  signup: async (email, password, name) => {
    set({ isLoading: true });
    try {
      const res = await axios.post("/auth/signup", { email, password, name });
      set({ user: res.data.user, isLoading: false });
      toast.success(res.data.message);
    } catch (error) {
      set({ isLoading: false });
      toast.error(error.response?.data?.message || "An error occured");
    }
  },

  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const res = await axios.post("/auth/login", { email, password });
      set({ user: res.data.user, isLoading: false });
      toast.success(res.data.message);
    } catch (error) {
      set({ isLoading: false });
      toast.error(error.response?.data?.message || "An error occured");
    }
  },

  logout: async () => {
    try {
      const res = await axios.post("/auth/logout");
      set({ user: null });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occured");
    }
  },

  checkAuth: async()=>{
    try {
      set({checkingAuth: true})
      const res = await axios.get("/auth/profile")
      set({user: res.data, checkingAuth: false})
    } catch (error) {
      set({user: null, checkingAuth: true})
    }
  }
}));
