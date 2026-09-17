import { useDictionary } from "@/contexts";
import { motion } from "framer-motion";
import { AlertCircle, User, Users } from "lucide-react";
import { useFormContext } from "react-hook-form";

export const GuardianAthlete = () => {
  const dict = useDictionary();
  const t = dict.onboardingForm.guardianAthlete;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      {/* PARENT SECTION */}
      <div className="space-y-4">
        <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary-light border-b border-brand-text pb-2 flex items-center gap-2">
          <User className="w-5 h-5 text-brand-primary-light" />
          {t.parentTitle}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider mb-1">
              {t.parentFullNameLabel}
            </label>
            <input
              {...register("parentFullName")}
              type="text"
              placeholder={t.parentFullNamePlaceholder}
              className="w-full px-4 py-3 rounded-xl brand-border placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
            />
            {errors.parentFullName && (
              <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.parentFullName.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider mb-1">
              {t.parentCinLabel}
            </label>
            <input
              {...register("parentCin")}
              type="text"
              placeholder={t.parentCinPlaceholder}
              className="w-full px-4 py-3 rounded-xl brand-border placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm uppercase"
            />
            {errors.parentCin && (
              <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.parentCin.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider mb-1">
              {t.parentPhoneLabel}
            </label>
            <input
              {...register("parentPhone")}
              type="tel"
              placeholder={t.parentPhonePlaceholder}
              className="w-full px-4 py-3 rounded-xl brand-border placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
            />
            {errors.parentPhone && (
              <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.parentPhone.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider mb-1">
              {t.parentAddressLabel}
            </label>
            <input
              {...register("parentAddress")}
              type="text"
              placeholder={t.parentAddressPlaceholder}
              className="w-full px-4 py-3 rounded-xl brand-border placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
            />
            {errors.parentAddress && (
              <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.parentAddress.message as string}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* CHILD SECTION */}
      <div className="space-y-4 pt-4">
        <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary-light border-b border-stone-800 pb-2 flex items-center gap-2">
          <Users className="w-5 h-5 text-brand-primary-light" />
          {t.childTitle}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-1">
            <label className="block text-xs font-mono uppercase tracking-wider mb-1">
              {t.childFullNameLabel}
            </label>
            <input
              {...register("childFullName")}
              type="text"
              placeholder={t.childFullNamePlaceholder}
              className="w-full px-4 py-3 rounded-xl brand-border placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
            />
            {errors.childFullName && (
              <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.childFullName.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider mb-1">
              {t.childBirthDateLabel}
            </label>
            <input
              {...register("childBirthDate")}
              type="date"
              className="w-full px-4 py-3 rounded-xl brand-border placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
            />
            {errors.childBirthDate && (
              <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.childBirthDate.message as string}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider mb-1">
              {t.childAgeLabel}
            </label>
            <input
              {...register("childAge", { valueAsNumber: true })}
              type="number"
              placeholder={t.childAgePlaceholder}
              className="w-full px-4 py-3 rounded-xl brand-border placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
            />
            {errors.childAge && (
              <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.childAge.message as string}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
