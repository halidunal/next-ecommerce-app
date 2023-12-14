"use client"
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {CardProductProps} from "../app/product/[productId]/page"
import toast from "react-hot-toast";

interface CartContextProps {
	productCartQuantity: number
	cartProducts: CardProductProps[] | null
	addToCart: (product: CardProductProps) => void,
	removeFromCart: (product: CardProductProps) => void,
	removeAll: () => void,
	increase: (product: CardProductProps) => void,
	decrease: (product: CardProductProps) => void,
}
const CartContext = createContext<CartContextProps | null>(null)

interface Props{
	[propName: string]: any
}
export const CartContextProvider = (props: Props) => {
	const [productCartQuantity, setProductCartQuantity] = useState(0)
	const [cartProducts, setCartProducts] = useState<CardProductProps[] | null>(null)

	useEffect(() => {
		let localStorageItems: any = localStorage.getItem("cart")
		setCartProducts(JSON.parse(localStorageItems))
	}, [])

	const increase = useCallback((product : CardProductProps) => {
		let updatedCart;
		if(product.quantity == 10) return toast.error("You cannot purchase more than 10 pieces of this product")
		if(cartProducts){
			updatedCart = [...cartProducts];
			const existingItem = cartProducts.findIndex(item => item.id === product.id)

			if(existingItem > -1){
				console.log(updatedCart[existingItem].quantity)
			}
			setCartProducts(updatedCart);
			localStorage.setItem("cart", JSON.stringify(updatedCart))
		}
	}, [cartProducts])

	const decrease = useCallback((product : CardProductProps) => {
		let updatedCart;
		if(product.quantity == 1) return
		if(cartProducts){
			updatedCart = [...cartProducts];
			const existingItem = cartProducts.findIndex(item => item.id === product.id)

			if(existingItem > -1){
				console.log(updatedCart[existingItem].quantity)
			}
			setCartProducts(updatedCart);
			localStorage.setItem("cart", JSON.stringify(updatedCart))
		}
	}, [cartProducts])

	const addToCart = useCallback((product : CardProductProps) => {
		setCartProducts(prev => {
			let updatedCart;
			if(prev){
				updatedCart = [...prev, product]
			}else updatedCart = [product]
			toast.success("Product added to cart")
			localStorage.setItem("cart", JSON.stringify(updatedCart))
			return updatedCart
		})
	}, [cartProducts])

	const removeFromCart = useCallback((product : CardProductProps) => {
		if(cartProducts) {
			const filteredProducts = cartProducts.filter(cart => cart.id !== product.id)
			setCartProducts(filteredProducts);
			toast.success("Product removed from cart")
			localStorage.setItem("cart", JSON.stringify(cartProducts))
		}
	}, [cartProducts])

	const removeAll = useCallback(() => {
		if(cartProducts) {
			setCartProducts([]);
			toast.success("All products removed from cart")
			localStorage.setItem("cart", JSON.stringify(null))
		}
	}, [cartProducts])

	let value = {
		productCartQuantity,
		cartProducts,
		addToCart,
		removeFromCart,
		removeAll,
		increase,
		decrease
	}
	return (
		<CartContext.Provider value={value} {...props}/>
	)
}

const UseCart = () => {
	const context = useContext(CartContext)
	if(context == null) throw new Error("Error")
	return context
}

export default UseCart
