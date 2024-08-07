import { NextResponse } from "next/server";
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  // const origin = req.headers.get('origin')
  // console.log(origin)
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  if (!token && pathname != "/login" && !pathname != "/signup" && !pathname != "/") {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/createGigs", "/createProfile"],
};