// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("authenticated");

  if (request.nextUrl.pathname === "/home" && session?.value === "") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.nextUrl.pathname === "/login" && session?.value !== "") {
    return NextResponse.redirect(new URL("/home", request.url));
  }
}
