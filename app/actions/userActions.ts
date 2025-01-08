import { prisma } from "@/libs/prisma";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getSession() {
	return await getServerSession(authOptions);
}

export async function getUser() {
	try {
		const session = await getSession();
		if (!session?.user?.email) return null;

		const user = await prisma.user.findUnique({
			where: { email: session?.user?.email }
		})

		if (!user) return null

		return {
			...user,
			createdAt: user.createdAt.toISOString(),
			updateAt: user.updatedAt.toISOString(),
			emailVerified: user.emailVerified?.toISOString() || null
		}
	} catch (error) {
		return null;
	}
}
