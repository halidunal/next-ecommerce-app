import AccountClient from '../AccountClient';
import { getUser } from '@/app/actions/userActions';

const page = async () => {
	const currentUser = await getUser();
	return (
		<AccountClient currentUser={currentUser} />
	)
}

export default page
