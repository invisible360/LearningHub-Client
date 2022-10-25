import React from 'react';

const Courses = () => {
    return (
        <div>
            <section className='grid grid-cols-12 gap-5 m-5'>
                <aside className='col-span-3'>
                    <div className="btn-group btn-group-vertical w-full">
                        <button className="btn btn-secondary mb-3 font-bold ">All Courses</button>
                        <button className="btn mb-1">Button</button>
                    </div>

                </aside>
                <main className='col-span-9'>Main </main>
            </section>
        </div>
    );
};

export default Courses;