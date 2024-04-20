import { NextRequest, NextResponse } from 'next/server'
import { getSession, updateSession } from './app/lib/auth'

export async function middleware(request: NextRequest) {
  const session = await getSession()
  const isOnLoginPage = request.nextUrl.pathname.startsWith('/login')
  const isOnHomePage = request.nextUrl.pathname === '/'

  if (!session && !isOnLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (session && (isOnHomePage || isOnLoginPage)) {
    await updateSession(request)
    return NextResponse.redirect(new URL('/collection', request.url))
  }

  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}