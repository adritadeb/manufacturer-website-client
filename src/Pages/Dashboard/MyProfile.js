import React from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyProfile = () => {
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [user] = useAuthState(auth);

    const updateMyProfile = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        if (!name || !email || !phone) {
            toast.error('Give your information');
            return;
        }
        await updateProfile({ displayName: name, email: email, phoneNumber: phone });
        toast.success('Profile updated successfully');
        console.log(user?.displayName, user?.email, user?.phoneNumber);
    }

    if (updating) {
        return <Loading></Loading>
    }

    return (
        <div className="card bg-base-100 w-3/4 mx-auto">
            <div className="card-body">
                <h3 className='text-center text-3xl mb-4'>Profile</h3>
                <form onSubmit={updateMyProfile} className='border-2 border-black rounded-md p-14'>
                    <div className="form-control">
                        <input type="text" name='name' placeholder='Name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="email" name='email' placeholder='Email' className="input input-bordered my-4" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder='phone' name='phone' className="input input-bordered mb-4" />
                    </div>
                    <div className="form-control">
                        <input type="submit" value='Update Profile'
                            className='btn btn-outline btn-secondary' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;