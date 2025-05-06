import React, { useState } from 'react'
import { motion } from "framer-motion"
import { ArrowRight, Loader } from "lucide-react"
import { Link } from "react-router-dom"
import { useUserStore } from '../stores/useUserStore'
const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, isLoading } = useUserStore()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
        console.log("Loign details", email, password);
    }
    return (
        <div className='flex flex-col justify-center items-center w-full py-12 sm:py-6 bg-indigo-900 rounded-lg shadow-2xl'>
            <motion.div className='w-full'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h1 className='text-3xl text-center font-bold mb-2'>MyBlog</h1>
                <h1 className='text-2xl text-center'>Welcome Back!</h1>
                <p className='text-center text-sm text-gray-400'>Please enter your details</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='mt-8 sm:max-w-md sm:w-full bg-gray-200 shadow-2xl px-4 rounded-lg'
            >
                <div className='my-4'>
                    <form onSubmit={handleSubmit}>
                        <div className='mt-3'>
                            <label htmlFor="email">Email Address:</label>
                            <input
                                id='email'
                                className='border border-black px-3 py-2 w-full mt-3 rounded-lg focus:ring-2 focus:outline-none focus:ring-indigo-400 focus:shadow-2xl'
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="password">Password:</label>
                            <input
                                id='password'
                                className='border border-black px-3 py-2 w-full mt-3 rounded-lg focus:ring-2 focus:outline-none focus:ring-indigo-400 focus:shadow-2xl'
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button className='w-full text-center mt-5 bg-gradient-to-r from-[#1A2980] via-[#26D0CE] to-[#1A2980] py-4 transition-all duration-500 bg-[length:200%_auto] text-white shadow-[0_0_20px_#eee] rounded-lg hover:bg-right hover:text-white flex justify-center gap-2 cursor-pointer' disabled={isLoading} type='submit'>
                            {
                                isLoading ? <><Loader className='animate-spin' /></> : <>Login <ArrowRight /></>
                            }
                        </button>
                        <div className='mt-5'>
                            <p className='text-xs'>By creating an account, you agree to our <span className='text-blue-500 cursor-pointer'>Terms of Service</span> and <span className='text-blue-500 cursor-pointer'>Privacy Policy</span></p>

                            <p className='text-sm mt-2 text-center'>Don't have an account? <Link to={"/signup"} className='text-blue-500 cursor-pointer underline'>Sign Up</Link></p>
                        </div>

                    </form>
                </div>
            </motion.div>
        </div>
    )
}

export default LoginPage
