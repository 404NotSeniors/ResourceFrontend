import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard/candidate", "/dashboard/company"];

export function middleware(request: NextRequest) {
  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    //auth_token or another name
    const authToken = request.cookies.get("auth_token")?.value;

    if (!authToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    //validate token
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/candidate/:path*", "/dashboard/company/:path*"],
};
