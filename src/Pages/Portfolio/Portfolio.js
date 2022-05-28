import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <h1 className='text-center text-pink-400 text-5xl font-bold my-10'>My Portfolio</h1>
            <div className='border-2 border-black rounded-lg mx-24 my-8 p-3 pl-14'>
                <h3 className='text-3xl font-bold my-10'>Name: <span className='text-pink-400'>Adrita deb nath</span></h3>
                <h3 className='text-3xl font-bold mb-10'>Email: <span className='text-pink-400'>adritad2019@gmail.com</span></h3>
                <h3 className='text-3xl font-bold'>Educationl background: </h3>
                <span className='text-pink-400 text-2xl ml-20'>I had been read in ST. Mary's School from class k.g to class 4 for five years. After that I admitted in City Government Girls High School at class 5. Now I am reading in the same school in class 8.</span>
            </div>
        </div>
    );
};

export default Portfolio;