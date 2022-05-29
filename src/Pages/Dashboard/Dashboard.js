import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <label htmlFor="dashboard-drawer" className="btn btn-ghost drawer-button lg:hidden flex flex-col items-end ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <h2 className='text-4xl text-center text-secondary font-semibold'>Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li>
                            {!admin && <>
                                <Link to='/dashboard'>My Orders</Link>
                                <Link to='/dashboard/addReview'>Add a Review</Link></>
                            }
                        </li>
                        <li>
                            {admin && <>
                                <Link to='/dashboard/manageOrders'>Manage All Orders</Link>
                                <Link to='/dashboard/addProduct'>Add a Product</Link>
                                <Link to='/dashboard/users'>Make Admin</Link>
                                <Link to='/dashboard/manageProduct'>Manage Product</Link>
                            </>
                            }
                        </li>
                        <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;