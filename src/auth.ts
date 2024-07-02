import NextAuth from "next-auth"
import { PROVIDER } from "@/constants";
import { authConfig } from "./auth.config";
import { AuthProviderEnum, UserRoleEnum } from "./db/models/user-model";
import { createUser, getUserByEmail, getUserByProviderAccountId } from "./server/actions/user";

const basePath = "/api/auth";

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    callbacks: {
        async signIn({ account, profile }) {
            if (account?.provider === PROVIDER.GOOGLE && profile?.sub) {
                const existingUser = await getUserByProviderAccountId(profile?.sub as string);
                if (!existingUser) {
                    await createUser({
                        name: profile.name as string,
                        email: profile.email as string,
                        authProvider: AuthProviderEnum.google,
                        providerAccountId: profile.sub as string,
                    })
                }
            }

            return true
        },
        async jwt({ token }) {
            if (!token.sub) return token;

            const user = await getUserByEmail(token.email as string);
            if (!user) return token;

            token.name = user.name;
            token.role = user.role;
            token.id = user._id;

            return token
        },
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.sub = token.sub as string;
            }
            if (token.role && session.user) {
                session.user.role = token.role as UserRoleEnum;
            }
            if (token.id && session.user) {
                session.user.id = token.id as string;
            }

            return session;
        }
    },
    basePath,
    session: { strategy: "jwt" },
    secret: process.env.AUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    pages: { signIn: "/auth", error: "/api/auth/error" },
    ...authConfig,
})