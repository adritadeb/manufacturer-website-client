import React, { useState, useEffect } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [deleting, setDeleting] = useState(null);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`https://damp-castle-10213.herokuapp.com/orders?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [user]);

    return (
        <div>
            <h1 className='text-2xl ml-5 my-8'>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                                <td><img className='w-20' src={order.toolImg} alt="" /></td>
                                <td>{order.toolName}</td>
                                <td>{order.toolAvailable}</td>
                                <td>{order.toolOrderedQuantity}</td>
                                <td>${order.toolPrice}</td>
                                <td>
                                    {(!order.paid) && <Link to={`/dashboard/payment/${order._id}`} className="btn btn-secondary btn-outline">Payment</Link>}
                                    {(order.paid) && <div>
                                        <span className='text-success'>Paid</span>
                                        <span className='text-success block'>Transaction Id: {order.transactionId}</span>
                                    </div>}
                                </td>
                                <td>
                                    {(!order.paid) && <button onClick={() => setDeleting(order)} htmlFor="delete-confirm-modal" className="btn btn-error">Cancel</button>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleting && <DeleteModal
                    deletingDoctor={deleting}
                    setDeletingDoctor={setDeleting}
                ></DeleteModal>
            }
        </div>
    );
};

export default Orders;