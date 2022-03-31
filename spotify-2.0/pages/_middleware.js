import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req) {
    // Token will exist if user is logged in 
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    const { pathname } = req.nextUrl.clone();
    // Allow the requests if the following is true...
    //   1) It's a request for next-auth session & provider fetching
    //   2) The token exists

    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next();
    }

    // Redirect them to login if they don't have token AND are requesting a protected route
    if (!token && pathname !== '/login') {
        return NextResponse.redirect("https://spotify-clone-2-5k2vvt4n7-quanglea.vercel.app/login");
    }
}