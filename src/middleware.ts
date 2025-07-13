//to run before requests hit pages and routes of next
import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = [
  '/dashboard/candidate',
  '/dashboard/company'
]

export function middleware(request: NextRequest) {
  // Check if route matches a protected route
  if (
    protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))
  ) {
    // Example: Look for an "auth_token" cookie
    const authToken = request.cookies.get('auth_token')?.value

    if (!authToken) {
      // Redirect unauthenticated users to /login
      const loginUrl = new URL('/login', request.url)
      return NextResponse.redirect(loginUrl)
    }

    // Validate the token (e.g., decode JWT, call backend API, etc.)
    // If invalid, redirect as above
  }


  return NextResponse.next()
}

//which paths to apply middleware to (performance optimization)
export const config = {
  matcher: [
    '/dashboard/candidate/:path*',
    '/dashboard/company/:path*'
  ]
}
