import { Monitor, Moon, Sun } from "lucide-react";
import { useState } from "react";

const ThemeSelect = () => {
  const [selectedTheme, setSelectedTheme] = useState<
    "dark" | "light" | "system"
  >("light");
  return (
    <div className="space-y-1.5">
      <span className="text-[10px] font-mono uppercase tracking-wider">
        Theme
      </span>
      <div className="inline-flex p-1  border border-brand rounded-xl gap-1">
        <button
          onClick={() => setSelectedTheme("dark")}
          className={`p-1.5 rounded-lg transition-all ${
            selectedTheme === "dark"
              ? "bg-stone-800 text-red-500 border border-red-600/40"
              : "text-stone-400 hover:text-stone-100"
          }`}
          title="Dark Theme"
        >
          <Moon className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => setSelectedTheme("light")}
          className={`p-1.5 rounded-lg transition-all ${
            selectedTheme === "light"
              ? "bg-stone-800 text-red-500 border border-red-600/40"
              : "text-stone-400 hover:text-stone-100"
          }`}
          title="Light Theme"
        >
          <Sun className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => setSelectedTheme("system")}
          className={`p-1.5 rounded-lg transition-all ${
            selectedTheme === "system"
              ? "bg-stone-800 text-red-500 border border-red-600/40"
              : "text-stone-400 hover:text-stone-100"
          }`}
          title="System Theme"
        >
          <Monitor className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default ThemeSelect;
