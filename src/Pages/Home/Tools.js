import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch('https://damp-castle-10213.herokuapp.com/tools').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
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