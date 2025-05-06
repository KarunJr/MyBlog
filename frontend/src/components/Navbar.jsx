import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import { X, Menu } from "lucide-react"
import { useUserStore } from '../stores/useUserStore'
const Navbar = () => {
    const { user, logout } = useUserStore()
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();

    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    const isActive = (path) => location.pathname === path;

    // const isAdmin = false
    return (
        <header className={`text-black w-full flex py-4 shadow-xl justify-between ${sticky ? "sticky top-0 bg-[rgba(42,36,36,0.11)] rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.8px] transition-all ease-out duration-500" : "bg-gray-200"} relative z-1`}>
            <div>
                <Link to={"/"} className='text-2xl sm:text-4xl font-bold mx-4 sm:mx-6'>
                    MyBlog
                </Link>
            </div>
            <button className='block sm:hidden absolute right-4 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen ? <X /> : <Menu />
                }

            </button>
            <nav className={`flex items-center gap-3 sm:gap-8 px-8 ${isOpen ? "flex-col absolute top-16 w-full bg-gray-200 shadow-xl transition-all ease-in-out duration-300 py-3" : "hidden sm:flex"}`}>
                <Link to={"/"} onClick={() => setIsOpen(false)} className={`text-base transition-all duration-300 hover:text-blue-400 hover:scale-110 ${isActive("/") ? "border-b-2 border-blue-500 text-blue-500" : "text-black"}`}>
                    Blogs
                </Link>

                <Link to={"/projects"} onClick={() => setIsOpen(false)} className={`text-base transition-all duration-300 hover:text-blue-400 hover:scale-110 ${isActive("/projects") ? "border-b-2 border-blue-500 text-blue-500 " : "text-black"}`}>
                    Projects
                </Link>

                <Link to={"/about"} onClick={() => setIsOpen(false)} className={`text-base transition-all duration-300 hover:text-blue-400 hover:scale-110 ${isActive("/about") ? "border-b-2 border-blue-500 text-blue-500 " : "text-black"}`}>
                    About
                </Link>

                <Link to={"/newsletter"} onClick={() => setIsOpen(false)} className={`text-base transition-all duration-300 hover:text-blue-400 hover:scale-110 ${isActive("/newsletter") ? "border-b-2 border-blue-500 text-blue-500 " : "text-black"}`}>
                    Newsletter
                </Link>

                {
                    user?.role==="admin" && (
                        <Link to={"/admin"} onClick={() => setIsOpen(false)} className={`text-base transition-all duration-300 hover:text-blue-400 hover:scale-110 ${isActive("/admin") ? "border-b-2 border-blue-500 text-blue-500 " : "text-black"}`}>
                            Admin
                        </Link>
                    )
                }

                {
                    user ? (<button className='text-base transition-all duration-300 hover:scale-110 cursor-pointer bg-red-400 py-2 px-3 rounded-md shadow-2xl ease-in-out' onClick={logout}>
                        Logout
                    </button>) : (
                        <Link to={"/login"} className='text-base transition-all duration-300 hover:scale-110 cursor-pointer bg-cyan-400 py-2 px-3 rounded-md shadow-2xl ease-in-out'>
                            Login
                        </Link>
                    )
                }


            </nav>
        </header>
    )
}

export default Navbar
