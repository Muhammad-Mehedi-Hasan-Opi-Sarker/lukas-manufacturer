import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import Footer from './Footer';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json()).then(data => setProduct(data))
    }, [])

    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 1);
    let deccrementCounter = () => setCounter(counter - 1);
    if (counter <= 0) {
        deccrementCounter = () => setCounter(1);
    }

    return (
        <div>
            <div>
                <div className="lg:h-64 h-48 bg-center text-base-100 
            grid justify-items-center items-center
            bg-[url('https://htmldemo.net/lukas/lukas/assets/img/bg/page-header-bg.jpg')]">
                    <h1 className='font-bold text-4xl'>Product Details</h1>
                    <h1 className='font-bold text-xl'><span>Home</span> <span>Shop</span> <span className='text-secondary'>Product Details</span></h1>
                </div>

                {/* card */}
                <div class="card lg:card-side bg-base-100 lg:mt-28 mt-12 lg:px-24 px-4">
                    <figure className='card border rounded-none imgOut'><img src={product.img} className='imag' alt="Album" /></figure>
                    <div class="card-body">
                        <h1 className='font-bold lg:text-4xl text-2xl'>{product.name}</h1>
                        <p> <span className='font-bold text-xl'>Price:</span> <span className='font-bold'> ${product.price}</span></p>
                        <p className='mb-8'>Pursue pleasure rationally encounter consequences that are extremely painful. Nor <br />
                            again is there anyone who loves or pursues or desires to obtain pain of itself, because <br /> it is pain, but because occasionally circles <br />
                            <br />
                            Pursue pleasure rationally encounter consequences that are extremely painful. Nor <br /> again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because <br />
                            occasionally circles occur in and pain can procure him some <br /> great ple cum solute nobie est eligendi option</p>

                        {/* table  */}
                        <div class="overflow-x-auto mb-8">
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

                        {/* add to cart buttton */}
                        <div>
                            <div className='flex' style={{ marginRight: '530px' }}>
                                <button onClick={incrementCounter} className='btn rounded-none mr-5 border-primary text-neutral' style={{ backgroundColor: 'white' }}><BsPlusLg></BsPlusLg></button>
                                <p className='mt-3 lg:mr-5 mr-5 font-bold'>{counter}</p>
                                <button onClick={deccrementCounter} className='btn rounded-none text-4xl border-primary text-neutral' style={{ backgroundColor: 'white' }}>-</button>
                                <button className='ml-5 btn rounded-none font-bold border-primary text-neutral' style={{ backgroundColor: 'white' }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* description and reviews setion  */}

            <div className='flex lg:px-24 px-4'>
                {/* card 1 */}
                <div class="card w-full border rounded-none grid justify-items-center bg-primary">
                    <div className='lg:flex'>
                        <h2 class="des bg-secondary mt-0 font-bold text-xl text-base-100 p-3">DESCRIPTION</h2>
                        <h2 class="des bg-neutral mt-0 font-bold text-xl text-base-100 p-3">REVIEW</h2>
                    </div>
                    <div class="card-body">
                        <p>Created from either wood or recycled materials, it can be
                            moulded into just about any shape and hardens to provide a hard shell.
                            Additives can make it water resistant and it can be produced in a rainbow
                            of colours. Other materials being
                            looked at include paper clay, paper glue, paper cotton and even washable paper.
                            Additives can make it water resistant and it can be produced in a rainbow of colours.
                            Other materials being looked at include paper clay Lorem ipsum dolor s
                            it amet, consectetur adipisicing elit. Eaque, facere!
                            Pursue pleasure rationally encounter consequences that are extremely painful.
                            Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but because occasionally circes occur in and pain can procure
                            him some great ple cum soluta nobis est eligendi optio cumque nihil impedit quo
                            minus id qu maxime placeat
                            facere possimus, omnis voluptas assumenda est, omnis dolor repellendus</p>
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Inventory;