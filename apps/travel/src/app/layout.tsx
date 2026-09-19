import { Toaster } from "@/components/ui/toast";
import { DictionaryProvider, LanguageProvider } from "@/contexts";
import { cn } from "@/lib/utils";
import { Geist } from "next/font/google";
import { cookies } from "next/headers";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";
import { getDictionary } from "./lib/dictionary";
import QueryProvider from "./query-provider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang?: string;
  }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("lang")?.value;

  const language = resolvedParams?.lang || langCookie || "en";

  const dict = await getDictionary(language);

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={language || "en"}
      className={cn("font-sans", geist.variable, "dark")}
      dir={dir}
      data-theme="dark"
    >
      <body className="main-theme adaptive">
        <LanguageProvider value={language}>
          <DictionaryProvider dictionary={dict}>
            <Navbar />
            <QueryProvider>{children}</QueryProvider>
            <Toaster />
            <Footer />
          </DictionaryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
