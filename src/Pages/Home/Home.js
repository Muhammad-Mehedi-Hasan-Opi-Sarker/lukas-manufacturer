import React from 'react';
import Banner from './Banner/Banner';
import Design from './Design';
import Discount from './Discount';
import Headers from './Headers';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Banner></Banner>
            <Design></Design>
            <Discount></Discount>
        </div>
    );
};

export default Home;