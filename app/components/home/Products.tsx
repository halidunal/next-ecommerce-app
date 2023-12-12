import React from 'react'
import Heading from '../general/Heading'
import { products } from '@/utils/Products'
import ProductCard from './ProductCard'

const Products = () => {
	return (
		<div>
			<Heading text="Tüm Ürünler" center={false}/>
			<div className='flex items-center flex-wrap gap-3 md:gap-10'>
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
