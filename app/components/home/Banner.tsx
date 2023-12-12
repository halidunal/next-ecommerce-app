import Image from 'next/image'
import React from 'react'

const Banner = () => {
	return (
		<div className='h-[360px] m-3'>
			<Image src={"/banner.jpg"} width={1200} height={360} alt="" className='rounded-xl'/>
		</div>
	)
}

export default Banner
