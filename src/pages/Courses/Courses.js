import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {

    const courses = useLoaderData();

    const [allCourses, setAllCourses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/course`)
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])

    // console.log(courses);

    return (
        <div>
            <section className='grid grid-cols-12 gap-5 m-5'>
                <aside className='col-span-12 md:col-span-3'>
                    <div className="btn-group btn-group-vertical w-full">
                        <button className="btn btn-accent text-white mb-3 font-bold ">Top Categories</button>
                        {
                            courses.map(course => <Link key={course.id} className="btn btn-accent btn-outline mb-1" to={`/course/${course.id}`}>{course.name}</Link>)
                        }

                    </div>

                </aside>
                <main className='col-span-12 md:col-span-9'>
                    <h1 className='text-center text-white text-2xl mb-5 rounded-lg bg-accent py-2'><span className='font-bold'>All Featured </span>Courses</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        {
                            allCourses.map (course=> <Course key={course.id} course={course} />)
                        }
                    </div>
                </main>
            </section>
        </div>
    );
};

export default Courses;