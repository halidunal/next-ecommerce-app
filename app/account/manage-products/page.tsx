import getProducts from '@/app/actions/productActions';
import AccountClient from '../AccountClient';
import { getUser } from '@/app/actions/userActions';

const page = async () => {
	const currentUser = await getUser();
	const products = await getProducts({ category: null })

	return (
		<AccountClient currentUser={currentUser} products={products} />
	)
}

export default page
