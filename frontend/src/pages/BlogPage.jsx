import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { MoveRight } from "lucide-react"
import { Link } from 'react-router-dom'
import { useBlogStore } from '../stores/useBlogStore.js'
import Loading from '../components/Loading.jsx'
const BlogPage = () => {
    const { allBlogs, getAllBlog, isLoading } = useBlogStore()

    useEffect(() => {
        getAllBlog()
    }, [getAllBlog])

    const recent = [...allBlogs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3)

    const randomColor = () => {
        const color = ["text-pink-800", "text-green-400", "text-purple-400"]
        const value = Math.floor(Math.random() * color.length)
        return color[value]
    }

    if (isLoading) return <Loading/>


    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className='px-4 mx-auto'
            >
                <h1 className='text-center text-xl font-semibold'>Welcome To My <span className='bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] bg-clip-text text-transparent font-semibold'>Blog</span></h1>
                <p className='text-center text-4xl sm:text-6xl mt-3 font-extrabold'>Learn <span className='bg-gradient-to-r from-[#00DBDE] to-[#FC00FF] bg-clip-text text-transparent'>Apply</span> Master</p>
            </motion.div>

            {/* Recent Blog Post */}
            <div className='mt-4 py-5 px-4'>
                <h2 className='font-semibold mb-4'>Recent blog posts</h2>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-4 auto-rows-min'>
                    {
                        recent.map((blog, index) => (
                            <div className={`h-auto w-full p-4 bg-white shadow-lg rounded-lg ${index === 0 ? "sm:col-span-2 lg:col-span-2" : "sm:col-span-1"}`} key={blog._id}>
                                <img src={blog.image} alt="" className='h-80 w-full object-cover rounded-md' />
                                <h3 className='font-semibold text-blue-600 py-2'>Karun Ghimire <span className='text-3xl items-center leading-none'>.</span> {new Date(blog.createdAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</h3>
                                <div className='mb-4'>
                                    <span className={`bg-gray-200 px-3 py-2 rounded-md font-bold ${randomColor()}`}>{blog.category}</span>
                                </div>
                                <h2 className='font-bold text-black '>{blog.title}</h2>
                                <p className='opacity-50 py-2'>{blog.summary}</p>
                                <Link to={`/blog/${blog.slug}`} className='flex'>
                                    <button className='flex items-center gap-3 text-xm cursor-pointer hover:text-blue-900 transition-colors duration-200 hover:underline opacity-70 py-1'>Read More<MoveRight size={18} /></button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* All Blog Post */}
            <div className='mt-0 py-5 px-4 min-h-screen'>
                <h2 className='font-semibold mb-4'>All blog posts</h2>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-4 auto-rows-min'>
                    {
                        allBlogs.map((blog) => (
                            <div className={`h-auto w-full p-4 bg-white shadow-lg rounded-lg`} key={blog._id}>
                                <img src={blog.image} alt="" className='h-60 w-full object-cover rounded-md' />
                                <h3 className='font-semibold text-blue-600 py-2'>Karun Ghimire <span className='text-3xl items-center leading-none'>.</span> {new Date(blog.createdAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</h3>
                                <div className='mb-4'>
                                    <span className={`bg-gray-200 px-3 py-2 rounded-md font-bold ${randomColor()}`}>{blog.category}</span>
                                </div>
                                <h2 className='font-bold text-black '>{blog.title}</h2>
                                <p className='opacity-50 py-2'>{blog.summary}</p>
                                <Link to={`/blog/${blog.slug}`} className='flex'>
                                    <button className='flex items-center gap-3 text-xm cursor-pointer hover:text-blue-900 transition-colors duration-200 hover:underline opacity-70'>Read More<MoveRight size={18} /></button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BlogPage
