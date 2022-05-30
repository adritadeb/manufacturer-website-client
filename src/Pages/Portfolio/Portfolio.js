import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <h1 className='text-center text-pink-400 text-5xl font-bold my-10'>My Portfolio</h1>
            <div className='border-2 border-black rounded-lg mx-24 my-8 p-3 pl-14'>
                <h3 className='text-3xl font-bold my-5'>Name: <span className='text-pink-400'>Adrita deb nath</span></h3>
                <h3 className='text-3xl font-bold mb-5'>Email: <span className='text-pink-400'>adritad2019@gmail.com</span></h3>
                <div className='mb-5'>
                    <span className='text-3xl font-bold'>Educationl background: </span>
                    <span className='text-pink-400 text-2xl font-semibold'>I had been read in ST. Mary's School from class k.g to class 4 for five years. After that I admitted in City Government Girls High School at class 5. Now I am reading in the same school in class 8.</span>
                </div>
                <div>
                    <h3 className='text-3xl font-bold mb-3'>List of technologies or skills I have as a web developer: </h3>
                    <div className='text-pink-400 text-xl ml-8 mb-3'>
                        <p>-- HTML</p>
                        <p>-- CSS</p>
                        <p>-- Bootstrap</p>
                        <p>-- Tailwind</p>
                        <p>-- DaisyUI</p>
                        <p>-- React</p>
                        <p>-- Firebase</p>
                        <p>-- Express JS</p>
                        <p>-- MongoDB</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-3xl font-bold mb-3'>My three best projects links:</h3>
                    <div className='text-blue-600 font-semibold text-xl ml-8 mb-3'>
                        <a href="https://project-warehouse-manage-52c58.web.app/">Books Stocker</a>
                        <a className='block' href="https://independent-service-prov-35fa1.web.app/">Wedding Portrait</a>
                        <a href="https://product-analysis-adrita.netlify.app/home">Skill Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;