import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
const Users = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json()).then(data=>setUsers(data))
    },[])

    return (
        <div>
             {<div className="overflow-x-auto w-full rounded-none">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            
                            <th>Email</th>
                            
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            users.map(order => <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{order.email}</div>
                                        </div>
                                    </div>
                                </td>    
                                <td>
                                    <button  className="btn btn-ghost btn-xs text-2xl"><AiFillDelete></AiFillDelete></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>}
        </div>
    );
};

export default Users;