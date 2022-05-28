import React, { useState, useEffect } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                console.log(data)
            })
    }, [user]);
    return (
        <div>
            <h1 className='text-2xl ml-5 my-8'>My Orders</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Available</th>
                            <th>Ordered</th>
                            <th>Price</th>
                            <th>Pay</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <th><img className='w-20' src={order.toolImg} alt="" /></th>
                                <td>{order.toolName}</td>
                                <td>{order.toolAvailable}</td>
                                <td>{order.toolOrderedQuantity}</td>
                                <td>{order.toolPrice}</td>
                                <td>
                                    <Link to='/payment' class="btn btn-secondary btn-outline">Payment</Link>
                                </td>
                                <td>
                                    <button class="btn btn-error">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;