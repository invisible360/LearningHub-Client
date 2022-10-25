import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/logo.png';
import ReactTooltip from 'react-tooltip';

const Header = () => {
    return (
        <div className="navbar bg-base-100 drop-shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>

                <Link to='/' className='p-2'>
                    <div className='flex items-center'>
                        <img className='w-8 md:w-16' src={logo} alt="" />
                        <span className='text-sm md:text-2xl font-bold ml-2 md:ml-4'>ProgramingHUB</span>
                    </div>
                </Link>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='font-bold text-lg'><Link to='/courses'>Courses</Link></li>
                    <li className='font-bold text-lg mx-5'><Link to='/faq'>FAQ</Link></li>
                    <li className='font-bold text-lg'><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>

            <div className="navbar-end avatar">
                <button className="btn btn-link text-green-700 no-underline text-sm md:text-lg"><Link to='/login'>Log In</Link></button>
                <button className="btn btn-link text-orange-700 no-underline text-sm md:text-lg">Log Out</button>

                <ReactTooltip type="success" place="bottom" effect="solid" />
                <div data-tip="Profile Name" className="w-10 md:w-16 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt='' />
                </div>
            </div>
        </div>


    );
};

export default Header;