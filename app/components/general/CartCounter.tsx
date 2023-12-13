import React from 'react'
import { CardProductProps } from "../../product/[productId]/page";
import { AiOutlineHeart } from 'react-icons/ai';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface CartCounterPorps {
	cardProduct: CardProductProps,
	increase: () => void;
	decrease: () => void;
}

const CartCounter:React.FC<CartCounterPorps> = ({cardProduct, increase,decrease}) => {
	return (
		<div className='flex space-x-5 border-b-2 pb-4'>
			<div className='flex items-center space-x-2'>
				<FaMinus onClick={decrease} className='cursor-pointer border rounded-full p-2' size={35}/>
				<span className='text-2xl font-bold border rounded-full w-20 text-center'>{cardProduct.quantity}</span>
				<FaPlus onClick={increase} className='cursor-pointer border rounded-full p-2' size={35}/>
			</div>
			<button className='p-3 w-full bg-green-500 rounded-lg text-white text-lg'>{cardProduct.inStock ? <>Add to Cart</> : <>Notify me when in stock</>}</button>
			<AiOutlineHeart title="Add to favorites" className='cursor-pointer p-3 w-20 bg-gray-400 rounded-lg text-white text-lg' size={55}/>
		</div>
	)
}

export default CartCounter
