import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-gray-700 text-gray-200 md:h-[80px] md:py-0 py-10 flex md:flex-row flex-col items-center justify-center gap-5'>
       <p>Powered By Billal Hossain</p>
       <Link to="https://www.linkedin.com/in/md-billal-hossain-19172b264/" className='flex items-center gap-1 text-xl text-[#38BDF8]'>
       <FaLinkedin></FaLinkedin>
       <p>Linkedin</p>
       </Link>
       <Link to="https://github.com/billalhossain2" className='flex items-center gap-1 text-xl text-[#38BDF8]'>
       <FaGithub></FaGithub>
       <p>Github</p>
       </Link>
    </div>
  )
}

export default Footer