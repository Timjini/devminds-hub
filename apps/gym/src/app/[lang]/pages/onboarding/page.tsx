"use client";

import { ContractHeader } from "@/app/shared/ui/header/contract-header";
import { BackgroundGlow } from "@/app/shared/ui/pattern/background-glow";
import { gymData } from "@/data/main";
import { OnboardingForm } from "@/features/onboarding-form/ui/onboarding-form";

export default function OnboardingPage() {
  // const dict = useDictionary();
  // const lang = useLanguage();

  // Today's date default
  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="pt-24 min-h-screen   font-sans selection:bg-brand-primary selection:text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <BackgroundGlow />
      <ContractHeader
        img={gymData.logo}
        title="KBM GYM"
        tag="Saison Sportive 2026 / 2027"
      />
      <div className="max-w-5xl mx-auto relative z-10">
        {/* PRICING OFFER CARD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="relative p-5 rounded-2xl brand-primary-light/90 border-2 border-brand-primary shadow-[0_0_25px_rgba(220,38,38,0.2)] flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-primary  text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
              Offre Spéciale
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider  block mb-1">
                Jusqu'au 30 Septembre 2026
              </span>
              <div className="text-3xl font-black font-aldrich ">
                2 000{" "}
                <span className="text-brand-primary-light text-xl font-sans">
                  DH / An
                </span>
              </div>
            </div>
            <p className="text-[11px]  mt-2 font-mono">
              Inscriptions anticipées pour la saison 2026/2027.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/50 border border-stone-800 flex flex-col justify-between opacity-40 grayscale select-none pointer-events-none relative overflow-hidden">
            {/* Disabled Badge */}
            <div className="absolute top-3 right-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-stone-800 text-stone-200 border border-stone-700/50">
                Indisponible
              </span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider block mb-1 text-stone-500 line-through decoration-stone-600">
                À partir du 1er Octobre 2026
              </span>
              <div className="text-3xl font-black font-aldrich ">
                2 500{" "}
                <span className="text-xl font-sans text-stone-600">
                  DH / An
                </span>
              </div>
            </div>

            <p className="text-[11px] mt-2 font-mono text-stone-600">
              Tarif standard sans réduction.
            </p>
          </div>
        </div>
        <OnboardingForm />
        {/* FOOTER INFO */}
        <div className="mt-8 text-center text-xs text-stone-500 font-mono">
          KBM GYM AGADIR • Coach Issam • Tél : 0700110910 • Agadir, Morocco
        </div>
      </div>
    </div>
  );
}
