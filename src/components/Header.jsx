import React from 'react'
import { FaAnglesRight } from "react-icons/fa6";
import { LuBellRing } from "react-icons/lu";
import { LiaUserSolid } from "react-icons/lia";

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
                <div className='flex items-center'>
                    <div className='flex items-center text-2xl gap-0.5 font-bold text-blue-600'>
                        jobRinger
                        <div className='text-blue-400 text-lg'><FaAnglesRight /></div>
                    </div>
                    <span className='text-xs text-gray-500 ml-2'>India's Job Portal</span>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">My Dashboard</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Jobs</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Jobseeker Services</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Subscription</a>
                </nav>
                <div className='flex space-x-4 items-center'>
                    <LuBellRing className='h-5 w-5 text-gray-700 hover:rotate-6' />
                    <div className='w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center'>
                        <LiaUserSolid className='text-2xl'/>
                    </div>
                    <span className='text-gray-600'>Hello Uttam</span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
