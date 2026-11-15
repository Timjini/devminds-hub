import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedLogo } from "../animated-logo";
import { NavButton } from "../button/nav-button";

interface NavbarProps {
  onOpenInquiry: (serviceTitle?: string) => void;
  onResetOverlays: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, onResetOverlays }) => {
  return (
    <header className="w-full border-b-2 border-brand-dark bg-brand-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-6 sm:px-10 h-20 flex items-center justify-between">
        <AnimatedLogo/>

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
          <NavButton href="/pages/start-setup" size="sm" icon={null} fullWidthOnMobile={false}>
            START A PROJECT
          </NavButton>

        </nav>
      </div>
    </header>
  );
};
