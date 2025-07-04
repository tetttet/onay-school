// /middleware.ts (в корне проекта)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log("Middleware triggered on:", pathname);

  if (pathname === "/about") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/src/about(:/.*)?"],
};
