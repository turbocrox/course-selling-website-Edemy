import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";  // Fix: 'assets' not 'assests'
 import { useNavigate } from "react-router-dom"; // Fix: useNavigate should be imported from 'react-router-dom'

export const Appcontext = createContext();

export const AppcontextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY;  
      const  navigate  =  useNavigate(); // Fix: useNavigate should be imported from 'react-router-dom'
    const [allCourses, setAllcourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);
    
    const fetchAllCourses = async () => {
        setAllcourses(dummyCourses);
    }
     //  funtion  which  will  used  to  calculate the  average  rating of  the course
    const calculateRating = (course) => {
         if (course.courseRatings.length === 0) {
            return 0;}
            let sum = 0;
            course.courseRatings.forEach((rating) => {
                sum += rating.rating;
            });
            return (sum / course.courseRatings.length);     
    }
    //  funtion  which  will  used  to  calculate the  average  rating of  the course

    useEffect(() => {
        fetchAllCourses();
    }, []);

    const value = {
        currency,
        allCourses ,  navigate ,  calculateRating , setIsEducator, isEducator// Fix: match the case with state variable
    }; 

    return (
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    );
}