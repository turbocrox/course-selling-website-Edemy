import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";  // Fix: 'assets' not 'assests'

export const Appcontext = createContext();

export const AppcontextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY;  // Fix: Remove quotes
    const [allCourses, setAllcourses] = useState([]);
    
    const fetchAllCourses = async () => {
        setAllcourses(dummyCourses);
    }

    useEffect(() => {
        fetchAllCourses();
    }, []);

    const value = {
        currency,
        allCourses  // Fix: match the case with state variable
    }; 

    return (
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    );
}