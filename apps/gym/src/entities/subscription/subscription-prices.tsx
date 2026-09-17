"use client";

import { useDictionary } from "@/contexts";

interface SubscriptionPlan {
  specialPrice: number;
  specialDeadline: string;
  standardPrice: number;
  standardStartDate: string;
  currency: string;
}

interface SubscriptionPricesProps {
  plan?: SubscriptionPlan;
}

const SubscriptionPrices = ({
  plan = {
    specialPrice: 2000,
    specialDeadline: "30 Septembre 2026",
    standardPrice: 2500,
    standardStartDate: "1er Octobre 2026",
    currency: "DH",
  },
}: SubscriptionPricesProps) => {
  const dict = useDictionary();
  const t = dict.subscription;

  // Utility to replace placeholders like {date}
  const formatText = (template: string, key: string, value: string) =>
    template.replace(`{${key}}`, value);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
      {/* Active Special Offer */}
      <div className="relative p-5 rounded-2xl brand-primary-light/90 border-2 border-brand-primary shadow-[0_0_25px_rgba(220,38,38,0.2)] flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 right-0 bg-brand-primary text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
          {t.specialOffer}
        </div>
        <div>
          <span className="text-xs font-mono uppercase tracking-wider block mb-1">
            {formatText(t.specialOfferDeadline, "date", plan.specialDeadline)}
          </span>
          <div className="text-3xl font-black font-aldrich">
            {plan.specialPrice.toLocaleString()}{" "}
            <span className="text-brand-primary-light text-xl font-sans">
              {plan.currency} {t.perYear}
            </span>
          </div>
        </div>
        <p className="text-[11px] mt-2 font-mono">
          {t.specialOfferDescription}
        </p>
      </div>

      {/* Disabled Standard Offer */}
      <div className="p-5 rounded-2xl bg-stone-900/50 brand-border flex flex-col justify-between opacity-40 grayscale select-none pointer-events-none relative overflow-hidden">
        <div className="absolute top-3 right-3">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-stone-800 text-stone-200 border border-stone-700/50">
            {t.unavailable}
          </span>
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-wider block mb-1 text-stone-500 line-through decoration-stone-600">
            {formatText(t.standardOfferStartDate, "date", plan.standardStartDate)}
          </span>
          <div className="text-3xl font-black font-aldrich">
            {plan.standardPrice.toLocaleString()}{" "}
            <span className="text-xl font-sans text-stone-600">
              {plan.currency} {t.perYear}
            </span>
          </div>
        </div>

        <p className="text-[11px] mt-2 font-mono text-stone-600">
          {t.standardOfferDescription}
        </p>
      </div>
    </div>
  );
};

export default SubscriptionPrices;
