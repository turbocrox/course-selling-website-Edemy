import { Link } from 'react-router-dom'
import {assets} from  '../../assets/assets.js'
import React from 'react'

const Navbar = () => {

  const  isCourseListPage = window.location.pathname === '/course-list'
  return (
    <div  className= {` flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b corder-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`} >

       <img src={assets.logo} alt="Logo"  className='w-28 lg:w-32  cursor-pointer'/>  
        <div  className=' hidden md:flex items-center justify-center gap-5 text-gray-500'> 
          <div className='flex items-center gap-5'> 
                  <button>Become  Educator |</button>
                  <Link to='/my-enrollments'> My Enrollment</Link>

          </div>
             <div>
                <button className='bg-blue-600  text-white px-5 py-2 rounded-full'>Create  Account </button>
             </div>
        </div>
     { /* Mobile Navbar */}
        <div className='md:hidden  flex items-center  gap-2 sm:gap-5 text-gray-500'>
          <div>
                  <button>Become  Educator |</button>
                  <Link to='/my-enrollments'> My Enrollment</Link>
          </div>
          <button><img src={assets.user_icon} alt="user-icon " /></button>
        </div>
         

    </div>
  )
}

export default Navbar