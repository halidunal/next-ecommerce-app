import React from 'react'
import DetailClient from '../../components/detail/DetailClient'
import { products } from '@/utils/Products'
import Image from 'next/image'
import image from "../../../public/images.jpg"

type DetailProps = {
	productId?: string,

}

const Detail = ({params}: {params: DetailProps}) => {
	const {productId} = params;
	const product = products.find(product => product.id == productId)
	return (
		<div className='flex justify-center flex-col items-center w-full'>
				<div className='flex w-full'>
					<div className='relative flex-1 '>
							<Image src={image} alt=""/>
					</div>
					<div className='w-3/4'>
						<div>{product?.name}</div>
						<div>{product?.description}</div>
					</div>
				</div>
		</div>
	)
}

export default Detail
