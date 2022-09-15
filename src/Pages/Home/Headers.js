import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Headers = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    if(loading){
        return <Loading></Loading>;
    }
    const nav = <>
        <li><Link to='/home' >Home</Link></li>
        <li><Link to='/about' >About</Link></li>
        <li><Link to='/shop' >Shop</Link></li>
        <li><Link to='/blog' >Blog</Link></li>
        <li><Link to='/reviews' >Coustomers Reviews</Link></li>
        {user && <li><Link to='/dashboard' >Dhashboard</Link></li>}
    </>
    return (
        <div className='lg:px-12'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        
                        <ul tabindex="0" className="text-xl menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {nav}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <Link to='/home'><img src="https://htmldemo.net/lukas/lukas/assets/img/logo.png" alt="" /></Link>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-xl menu menu-horizontal p-0">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className='text-xl'>
                        <li>{user ? <p onClick={logout} className='font-xl'><span className='dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>{user?.displayName}</span></p> : <Link to='/signin' >Login</Link>}</li>
                    </ul>
                </div>
                <div className='navbar-end'>
                <label htmlFor="my-drawer-2" tabindex="0" className="btn drawer-button btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    
                </div>
            </div>
        </div>
    );
};

export default Headers;