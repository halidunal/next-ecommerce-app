import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const User = () => {
	return (
		<div className='hidden md:flex items-center space-x-2 cursor-pointer'>
			<FaUserCircle size={25}/>
			<div className='flex flex-col text-xs space-y-1 font-semibold'>
				<div className='hover:scale-105'>Login</div>
				<div className='hover:scale-105'>Register</div>
			</div>
		</div>
	)
}

export default User
