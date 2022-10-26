import React from 'react';

const CourseDetails = () => {
    return (
        <div>
            <main className='grid grid-cols-12 gap-5 m-10'>
                <section className='col-span-8'>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className='h-80 bg-gradient-to-r from-sky-500 to-indigo-500'>
                            
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='col-span-4'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CourseDetails;