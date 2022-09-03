import React from 'react';
import Banner from './Banner/Banner';
import Design from './Design';
import Discount from './Discount';
import HomeProduct from './HomeProduct';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Design></Design>
            <HomeProduct></HomeProduct>
            <Discount></Discount>
            <Service></Service>
        </div>
    );
};

export default Home;