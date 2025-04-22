import React, { useContext } from 'react'  // Add useContext
import { assets } from '../../assets/assets'  // Fix: 'assets' not 'assests'
import { Appcontext } from '../../context/Appcontext'  // Add this import
import  { Link } from 'react-router-dom'  // Add this import
const Coursecard = ({course}) => {
    const { currency } = useContext(Appcontext)
    
    return (
        <Link  to={'/course/'+course._id}   onClick={()=>scroll(0,0)} className="border border-gray-500/20 pb-6 overflow-hidden rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"> 
            <img src={course.courseThumbnail} alt={course.courseTitle} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h3 className="font-medium text-lg">{course.courseTitle}</h3>
                <p className="text-gray-600">{course.educator.name}</p>
                <div className="flex items-center gap-2 my-2">
                    <p>4.5</p>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src={assets.star} alt="star" className="w-4 h-4"/>
                        ))}
                    </div>
                    <p>22</p>
                </div>
                <p className="font-bold">{currency}{(course.coursePrice - course.discount * course.coursePrice/100).toFixed(2)}</p>
            </div> 
        </Link>
    )
}

export default Coursecard