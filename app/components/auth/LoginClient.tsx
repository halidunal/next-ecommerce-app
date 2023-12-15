"use client"
import React from 'react'
import AuthContainer from '../containers/AuthContainer'
import Heading from '../general/Heading'
import Input from '../general/Input'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { FaGoogle } from 'react-icons/fa'
import Link from 'next/link'

const LoginClient = () => {
	const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>()
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

	return (
		<AuthContainer>
			<div className='w-full md: w-[500px] p-3 shadow-lg rounded-md bg-white'>
				<Heading text="Login" center/>
				<Input placeholder="Email" type='email' id="email" register={register} errors={errors} required/>
				<Input placeholder="Password" type='password' id="password" register={register} errors={errors} required/>
				<button onClick={handleSubmit(onSubmit)}>Login</button>
				<div className='text-center text-sm'>Don`t you have an account <Link className='underline text-red-500' href="/register">Register</Link></div>
				<button ><FaGoogle/>Login with Google</button>
			</div>
		</AuthContainer>
	)
}

export default LoginClient
