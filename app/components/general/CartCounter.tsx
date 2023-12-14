import React from 'react'
import { CardProductProps } from "../../product/[productId]/page";
import { FaMinus, FaPlus } from 'react-icons/fa';

interface CartCounterPorps {
	cardProduct: CardProductProps,
	increase: () => void;
	decrease: () => void;
}

const CartCounter:React.FC<CartCounterPorps> = ({cardProduct, increase,decrease}) => {
	return (
		<div className='flex'>
			<div className='flex items-center space-x-2'>
				<FaMinus onClick={decrease} className='cursor-pointer border rounded-full p-2 hover:scale-105' size={30}/>
				<span className='text-xl font-bold border rounded-full w-12 text-center'>{cardProduct.quantity}</span>
				<FaPlus onClick={increase} className='cursor-pointer border rounded-full p-2 hover:scale-105' size={30}/>
			</div>
		</div>
	)
}

export default CartCounter
