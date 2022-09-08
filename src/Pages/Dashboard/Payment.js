import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import MyOrders from './MyOrders';

const stripePromise = loadStripe('pk_test_51L1vZHLM2TnMhPb2sdgMvAdW7nsOrVhfoVoFg3USSKppvi51pMM2kp3RKEsMsGtQ7aisvKjcCKNnhcL1I07nYmg500j0iqZ8jG');

const Payment = () => {
    const { id } = useParams()
    const [oder, setorder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)
            .then(res => res.json()).then(data => setorder(data))
    }, [])
    return (
        <div className='grid justify-items-center'>
            <h1 className='font-bold text-purple-600'> {id}</h1>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    
                    <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;