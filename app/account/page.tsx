import { getUser } from "../actions/userActions";
import AccountClient from "./AccountClient"

const Account = async () => {
	const currentUser = await getUser();
	return (
		<AccountClient currentUser={currentUser} />
	)
}

export default Account
