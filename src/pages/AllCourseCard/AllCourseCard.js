import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const AllCourseCard = () => {
    
    const [allCourses, setAllCourses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/course`)
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])
    return (
        <main className='col-span-12 md:col-span-9'>
            <h1 className='text-center text-white text-2xl mb-5 rounded-lg bg-accent py-2'><span className='font-bold'>All Featured </span>Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    allCourses.map(course => <Course key={course.id} course={course} />)
                }
            </div>
        </main>
    );
};

export default AllCourseCard;