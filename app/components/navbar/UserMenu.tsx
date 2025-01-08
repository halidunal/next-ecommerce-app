import React from 'react'
import { FaCube, FaRegHeart, FaRegQuestionCircle, FaSignOutAlt, FaTicketAlt, FaUserCircle } from 'react-icons/fa'
import { FaRegMessage, FaRotateLeft } from "react-icons/fa6";
import UserMenuItem from './UserMenuItem'
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

const UserMenu = ({ visibility }: any) => {
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
		<>
			{visibility &&
				<div className='absolute flex flex-col rounded-md text-slate-700 border shadow-lg bg-white py-1 text-sm w-[180px] top-10 h-auto right-2 z-10' style={{ visibility: visibility, borderTopRightRadius: 0 }}>
					<div className='border-b-2'>
						<UserMenuItem key={"account"} item={{ title: "Account", icon: <FaUserCircle />, route: "/account" }} />
					</div>
					{menuItems.map((item, key) => (
						<UserMenuItem key={key} index={key} item={item} />
					))}
					<div className='border-t-2' onClick={logout}>
						<UserMenuItem key={"logout"} item={{ title: "Sign out", icon: <FaSignOutAlt />, route: "/" }} />
					</div>
				</div>
			}
		</>
	)
}

export default UserMenu
