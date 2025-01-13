import { getUser } from "@/app/actions/userActions";
import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
	const currentUser = await getUser();

	if (!currentUser || currentUser.role !== "ADMIN") {
		return NextResponse.error();
	}

	const product = await prisma.product.delete({
		where: {
			id: params.id
		}
	})
	return NextResponse.json(product);
}
