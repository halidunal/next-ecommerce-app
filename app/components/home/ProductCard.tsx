import Image from 'next/image'
import React from 'react'
import image from "../../../public/images.jpg"
import {Rating} from "@mui/material"

const ProductCard = ({product}: {product: any}) => {
	let productRate = product?.reviews?.reduce((acc: number,item: any) => acc + item.rating, 0) / product?.reviews?.length
	return (
		<div className='w-[200px] shadow-lg rounded-md border cursor-pointer flex flex-col flex-1'>
			<div className='relative h-[240px]'>
				<Image fill src={image} alt='' className='object-contain'/>
			</div>
			<div className='mt-2 text-sm md:text-md m-2'>
				<h3 className='text-slate-600' style={{overflow: "hidden", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", height: 48, lineHeight: 1.5}}>{product.name}</h3>
				<Rating name="read-only" className='text-sm' value={productRate} readOnly/>
				<div className=''>{product.price} $</div>
			</div>
		</div>
	)
}

export default ProductCard
