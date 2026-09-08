import { Toaster } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { Bitcount_Prop_Single_Ink, Geist } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import QueryProvider from "./query-provider";
import Footer from "./shared/ui/footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const bitcoinFont = Bitcount_Prop_Single_Ink({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang");

  const language = lang?.value || "en";

  console.log("lang==========> layout", lang?.value);

  console.log(language == "ar");
  return (
    <html
      lang={language || "en"}
      dir={`${language == "ar" ? "rtl" : ""}`}
      className={cn("font-sans", geist.variable, "dark")}
    >
      <body className="main-theme adaptive">
        <QueryProvider>{children}</QueryProvider>
        <Toaster />
        <Footer lang={language} />
      </body>
    </html>
  );
}
