import React from 'react'
import { Link } from 'react-router-dom'

const  Coursec = () => {
  return (
    <div className='py-16 md:px-40 px-8'>
<h2 className='text-3xl font-medium text-gray'>Learn  from the best  </h2>
<p className='text-sm md:text-base text-gray-500 mt-3'> Discover our  top-rated  courses across  various  categories. From  coding  and  design  to  business  and  wellness,  our courses are  crafted  to  deliver results.</p><br></br>
 


 <Link to={'/Course-list'}  onClick={()=>scrollTo(0,0)}
  className='text-white border border-gray-500/20 bg-blue-500  text-rounded-md px-10 py-3 hover:text-black  hover:bg-white   transition duration-300 ease-in-out'
 
 >
  Explore Courses</Link>
</div>
  )
}

export default  Coursec
