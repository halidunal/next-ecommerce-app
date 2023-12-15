"use client"
import UseCart from '@/hooks/useCart';
import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { useRouter } from 'next/navigation'

const Cart = () => {
	const router = useRouter();

	const {cartProducts} = UseCart();
	return (
		<div className='hidden md:flex relative cursor-pointer' onClick={() => router.push("/cart")}>
			<MdOutlineShoppingCart size={25}/>
			{cartProducts?.length ? (
				<div className='absolute -top-2 -right-2 text-xs w-4 h-4 rounded-full flex items-center justify-center' style={{backgroundColor: "#69a9c3"}}>{cartProducts?.length}</div>
			) : (<></>)}
		</div>
	)
}

export default Cart
