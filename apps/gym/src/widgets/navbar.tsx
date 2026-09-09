"use client";

import { DialogTitle } from "@/components/ui/dialog";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageContext } from "@/contexts";
import { gymData } from "@/data/main";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const Navbar = () => {
  const pathname = usePathname();

  const language = useContext(LanguageContext);

  const navLinks = [
    { name: "Registration", href: "/pages/onboarding" },
    { name: "About Us", href: "/" },
    { name: "Calendar", href: "/" },
  ];

  console.log("language in the navigation bar====>", language);
  return (
    <nav className="w-full px-6 md:px-12 py-6 flex items-center justify-between z-50 absolute top-0 left-0">
      <Link
        href="/"
        className="relative z-10 transition-transform hover:scale-105"
      >
        <Image
          src={gymData.logo}
          alt={gymData.name}
          width={180}
          height={180}
          className="h-16 md:h-28 w-auto object-contain rounded-full"
          priority
        />
      </Link>
      <div></div>

      {/* FULL SCREEN DRAWER TRIGGER */}
      <Sheet>
        <SheetTrigger>
          <div className="group flex  items-center gap-4 focus:outline-none">
            <div className="p-4 rounded-full border bg-brand-primary-background text-brand-primary-dark-background   border-stone-800 group-hover:border-brand-primary transition-all">
              <Menu className=" w-6 h-6" />
            </div>
          </div>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-full md:max-w-2xl bg-brand-primary-background text-brand-primary-dark-background  border-none p-0 flex h-full max-h-screen flex-col overflow-y-auto"
        >
          <DialogTitle className="sr-only" aria-describedby="title">
            Navigation Menu
          </DialogTitle>

          {/* CLOSE BUTTON OVERRIDE */}
          <div className="sticky top-0 right-0 z-50 flex justify-end p-6 backdrop-blur-md">
            <SheetClose className="bg-red-700 p-3 rounded-full  hover:bg-stone-900 transition-all border border-red-700 hover:border-stone-700 focus:outline-none">
              <X className="w-6 h-6" />
            </SheetClose>
          </div>

          {/* MAIN NAV LINKS */}
          <div className="relative z-10 px-8 sm:px-12 md:px-16 py-6 my-auto flex flex-col gap-3 md:gap-4">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <SheetClose key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex  gap-3 sm:gap-4 py-1"
                  >
                    <span className="hidden sm:inline-block font-aldrich text-brand-primary text-sm md:text-base font-bold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 shrink-0">
                      0{index + 1}
                    </span>
                    <h2
                      className={`font-aldrich text-base sm:text-lg lg:text-xl font-black uppercase tracking-tight transition-all truncate leading-tight
                      ${
                        isActive
                          ? "text-brand-primary"
                          : "group-hover:text-brand-primary"
                      }
                    `}
                    >
                      {link.name}
                    </h2>
                    <ArrowRight className="hidden sm:block w-5 h-5 lg:w-6 lg:h-6 text-red-700 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 shrink-0" />
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
