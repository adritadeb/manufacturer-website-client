import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://damp-castle-10213.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);
    return (
        <div>
            <h2 className='text-3xl text-secondary font-semibold text-center my-14'>Reviews</h2>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 ml-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;