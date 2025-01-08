import NextAuth, { AuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/libs/prisma"
import Google from "next-auth/providers/google"
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
		}),
		Credentials({
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "password", type: "password" },
			},
			authorize: async (credentials) => {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Invalid email or password.")
				}
				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email
					}
				})

				if (!user || !user.hashedPassword) {
					throw new Error("Invalid email or password.")
				}

				const comparePassword = await bcrypt.compare(credentials.password, user.hashedPassword);

				if (!comparePassword) {
					throw new Error("Invalid email or password.")
				}

				return user;
			},
		}),
	],
	pages: {
		signIn: "/Login"
	},
	debug: process.env.NODE_ENV === "development",
	session: {
		strategy: "jwt"
	},
	secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)
