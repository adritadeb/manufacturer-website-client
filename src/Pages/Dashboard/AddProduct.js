import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const addTool = event => {
        event.preventDefault();
        const img = event.target.img.value;
        const name = event.target.name.value;
        const minQuantity = event.target.minQuantity.value;
        const available = event.target.available.value;
        const price = event.target.price.value;
        const description = event.target.description.value;

        const newTool = { name, img, minQuantity, available, price, description };

        fetch('https://damp-castle-10213.herokuapp.com/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newTool)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Product added successfully');
                event.target.reset();
            })
    }
    return (
        <div className="card bg-base-100 w-3/4 mx-auto">
            <div className="card-body">
                <h3 className='text-center text-3xl mb-4'>Add a Tool</h3>
                <form onSubmit={addTool} className='border-2 border-black rounded-md p-14'>
                    <div className="form-control">
                        <input type="text" name='img' placeholder='Image url' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name='name' placeholder='Name' className="input input-bordered my-4" required />
                    </div>
                    <div className="form-control">
                        <input type="number" placeholder='Minimum quantity' name='minQuantity' className="input input-bordered mb-4" required />
                    </div>
                    <div className="form-control">
                        <input type="number" placeholder='Available quantity' name='available' className="input input-bordered mb-4" required />
                    </div>
                    <div className="form-control">
                        <input type="number" placeholder='Price' name='price' className="input input-bordered mb-4" required />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder='Description' name='description' className="input input-bordered mb-4" required />
                    </div>
                    <div className="form-control">
                        <input type="submit" value='Add'
                            className='btn btn-outline btn-secondary' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;