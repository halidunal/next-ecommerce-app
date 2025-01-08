"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import UserMenu from './UserMenu';

interface UserProps {
	currentUser: any;
}
const User: React.FC<UserProps> = ({ currentUser }) => {
	const [visibility, setVisibility] = useState(false);

	return (
		<div className='hidden md:flex items-center cursor-pointer'>
			<FaUserCircle size={25} onMouseEnter={() => setVisibility(true)} />
			{currentUser ?
				(<div onMouseEnter={() => setVisibility(true)} onMouseLeave={() => setVisibility(false)} className='flex text-md space-x-1 font-semibold relative p-2'>
					<div>{currentUser.name}</div>
					<UserMenu visibility={visibility} />
					{/* <div className='flex items-center' onClick={logout}><PiSignOut className='hover:scale-105' size={20} /></div> */}
				</div>) : (
					<div className='flex flex-col text-xs space-y-1 font-semibold ml-2'>
						<div className='hover:scale-105'><Link href="/login">Login</Link></div>
						<div className='hover:scale-105'><Link href="/register">Register</Link></div>
					</div>)
			}
		</div>
	)
}

export default User
