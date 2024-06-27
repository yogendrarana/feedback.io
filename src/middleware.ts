import NextAuth from "next-auth";
import { authConfig } from "@/auth.config"
import { NextResponse } from "next/server";
import { API_AUTH_PREFIX, AUTH_ROUTES, DEFAULT_LOGIN_REDIRECT, PROTECTED_ROUTES, PUBLIC_ROUTES } from "./routes";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
    const { nextUrl } = req;

    const isLoggedIn = !!req.auth;

    const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);
    const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);
    const isApiAuthRoute = nextUrl.pathname.startsWith(API_AUTH_PREFIX);
    const isProtectedRoute = PROTECTED_ROUTES.includes(nextUrl.pathname);

    // If public route or api route. No need to check authentication:
    if (isPublicRoute || isApiAuthRoute) {
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

    if (!isLoggedIn && !isPublicRoute) {
        return NextResponse.redirect(new URL("/auth/login", nextUrl));
    }

    return;
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};