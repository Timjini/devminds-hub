import { Flame } from "lucide-react";

export const CombatLineSeparator = ({ sentence }: { sentence: string }) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto my-16 px-4 flex items-center justify-center">
      <div className="flex-1 h-px bg-linear-to-r from-transparent via-brand-text to-brand-primary/60" />

      <div className="mx-4 px-4 py-1.5 rounded-full bg-brand-text not-odd:border border-red-600/40 shadow-[0_0_15px_rgba(220,38,38,0.25)] flex items-center gap-2">
        <Flame className="w-4 h-4 text-brand-primary animate-pulse" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-300">
          {sentence}
        </span>
      </div>

      <div className="flex-1 h-px bg-linear-to-l from-transparent via-brand-text to-brand-primary/60" />
    </div>
  );
};
