import React from 'react';
import banner from '../../images/banner.jpg';

const Banner = () => {
    return (
        <div className="hero mt-8" style={{ backgroundImage: `url(${banner})`, height: '600px' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;