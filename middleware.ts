import { NextResponse } from "next/server";

import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session");

  const isAuthPage =
    request.nextUrl.pathname.startsWith("/user/signup") ||
    request.nextUrl.pathname.startsWith("/user/login");

  if (!session && !isAuthPage) {
    return NextResponse.redirect(new URL("/user/login", request.url));
  }

  if (session && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
