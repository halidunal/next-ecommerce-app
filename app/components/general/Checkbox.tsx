import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface CheckboxProps {
	id: string
	register: UseFormRegister<FieldValues>
	label: string
}
const Checkbox: React.FC<CheckboxProps> = ({ id, register, label }) => {
	return (
		<div className='flex flex-col text-gray-800'>
			<input type='checkbox' {...register(id)}></input>
			{label?.length && <label htmlFor={id}>{label}</label>}
		</div>
	)
}

export default Checkbox
