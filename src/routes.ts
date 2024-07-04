/**
 * The default redirect URL after logging in.
 * Not required for authentication.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard/projects";


/**
 * These routes are public.
 * Not required for authentication.
 * @type {string[]}
 */
export const PUBLIC_ROUTES = ["/", "/docs"];


/**
 * These routes are public api routes.
 * Not required for authentication.
 * @type {string[]}
 */
export const PUBLIC_API_V1_ROUTES = ["/api/v1/hello"];


/**
 * These routes are used for authentication.
 * Not required for authentication.
 * @type {string[]}
 */
export const AUTH_ROUTES = [
  "/auth",
  "/reset",
  "/verify",
  "/register",
  "/auth-error",
  "/new-password"
];


/**
 * These routes are protected.
 * Required authentication.
 * @type {string[]}
 */
export const PROTECTED_ROUTES = [
  "/dashboard",
];


/**
 * These prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * Not required for authentication.
 * @type {string}
 */
export const API_AUTH_PREFIX = "/api/auth";