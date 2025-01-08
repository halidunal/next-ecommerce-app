"use client"
import React from 'react'
import AuthContainer from '../containers/AuthContainer'
import Heading from '../general/Heading'
import Input from '../general/Input'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { FaGoogle } from 'react-icons/fa'
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const RegisterClient = () => {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FieldValues>()
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		axios.post('/api/register', data).then(() => {
			toast.success("User created!");
			signIn("credentials", {
				email: data.email,
				password: data.password,
				redirect: false
			}).then((callback) => {
				if (callback?.ok) {
					router.push("/");
					router.refresh();
				}
				if (callback?.error) {
					toast.error(callback.error);
				}
			})
		}).catch((error) => {
			console.log(error)
		})
	}

	return (
		<AuthContainer>
			<div className='w-full md: w-[400px] p-3 shadow-lg rounded-md bg-white flex flex-col items-center gap-3'>
				<Heading text="Register" center />
				<Input placeholder="Name" type='text' id="name" register={register} errors={errors} required />
				<Input placeholder="Email" type='email' id="email" register={register} errors={errors} required />
				<Input placeholder="Password" type='password' id="password" register={register} errors={errors} required />
				<button onClick={handleSubmit(onSubmit)} className='rounded border p-2 border-slate-400 w-full'>Register</button>
				<div className='text-center text-sm'>Do you already have an account <Link className='underline text-red-500' href="/login">Login</Link></div>
				<button className='flex gap-2 items-center rounded border p-2 w-full justify-center'><FaGoogle />Login with Google</button>
			</div>
		</AuthContainer>
	)
}

export default RegisterClient
