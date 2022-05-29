import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';

import Loading from '../Shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3OZaIKuLyQCWqHHPY8wiThhxiwWQvqSTL1lMYYTXrxwv8NSPfeQ9gQkAnsL88VtodVGhy4eurLxBjgndUvu2uU00g8SG0GrI');

const Payment = () => {
    const { id } = useParams();
    const url = `https://damp-castle-10213.herokuapp.com/order/6291ecd95568436d470c4662`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title">Please Pay for <span className='text-secondary'>{order?.toolName}</span></h2>
                    <h2 class="card-title">Each product price: <span className='text-secondary'>{order?.toolPrice}</span></h2>
                    <h2 class="card-title">Ordered Quantity: <span className='text-secondary'>{order?.toolOrderedQuantity}</span></h2>
                    <h2 class="card-title">Total Price: <span className='text-secondary'>{order?.toolOrderedQuantity * order?.toolPrice}</span></h2>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div >
    );
};

export default Payment;