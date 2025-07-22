import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Appcontext } from '../../context/Appcontext';
import { assets } from '../../assets/assets'; // Fix: 'assets' not 'assests'
import humanizeDuration from 'humanize-duration';
import Footer from '../../comp/stu/Footer';
import  YouTube from 'react-youtube'; // Ensure you have this package installed

const Coursedetail = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { allCourses, calculateRating, calculateCourseDuration, calculateChapterTime,currency, calculateNoOfLectures } = useContext(Appcontext);
  const [courseData, setCourse] = useState({});
  const [expandedChapters, setExpandedChapters] = useState({});
    const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(true);
      const [playerData,setplayerData] = useState(null);

  useEffect(() => {
    if (allCourses?.length) {
      const findCourse = allCourses.find((course) => course._id === id);
      if (findCourse) {
        setCourse(findCourse);
      }
    }
  }, [id, allCourses]);

  const toggleChapter = (index) => {
    setExpandedChapters(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (<>
    <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
      <div className="absolute top-0 left-0 md:w-1/2 w-full h-96 -z-1 bg-gradient-to-b from-cyan-100/70"></div>
      <div className='md:w-1/2 w-full z-10'> {/*left side*/}
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

        <div className='pt-8  text-gray-800'>
          <h2 className='test-xl font-semibold'>Course Sturcture</h2>

          <div className='pt-5'>
            {courseData.courseContent && courseData.courseContent.map((chapter, index) => (
              <div className='border border-gray-300 bg-white mb-2 rounded' key={index}>
                <div
                  className='flex item-center justify-between  px-4 py-3 cursor-pointer select-none'
                  onClick={() => toggleChapter(index)}
                >
                  <div className='flex item-center gap-2'>
                    <img  className={`tranform transition-transform ${expandedChapters[index] ? 'rotate-180' : ''} `}
                    src={assets.down_arrow_icon} alt="arrow icon" />
                    <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                  </div>
                  <p className='text-sm md:text-default'>{chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}</p>
                </div>

                {expandedChapters[index] && (
                  <div  className=' overflow-hidden transition-all duration-300 max-h-96'>
                    <ul  className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 border-t border-gray-300'>
                      {chapter.chapterContent.map((lecture, i) =>
                        <li key={i} className="flex items-center gap-2 py-1">
                          <img src={assets.play_icon} alt="play icon" className='w-4 h-4 mt-1' />
                          <div className='flex item-center justify-between w-full text-gray-800 text-xs md:text-default'>
                            <p>{lecture.lectureTitle}</p>
                            <div className='flex gap-2'>
                              {lecture.isPreviewFree && <p  
                              onClick={()=> setplayerData({videoId:lecture.lectureUrl.split('/').pop()})}  
                               className='text-blue-500 cursor-pointer'>preview</p>}
                              <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ['h', 'm'] })}</p>
                            </div>
                          </div>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
     <div className='py-20 text-sm md:text-default'>
       <h3  className='text-xl font-semibold text-gray-800'>Course Description</h3>
        <p  className="pt-3 rich-text" dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}></p>
        
     </div>

      </div>
       <div className=" z-10 max-w-course-card shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-[360px] sm:min-w-[420px]">
        {/* Right side placeholder for additional content */}
         {
              playerData ?
              <YouTube videoId={playerData.videoId} opts={{playerVars :{autoplay :1 }}} iframeClassName='w-full aspect-video'/>
               
              :  <img className='w-3.5' src={assets.time_clock_icon} alt="time left clock  icon  " />
           

            }
        <img src={courseData.courseThumbnail} alt="" />
        <div className='p-5'>
          <div className='flex items-center gap-2'>

             <img className='w-3.5' src={assets.time_clock_icon} alt="time left clock  icon  " />
           

            

            <p className='text-red-500'><span className='font font-medium'>5 days</span>left at this price</p>
          </div>
           <div  className='flex gap-3  items-center pt-2'>
            <p className='text-gray-800 md:text-4xl text-2xl font-semibold'>
               {currency}{(courseData.coursePrice - courseData.discount*courseData.coursePrice/100).toFixed(2)}</p>
            <p className='md:text-lg text-gray-500 line-through'>{currency}{courseData.coursePrice}</p>
            <p  className='md:text-lg text-gray-500'>{courseData.discount}% off</p>
           </div>
           <div className='flex  items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500'>
             
             {courseData.courseContent && (
               <>
                 <div className='flex item-center gap-1'>
                   <img src={assets.star} alt=" star  icon " />
                   <p>{calculateRating(courseData)}</p>
                 </div>
 
                 <div className='h-4 w-px bg-gray-500/40'> </div> {/* vertical  line  */}
                 <div className='flex item-center gap-1'>
                   <img src={assets.time_clock_icon} alt="timeclock " />
                   <p>{calculateCourseDuration(courseData)}</p>
                 </div>
                 <div className='h-4 w-px bg-gray-500/40'> </div> {/* vertical  line  */}
                 <div className='flex item-center gap-1'>
                   <img src={assets.lesson_icon} alt="lesson " />
                   <p>{calculateNoOfLectures(courseData)}</p>
                 </div>
               </>
             )}
             
           </div>
           <div> {/* button enrolled*/}
              <button className='md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 text-white  font-medium'>
                {isAlreadyEnrolled ? 'Enroll Now' : 'Already Enrolled'}
              </button> 
              <div  className='pt-6'>
                <p  className='md:text-xl text-lg font-semibold text-gray-900'> What's  in the  course ?</p>
                <ul  className='ml-4 pt-2  text-sm  md:text-default text-gray-600 list-disc'>
                  <li>lifetime  access  with  free  updates every  year</li>
                  <li>Step-by-Step resources  and source  code.</li>
                  <li>Download resources and  code</li>
                  <li>Certificate of completion</li>
                  <li>24/7 support</li>
                </ul>
              </div>
           </div>
        </div>
      </div>
      
    </div>
      <Footer></Footer>
      </>
  );
};

export default Coursedetail;
