"use client"
import React from 'react'
import { FaCog, FaCube, FaPlus, FaRegHeart, FaRegQuestionCircle, FaSignOutAlt, FaTicketAlt } from 'react-icons/fa'
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
import AddProduct from './add-product/AddProduct'
import ManageProducts from './manage-products/ManageProducts'

interface AccountClientProps {
	currentUser: any
	products?: any
}

const AccountClient: React.FC<AccountClientProps> = ({ currentUser, products }) => {
	const router = useRouter();
	const pathname = usePathname();
	const repPathname = pathname?.replace("/account/", "")
	const component = repPathname ? repPathname.charAt(0).toLocaleUpperCase() + repPathname.slice(1) : "Account";

	var Component = null;
	switch (component) {
		case "Orders":
			Component = <Orders currentUser={currentUser} />
			break;
		case "Favorites":
			Component = <Favorites currentUser={currentUser} />
			break;
		case "Returns":
			Component = <Returns currentUser={currentUser} />
			break;
		case "Reviews":
			Component = <Reviews currentUser={currentUser} />
			break;
		case "Coupons":
			Component = <Coupons currentUser={currentUser} />
			break;
		case "Help":
			Component = <Help currentUser={currentUser} />
			break;
		case "Add-product":
			Component = <AddProduct currentUser={currentUser} />
			break;
		case "Manage-products":
			Component = <ManageProducts currentUser={currentUser} products={products} />
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
					{currentUser.role == "ADMIN" && <UserMenuItem key={"manage-products"} item={{ title: "Manage Products", icon: <FaCog />, route: "/account/manage-products" }} />}
					{currentUser.role == "ADMIN" && <UserMenuItem key={"add-product"} item={{ title: "Add Product", icon: <FaPlus />, route: "/account/add-product" }} />}
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
					{pathname?.replace("/", "").replace("-", " ").toLocaleUpperCase()}
				</div>
				<div className='flex-1 bg-white shadow-lg border rounded-md'>
					{Component !== null ?
						<AccountContainer>
							<>{Component}</>
						</AccountContainer> :
						<div className='p-4'>
							account
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default AccountClient
