import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [tool, setTool] = useState({});
    const [orderedQuantity, setOrderedQuantity] = useState(0);

    const { id } = useParams();
    const url = `http://localhost:5000/tool/${id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTool(data);
            })
    }, [orderedQuantity]);

    let { img, name, minQuantity, available, quantity, price, description } = tool;

    const decreaseQuantity = () => {
        if (orderedQuantity === minQuantity) {
            toast.error("You can't decrease more");
            return;
        }
        const newQuantity = quantity - 1;
        quantity = newQuantity;
        const updatedQuantity = { quantity };

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                setOrderedQuantity(updatedQuantity.quantity);
                toast.success('Order quantity decreased successfully');
            })
    }

    const increaseQuantity = event => {
        event.preventDefault();
        const quantityValue = event.target.quantity.value;
        if (!quantityValue) {
            toast('Please, give a increase value');
            return;
        }
        if (!quantity) {
            let newQuantity = minQuantity + parseInt(quantityValue);
            if (newQuantity > available) {
                toast.error("You can't order more than available products");
                event.target.reset();
                return;
            }
            quantity = newQuantity;
        }
        else {
            let newQuantity = quantity + parseInt(quantityValue);
            if (newQuantity > available) {
                toast.error("You can't order more than available products");
                event.target.reset();
                return;
            }
            quantity = newQuantity;
        }
        const updatedQuantity = { quantity };

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                setOrderedQuantity(updatedQuantity.quantity);
                toast.success('Order quantity increased successfully')
                event.target.reset();
            })
    }

    const placeOrder = event => {
        event.preventDefault();
        const userName = event.target.name.value;
        const email = event.target.email.value;
        const toolName = name;
        const toolImg = img;
        const toolMinQuantity = minQuantity;
        const toolAvailable = available;
        const toolOrderedQuantity = quantity;
        const toolPrice = price;
        const toolBody = description;

        const orderedTool = { userName, email, toolName, toolImg, toolMinQuantity, toolAvailable, toolOrderedQuantity, toolPrice, toolBody };

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedTool)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Item ordered successfully');
                event.target.reset();
            })
    }

    return (
        <div>
            <h2 className='text-center font-semibold text-3xl mt-10 mb-20'>Purchase <span className='text-pink-400 '>{name}</span></h2>
            <div class="mx-auto w-3/4">
                <div class="grid md:grid-cols-2 grid-cols-1 gap-20 md:gap-28">
                    <div class="card shadow-2xl bg-base-100">
                        <div class="card-body">
                            <h3 className='text-center text-xl mb-4'>Product Information</h3>
                            <figure><img className='w-96 mb-0' style={{ height: '250px' }} src={img} alt="tool" /></figure>
                            <h2 class="text-2xl font-bold">{name}</h2>
                            <p>{description}</p>
                            <h3 className='text-xl'>Minimum order: <span className='font-semibold'>{minQuantity}</span> piece</h3>
                            <h3 className='text-xl'>Available product: <span className='font-semibold'>{available}</span> piece</h3>
                            <h3 className='text-xl'>Price: <span className='font-semibold'>${price}</span> (per unit)</h3>
                            <h3 className='text-xl'>Ordered Quantity: <span className='font-semibold text-pink-500'>{
                                orderedQuantity ? orderedQuantity : minQuantity
                            }</span> piece</h3>
                            <div className='flex justify-between items-center'>
                                <button onClick={decreaseQuantity} className='btn btn-outline btn-secondary btn-xs'>Decrease</button>
                                <form onSubmit={increaseQuantity}>
                                    <input type="number" placeholder='Increase order' name="quantity" class="input input-bordered h-8 mr-2" />
                                    <button className='btn btn-outline btn-secondary btn-xs'>Increase</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow-2xl bg-base-100">
                        <div class="card-body">
                            <h3 className='text-center text-xl mb-4'>User Information</h3>
                            <form onSubmit={placeOrder}>
                                <div class="form-control">
                                    <input type="text" name='name' value={user.displayName} class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <input type="email" name='email' value={user.email} class="input input-bordered my-4" />
                                </div>
                                <div class="form-control">
                                    <input type="text" placeholder='Address' required class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <input type="text" placeholder='phone' required class="input input-bordered my-4" />
                                </div>
                                <div class="form-control">
                                    <input type="submit" value='Purchase'
                                        className='btn btn-outline btn-secondary' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;