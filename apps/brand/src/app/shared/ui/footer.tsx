import { ArrowUp } from "lucide-react";
import { NavButton } from "./button/nav-button";


export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-black bg-white">
      {/* Ready to Launch Callout Band */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24 border-b-2 border-black flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <p className="text-xs sm:text-sm font-black tracking-[0.2em] uppercase mb-3">
            GET STARTED
          </p>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-[-0.04em] leading-[0.94] uppercase">
            READY TO LAUNCH?
          </h2>
        </div>

        <NavButton href="/pages/start-setup">
          YEEAH!
        </NavButton>
      </div>

      {/* Bottom Legal & Back-to-Top Row */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs sm:text-sm font-black tracking-widest uppercase">
          DEVMINDS. &copy; {new Date().getFullYear()} — TECHNICAL FOUNDATION FOR STARTUPS
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_ADMIN_EMAIL}`}
            className="text-xs sm:text-sm font-black tracking-widest uppercase underline decoration-2 underline-offset-4 hover:bg-black hover:text-white px-2 py-1 transition-colors"
          >
            {process.env.NEXT_PUBLIC_ADMIN_EMAIL}
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black tracking-widest uppercase px-3 py-1.5 border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            TOP
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
