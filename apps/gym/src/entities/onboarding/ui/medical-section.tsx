"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import {
    Control,
    FieldErrors,
    FieldValues,
    Path,
    UseFormRegister,
    useWatch,
} from "react-hook-form";

interface MedicalSectionProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
}

export function MedicalSection<TFieldValues extends FieldValues>({
  control,
  register,
  errors,
}: MedicalSectionProps<TFieldValues>) {
  const watchMedical = useWatch({
    control,
    name: "hasMedicalCondition" as Path<TFieldValues>,
  });

  return (
    <div className="space-y-4 pt-2">
      <label className="block text-xs font-mono uppercase tracking-wider">
        Remarques médicales particulières ? *
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
            {...register("hasMedicalCondition" as Path<TFieldValues>)}
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
            Aucune remarque
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
            {...register("hasMedicalCondition" as Path<TFieldValues>)}
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
            Oui (À préciser)
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
              Précisions sur la condition médicale *
            </label>
            <textarea
              {...register("medicalDetails" as Path<TFieldValues>)}
              rows={2}
              placeholder="ex: Asthme d'effort, problème d'articulation..."
              className="w-full px-4 py-3 rounded-xl border border-stone-800 placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
            />
            {errors.medicalDetails && (
              <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />{" "}
                {errors.medicalDetails.message as string}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider mb-1">
                Médicaments ou traitement à signaler
              </label>
              <input
                {...register("medications" as Path<TFieldValues>)}
                type="text"
                placeholder="ex: Inhalateur de Ventoline"
                className="w-full px-4 py-3 rounded-xl border border-stone-800 placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider mb-1">
                Allergies
              </label>
              <input
                {...register("allergies" as Path<TFieldValues>)}
                type="text"
                placeholder="ex: Allergie à la poussière"
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
