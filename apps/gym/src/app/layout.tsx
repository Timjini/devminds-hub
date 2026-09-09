import { Toaster } from "@/components/ui/toast";
import { LanguageContext } from "@/contexts";
import { cn } from "@/lib/utils";
import Navbar from "@/widgets/navbar";
import { Geist } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import QueryProvider from "./query-provider";
import Footer from "./shared/ui/footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang");

  const language = lang?.value || "en";

  let direction;

  if (language == "ar") {
    direction = "rtl";
  } else {
    direction = "ltr";
  }

  console.log("direction", direction);
  return (
    <html
      lang={language || "en"}
      className={cn("font-sans", geist.variable, "dark")}
      dir={direction}
      data-theme="dark"
    >
      <body className="main-theme adaptive">
        <LanguageContext value={language}>
          <Navbar />
          <QueryProvider>{children}</QueryProvider>
          <Toaster />
          <Footer lang={language} />
        </LanguageContext>
      </body>
    </html>
  );
}
