import React from 'react';
import banner from '../../images/banner.jpg';

const Banner = () => {
    return (
        <div className="hero mt-8" style={{ backgroundImage: `url(${banner})`, height: '600px' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello!</h1>
                    <p className="mb-5">Welcome to Roll-Wall. It is a manufacturer company. You can purchase many product for your need. Just go below and start purchasing.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;