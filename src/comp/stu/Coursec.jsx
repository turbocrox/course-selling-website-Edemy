import React, { useContext } from 'react'  // Add useContext here
import { Link } from 'react-router-dom'
import { Appcontext } from '../../context/Appcontext'
import Coursecard from './Coursecard'

const Coursec = () => {
    const { allCourses } = useContext(Appcontext)  // Now useContext will be defined
    
    return (
        <div className='py-16 md:px-40 px-8'>
            <h2 className='text-3xl font-medium text-gray'>Learn from the best</h2>
            <p className='text-sm md:text-base text-gray-500 mt-3'>
                Discover our top-rated courses across various categories. From coding and design to business <br></br>and wellness, our courses are crafted to deliver results.
            </p>
            <br/>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


                {allCourses?.slice(0, 4).map((course) => (
                    <Coursecard key={course._id}  course={course} />
                ))}
            </div>
            <br></br>
            <br></br>

            <Link 
                to='/Course-list' 
                onClick={() => window.scrollTo(0, 0)}
                className='text-white border border-gray-500/20 bg-blue-500 rounded-md px-10 py-3 hover:text-black hover:bg-white transition duration-300 ease-in-out'
            >
                Explore Courses
            </Link>
        </div>
    )
}

export default Coursec