import { Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center gap-3 text-xm text-white bg-gray-800 py-3'>
      <span className='hover:text-black transition-colors duration-300 ease-in-out'>&copy; {new Date().toLocaleString("en-US", { year: "numeric" })} MyBlog--@Karun</span>
      <div className='flex gap-3'>
        <a className='hover:text-black transition-colors duration-300 ease-in-out inline' href='https://github.com/KarunJr' target='_blank'><Github /></a>
        <a className='hover:text-black transition-colors duration-300 ease-in-out inline' href='https://www.facebook.com/karun.ghimire.71' target='_blank'><Facebook /></a>
        <a className='hover:text-black transition-colors duration-300 ease-in-out inline' href='https://www.instagram.com/_karunghimire_/' target='_blank'><Instagram /></a>
        <a className='hover:text-black transition-colors duration-300 ease-in-out inline' href='https://www.linkedin.com/in/karun-ghimire/' target='_blank'><Linkedin /></a>
      </div>
    </footer>
  )
}

export default Footer
