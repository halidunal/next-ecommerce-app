"use client"
import UseCart from '@/hooks/useCart'
import React from 'react'
import image from "@/public/images.jpg"
import Image from 'next/image'
import { FaTrashAlt, FaTruck } from 'react-icons/fa'
import {CardProductProps} from "@/app/product/[productId]/page"
import CartCounter from '../general/CartCounter'

const CartClient = () => {
	const {cartProducts, removeFromCart, removeAll, increase, decrease} = UseCart();
	const totalAmount = cartProducts?.reduce((acc: any, product: any) => acc + product.quantity * product.price, 0)
	if(!cartProducts || cartProducts.length == 0) return <div></div>
	return (
		<div className='space-x-4 w-[1024px] flex flex-row mt-10 bg-gray-100 rounded-xl'>
			<div className='space-y-2 flex flex-col border p-8 rounded-xl w-3/4 bg-white'>
				<div className='flex justify-between px-2'>
					<div className='text-lg font-bold'>Cart ({cartProducts.length})</div>
					<button onClick={removeAll} className='underline text-sm font-medium hover:scale-105'>Remove All</button>
				</div>
				<table className=''>
					<tbody className='flex flex-1 flex-col space-y-8'>
						{
							cartProducts.map((product) => (
								<tr key={product.id} className='space-x-2 flex justify-between p-4 items-center rounded-lg border'>
									<td className='flex items-center space-x-4 w-2/4'>
										<input type="checkbox" className=''/>
										<div className='flex items-center'>
											<Image src={image} alt="" height={90} width={90} className='border rounded-lg'/>
										</div>
										<div className='flex flex-col justify-between h-24'>
											<div className='text-sm'>{product.name}</div>
											<CartCounter cardProduct={product} increase={() => increase(product)} decrease={() => decrease(product)}/>
										</div>
									</td>
									<td className='w-1/4'>
										<div className='opacity-80 flex items-center text-green-500'><FaTruck className='mr-2'/>Free shipping</div>
									</td>
									<td className='w-1/4'>
										<div className='font-semibold text-md text-right'>{product.price} USD</div>
									</td>
									<td>
									<FaTrashAlt onClick={() => removeFromCart(product)} className='cursor-pointer ml-4 mb-1 text-slate-500 hover:scale-110'/>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
			<div className='w-1/4 space-y-2 flex flex-col border p-4 rounded-xl h-[220px] bg-white'>
				<div className='text-slate-700 text-md font-semibold'>Cart Summary</div>
				<table className='space-y-2'>
					<tr>
						<td className='text-slate-700 text-xs'>Order Amount ()</td>
						<td className='text-slate-700 text-xs text-right'>123 USD</td>
					</tr>
					<tr>
						<td className='text-slate-700 text-xs'>Shipping Amount</td>
						<td className='text-slate-700 text-xs text-right'>123 USD</td>
					</tr>
					<tr>
						<td className='text-slate-700 text-xs'>Order Discount</td>
						<td className='text-slate-700 text-xs text-right'>-123 USD</td>
					</tr>
				</table>
				<div className='space-y-2 border-t-2 pt-2'>
					<table className='space-y-2 pb-2 w-full'>
						<tr>
							<td className='font-semibold text-xs'>Total Amount</td>
							<td className='font-semibold text-lg text-right'>{totalAmount} USD</td>
						</tr>
					</table>
					<button onClick={() => {}} className='p-2 w-full bg-green-500 rounded-lg text-white text-md font-semibold hover:scale-105'>Proceed to Payment</button>
				</div>
			</div>
		</div>
	)
}

export default CartClient
