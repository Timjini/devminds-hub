"use client";

import { useDictionary } from "@/contexts";
import { motion } from "framer-motion";
import { AlertCircle, Camera } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";

export const MediaConsent = () => {
  const dict = useDictionary();
  const t = dict.onboardingForm.mediaConsent;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const options = [
    {
      id: "full",
      label: t.options.full.label,
      desc: t.options.full.desc,
    },
    {
      id: "whatsapp_only",
      label: t.options.whatsapp_only.label,
      desc: t.options.whatsapp_only.desc,
    },
    {
      id: "none",
      label: t.options.none.label,
      desc: t.options.none.desc,
    },
  ];

  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary-light border-b border-stone-800 pb-2 flex items-center gap-2">
        <Camera className="w-5 h-5 text-brand-primary-light" />
        {t.title}
      </h3>

      <p className="text-xs leading-relaxed font-light">{t.description}</p>

      <div className="space-y-3 pt-2">
        <Controller
          name="mediaConsent"
          control={control}
          render={({ field }) => (
            <>
              {options.map((option) => (
                <label
                  key={option.id}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all block ${
                    field.value === option.id
                      ? "bg-red-950/20 border-brand-primary"
                      : "border-stone-800 text-stone-400 hover:border-stone-700"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      value={option.id}
                      checked={field.value === option.id}
                      onChange={() => field.onChange(option.id)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center ${
                        field.value === option.id
                          ? "border-brand-primary bg-brand-primary"
                          : "border-stone-600"
                      }`}
                    >
                      {field.value === option.id && (
                        <div className="w-1.5 h-1.5 rounded-full" />
                      )}
                    </div>
                    <div>
                      <span className="block text-xs font-mono font-bold uppercase text-stone-200">
                        {option.label}
                      </span>
                      <span className="block text-[11px] text-stone-400 mt-1 font-light leading-snug">
                        {option.desc}
                      </span>
                    </div>
                  </div>
                </label>
              ))}
            </>
          )}
        />
        {errors.mediaConsent && (
          <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.mediaConsent.message as string}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default MediaConsent;
