import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-pink-400 text-5xl font-bold my-10'>QnA Section</h1>
            <div className='border-2 border-black rounded-lg mx-24 my-8 p-8'>
                <div>
                    <h2 className='text-2xl'>1. How will you improve the performance of a react application?</h2>
                    <p className='ml-2 my-5'>-- We can improve the performance of a react application by keeping the component state local when necessary. We can add lazy loading images in react. We can avoid rendering where we have to optimize an application with images by it. Also, we can use immutable data structures as it has zero side effects, and it is easier to track changes. By optimizing dependency, we can optimize an application. Also, avoiding inline functions will help us improve the performance of a react application. There are so many ways to improve performance.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;