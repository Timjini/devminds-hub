"use client";

import { useDictionary } from "@/contexts";
import { motion } from "framer-motion";
import { AlertCircle, FileCheck } from "lucide-react";
import { useFormContext } from "react-hook-form";

export function Engagement() {
  const dict = useDictionary();
  const t = dict.onboardingForm.declaration;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <motion.div
      key="step4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary-light border-b border-stone-800 pb-2 flex items-center gap-2">
        <FileCheck className="w-5 h-5 text-brand-primary-light" />
        {t.title}
      </h3>

      <div className="max-h-48 overflow-y-auto p-4 rounded-2xl brand-border text-xs text-stone-400 space-y-2 font-mono scrollbar-thin scrollbar-thumb-stone-800">
        <p className="text-stone-200 font-bold">{t.summaryHeader}</p>
        <ul className="list-disc pl-4 space-y-1 text-[11px]">
          {t.summaryItems.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="space-y-4 pt-2">
        <label className="flex items-start gap-3 p-4 rounded-2xl brand-border cursor-pointer hover:border-stone-700 transition-colors">
          <input
            {...register("agreeToTerms")}
            type="checkbox"
            className="w-5 h-5 rounded border-stone-700 brand-primary-light text-brand-primary focus:ring-brand-primary accent-brand-primary mt-0.5"
          />
          <span className="text-xs leading-normal">{t.agreeToTermsLabel}</span>
        </label>
        {errors.agreeToTerms && (
          <p className="text-brand-primary-light text-xs font-mono flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.agreeToTerms.message as string}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider mb-1">
              {t.signatureDateLabel}
            </label>
            <input
              {...register("signatureDate")}
              type="date"
              className="w-full px-4 py-3 rounded-xl brand-border placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
            />
            {errors.signatureDate && (
              <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.signatureDate.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
              {t.gymSignatureLabel}
            </label>
            <div className="px-4 py-3 rounded-xl brand-border/80 text-stone-400 text-xs font-mono">
              {t.gymSignatory}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Engagement;
