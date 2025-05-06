import React from 'react'
import ecommerceMock from "../assets/Ecommerce Mock.png"
import ToDoMock from "../assets/todomock.png"
import AuthMock from "../assets/Auth Mock.png"
import { motion } from "framer-motion"
const ProjectsPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className='mx-auto text-center'
      >
        <h1 className='text-4xl'>My Recent <span className='bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70] bg-clip-text text-transparent font-bold '>Works</span></h1>
        <p className='py-2 text-lg'>Here are a few projects I've worked on recently.</p>
      </motion.div>

      <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3 items-start mb-20'>
        <ProjectCard
          image={ecommerceMock}
          title="E-commerce"
          description="My e-commerce website is built with MERN stack and Tailwind CSS, providing a smooth and responsive shopping experience. It features user authentication, product listings, and a cart system. The design is clean, and the backend ensures secure and efficient transactions. 🚀"
          github="https://github.com/KarunJr/Ecommerce_MERN"
          demo="https://ecommerce-mern-1e6j.onrender.com/"
        />
        <ProjectCard
          image={AuthMock}
          title="Authorization Panel"
          description="A simple and secure authorization panel that allows users to log in and access protected content. During login, users will receive a confirmation email. However, due to mail provider limitations, only the admin can receive these emails. Apologies for any inconvenience!"
          github="https://github.com/KarunJr/Auth-Mern"
          demo="https://auth-mern-pt17.onrender.com/login"
        />
        <ProjectCard
          image={ToDoMock}
          title="Basic To-Do"
          description="A simple and efficient Todo app built with the MERN stack. Easily add, edit, and delete tasks with a clean UI. Stay organized and track your daily tasks effortlessly."
          github="https://github.com/KarunJr/TodoApp"
          demo="https://todoapp-dkn4.onrender.com/"
        />

      </div>
    </>

  )
}

export default ProjectsPage

const ProjectCard = ({ image, title, description, github, demo }) => (

  <div className='flex flex-col shadow-lg rounded-lg h-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500 bg-gray-200'>
    <img src={image} alt="" className='overflow-clip object-cover px-3 rounded-lg'/>
    <h1 className='text-2xl text-center text-blue-600'>{title}</h1>
    <p className='px-3 text-black flex-grow'>{description}</p>

    <div className="flex gap-3 flex-wrap justify-center my-3">
      <a href={github} target='_blank' className="bg-gradient-to-r from-gray-800 via-blue-500 to-gray-800 bg-[length:200%] text-white px-6 py-3 rounded-lg shadow-lg uppercase transition-all duration-500 hover:bg-right cursor-pointer">
        Github
      </a>
      <a href={demo} target='_blank' className="bg-gradient-to-r from-gray-800 via-blue-500 to-gray-800 bg-[length:200%] text-white px-6 py-3 rounded-lg shadow-lg uppercase transition-all duration-500 hover:bg-right cursor-pointer">
        Demo
      </a>
    </div>
  </div>
)
