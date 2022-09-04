import React from 'react';
import AllProducts from './AllProducts';
import Banner from './Banner/Banner';
import Contract from './Contract';
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
            <Contract></Contract>
            <AllProducts></AllProducts>
        </div>
    );
};

export default Home;