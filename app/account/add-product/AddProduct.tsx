import Dropdown from '@/app/components/general/Dropdown'
import Input from '@/app/components/general/Input'
import Warning from '@/app/components/general/Warning'
import firebase from '@/libs/firebase'
import axios from 'axios'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import toast from 'react-hot-toast'

const AddProduct = ({ currentUser }: any) => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: "",
			description: "",
			brand: "",
			category: "",
			price: "",
			image: "",
			quantity: "",
		}
	})

	const category = watch("catogory");
	const onChangeDropdown = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue("category", e.target.value, {
			shouldDirty: false,
			shouldTouch: false,
			shouldValidate: false
		}
		)
	}

	const [image, setImage] = useState<File | null>(null);
	const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setImage(e.target.files[0])
		}
	}
	const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null)
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const handleChange = async () => {
			try {

				const storage = getStorage(firebase);
				const storageRef = ref(storage, `images-${currentUser.name}-${image?.lastModified}`);

				const uploadTask = uploadBytesResumable(storageRef, image);
				await new Promise<void>((resolve, reject) => {
					uploadTask.on('state_changed',
						(snapshot) => {
							const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
							console.log('Upload is ' + progress + '% done');
							switch (snapshot.state) {
								case 'paused':
									console.log('Upload is paused');
									break;
								case 'running':
									console.log('Upload is running');
									break;
							}
						},
						(error) => {
							reject(error);
						},
						() => {
							getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
								setUploadedImageUrl(downloadURL);
								resolve();
							});
						}
					);
				})

			} catch (error) {
				console.log(error)
			}
		}
		await handleChange();
		var newData = { ...data, image: uploadedImageUrl }

		axios.post("/api/product", newData).then(() => {
			toast.success("Product created!");
			router.refresh();
		}).catch((error) =>{
			console.log(error)
		})
	}

	return (
		<div className='flex flex-col'>
			{currentUser?.role !== "ADMIN" ?
				<Warning text={"You have not access this page!"} />
				:
				<div className='flex flex-col gap-2'>
					<Input
						placeholder='Name'
						label="Name"
						type='text'
						id="name"
						register={register}
						errors={errors}
						required
					/>
					<Input
						placeholder='Description'
						label='Description'
						type='text'
						id="description"
						register={register}
						errors={errors}
						required
					/>
					<Input
						placeholder='Brand'
						label="Brand"
						type='text'
						id="brand"
						register={register}
						errors={errors}
						required
					/>
					<Input
						placeholder='Price'
						label="Price"
						type='number'
						id="price"
						register={register}
						errors={errors}
						required
					/>
					<Input
						placeholder='Quantity'
						label="Quantity"
						type='number'
						id="quantity"
						register={register}
						errors={errors}
						required
					/>
					<div>
						<label htmlFor='category' className='text-md'>Category</label>
						<Dropdown id='category' name='category' onChange={(e: any) => onChangeDropdown(e)} data={["Computer", "Laptop", "Mouse", "Phone"]}></Dropdown>
					</div>
					<input type='file' onChange={handleImage}></input>
					<button onClick={handleSubmit(onSubmit)} className='mt-4 rounded border p-2 border-slate-400 w-full'>Kaydet</button>
				</div>
			}
		</div>
	)
}

export default AddProduct
