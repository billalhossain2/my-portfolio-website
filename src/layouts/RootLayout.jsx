import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/shared/Navbar/Navbar'

const RootLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default RootLayout