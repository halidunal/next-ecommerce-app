"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Logo = () => {
	const router = useRouter()

	return (
		<div onClick={() => router.push("/")} className='px-2 py-1 rounded-md text-xl cursor-pointer' style={{backgroundColor: "#69a9c3"}}>Logo</div>
	)
}

export default Logo
