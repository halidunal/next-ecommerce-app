import Image from 'next/image'
import React from 'react'

const Banner = () => {
	return (
		<div className='h-[360px] mt-4 mb-[-34px]'>
			<Image src={"/banner.jpg"} width={1200} height={360} alt="" className='md:rounded-md' />
		</div>
	)
}

export default Banner
