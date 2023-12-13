"use client"
import React, { useState } from 'react'
import { products } from '@/utils/Products'
import Image from 'next/image'
import image from "../../../public/images.jpg"
import {Rating} from "@mui/material"
import CartCounter from "../../components/general/CartCounter";
import { AiOutlineTag, AiOutlineClockCircle, AiOutlineHeart} from 'react-icons/ai';
import { FaTruck } from 'react-icons/fa';
import Comment from '@/app/components/detail/Comment'

type DetailProps = {
	productId?: string,
}

export type CardProductProps = {
	id: string | undefined,
	name: string | undefined,
	description: string | undefined,
	price: number | undefined,
	quantity: number | undefined,
	image: any  | undefined,
	inStock: boolean | undefined
}

const Detail = ({params}: {params: DetailProps}) => {
	const {productId} = params;
	const product = products.find(product => product.id == productId);
	let productRate = product && product?.reviews?.reduce((acc: number,item: any) => acc + item.rating, 0) / product?.reviews?.length
	const [cardProduct, setCardProduct] = useState<CardProductProps>({
		id: product?.id,
		name: product?.name,
		description: product?.description,
		price: product?.price,
		quantity: 1,
		image: product?.image,
		inStock: product?.inStock,
	})

	const increase = () => {
		if(cardProduct.quantity == 10) return
		setCardProduct((prev: any) => ({...prev, quantity: prev.quantity +1}))
	}

	const decrease = () => {
		if(cardProduct.quantity == 1) return
		setCardProduct((prev: any) => ({...prev, quantity: prev.quantity -1}))
	}
	return (
		<div className='flex w-full m-4 flex-col'>
			<div className='flex w-full'>
				<div className='flex-1 h-[500px] flex items-center border rounded-lg'>
						<Image src={image} alt="" className='w-full'/>
				</div>
				<div className='w-3/5 pl-4 flex flex-col justify-between h-[500px]'>
					<div className='space-y-2'>
						<h3 className='text-xl font-medium'>{product?.name}</h3>
						<div className='flex'>
							<div></div>
							<Rating name="read-only" className='text-md' value={productRate} readOnly/>
							<div>({product?.reviews.length})</div>
						</div>
						<div className='opacity-80 text-sm flex items-center'><AiOutlineHeart className='mr-2'/>23 Favorite</div>
						<div className='opacity-80 text-sm border-b-2 pb-2'>Product Code: {product?.id}</div>
					</div>
					<div className='space-y-2'>
						<div>Stock Status: {product?.inStock ? <span>In Stock</span>:<span>Out of Stock</span>}</div>
						<div className='opacity-80 flex items-center'><AiOutlineTag className='mr-2'/>{product?.category}</div>
						<div className='opacity-80 flex items-center'><AiOutlineClockCircle className='mr-2'/>Ships in 1 day</div>
						<div className='opacity-80 flex items-center'><FaTruck className='mr-2'/>Free shipping</div>
					</div>
					<div className='space-y-2'>
						<div className='text-slate-500 text-decoration-line: line-through'>{product?.price} USD</div>
						<div className='text-2xl font-medium'>{product?.price} USD</div>
						<CartCounter increase={increase} decrease={decrease} cardProduct={cardProduct}/>
					</div>
				</div>
			</div>
			<div className='mt-10 space-y-2 border rounded-lg p-4'>
				<div className='text-xl font-medium'>Product Details</div>
				<div className='text-l'>{product?.description}</div>
				<div className='text-xl font-medium'>Reviews</div>
				{
					product?.reviews?.map((item: any) =>(
						<Comment item={item} key={item.id}/>
					))
				}

			</div>
		</div>
	)
}

export default Detail
