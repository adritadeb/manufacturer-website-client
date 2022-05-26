import React, { useState, useEffect } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data));
    }, []);
    return (
        <div className='my-12'>
            <h2 className='text-pink-500 text-center font-semibold text-5xl'>Tools</h2>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-10 mx-14'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;