import { languages } from "@/lib/languages";
import { NextResponse } from "next/server";

/* eslint-disable  @typescript-eslint/no-explicit-any */
async function getLocale(request: any) {
  // check cookies first.
  const cookieLang = request.cookies.get("lang")?.value;
  console.log("current cookie language ====>", cookieLang);
  if (cookieLang && languages.includes(cookieLang)) {
    return cookieLang;
  }

  // fall back to default of the browser
  const headers = request.headers.get("accept-language") || "";
  const currentLang: string = headers.split(/[;,\/ -]/)[0];

  if (currentLang && languages.includes(currentLang)) {
    return currentLang;
  }

  return languages[0];
}

export async function proxy(request: any) {
  // avoid the 404 issue with api/en or api/ar ...
  if (request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale in the URL
  const locale = await getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
