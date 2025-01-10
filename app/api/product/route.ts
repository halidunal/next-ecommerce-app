import { getUser } from "@/app/actions/userActions";
import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const currentUser = await getUser();

	if (!currentUser || currentUser.role !== "ADMIN") {
		return NextResponse.error()
	}
	const body = await req.json();
	const { name, description, brand, category, price, quantity, image } = body;
	const product = await prisma.product.create({
		data: {
			name,
			description,
			brand,
			category,
			price: parseFloat(price),
			quantity: parseInt(quantity),
			image
		}
	})
	return NextResponse.json(product)
}
