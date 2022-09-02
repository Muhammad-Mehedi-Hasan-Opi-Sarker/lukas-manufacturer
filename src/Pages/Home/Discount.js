import React from 'react';

const Discount = () => {
    return (
        <div className='grid justify-items-center bg-center bg-[url("https://htmldemo.net/lukas/lukas/assets/img/bg/deal-bg-2.jpg")] '>
            <div class="card lg:card-side rounded-none mt-24">
                <figure><img src="https://htmldemo.net/lukas/lukas/assets/img/extra/chair.png" alt="Album"/></figure>
                <div class="card-body grid justify-items-center">
                    <h1 className='mb-0 font-bold text-5xl'>FLASH DEALS</h1>
                    <h1 className='mb-0 font-bold text-4xl'>HURRY UP AND GET 25% DISCOUNT</h1>
                    <button class="btn btn-secondary hover:bg-primary border-none 
                    font-bold rounded-3xl p-2 w-36">Add to cart</button>
                    {/* count down */}
                    

                </div>
            </div>
        </div>
    );
};

export default Discount;