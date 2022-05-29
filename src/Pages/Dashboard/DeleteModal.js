import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleting, setDeleting }) => {

    const { email } = deleting;

    const handleDelete = () => {
        fetch(`https://damp-castle-10213.herokuapp.com/orders/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Order is canceled`);
                    setDeleting(null);
                }
            })

        return (
            <div>
                <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete!</h3>
                        <div class="modal-action">
                            <button onClick={() => handleDelete()} className='btn btn-xs btn-error'>Delete</button>
                            <label htmlFor="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                        </div>
                    </div>
                </div>
            </div >
        );
    };
}
export default DeleteModal;