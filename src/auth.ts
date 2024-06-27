import NextAuth from "next-auth"
import { authConfig } from "./auth.config";
import { getUserById } from "./server/actions/user";
import { UserRoleEnum } from "./db/models/user-model";


const basePath = "/api/auth";

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    callbacks: {

        async signIn({ user }) {
            const existingUser = await getUserById(user.id as string);

            if (!existingUser) {
                return false;
            }

            return true
        },

        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role as UserRoleEnum;
            }

            return session;
        },

        async jwt({ token }) {

            if (!token.sub) return token;
            const existingUser = await getUserById(token.sub);
            if (!existingUser) return token;

            token.role = existingUser.role;
            return token
        },
    },
    basePath,
    session: { strategy: "jwt" },
    secret: process.env.AUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    pages: { signIn: "/auth", error: "/api/auth/error" },
    ...authConfig,
})