import Image from 'next/image'
import React from 'react'

const Banner = () => {
	return (
		<div className='h-[237px] mt-3'>
			<div className='h-[137px]'>
				<Image src={"/banner.jpg"} width={1200} height={100} alt=""/>
			</div>

		</div>
	)
}

export default Banner
