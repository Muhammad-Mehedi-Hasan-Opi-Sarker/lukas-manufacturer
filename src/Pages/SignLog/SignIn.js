import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';

const SignIn = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = e => {
        e.preventDefault();
        const name = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(name, password);
    }

    // error
    let erroElement;
    if (error) {
        erroElement = <p className='text-red-500'>{error.message}</p>
    }

    //   loading 
    if (loading) {
        return <Loading></Loading>;
    }

    //   user 
    if (user) {
        navigate('/home')
    }

    return (
        <div className=''>
            <div>
                <div className='mb-28'>
                    <div className="lg:h-64 h-48 bg-center text-base-100 
            grid justify-items-center items-center
            bg-[url('https://htmldemo.net/lukas/lukas/assets/img/bg/page-header-bg.jpg')]">
                        <div><h1 className='font-bold text-4xl mb-1'>Login</h1>
                            <h1 className='font-bold text-xl'><span>Home</span> <span className='text-secondary'> Login</span></h1></div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card w-full bg-base-100 lg:px-96 gird justify-items-center">
                    <form onSubmit={handleSignIn}>
                        <div className="card-body border shadow">
                            <input name='email' type="email" placeholder="Email" className="input input-bordered w-full mb-3 lg:mt-12 mt-5" />
                            <input name='password' type="password" placeholder="Password" className="input input-bordered w-full mb-5" />
                            {erroElement}
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