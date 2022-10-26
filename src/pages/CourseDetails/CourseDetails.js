import React from 'react';
import { FaClipboardList, FaRegPlayCircle } from 'react-icons/fa';
import { MdAccessTime, MdLanguage } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbFileCertificate } from "react-icons/tb";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const courseDetails = useLoaderData();
    console.log(courseDetails);
    const { title, overview, instructor, others_info } = courseDetails;

    return (
        <div>



            <main className='grid grid-cols-12 gap-5 m-10'>
                <section className='col-span-8'>
                    <div className="indicator">
                        <div className="indicator-item indicator-top">
                            <button className="btn btn-accent text-white">Download PDF</button>
                        </div>
                        <div>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <div className='h-80 bg-gradient-to-r from-sky-500 to-indigo-500'>
                                    <div className='w-3/4'>
                                        <h1 className='text-4xl font-bold p-4 text-white'>{title}</h1>
                                        <h1 className='text-lg px-4 text-white'>{overview?.motto}</h1>
                                    </div>

                                    <div className='p-4 my-3'>
                                        <div className='flex items-center text-white'>
                                            <img className='w-10 rounded-full' src={instructor?.img} alt=''></img> <span className='ml-2'>{instructor?.name}</span>
                                        </div>
                                        <div className='flex items-center text-white'>
                                            <MdLanguage />
                                            <span className='ml-2'>Language - {overview?.Language}</span>
                                        </div>
                                        <div className='flex items-center text-white'>
                                            <SlCalender className='text-white' />
                                            <span className='ml-2'>Published On - {overview?.publishedDate}</span>
                                        </div>
                                    </div>


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
                        </div>
                    </div>
                </section>



                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-center my-5">Sample Certificate</h3>
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-achievement-design-template-58b46df635d246b8041a406332c7dcf2_screen.jpg?ts=1613737021" alt="" srcset="" />
                        <div className="modal-action justify-center">
                            <label htmlFor="my-modal-6" className="btn">Ok!</label>
                        </div>
                    </div>
                </div>


                <section className='col-span-4 ml-10 mt-10'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={overview?.image_url} alt="" /></figure>
                        <p className='m-3 text-xl font-semibold'><span className='text-blue-600'>Course Title:</span> {title}</p>
                        <div className="card-body">
                            <h2 className="card-title">
                                This Course includes:
                            </h2>
                            <div className='flex items-center'>
                                <MdAccessTime className='text-3xl' />
                                <span className='ml-5'>{others_info?.hours} hours</span>
                            </div>
                            <div className='flex items-center'>
                                <TbFileCertificate className='text-3xl' />
                                <span className='ml-5'> Completion Certificate</span>
                                <label htmlFor="my-modal-6" className="btn modal-button btn-xs">sample certification</label>
                            </div>
                            <div className='flex items-center'>
                                <FaRegPlayCircle className='text-3xl' />
                                <span className='ml-5'>{others_info?.lectures} Lectures</span>
                            </div>
                            <div className='flex items-center'>
                                <FaClipboardList className='text-3xl' />
                                <span className='ml-5'>1 Resources</span>
                            </div>
                            <div className='flex items-center'>
                                <SiGnuprivacyguard className='text-3xl' />
                                <span className='ml-5'>Lifetime Access</span>
                            </div>
                            <button className='btn btn-success text-white my-5'>Get Premium Access</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CourseDetails;