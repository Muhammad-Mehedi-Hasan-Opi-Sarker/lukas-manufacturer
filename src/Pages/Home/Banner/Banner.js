import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="bg-[url('https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?w=996&t=st=1662120459~exp=1662121059~hmac=e0e6f91fe38995ceb4505e57cd5b3d3d5403813a9f32c010e89d11418a3f07e3')]">
            <div className="carousel mt-5">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://htmldemo.net/lukas/lukas/assets/img/slider/slider-2-2.png" className="w-full mt-20 img1 lg:ml-5" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className='lg:ml-96 ml-32'>
                            <h1 className='lg:text-5xl  mb-2 lg:text-white'>NEW TECHONOLOGY & BUILD</h1>
                            <h1 className='lg:font-bold mb-2  lg:text-5xl text-white'>LATEST &</h1>
                            <h1 className='lg:font-bold mb-2  lg:text-5xl text-white'>POWERFUL ENGINE</h1>
                            <h1 className='lg:font-bold mb-2 lg:text-5xl text-white'>FOR YOU</h1>
                            <button className='btn btn-outline bg-gray-200 text-neutral rounded-3xl'>SHOP NOW</button>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://htmldemo.net/lukas/lukas/assets/img/slider/slider-2-1.png" className="w-full mt-20 img1 lg:ml-5" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className='lg:ml-96 ml-36'>
                            <h1 className='lg:text-5xl  mb-2 lg:text-white'>NEW TECHNOLOGY & BUILD</h1>
                            <h1 className='lg:font-bold mb-2  lg:text-5xl text-white'>WHEELS & TIRES</h1>
                            <h1 className='lg:font-bold mb-2  lg:text-5xl text-white'>COLLECTIONS</h1>
                            <button className='btn btn-outline bg-gray-200 text-neutral rounded-3xl'>SHOP NOW</button>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;