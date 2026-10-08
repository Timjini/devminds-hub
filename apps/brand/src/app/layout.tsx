import { Toaster } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { Geist } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import QueryProvider from "./query-provider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang");

  console.log("lang", lang);

  return (
    <html lang="en" className={cn("font-sans", geist.variable, "dark")}>
      <body className="main-theme adaptive">
        <QueryProvider>{children}</QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
