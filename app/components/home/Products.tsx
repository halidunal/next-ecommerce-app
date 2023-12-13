import React from 'react'
import Heading from '../general/Heading'
import { products } from '@/utils/Products'
import ProductCard from './ProductCard'

const Products = () => {
	return (
		<div className='mb-6'>
			<Heading text="Tüm Ürünler" center={false}/>
			<div className='flex items-center flex-wrap gap-2'>
				{
					products.map(product => (
						<ProductCard key={product.id} product={product}/>
					))
				}
			</div>
		</div>
	)
}

export default Products
