import React from 'react';
import { toast } from 'react-toastify';


const addReview = event => {
    event.preventDefault();
    const ratingsValue = event.target.ratings.value;
    const reviewValue = event.target.review.value;

    if (1 > ratingsValue || ratingsValue > 5) {
        toast.error('Please, give valid ratings');
        return;
    }

    const newReview = { reviewValue, ratingsValue };
    fetch('https://damp-castle-10213.herokuapp.com/reviews', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newReview)
    })
        .then(res => res.json())
        .then(data => {
            toast.success('Review added successfully');
            event.target.reset();
        })

}
const AddReview = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold ml-5 my-8 text-pink-400'>Give a Review</h2>
            <form onSubmit={addReview} className='border-2 border-black rounded-lg ml-5 p-5 w-96'>
                <label className="label">
                    <span className="label-text text-xl">Description</span>
                </label>
                <textarea name='review' className="textarea textarea-secondary w-80 h-24" placeholder="Review" required></textarea>
                <label className="label">
                    <span className="label-text text-xl">Ratings</span>
                </label>
                <input type="number" name='ratings' placeholder="Ratings" className="input input-bordered input-secondary w-full max-w-xs mb-5" required />
                <input type="submit" className='btn btn-secondary w-80' value="Add" />
            </form>
        </div>
    );
};

export default AddReview;