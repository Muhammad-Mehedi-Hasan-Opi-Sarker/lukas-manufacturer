import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-base-100 lg:px-24 px-4 mt-8 lg:mt-16">
                <div className='lg:mt-16 mt-8 lg:mb-16 mb-4'>
                    <span><img src="https://htmldemo.net/lukas/lukas/assets/img/logo-light.png" alt="" /></span>
                   <p> Lukas is the best parts shop for your</p>
                   <p>car accessories. What kind of parts</p>
                   <p>do you need you can get here soluta nobis</p>
                </div>
                <div className='lg:mt-16 mt-8 lg:mb-16'>
                    <span className="footer-title text-xl">Information</span>
                    <a className="link link-hover">Our company</a>
                    <a className="link link-hover">Contact us</a>
                    <a className="link link-hover">Our services</a>
                    <a className="link link-hover">Why We?</a>
                    <a className="link link-hover">Careers</a>
                </div>
                <div className='lg:mt-16 mt-8 lg:mb-16'>
                    <span className="footer-title text-xl">Quicklink</span>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Shop</a>
                    <a className="link link-hover">Cart</a>
                    <a className="link link-hover">Contact</a>
                </div>
                <div className='lg:mt-16 mt-8 lg:mb-16'>
                    <span className="footer-title text-xl">Support</span>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Return Policy</a>
                    <a className="link link-hover">Online Support</a>
                    <a className="link link-hover">Money Back</a>
                </div>
                <div className='lg:mt-16 mt-8 lg:mb-16'>
                    <span className="footer-title text-xl">Store Information</span>
                    <a className="link link-hover">2005 Stokes Isle Apartment. 896,</a>
                    <a className="link link-hover">Washington 10010, USA</a>
                    <a className="link link-hover">https://opimehedi.netlify.com</a>
                    <a className="link link-hover">(+68) 123456108</a>
                </div>
               
            </footer>
        </div>
    );
};

export default Footer;