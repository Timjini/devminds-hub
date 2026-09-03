import { NextResponse } from "next/server";
import { langagues } from "@/lib/languages";


/* eslint-disable  @typescript-eslint/no-explicit-any */
async function getLocale(request: any) {
  const headers = request.headers.get("accept-language") || '';

  const currentLang: string = headers.split(/[;,\/ -]/)[0]
  const lang = currentLang || langagues[0]

  console.log("lang from request", lang)

  // Using cookie here
  // const cookieStore = await cookies();
  // const hasCookie = cookieStore.has('lang')

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
  console.log(".....")
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  console.log("pathname", pathname)
  const pathnameHasLocale = langagues.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  console.log("pathnameHasLocale",pathnameHasLocale);

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = await getLocale(request)
  console.log("locale", locale)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
