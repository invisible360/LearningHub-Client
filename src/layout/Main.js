import React, { useState } from 'react';
import { Theme } from 'react-daisyui';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import ThemeToogle from '../shared/ThemeToogle/ThemeToogle';

const Main = () => {

    const [theme, setTheme] = useState(false);

    const handleDarkMode = () => {
        setTheme(!theme);
    }

    return (
        <div>
            <div className='flex justify-end items-center p-2'>
                <h1 className='text-xl font-bold mx-5 bg-black text-white p-2 rounded'>Try Dark Mode: </h1>
                <ThemeToogle handleDarkMode={handleDarkMode} />
            </div>

            {
                theme ?
                    <Theme dataTheme='dark'>
                        <Header />
                        <Outlet />
                        <Footer/>
                    </Theme>
                    :
                    <Theme dataTheme='light'>
                        <Header />
                        <Outlet />
                        <Footer/>
                    </Theme>
            }

        </div>
    );
};

export default Main;