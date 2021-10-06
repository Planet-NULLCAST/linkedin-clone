import React from 'react';
import {Link} from 'react-router-dom';
import { MdBookmark } from "react-icons/md";
import {useState} from 'react';

function UserCard() {
    const [username, setUserName] = useState('User');
    return (
        <div className='m-3'>
            <div className='w-100 md:w-60 border border-primary rounded-lg'>
                <div className='relative '>
                    <img src='./Assets/LinkedIn-Bg.png' alt='cover pic' className='rounded-t-lg' />
                    <Link><img src='./Assets/profilepic.jpg' alt='profile pic' className='absolute left-44 top-78 md:left-20 md:top-50 h-14 rounded-full h-35 w-29' /></Link>
                </div>
                <Link>
                <div className='text-center mt-12 border-b border-primary pb-4'>
                    <h1 className='text-base hover:underline'>Welcome, {username}</h1>
                    <Link><span className='text-primary text-xs hover:underline'>Add a photo</span></Link>
                </div>
                </Link>
                <div className="mt-3 md:pb-3 border-b border-primary">
                    <Link><h3 className='pl-3.5 text-xs text-sec text-opacity-60 font-semibold leading-4 hover:bg-primary'>Who viewed your profile</h3></Link>
                    <Link><h3 className='pl-3.5 text-xs text-sec text-opacity-60 font-semibold leading-7 hover:bg-primary'>Connections</h3></Link>
                </div>
                <div className='p-3 relative border-b border-primary hover:bg-primary'><Link>
                    <h3 className='text-xs text-sec text-opacity-60'>Access Exclusive tools & insights</h3>
                    <img src='./Assets/premium_icon.png' className='absolute h-3.5 w-3.5 top-10 left-0'/>
                    <h3 className='text-xs font-semibold ml-5'>Try Premium for free</h3></Link>
                </div>
                <div className='relative p-3 hover:bg-primary'>
                <Link>
                <MdBookmark className='absolute left-0' />
                <h3 className='text-xs font-semibold ml-6'>My items</h3></Link>
                </div>
            </div>
        </div>
    )
}

export default UserCard