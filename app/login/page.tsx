import LoginClient from '../components/auth/LoginClient'
import { getUser } from '../actions/userActions'

const Login = async () => {
	const currentUser = await getUser();
	return (
		<div>
			<LoginClient currentUser={currentUser} />
		</div>
	)
}

export default Login
