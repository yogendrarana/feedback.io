import NextAuth from "next-auth"
import { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"

const basePath = "/api/auth";

export const authConfig: NextAuthConfig = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    basePath,
    session: { strategy: "jwt" },
    secret: process.env.AUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    pages: { signIn: "/auth", error: "/api/auth/error" },
}

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig)