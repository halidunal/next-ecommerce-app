import { useRouter } from 'next/navigation'
import React from 'react'

const UserMenuItem = ({ item, index }: any) => {
	const router = useRouter();
	return (
		<div key={index} onClick={() => router.push(item.route)} className='flex flex-row p-2 px-4 items-center gap-3 text-sm cursor-pointer hover:bg-slate-100'>
			{item.icon}
			<div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>{item.title}</div>
		</div>
	)
}

export default UserMenuItem
