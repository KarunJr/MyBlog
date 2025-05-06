import React from 'react'
import { motion } from "framer-motion"
import profilePic from "../assets/myProfile.jpg"

const AboutPage = () => {
  return (
    <>
      <motion.div
        className='mx-auto w-full mb-3'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        <h1 className='text-center  text-3xl sm:text-4xl font-[railway]'>Know Who <span className='bg-gradient-to-r from-[#21D4FD] to-[#B721FF] bg-clip-text text-transparent'>I'M</span></h1>
      </motion.div>

      <div className='font-[railway]'>

        <div className='h-96 max-w-3xl mx-auto'>

          <img src={profilePic} alt="profilePic" className='object-cover h-full w-full mx-auto rounded-xl shadow-xl' />

        </div>

        <div className='mx-3 sm:mx-8 my-4'>

          <div className='my-2 sm:my-4 p-2 sm:p-3'>
            {/* <h3 className='text-xl font-semibold  sm:py-2'>About Me</h3> */}
            <p className='mt-2 sm:mt-0 text-base'>Hey, I'm Karun Ghimire, a passionate Web Developer from Kathmandu, Nepal. I specialize in building dynamic and user-friendly web applications using MERN stack. I enjoy turning ideas into reality through clean and efficient code. Currently, I'm focused on enhancing my skills in web development, exploring UI/UX design, and learning advanced JavaScript concepts. I love solving problems, optimizing performance, and continuously improving my projects. When I'm not coding, you'll find me working at my family's dairy shop, learning new technologies, or hitting the gym to stay active. Let's connect and build something amazing together! 🚀</p>
          </div>

          <div className='my-2 sm:mb-1 p-2 sm:p-3'>
            <h3 className='text-xl font-semibold  sm:py-2'>Skills</h3>
            <ul className='list-disc mt-2 sm:mt-0 text-base'>
              <li>Proficient in frontend development with React.js and Next.js</li>
              <li>Strong knowledge of Tailwind CSS and responsive web design</li>
              <li>Experienced in building full-stack applications using the MERN stack</li>
              <li>Skilled in state management with Redux and Zustand</li>
              <li>Familiar with authentication methods like JWT and OAuth</li>
              <li>Proficiency in working with REST APIs and handling CRUD operations</li>
              <li>Comfortable with version control using Git and GitHub</li>
              <li>Experienced in deploying applications on Vercel, Render, and Netlify</li>
              <li>Basic knowledge of UI/UX design principles and Figma</li>
              <li>Strong problem-solving skills and ability to debug complex issues</li>
            </ul>
          </div>

          <div className='my-2 sm:mb-1 p-2 sm:p-3'>
            <h3 className='text-xl font-semibold  sm:py-2'>Education</h3>
            <ul className='list-disc mt-2 sm:mt-0 text-base'>
              <li>Bachelor in Computer Applications (BCA) - Ongoing Started in 2021 A.D.</li>
              <li>+2 in Management - Liverpool College</li>
            </ul>
          </div>

        </div>

      </div>
    </>
  )
}

export default AboutPage
