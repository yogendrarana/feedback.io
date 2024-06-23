import { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"

const basePath = "/api/auth";

export const authOptions: NextAuthConfig = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    basePath,
    callbacks: {},
    pages: { signIn: "/auth" },
    session: { strategy: "jwt" },
    secret: process.env.AUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
}