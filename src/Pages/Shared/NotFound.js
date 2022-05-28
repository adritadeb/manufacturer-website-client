import React from 'react';
import notFound from '../../images/notFound.jpg';

const NotFound = () => {
    return (
        <div className="min-h-screen mx-0 md:mx-28 mt-20">
            <div>
                <div className='text-center'>
                    <h1 className="text-3xl font-semibold text-pink-400">Oops!</h1>
                    <h1 className="text-5xl font-bold text-pink-400">404!</h1>
                    <p className="py-6 text-2xl">The page you are looking for is not found.</p>
                </div>
                <img style={{ height: '500px' }} src={notFound} className="w-full rounded-lg shadow-2xl" alt='Not found page' />
            </div>
        </div>
    );
};

export default NotFound;