import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa'

const Warning = ({ text }: any) => {
	return (
		<div className='text-orange-600 text-center font-semibold text-lg flex items-center gap-2 justify-center'><FaExclamationCircle size={25} />{text}</div>
	)
}

export default Warning
