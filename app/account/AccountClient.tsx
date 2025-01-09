"use client"
import React from 'react'
import { FaCube, FaRegHeart, FaRegQuestionCircle, FaSignOutAlt, FaTicketAlt } from 'react-icons/fa'
import { FaRegMessage, FaRotateLeft } from 'react-icons/fa6'
import UserMenuItem from '../components/navbar/UserMenuItem'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

interface AccountClientProps {
	currentUser: any
}
const AccountClient: React.FC<AccountClientProps> = ({ currentUser }) => {
	const router = useRouter();
	const logout = () => {
		router.push("/login");
		signOut();
	}
	const menuItems = [
		{
			title: "Orders",
			icon: <FaCube />,
			route: "/orders"
		},
		{
			title: "Favorites",
			icon: <FaRegHeart />,
			route: "/favorites"
		},
		{
			title: "Returns",
			icon: <FaRotateLeft />,
			route: "/returns"
		},
		{
			title: "Reviews",
			icon: <FaRegMessage />,
			route: "/reviews"
		},
		{
			title: "Coupons",
			icon: <FaTicketAlt />,
			route: "/coupons"
		},
		{
			title: "Help & Contact",
			icon: <FaRegQuestionCircle />,
			route: "/help"
		}
	]
	return (
		<div className='flex w-full gap-5 mt-4 mb-4'>
			<div className='bg-white w-80 border shadow-lg rounded-md flex flex-col justify-between'>
				<div>
					<div className='p-3 text-sm text-slate-700'>Merhaba,<span className='text-base'> {currentUser.name}</span></div>
					{menuItems.map((item, key) => (
						<UserMenuItem key={key} index={key} item={item} />
					))}
				</div>
				<div className='border-t-2' onClick={logout}>
					<UserMenuItem key={"logout"} item={{ title: "Sign out", icon: <FaSignOutAlt />, route: "/" }} />
				</div>
			</div>
			<div className='flex flex-col w-full gap-5'>
				<div className='bg-white text-slate-700 text-2xl p-2 border shadow-lg rounded-md'>
					Title
				</div>
				<div className='flex-1 bg-white shadow-lg border rounded-md'>

				</div>
			</div>
		</div>
	)
}

export default AccountClient
