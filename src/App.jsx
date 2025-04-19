import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';  // Fixed spacing
import Home from './pages/stu/Home';
import Courselist from './pages/stu/Courselist';
import Coursedetail from './pages/stu/Coursedetail';
import Myenroll from './pages/stu/Myenroll';
import Player from './pages/stu/Player';
import  Loading from './comp/stu/Loading'
import Educator from './pages/edu/Educator';
 import Addcourse from './pages/edu/Addcourse';
 import  Mycourse from  './pages/edu/Mycourse';
 import Dashborad from './pages/edu/Dashborad';
 import Studentsenrolled from './pages/edu/Studentsenrolled';
import Navbar from './comp/stu/Navbar';
 

function App() {
    const  isEducatorRoute = useMatch('/educator/*');
  return (
    <div className="Text-deafault min-h-screen bg-white">  
    {!isEducatorRoute && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Course-list" element={<Courselist/>}/>
        <Route path="/Course-list/:input" element={<Courselist/>}/>
        <Route path="/Course/:id" element={<Coursedetail/>}/>
        <Route path='/My-enrollments' element={<Myenroll/>}/>
        <Route path='/player/:courseId' element={<Player/>}/>
        <Route path='/Loading/:path' element={<Loading/>}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
        <Route path='/educator'  element={<Educator/>}>
          <Route path='/educator' element={<Dashborad/>}/>
          <Route path='add-course' element={<Addcourse/>}/>
          <Route path='my-course' element={<Mycourse/>}/>
          <Route path='student-enrolled' element={<Studentsenrolled/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;