import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
    const { data: manageOrders, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/manageOrders', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-2xl ml-5 my-8'>All Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Available</th>
                            <th>Ordered</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageOrders.map((manageOrder, index) => <ManageOrder
                                key={manageOrder._id}
                                manageOrder={manageOrder}
                                index={index}
                                refetch={refetch}
                            ></ManageOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;