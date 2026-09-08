import { languages } from "@/lib/languages";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

/* eslint-disable  @typescript-eslint/no-explicit-any */
async function getLocale(request: any) {
  const headers = request.headers.get("accept-language") || "";

  const currentLang: string = headers.split(/[;,\/ -]/)[0];
  const lang = currentLang || languages[0];
  // if (hasCookie) {
  //   console.log("current cookie", cookieStore.get('lang')?.value)
  //   return cookieStore.get('lang')?.value;
  // }
  // const newCookie = cookieStore.set('lang', lang)

  // console.log("newcookie", newCookie);
  // console.log("final lang", lang)

  return lang;
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export async function proxy(request: any) {
  if (request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  console.log("What is the Path", pathname);
  const cookieStore = await cookies();
  const hasCookie = cookieStore.has("lang");

  console.log("Hi From Proxy lang here====>", hasCookie);

  console.log("what lang ? ===>", cookieStore.get("lang")?.value);
  if (hasCookie) {
  }

  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = await getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
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
