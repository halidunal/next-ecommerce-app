"use client"
import React from 'react'
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form'
interface InputProps {
	id: string
	placeholder?: string
	disabled?: boolean
	required?: boolean
	type: string
	label?: string
	register: UseFormRegister<FieldValues>
	errors: FieldErrors
}

const Input: React.FC<InputProps> = ({ id, label, placeholder, disabled, type, register, errors, required }) => {
	return (
		<div className='flex flex-col text-gray-800'>
			{label?.length && <label htmlFor={id}>{label}</label>}
			<input id={id} placeholder={placeholder} disabled={disabled} type={type} {...register(id, { required })}
				className={`w-full h-8 text-sm p-2 rounded-md outline-none border ${errors[id] ? " border-red-500" : " border-slate-300"}`} />
		</div>
	)
}

export default Input
