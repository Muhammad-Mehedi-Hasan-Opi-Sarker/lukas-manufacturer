import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Reviews = () => {
    const [user] = useAuthState(auth);
    return (

        <div className='lg:px-12'>
            <h1 className='font-bold text-3xl text-secondary'>Write Your Comment About Us</h1>

            <div className="card w-96 bg-base-100 rounded-none mt-8 shadow-xl">
                <div className="card-body">
                    <form>
                        <input disabled value={user.displayName} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /><br />
                        <textarea className="textarea textarea-bordered w-full mt-3" placeholder="Comment"></textarea><br />
                        <input name='rating' type="number" placeholder="Rating" className="input mt-3 input-bordered w-full max-w-xs" /><br />
                        <input type="submit" className='btn btn-secondary w-32 rounded-full mt-2' value="Submit" />

                    </form>
                </div>
            </div>


        </div>
    );
};

export default Reviews;