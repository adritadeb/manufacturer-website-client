import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, img, name, description, minQuantity, available, price } = tool;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-80 h-80' src={img} alt="tool" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>{description}</p>
                <h3 className='text-xl'>Minimum order: <span className='font-semibold'>{minQuantity}</span> piece</h3>
                <h3 className='text-xl'>Available product: <span className='font-semibold'>{available}</span> piece</h3>
                <h3 className='text-xl'>Price: <span className='font-semibold'>${price}</span> (per unit)</h3>
                <div className="card-actions">
                    <Link to={`/purchase/${_id}`} className="btn btn-secondary btn-outline mt-2">Purchase</Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;