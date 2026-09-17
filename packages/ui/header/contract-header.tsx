import { Flame } from "lucide-react";

interface HeaderProps {
  img: string;
  subtitle?: string;
  tag?: string;
  title: string;
  className?: string;
}

export function ContractHeader({
  img,
  subtitle = "Kickboxing Morocco",
  tag,
  title,
  className = "",
}: HeaderProps) {
  return (
    <header
      className={`flex flex-col items-center justify-center text-center space-y-6 py-6 ${className}`}
    >
      <a
        href="/"
        className="inline-block transition-transform duration-300 hover:scale-105 focus:outline-none"
      >
        <div className="flex items-center justify-center gap-4">
          <img
            src={img}
            alt={title}
            width={70}
            height={70}
            className="h-16 w-16 object-cover rounded-full border-2 border-brand-primary/60 shadow-[0_0_20px_rgba(220,38,38,0.3)] shrink-0"
          />
          <div className="text-left">
            <h1 className="font-aldrich text-2xl sm:text-3xl font-black uppercase tracking-wider ">
              {title}
            </h1>
            <span className="text-xs text-brand-primary-light font-mono tracking-widest uppercase flex items-center gap-1.5 mt-0.5">
              <Flame className="w-3.5 h-3.5 animate-pulse text-brand-primary-light shrink-0" />
              {subtitle}
            </span>
          </div>
        </div>
      </a>

      {/* Season Badge */}
      {tag && (
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-brand-primary border border-red-600/30 text-stone-300 font-mono text-xs uppercase tracking-widest shadow-inner">
          {tag}
        </div>
      )}

      {/* Main Section Title */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-black font-aldrich uppercase italic tracking-tight ">
          {title}
        </h2>
      </div>
    </header>
  );
}
