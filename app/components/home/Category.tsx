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
		<div className='flex md:w-2/3 w-full overflow-x-auto border-b-2 justify-between'>
			{
				categoryList.map((category, key) => (
					<div className='rounded-full flex cursor-pointer px-4 py-2 text-center' key={key}>
						{category.name}
					</div>
				))
			}
		</div>
	)
}

export default Category
