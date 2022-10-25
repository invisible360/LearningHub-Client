import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Login = () => {

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold my-3">Login Now</h1>
                    </div>
                    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Log In</button>
                            </div>
                            <label className="label text-center">
                                <p>New to this website? <Link to='/signup' className="btn btn-link">Create New Account</Link></p>
                            </label>
                            <p className='text-center'>Or</p>
                            <button className='btn btn-outline'><FcGoogle /><span className='ml-2'>Continue With Google</span></button>
                            <button className='btn btn-outline'><FaGithub /><span className='ml-2'>Continue With GitHub</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;