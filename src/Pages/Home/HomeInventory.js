import React, { useEffect, useState } from 'react';
import './HomeInventory.css';
import { useParams } from 'react-router-dom';

const HomeInventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/homeProduct/${id}`)
            .then(res => res.json()).then(data => setProduct(data))
    }, [])
    return (
        <div>
            <div className="lg:h-64 h-48 bg-center text-base-100 
            grid justify-items-center items-center
            bg-[url('https://htmldemo.net/lukas/lukas/assets/img/bg/page-header-bg.jpg')]">
                <h1 className='font-bold text-4xl'>Product Details</h1>
                <h1 className='font-bold text-xl'><span>Home</span> <span>Shop</span> <span className='text-secondary'>Product Details</span></h1>
            </div>

            {/* card */}
            <div class="card lg:card-side bg-base-100 shadow-xl lg:mt-28 mt-12 lg:px-24 px-4">
                <figure className='card border rounded-none'><img src={product.img} className='imag' alt="Album" /></figure>
                <div class="card-body">
                    <h1 className='font-bold lg:text-4xl text-2xl'>{product.name}</h1>
                    <p> <span className='font-bold text-xl'>Price:</span> <span className='font-bold'> ${product.price}</span></p>
                    <p className='mb-8'>Pursue pleasure rationally encounter consequences that are extremely painful. Nor <br />
                        again is there anyone who loves or pursues or desires to obtain pain of itself, because <br /> it is pain, but because occasionally circles <br />
                        <br />
                        Pursue pleasure rationally encounter consequences that are extremely painful. Nor <br /> again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because <br />
                        occasionally circles occur in and pain can procure him some <br /> great ple cum solute nobie est eligendi option</p>

                    {/* table  */}
                    <div class="overflow-x-auto">
                        <table class="table  w-full border">
                            
                            <tbody>
                                <tr>
                                    <th>Color</th>
                                    <th className='hover:text-secondary'>Black</th>
                                    <th className='hover:text-secondary'>Blue</th>
                                    <th className='hover:text-secondary'>Green</th>
                                </tr>
                                
                                <tr>
                                    <th>Size</th>
                                    <th className='hover:text-secondary'>Large</th>
                                    <th className='hover:text-secondary'>Medium </th>
                                    <th className='hover:text-secondary'>Small</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeInventory;