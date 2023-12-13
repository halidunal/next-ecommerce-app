import React from 'react'
import Avatar from '../general/Avatar'
import { Rating } from '@mui/material'

const Comment = ({item} : {item: any}) => {
	return (
		<div className="flex flex-col border rounded p-4 space-y-2">
			<Rating name="read-only" className='text-md' value={item.rating} readOnly/>
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
