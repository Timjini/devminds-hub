import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onOpenInquiry: (serviceTitle?: string) => void;
  onResetOverlays: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onResetOverlays }) => {
  return (
    <header className="w-full border-b-2 border-black bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-2 md:px-6 sm:px-10 h-20 flex items-center justify-between">
        <Image
          alt="Devminds Logo"
          src="/assets/devminds-logo.png"
          width={180}
          height={50}
          priority
          className="h-10 md:h-12 w-auto object-contain"
        />
        <Link
          href="/"
          className="text-xl sm:text-3xl font-black tracking-tighter uppercase flex items-center gap-2"
        >
          <span className="inline-block w-3.5 h-3.5 bg-black" aria-hidden="true" />
          DEVMINDS.
        </Link>

        {/* Navigation Links & Primary Action */}
        <nav aria-label="Primary Navigation" className="flex items-center gap-6 sm:gap-10">
          <Link
            href="#capabilities"
            onClick={onResetOverlays}
            className="hidden md:inline-block text-sm font-black tracking-widest uppercase hover:underline underline-offset-4 decoration-2"
          >
            CAPABILITIES
          </Link>
          <Link
            href="#notes"
            onClick={onResetOverlays}
            className="hidden md:inline-block text-sm font-black tracking-widest uppercase hover:underline underline-offset-4 decoration-2"
          >
            NOTES
          </Link>
          <Link
            type="button"
            href="/pages/start-setup"
            className="text-xs sm:text-sm font-black tracking-widest uppercase px-4 py-2.5 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-150 flex items-center gap-1.5 cursor-pointer"
          >
            START A PROJECT
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </nav>
      </div>
    </header>
  );
};
