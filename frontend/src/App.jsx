import React, { useEffect } from "react"
import Navbar from "./components/Navbar"
import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import BlogPage from "./pages/BlogPage"
import ProjectsPage from "./pages/ProjectsPage"
import AboutPage from "./pages/AboutPage"
import NewsletterPage from "./pages/NewsletterPage"
import BlogFullPost from "./components/BlogFullPost"
import Footer from "./components/Footer"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import { useUserStore } from "./stores/useUserStore"
import ErrorPage from "./pages/ErrorPage"
import AdminPage from "./pages/AdminPage"

function App() {
  const { user, checkAuth} = useUserStore()
  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <>
      <div className="min-h-screen font-[inter]">
        <Navbar />
        {/* border border-gray-900 */}
        <div className="pt-10 px-10">
          <Routes>
            <Route path="/" element={<BlogPage />} />
            <Route path="/admin" element={user?.role !== "admin" ? <Navigate to={"/"} /> : <AdminPage/>} />
            <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
            <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to={"/"} />} />
            <Route path="/blog/:slug" element={<BlogFullPost />} />
            {/* <Route path="/blog/:slug" element={!user ? <Navigate to="/login" /> : <BlogFullPost />} /> */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
      <Toaster />
    </>
  )
}

export default App
