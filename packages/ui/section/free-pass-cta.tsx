import { ChevronRight, Flame } from "lucide-react";

export const FreePassCTA = () => {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900 to-red-950/40 border border-red-600/30 p-8 sm:p-12 shadow-[0_0_50px_rgba(220,38,38,0.15)]">
        {/* Decorative Ambient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-600/40 text-red-500 font-mono text-xs uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5 animate-pulse" />
              <span>Première Séance Offered</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-aldrich uppercase italic text-stone-100">
              Prêt à Monter sur le Ring ?
            </h2>
            <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Réservez votre séance d'essai gratuite aujourd'hui. Venez tester
              nos équipements et vous entraîner avec nos coachs diplômés.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <a
              href="#inscription"
              className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-stone-950 font-aldrich font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              <span>Réserver mon Essai</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
