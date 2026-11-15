import { Toaster } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { Geist } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import QueryProvider from "./query-provider";
import { GoogleTagManager } from "@next/third-parties/google";
import { FuturisticCursor } from "./shared/ui/futuristic-cursor";
import { TerminalPromptCursor } from "./shared/ui/terminal-prompt-cursor";
import { MagneticSnapCursor } from "./shared/ui/magnetic-snap-cursor";

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
        {/*<FuturisticCursor/>*/}
        {/*<TerminalPromptCursor />*/}
        <MagneticSnapCursor />
         <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}`} />
        <QueryProvider>{children}</QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
