"use client"
import React from 'react'

const Category = () => {

	const categoryList = [
		{
			name: "Shoes"
		},
		{
			name: "Men"
		},
		{
			name: "Women"
		},
		{
			name: "Electronics"
		},
		{
			name: "Accesories"
		},
		{
			name: "Phone"
		},
		{
			name: "Watch"
		},
	]
	return (
		<div className='border-b-2 overflow-x-auto w-full flex justify-center'>
			<div className='flex justify-between w-[1024px]'>
				{
					categoryList.map((category, key) => (
						<div className='flex cursor-pointer px-4 py-2 text-center' key={key}>
							{category.name}
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Category
