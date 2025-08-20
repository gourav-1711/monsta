import { NextResponse } from "next/server";


export function middleware(request) {
   const token = true
  const { pathname } = request.nextUrl;


  if(token && pathname.startsWith("/login-register")){
    return NextResponse.redirect(new URL("/my-dashboard", request.url));
  }

  if(!token && pathname.startsWith("/my-dashboard")){
    return NextResponse.redirect(new URL("/login-register", request.url));
  }

  return NextResponse.next();
}
