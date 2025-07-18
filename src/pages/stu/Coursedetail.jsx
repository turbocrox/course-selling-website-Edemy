import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Appcontext } from '../../context/Appcontext';
import { assets } from '../../assets/assets'; // Fix: 'assets' not 'assests'

const Coursedetail = () => {
  const { id } = useParams();
  const { allCourses, calculateRating } = useContext(Appcontext);
  const [courseData, setCourse] = useState({});

  useEffect(() => {
    if (allCourses?.length) {
      const findCourse = allCourses.find((course) => course._id === id);
      if (findCourse) {
        setCourse(findCourse);
      }
    }
  }, [id, allCourses]);

  return (
    <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
      <div className="absolute top-0 left-0 w-full h-96 -z-1 bg-gradient-to-b from-cyan-100/70"></div>
      <div>
        {courseData?.courseTitle ? (
          <div className="max-w-xl z-10 text-gray-500">
            <h1 className="md:text-course-detail-heading-large text-course-details-heading-small font-semibold text-gray-800">{courseData.courseTitle}</h1>
            <p className="pt-4 md:text-base text-sm" dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}></p>
          </div>
        ) : (
          <div>Loading course details...</div>
        )}
   {/*  rating*/} 
        <div className="flex items-center  space-x-2 pt-3 pb-1 text-sm ">
          <p>{courseData.courseRatings ? calculateRating(courseData) : 0}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={i < Math.floor(courseData.courseRatings ? calculateRating(courseData) : 0) ? assets.star : assets.star_blank} alt="star" className="w-4 h-4" />
            ))}
          </div>
          <p className='text-blue-600'>({courseData.courseRatings ? courseData.courseRatings.length : 0} {courseData.courseRatings && courseData.courseRatings.length > 1 ? 'Reviews' : 'Review'})</p>
          <p>{courseData.enrolledStudents ? courseData.enrolledStudents.length : 0} {courseData.enrolledStudents && courseData.enrolledStudents.length > 1 ? "students" : "student"}</p>
       
        </div>
        <p className='text-sm'>Course by <span className='text-blue-600'>GreatStack</span></p>
      </div>
    </div>
  );
};

export default Coursedetail;
