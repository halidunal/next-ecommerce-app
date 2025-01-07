import React from 'react'
import { products } from '@/utils/Products'
import ProductCard from './ProductCard'

const Products = () => {
	return (
		<div className='mb-6 space-y-2 px-6 md:px-0'>
			<h1 className='text-lg font-medium'>All Products</h1>
			<div className='flex items-center justify-between flex-wrap gap-2'>
				{
					products.map(product => (
						<ProductCard key={product.id} product={product} />
					))
				}
			</div>
		</div>
	)
}

export default Products
