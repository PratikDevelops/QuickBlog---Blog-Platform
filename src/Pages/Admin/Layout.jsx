import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'

const Layout = () => {
  const navigate = useNavigate()

  return (
    <>

      <div className="w-full pt-4 px-6">
        <div className="flex items-center justify-between w-full">
          <img
            onClick={() => navigate("/")}
            src={assets.logo}
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
          />

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-[#5243f5] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 rounded-full hover:bg-[#5a4ad3] transition duration-300 shadow-md hover:shadow-lg text-sm sm:text-base">
            Logout
            <img src={assets.arrow} alt="arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex min-h-screen ">
        <div className="w-64  ">
          <Sidebar />
        </div>
        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
