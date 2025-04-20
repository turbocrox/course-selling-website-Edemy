
import React from 'react'
import sktechImage from './sktech.svg'
import Searchbar from './Searchbar'

const  Hero = () => {
  return (
    <div className=' flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
     
      <h1 className='md:text-home-heading-large  rounded text-home-heading-small relative font-bold text-gray-800 max-w-3x1 mx-auto'>      
          A sleek and intuitive platform designed to enhance <br></br>the learning experience for <span className='text-blue-600'>both students and educators</span>
          <img src={sktechImage}className='md:block hidden absolute -bottom-7 right-0'/>
      
      </h1>
      <p className='md:block hidden text-gray-600 max-w-2x1 mx-auto'>
     Edemy is a modern online learning platform that bridges the gap between knowledge seekers and educators <br/>
      With a focus on simplicity, accessibility, and interactivity.
      </p>
      {/* Mobile Version */}
      <p className='md:hidden block text-gray-500 max-w-2x1 mx-auto'>Edemy is a modern online learning platform that bridges the gap between knowledge seekers and educators
        With a focus on simplicity, accessibility, and interactivity.
      </p>
     <Searchbar/>
      
    </div>
  ) 
}

export default Hero