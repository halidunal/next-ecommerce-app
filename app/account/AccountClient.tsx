"use client"
import React from 'react'
import { FaCube, FaRegHeart, FaRegQuestionCircle, FaSignOutAlt, FaTicketAlt } from 'react-icons/fa'
import { FaRegMessage, FaRotateLeft } from 'react-icons/fa6'
import UserMenuItem from '../components/navbar/UserMenuItem'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import AccountContainer from '../components/containers/AccountContainer'
import Orders from './orders/Orders'
import Favorites from './favorites/Favorites'
import Returns from './returns/Returns'
import Reviews from './reviews/Reviews'
import Coupons from './coupons/Coupons'
import Help from './help/Help'

interface AccountClientProps {
	currentUser: any
}

const AccountClient: React.FC<AccountClientProps> = ({ currentUser }) => {
	const router = useRouter();
	const pathname = usePathname();
	const repPathname = pathname?.replace("/account/", "")
	const component = repPathname ? repPathname.charAt(0).toLocaleUpperCase() + repPathname.slice(1) : "Account";

	var Component = null;
	switch (component) {
		case "Orders":
			Component = <Orders />
			break;
		case "Favorites":
			Component = <Favorites />
			break;
		case "Returns":
			Component = <Returns />
			break;
		case "Reviews":
			Component = <Reviews />
			break;
		case "Coupons":
			Component = <Coupons />
			break;
		case "Help":
			Component = <Help />
			break;
	}

	const logout = () => {
		router.push("/login");
		signOut();
	}
	const menuItems = [
		{
			title: "Orders",
			icon: <FaCube />,
			route: "/account/orders"
		},
		{
			title: "Favorites",
			icon: <FaRegHeart />,
			route: "/account/favorites"
		},
		{
			title: "Returns",
			icon: <FaRotateLeft />,
			route: "/account/returns"
		},
		{
			title: "Reviews",
			icon: <FaRegMessage />,
			route: "/account/reviews"
		},
		{
			title: "Coupons",
			icon: <FaTicketAlt />,
			route: "/account/coupons"
		},
		{
			title: "Help & Contact",
			icon: <FaRegQuestionCircle />,
			route: "/account/help"
		}
	]
	return (
		<div className='flex w-full gap-5 mt-4 mb-4'>
			<div className='bg-white w-80 border shadow-lg rounded-md flex flex-col justify-between'>
				<div>
					<div className='p-3 text-sm text-slate-700'>Merhaba, <span className='text-base cursor-pointer border-b-2 border-slate-500' onClick={() => router.push("/account")}>{currentUser.name}</span></div>
					{menuItems.map((item, key) => (
						<UserMenuItem key={key} index={key} item={item} />
					))}
				</div>
				<div className='border-t-2' onClick={logout}>
					<UserMenuItem key={"logout"} item={{ title: "Sign out", icon: <FaSignOutAlt />, route: "/" }} />
				</div>
			</div>
			<div className='flex flex-col w-full gap-5'>
				<div className='bg-white text-slate-700 text-md font-semibold p-2 border shadow-lg rounded-md'>
					{pathname?.replace("/", "").toLocaleUpperCase()}
				</div>
				<div className='flex-1 bg-white shadow-lg border rounded-md'>
					{Component !== null ?
						<AccountContainer>
							<>{Component}</>
						</AccountContainer> :
						<></>
					}
				</div>
			</div>
		</div>
	)
}

export default AccountClient
