import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Review = ({ review }) => {
    const [user] = useAuthState(auth);
    return (
        <div className="card w-96 bg-pink-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Name: {user?.displayName}</h2>
                <p>{review.reviewValue}</p>
                <h3 className='text-2xl'>Ratings: <span className='font-semibold text-secondary'>{review.ratingsValue}</span></h3>
            </div>
        </div>
    );
};

export default Review;