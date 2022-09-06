import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="lg:h-64 h-48 bg-center text-base-100 
            grid justify-items-center items-center
            bg-[url('https://htmldemo.net/lukas/lukas/assets/img/bg/page-header-bg.jpg')]">
                <div><h1 className='font-bold text-4xl'>About</h1>
                <h1 className='font-bold text-xl'>
                    <Link to='/home'><span>Home</span></Link>
                 <span className='text-secondary'> About</span></h1></div>
            </div>
        </div>
    );
};

export default About;