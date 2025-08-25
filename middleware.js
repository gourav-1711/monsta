// middleware.js
import { NextResponse } from "next/server";


export function middleware(request) {
   const token = request.cookies.get("user")?.value;
  const url = request.nextUrl;

  
    if(!token && url.pathname.startsWith("/my-dashboard")){
      return NextResponse.redirect(new URL("/login-register", request.url));
    }

  if(token && url.pathname.startsWith("/login-register")){
    return NextResponse.redirect(new URL("/my-dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: [
        "/my-dashboard",
        "/login-register",
    ],
};
