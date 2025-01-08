import React from 'react'
import RegisterClient from '../components/auth/RegisterClient'
import { getUser } from '../actions/userActions';

const Register = async () => {
	const currentUser = await getUser();
	return (
		<div>
			<RegisterClient currentUser={currentUser} />
		</div>
	)
}

export default Register
