import { authConfig } from "@/auth.config"
import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { AUTH_ROUTES, DEFAULT_LOGIN_REDIRECT, PROTECTED_ROUTES, PUBLIC_ROUTES } from "./routes";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
    const { nextUrl } = req;

    const isLoggedIn = !!req.auth;

    const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);
    const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);
    const isProtectedRoute = PROTECTED_ROUTES.includes(nextUrl.pathname);

    // Is Public Route. No need to check authentication:
    if (isPublicRoute) {
        return;
    }

    // Is Auth Route. First, check is authenticated:
    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(
                new URL(DEFAULT_LOGIN_REDIRECT, nextUrl),
            );
        }
        return;
    }

    // Is Protected routes. If not authenticated, redirect to /auth:
    if (isProtectedRoute && !isLoggedIn) {
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
            callbackUrl += nextUrl.search;
        }
        const encodedCallbackUrl = encodeURIComponent(callbackUrl);
        return NextResponse.redirect(
            new URL(`/auth?callbackUrl=${encodedCallbackUrl}`, nextUrl),
        );
    }
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};