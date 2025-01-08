import { useRouter } from 'next/navigation'
import React from 'react'

const UserMenuItem = ({ item, index }: any) => {
	const router = useRouter();
	return (
		<div key={index} onClick={() => router.push(item.route)} className='flex flex-row p-2 items-center gap-2 hover:bg-slate-100'>
			{item.icon}
			<div>{item.title}</div>
		</div>
	)
}

export default UserMenuItem
