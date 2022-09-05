import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';

const SignIn = () => {
    return (
        <div className=''>
            <div>
                <div className='mb-28'>
                    <div className="lg:h-64 h-48 bg-center text-base-100 
            grid justify-items-center items-center
            bg-[url('https://htmldemo.net/lukas/lukas/assets/img/bg/page-header-bg.jpg')]">
                        <div><h1 className='font-bold text-4xl'>Login</h1>
                            <h1 className='font-bold text-xl'><span>Home</span> <span className='text-secondary'> Login</span></h1></div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card w-full bg-base-100 lg:px-96 gird justify-items-center">
                    <form>
                        <div className="card-body border shadow">
                            <input type="email" placeholder="Email" className="input input-bordered w-full mb-3 lg:mt-12 mt-5" />
                            <input type="password" placeholder="Password" className="input input-bordered w-full mb-5" />
                            <input className='btn btn-neutral w-full' type="submit" value="LOGIN" />
                            <p>No Account <span className='mb-5 text-secondary'><Link to='/signup'>Register Please</Link></span></p>
                            <p className='lg:mb-12'></p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignIn;