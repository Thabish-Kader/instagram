import NextAuth, { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
		// ...add more providers here
	],
	pages: {
		signIn: "/auth/signin",
	},
	callbacks: {
		async session({ session, token, user }: any): Promise<Session> {
			session.user.username = session.user.name
				.split(" ")
				.join("")
				.toLocaleLowerCase();
			session.user.uid = token.sub;

			return session;
		},
	},
	secret: process.env.NEXT_SECRET,
};

export default NextAuth(authOptions);
