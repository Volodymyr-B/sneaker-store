export { default } from "next-auth/middleware";

export const config = { matcher: [`/profile`] };

// private routes protection with callbackURL in get params
// all not auth users will be redirected to auth(written in next-auth config)
