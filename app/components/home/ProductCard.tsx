"use client"
import Image from 'next/image'
import image from "../../../public/images.jpg"
import { Rating } from "@mui/material"
import { useRouter } from 'next/navigation'

const ProductCard = ({ product }: { product: any }) => {
	const router = useRouter()
	let productRate = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length
	return (
		<div onClick={() => router.push(`product/${product.id}`)} className='w-[188px] hover:scale-105'>
			<div className='w-full shadow-lg rounded-md border cursor-pointer flex flex-col flex-1'>
				<div className='relative h-[240px]'>
					<Image fill src={image} alt='' className='object-contain' />
				</div>
				<div className='mt-2 text-sm md:text-md m-2'>
					<h3 className='text-slate-800' style={{ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", height: 40, lineHeight: 1.4 }}>{product.name}</h3>
					<h5 className='text-slate-500' style={{ overflow: "hidden", display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical" }}>{product.description}</h5>

					<Rating name="read-only" className='text-sm' value={productRate} readOnly />
					<div className='text-slate-800'>{product.price} $</div>
				</div>
			</div>

		</div>
	)
}

export default ProductCard
