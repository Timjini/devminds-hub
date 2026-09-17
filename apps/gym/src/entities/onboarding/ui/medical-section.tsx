"use client";

import { useDictionary } from "@/contexts";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";

export function MedicalSection() {
  const dict = useDictionary();
  const t = dict.onboardingForm.medicalSection;

  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const watchMedical = useWatch({
    control,
    name: "hasMedicalCondition",
  });

  return (
    <div className="space-y-4 pt-2">
      <label className="block text-xs font-mono uppercase tracking-wider">
        {t.medicalRemarksLabel}
      </label>

      <div className="grid grid-cols-2 gap-4">
        {/* Option: No */}
        <label
          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
            watchMedical === "no"
              ? "bg-red-950/20 border-brand-primary"
              : "border-stone-800 text-stone-400 hover:border-stone-700"
          }`}
        >
          <input
            {...register("hasMedicalCondition")}
            type="radio"
            value="no"
            className="sr-only"
          />
          <div
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
              watchMedical === "no"
                ? "border-brand-primary bg-brand-primary"
                : "border-stone-600"
            }`}
          >
            {watchMedical === "no" && (
              <div className="w-1.5 h-1.5 rounded-full" />
            )}
          </div>
          <span className="text-xs font-mono font-bold uppercase">
            {t.noRemarks}
          </span>
        </label>

        {/* Option: Yes */}
        <label
          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center gap-3 ${
            watchMedical === "yes"
              ? "bg-red-950/20 border-brand-primary"
              : "border-stone-800 text-stone-400 hover:border-stone-700"
          }`}
        >
          <input
            {...register("hasMedicalCondition")}
            type="radio"
            value="yes"
            className="sr-only"
          />
          <div
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
              watchMedical === "yes"
                ? "border-brand-primary bg-brand-primary"
                : "border-stone-600"
            }`}
          >
            {watchMedical === "yes" && (
              <div className="w-1.5 h-1.5 rounded-full" />
            )}
          </div>
          <span className="text-xs font-mono font-bold uppercase">
            {t.yesRemarks}
          </span>
        </label>
      </div>

      {/* Conditional Extra Details */}
      {watchMedical === "yes" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="space-y-4 pt-2"
        >
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider mb-1">
              {t.detailsLabel}
            </label>
            <textarea
              {...register("medicalDetails")}
              rows={2}
              placeholder={t.detailsPlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-stone-800 placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
            />
            {errors.medicalDetails && (
              <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.medicalDetails.message as string}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider mb-1">
                {t.medicationsLabel}
              </label>
              <input
                {...register("medications")}
                type="text"
                placeholder={t.medicationsPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-stone-800 placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider mb-1">
                {t.allergiesLabel}
              </label>
              <input
                {...register("allergies")}
                type="text"
                placeholder={t.allergiesPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-stone-800 placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default MedicalSection;
