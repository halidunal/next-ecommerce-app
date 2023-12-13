import React from 'react'
import Logo from './Logo'
import Search from './Search'
import CardCount from './CardCount'
import HamburgerMenu from './HamburgerMenu'
import User from './User'

const Navbar = () => {
	return (
		<div className='bg-red-300 flex justify-center'>
			<div className='flex items-center justify-between gap-3 md:gap-10 px-3 md:px:10 h-16 text-slate-100 w-full md:w-[1024px]'>
				<Logo/>
				<Search/>
				<CardCount/>
				<User/>
				<HamburgerMenu/>
			</div>
		</div>
	)
}

export default Navbar
