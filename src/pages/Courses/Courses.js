import React from 'react';
import CourseCategoryList from '../CourseCategoryList/CourseCategoryList';

const Courses = ({ children }) => {

    return (
        <div>
            <section className='grid grid-cols-12 gap-5 m-5'>
                <CourseCategoryList />
                {children}
            </section>
        </div>
    );
};

export default Courses;