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
                <div>
                    <h2 className='text-2xl'>2. What are the different ways to manage a state in a React application?</h2>
                    <p className='ml-2 my-5'>-- There are various ways to manage a state in a react application. We can manage the local state by using the useState hook. To manage the global state, we can use multiple components. By lifting state up, we can manage a global state. We can also use useReducer to manage local and global state. To manage a server state, we can use react query or many other tools.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;