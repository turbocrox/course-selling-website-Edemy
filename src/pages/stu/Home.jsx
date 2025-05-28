import React from 'react'
import Hero from '../../comp/stu/Hero'
import Companies from '../../comp/stu/Companies'
import Coursec from '../../comp/stu/Coursec'
import TestimonailsSection from '../../comp/stu/TestimonailsSection'

const Home = () => {
  return (
    <div className=' flex flex-col items-center space-y-7 text-center ' >
    <Hero/>
   <Companies/>
   <Coursec/>
   <TestimonailsSection/>
  

    </div>
  )
}

export default Home