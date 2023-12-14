import React from 'react'
import Avatar from '../general/Avatar'
import { Rating } from '@mui/material'

const Comment = ({item} : {item: any}) => {
	return (
		<div className="flex flex-col border rounded p-4 space-y-3 text-sm">
			<div className='flex justify-between text-slate-500 text-xs'>
				<Rating name="read-only" className='text-md' value={item.rating} readOnly/>
				<div>{(item?.createdDate)?.substring(0,10)}</div>
			</div>
			<div className='flex space-x-2'>
				<Avatar image={item.user.image}/>
				<div>{item.user.name}</div>
			</div>
			<div>
				<div>{item.comment}</div>
			</div>
		</div>
	)
}

export default Comment
