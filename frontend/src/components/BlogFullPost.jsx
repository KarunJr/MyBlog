import React, { useEffect, useState } from 'react'
import { useBlogStore } from '../stores/useBlogStore'
import DOMPurify from "dompurify"
import { Link, useParams } from "react-router-dom"
import Loading from './Loading'
import { MoveRight } from 'lucide-react'

const BlogFullPost = () => {
  const [comment, setComment] = useState("")
  const { singleBlog, getBlog, isLoading, getAllBlog, allBlogs, postComment, comments, getComment } = useBlogStore();
  const { slug } = useParams()

  const handleComment = (e) => {
    e.preventDefault();
    postComment(comment, singleBlog[0]?._id)
    setComment("")
  }

  useEffect(() => {
    getBlog(slug)
  }, [getBlog, slug])

  useEffect(() => {
    getAllBlog()
  }, [getAllBlog])

  useEffect(() => {
    getComment(slug)
  }, [getComment])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const recent = [...allBlogs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3)

  const recentComments  = [...comments].sort((a, b)=> new Date(b.createdAt) - new Date(a.createdAt))
  const randomColor = () => {
    const color = ["text-pink-800", "text-green-400", "text-purple-400"]
    const value = Math.floor(Math.random() * color.length)
    return color[value]
  }
  if (isLoading) return <Loading />


  return (
    <>
      <div className='flex flex-col sm:flex-col lg:flex-row gap-4 mb-4'>
        <div>
          <div className='max-w-6xl w-full shadow-xl px-4 py-4 rounded-lg'>
            <div className='my-4'>
              <h1 className='font-bold text-center mb-7 text-3xl'>{singleBlog[0]?.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(singleBlog[0]?.content) }} />
            </div>

            <div className='text-center my-4'>
              <p className='text-base'>Thanks for reading!!!</p>
              <h1 className='font-bold text-large'>Author</h1>
              <span className='font-bold text-large'>Karun Ghimire</span>
              <p className='text-xs text-gray-400 text-left mt-9'> <span className='text-red-800 font-bold '>Disclaimer: </span> This post's content was generated using AI and is intended solely for educational and demonstration purposes.</p>
            </div>
          </div>

          {/* For Comment */}
          <div className='my-8'>
            <div>
              <form onSubmit={handleComment}>
                <div>
                  <label htmlFor="comment"></label>
                  <textarea
                    name="comment"
                    id="comment"
                    value={comment}
                    required
                    onChange={(e) => setComment(e.target.value)}
                    className='border w-full px-2 py-2 rounded-md focus:ring-2 focus:outline-none focus:ring-yellow-400'
                    placeholder='What are your thoughts..?'
                  ></textarea>

                </div>

                <div className='flex justify-end items-center gap-3 mt-3'>
                  <button
                    className='bg-cyan-300 rounded-md px-4 py-2 cursor-pointer shadow-xl hover:bg-cyan-500 transition-colors ease-in-out duration-500'
                    type='submit'
                  >
                    Post
                  </button>

                  <button
                    className='bg-cyan-300 rounded-md px-4 py-2 cursor-pointer shadow-xl hover:bg-cyan-500 transition-colors ease-in-out duration-500'
                    type='button'
                    onClick={() => setComment("")}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>

            <div className='my-5'>
              <h1>Comments</h1>
              {
                comments.length === 0 ?
                  <p className='text-large mt-3 font-semibold text-gray-400'>No comments yet!</p> :
                  <div>
                    {
                      recentComments.map((comment) => (
                        <div className='w-1/2 border rounded-md border-b-black mt-3 py-4 px-3' key={comment._id}>
                          <h1 className='font-semibold texl-xl inline'>{comment.user.name}</h1>
                          <span className='ml-2 text-xs'>{new Date(comment.createdAt).toLocaleDateString("en-US",{
                            dateStyle: "medium",
                          })}</span>
                          <p className='mt-2 text-gray-800 text-base'>{comment.text}</p>
                        </div>
                      ))
                    }
                  </div>
              }

            </div>
          </div>
        </div>


        {/* For Latest blog */}
        <div className='mt-4 py-5 px-0 sm:px-4'>
          <h2 className='font-semibold mb-4'>Recent blog posts</h2>
          <div className='flex flex-col md:flex-row lg:flex-col justify-center gap-3'>
            {
              recent.map((blog) => (
                <div className='h-auto w-[300px] p-4 bg-white shadow-lg rounded-lg' key={blog._id}>
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
      </div>

    </>
  )
}

export default BlogFullPost
