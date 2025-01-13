import Warning from "@/app/components/general/Warning"
import firebase from "@/libs/firebase"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import axios from "axios"
import { deleteObject, getStorage, ref } from "firebase/storage"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCallback } from "react"
import toast from "react-hot-toast"
import { FaTrashAlt } from "react-icons/fa"

const ManageProducts = ({ currentUser, products }: any) => {
	const storage = getStorage(firebase)
	const router = useRouter()
	let rows: any = []
	if (products) {
		rows = products.map((product: any) => {
			return {
				id: product.id,
				image: product.image,
				name: product.name,
				price: product.price,
				category: product.category,
				brand: product.brand,
				quantity: product.quantity,
			}
		})
	}

	const columns: GridColDef[] = [
		{
			field: "image",
			headerName: "Image",
			width: 100,
			renderCell: (params: any) => {
				return (
					<div className="flex items-center justify-center h-full">
						<Image src={params.row.image} alt="" width={100} height={52} style={{ maxHeight: "52px", width: "auto", objectFit: "contain" }} />
					</div>
				)
			}
		},
		{ field: "name", headerName: "Name", width: 150 },
		{ field: "price", headerName: "Price", width: 100 },
		{ field: "category", headerName: "Category", width: 100 },
		{ field: "brand", headerName: "Brand", width: 100 },
		{ field: "quantity", headerName: "Quantity", width: 100 },
		{
			field: "actions",
			headerName: "Action",
			width: 100,
			renderCell: (params: any) => {
				return (
					<button onClick={() => handleDelete(params.row.id, params.row.image)} title="delete" className="mx-4 text-red-500 cursor-pointer ">
						<FaTrashAlt />
					</button>
				)
			}
		},
	]

	const handleDelete = useCallback(async (id: string, image: any) => {
		toast.success('Please wait for delete process...')
		const handleDeleteImg = async () => {
			try {
				const imageRef = ref(storage, image)
				await deleteObject(imageRef)
			} catch (error) {
				return console.log("Error", error)
			}
		}
		await handleDeleteImg();
		axios.delete(`/api/product/${id}`)
			.then(() => {
				toast.success('Remove process successful.')
				router.refresh();
			})
			.catch((error: any) => {
				console.log(error)
			})
	}, [])
	return (
		<div className='flex flex-col'>
			{currentUser?.role !== "ADMIN" ?
				<Warning text={"You have not access this page!"} />
				:
				<DataGrid
					rows={rows}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: { page: 0, pageSize: 50 },
						},
					}}
					pageSizeOptions={[20, 50, 100]}
					checkboxSelection
				/>
			}</div>
	)
}

export default ManageProducts
