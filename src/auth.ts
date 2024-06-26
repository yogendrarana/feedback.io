import NextAuth from "next-auth"
import { authConfig } from "./auth.config";

const basePath = "/api/auth";

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    callbacks: {
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                // session.user.role = token.role as UserRole;
            }

            return session;
        },

        async jwt({ token, trigger, session }) {
            if (trigger === "update" && session?.email) {
                token.email = session.email;
            }

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