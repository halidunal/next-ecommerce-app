"use client"
import React from 'react'
import PageContainer from '../containers/PageContainer'
import Image from 'next/image'
import image from "../../../public/images.jpg"


const DetailClient = ({product}: {product: any}) => {
	return (
		<div className=''>
			<PageContainer>
				<div className='flex w-full'>
					<div className='relative flex-1 '>
							<Image src={image} alt=""/>
					</div>
					<div className='w-3/4'>
						{product.name}
					</div>
				</div>
			</PageContainer>
		</div>
	)
}

export default DetailClient
