import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, img, name, description, minQuantity, available, price } = tool;

    return (
        <div class="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="tool" /></figure>
            <div class="card-body">
                <h2 class="text-2xl font-bold">{name}</h2>
                <p>{description}</p>
                <h3 className='text-xl'>Minimum order: <span className='font-semibold'>{minQuantity}</span> piece</h3>
                <h3 className='text-xl'>Available product: <span className='font-semibold'>{available}</span> piece</h3>
                <h3 className='text-xl'>Price: <span className='font-semibold'>${price}</span> (per unit)</h3>
                <div class="card-actions">
                    <Link to={`/purchase/${_id}`} class="btn btn-secondary btn-outline mt-2">Purchase</Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;