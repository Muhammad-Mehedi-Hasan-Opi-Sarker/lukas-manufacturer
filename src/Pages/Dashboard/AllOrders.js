import React, { useState, useEffect } from 'react';
import { FaProductHunt } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [reload, setReload]=useState(false);
    useEffect(() => {
        fetch('https://ancient-cove-16092.herokuapp.com/order')
            .then(res => res.json()).then(data => setOrders(data));
    }, [reload])
    // delete 
    const handleDelete = id => {
        const procced = window.confirm('Confirm Now');
        if (procced) {
            const url = `https://ancient-cove-16092.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setReload(!reload)
                })
        }
    }
    return (
        <div>
            <div className="overflow-x-auto w-full rounded-none">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>piece</th>
                            <th>Entry Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            orders.map(order => <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <a href={order.img}><img src={order.img} alt="Avatar Tailwind CSS Component" /></a>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{order.name}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>{order.email}</td>
                                <td>
                                    <button className="">{order.count}</button>
                                </td>
                                <td>
                                    <button className="">{order.date}</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(order._id)} className="btn btn-ghost btn-xs text-2xl"><AiFillDelete></AiFillDelete></button>
                                </td>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default AllOrders;