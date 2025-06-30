import React, { useContext, useEffect, useState } from 'react';
import { Appcontext } from '../../context/Appcontext';
import Searchbar from '../../comp/stu/Searchbar';
import { useParams } from 'react-router-dom';
import Coursecard from '../../comp/stu/Coursecard';

const Courselist = () => {
  const { navigate, allCourses = [] } = useContext(Appcontext);   // default to []
  const { input } = useParams();

  // make sure the initial state is always an array
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  useEffect(() => {
    // guard‑clause if nothing has arrived yet
    if (!allCourses.length) {
      setFilteredCourses([]);
      return;
    }

    const tempCourses = [...allCourses];

    if (input) {
      setFilteredCourses(
        tempCourses.filter(course =>
          course.courseTitle.toLowerCase().includes(input.toLowerCase())
        )
      );
    } else {
      setFilteredCourses(tempCourses);
    }
  }, [input, allCourses]);

  return (
    <>
      <div className="relative md:px-36 px-8 pt-20 text-left">
        <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full">
          <div>
            <h1 className="text-4xl font-semibold text-gray-800">Course List</h1>
            <p className="text-gray-500">
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => navigate('/')}
              >
                Home
              </span>{' '}
              / <span>Course&nbsp;List</span>
            </p>
          </div>

          {/* If you want the search bar to show the initial query, pass it as a prop */}
          <Searchbar data={input ?? ''} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
          {filteredCourses.map(course => (
            <Coursecard key={course.id || course.courseTitle} course={course} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Courselist;
