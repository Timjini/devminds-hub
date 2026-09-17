import { ChevronDown } from "lucide-react";

export const ScrollDownSeparator = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-12">
      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-500">
        Check The Timetable
      </span>
      <div className="p-2 rounded-full border border-stone-800 bg-stone-900/60 text-red-500 animate-bounce">
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  );
};
