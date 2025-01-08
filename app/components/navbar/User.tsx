"use client"
import Link from 'next/link'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { PiSignOut } from "react-icons/pi";
import { signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';

interface UserProps {
	currentUser: any;
}
const User: React.FC<UserProps> = ({ currentUser }) => {
	const router = useRouter();
	const logout = () => {
		router.push("/login");
		signOut();
	}
	return (
		<div className='hidden md:flex items-center space-x-2 cursor-pointer'>
			<FaUserCircle size={25} />
			{currentUser ?
				(<div className='flex text-md space-x-1 font-semibold'>
					<div><Link href="/profile">Hesabım</Link></div>
					{/* <div className='flex items-center' onClick={logout}><PiSignOut className='hover:scale-105' size={20} /></div> */}
				</div>) : (
					<div className='flex flex-col text-xs space-y-1 font-semibold'>
						<div className='hover:scale-105'><Link href="/login">Login</Link></div>
						<div className='hover:scale-105'><Link href="/register">Register</Link></div>
					</div>)
			}
		</div>
	)
}

export default User
