"use client"
import React from 'react'
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form'
interface InputProps{
	id: string
	placeholder: string
	disabled?: boolean
	required?: boolean
	type: string
	register: UseFormRegister<FieldValues>
	errors: FieldErrors
}

const Input:React.FC<InputProps> = ({
	id, placeholder, disabled, type, register, errors, required
}) => {
	return (
		<input id={id} placeholder={placeholder} disabled={disabled} type={type} {...register(id,{required})} className={`w-full h-12 p-3 rounded-md outline-none my-2 border ${errors[id] ? " border-red-500" : " border-slate-300" }`}/>
	)
}

export default Input
