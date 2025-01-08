import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Cart from './Cart'
import HamburgerMenu from './HamburgerMenu'
import User from './User'
import { getUser } from '@/app/actions/userActions'

const Navbar = async () => {
	const currentUser = await getUser();
	return (
		<div className='bg-red-300 flex justify-center'>
			<div className='flex items-center justify-between gap-4 px-4 md:px-0 h-16 text-slate-100 w-full md:w-[1024px]'>
				<Logo />
				<Search />
				<Cart />
				<User currentUser={currentUser} />
				<HamburgerMenu />
			</div>
		</div>
	)
}

export default Navbar
