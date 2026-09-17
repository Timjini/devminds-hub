"use client";

import { ContractHeader } from "@/app/shared/ui/header/contract-header";
import { BackgroundGlow } from "@/app/shared/ui/pattern/background-glow";
import { useDictionary } from "@/contexts";
import { gymData } from "@/data/main";
import SubscriptionPrices from "@/entities/subscription/subscription-prices";
import { OnboardingForm } from "@/features/onboarding-form/ui/onboarding-form";

export default function OnboardingPage() {
  const dict = useDictionary();
  // const lang = useLanguage();

  return (
    <div className="pt-24 min-h-screen   font-sans selection:bg-brand-primary selection:text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <BackgroundGlow />
      <ContractHeader
        img={gymData.logo}
        title={dict.onboardingForm.header}
        tag={dict.onboardingForm.tag}
      />
      <div className="max-w-5xl mx-auto relative z-10">
        {/* PRICING OFFER CARD */}
        <SubscriptionPrices />
        <OnboardingForm />
        {/* FOOTER INFO */}
        <div className="mt-8 text-center text-xs text-stone-500 font-mono">
          KBM GYM AGADIR • Coach Issam • Tél : 0700110910 • Agadir, Morocco
        </div>
      </div>
    </div>
  );
}
