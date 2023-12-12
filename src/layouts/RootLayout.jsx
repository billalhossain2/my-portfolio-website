import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/shared/Navbar/Navbar'
import Footer from '../pages/shared/Footer/Footer'

const RootLayout = () => {
  return (
    <div className='bg-gray-800'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default RootLayout