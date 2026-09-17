import Marquee from "react-fast-marquee";

export const DiagonalSeparator = () => {
  return (
    <div className="relative w-full py-12 overflow-hidden select-none pointer-events-none">
      <div className="relative w-[110%] left-[-5%] -rotate-2 bg-brand-text border-y border-brand-primary/40 py-4 shadow-[0_0_30px_rgba(220,38,38,0.15)]">
        <div className="flex items-center justify-around gap-8 text-xs font-mono font-bold uppercase tracking-[0.3em] text-stone-400 whitespace-nowrap">
          <Marquee className=" flex flex-row gap-20">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary animate-ping" />
              Disciplines
            </span>
            <span className="text-brand-text">//</span>
            <span className="text-brand-primary">Precision & Power</span>
            <span className="text-brand-text">//</span>
            <span>Schedule 2026</span>
            <span className="text-brand-text">//</span>
            <span className=" font-aldrich">KBM GYM AGADIR</span>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
