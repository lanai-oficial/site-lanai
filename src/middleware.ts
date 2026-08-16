import { NextRequest, NextResponse } from "next/server";

const legacyServiceRedirects: Record<string, string> = {
  "/servicos/cabelos": "/servicos?categoria=hair-spa",
  "/servicos/unhas": "/servicos?categoria=manicure",
  "/servicos/estetica-facial": "/servicos?categoria=estetica-facial",
  "/servicos/estetica-corporal": "/servicos?categoria=estetica-corporal",
  "/servicos/depilacao": "/servicos",
};

export function middleware(request: NextRequest) {
  const destination = legacyServiceRedirects[request.nextUrl.pathname];
  if (!destination) return NextResponse.next();
  return NextResponse.redirect(new URL(destination, request.url), 301);
}

export const config = { matcher: "/servicos/:path" };
