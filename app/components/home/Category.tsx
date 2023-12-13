"use client"
import React from 'react'

const Category = () => {

	const categoryList = [
		{
			name: "Shoes"
		},
		{
			name: "Shoes"
		},
		{
			name: "Shoes"
		},
		{
			name: "Shoes"
		},
		{
			name: "Shoes"
		},
		{
			name: "Shoes"
		},
		{
			name: "Shoes"
		},
	]
	return (
		<div className='border-b-2 overflow-x-auto w-full flex justify-center bg-slate-100'>
			<div className='flex justify-between w-[1024px]'>
				{
					categoryList.map((category, key) => (
						<div className='rounded-full flex cursor-pointer px-4 py-2 text-center' key={key}>
							{category.name}
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Category
