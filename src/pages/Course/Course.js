import React from 'react';

const Course = ({ course }) => {
    // console.log (course)
    const { title, overview, others_info } = course;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={overview.image_url} alt="Shoes" className='h-64' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{overview.description.slice(0, 93)}...</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent">Course Details</button>
                </div>
            </div>
        </div>
    );
};

export default Course;