import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const Appcontext = createContext();

export const AppcontextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();
    const [allCourses, setAllcourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);

    const fetchAllCourses = async () => {
        setAllcourses(dummyCourses);
    };

    const calculateRating = (course) => {
        if (!course.courseRatings || course.courseRatings.length === 0) {
            return 0;
        }
        let sum = 0;
        course.courseRatings.forEach((rating) => {
            sum += rating.rating;
        });
        return sum / course.courseRatings.length;
    };

    const calculateChapterTime = (chapter) => {
        const time = chapter.chapterContent.reduce((acc, lecture) => acc + lecture.lectureDuration, 0);
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
    };

    const calculateCourseDuration = (course) => {
        if (!course || !course.courseContent || !Array.isArray(course.courseContent)) {
            return "0h 0m";
        }
        const time = course.courseContent.reduce((acc, chapter) => {
            return acc + chapter.chapterContent.reduce((acc2, lecture) => acc2 + lecture.lectureDuration, 0);
        }, 0);
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
    };

    const calculateNoOfLectures = (course) => {
        let totalLectures = 0;
        if (!course.courseContent || !Array.isArray(course.courseContent)) {
            return totalLectures;
        }
        course.courseContent.forEach((chapter) => {
            if (Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length;
            }
        });
        return totalLectures;
    };

    useEffect(() => {
        fetchAllCourses();
    }, []);

    const value = {
        currency,
        allCourses,
        navigate,
        calculateRating,
        calculateChapterTime,
        calculateCourseDuration,
        calculateNoOfLectures,
        setIsEducator,
        isEducator,
    };

    return (
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    );
};
