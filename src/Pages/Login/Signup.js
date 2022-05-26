import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

    };
    return (
        <div className='flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl mt-12">
                <div class="card-body">
                    <h2 className='text-center text-3xl font-semibold text-secondary'>Sign up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })} />
                            <label className='label'>
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })} />
                            <label className='label'>
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-outline mt-4 w-full' type='submit' value='Sign Up' />
                    </form>
                    <p className='mt-3'>Already have an Accout? <Link to='/login' className='text-secondary'>Please Login</Link></p>
                    <div class="divider">OR</div>
                    <button class="btn btn-outline">Sign in with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;