"use client";

import { useDictionary } from "@/contexts";
import { AlertCircle, Camera, FileCheck, HeartPulse, User, Users } from "lucide-react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { OnboardingFormData, onboardingSchema } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useOnboarding } from "../hooks";


export const OnboardingForm = () => {
  const dict = useDictionary();
  const t = dict.onboardingForm;


  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<OnboardingFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(onboardingSchema) as any,
    defaultValues: {
      parentFullName: "",
      parentCin: "",
      parentPhone: "",
      parentAddress: "",
      childFullName: "",
      childBirthDate: new Date(),
      hasMedicalCondition: "no",
      medicalDetails: "",
      medications: "",
      allergies: "",
      mediaConsent: "full",
      agreeToTerms: false,
      signatureDate: new Date(),
    },
  });

  const watchMedical = useWatch({
    control,
    name: "hasMedicalCondition",
  });

  const options = [
    {
      id: "full",
      label: t.mediaConsent.options.full.label,
      desc: t.mediaConsent.options.full.desc,
    },
    {
      id: "whatsapp_only",
      label: t.mediaConsent.options.whatsapp_only.label,
      desc: t.mediaConsent.options.whatsapp_only.desc,
    },
    {
      id: "none",
      label: t.mediaConsent.options.none.label,
      desc: t.mediaConsent.options.none.desc,
    },
  ];



  const { mutateAsync, isPending } = useOnboarding();

  async function onSubmit(data: OnboardingFormData) {
      try {
        await mutateAsync(data);
        // reset();
      } catch (err) {
        alert("Failed to send message. Please try again.");
        console.error(err);
      }
    }

  // if (success) {
  //   return (
  //     <div className="text-center py-12 space-y-4">
  //       <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto">
  //         <CheckCircle2 className="w-10 h-10" />
  //       </div>
  //       <h2 className="text-2xl font-bold font-aldrich text-brand-text uppercase">
  //         {t?.successTitle}
  //       </h2>
  //       <p className="text-stone-400 text-sm max-w-md mx-auto">
  //         {t?.successMessage}
  //       </p>
  //     </div>
  //   );
  // }

  return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <section>
          {/* PARENT SECTION */}
          <div className="space-y-4">
            <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary border-b border-brand-text pb-2 flex items-center gap-2">
              <User className="w-5 h-5 text-brand-primary" />
              {t.guardianAthlete.parentTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider mb-1">
                  {t.guardianAthlete.parentFullNameLabel}
                </label>
                <input
                  {...register("parentFullName")}
                  type="text"
                  placeholder={t.guardianAthlete.parentFullNamePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white text-brand-text brand-border placeholder-stone-400 focus:border-brand-primary focus:outline-none transition-colors text-sm"
                  required
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
                  {t.guardianAthlete.parentCinLabel}
                </label>
                <input
                  {...register("parentCin")}
                  type="text"
                  placeholder={t.guardianAthlete.parentCinPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white text-brand-text brand-border placeholder-stone-400 focus:border-brand-primary focus:outline-none transition-colors text-sm uppercase"
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
                  {t.guardianAthlete.parentPhoneLabel}
                </label>
                <input
                  {...register("parentPhone")}
                  type="tel"
                  placeholder={t.guardianAthlete.parentPhonePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white text-brand-text brand-border placeholder-stone-400 focus:border-brand-primary focus:outline-none transition-colors text-sm"
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
                  {t.guardianAthlete.parentAddressLabel}
                </label>
                <input
                  {...register("parentAddress")}
                  type="text"
                  placeholder={t.guardianAthlete.parentAddressPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white text-brand-text brand-border placeholder-stone-400 focus:border-brand-primary focus:outline-none transition-colors text-sm"
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
            <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary border-b border-stone-800 pb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-brand-primary" />
              {t.guardianAthlete.childTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-xs font-mono uppercase tracking-wider mb-1">
                  {t.guardianAthlete.childFullNameLabel}
                </label>
                <input
                  {...register("childFullName")}
                  type="text"
                  placeholder={t.guardianAthlete.childFullNamePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white text-brand-text brand-border placeholder-stone-400 focus:border-brand-primary focus:outline-none transition-colors text-sm"
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
                  {t.guardianAthlete.childBirthDateLabel}
                </label>
                <input
                  {...register("childBirthDate")}
                  type="date"
                  min="2000-01-01"
                  className="w-full px-4 py-3 rounded-xl bg-white text-brand-text brand-border placeholder-stone-400 focus:border-brand-primary focus:outline-none transition-colors text-sm"
                />
                {errors.childBirthDate && (
                  <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.childBirthDate.message as string}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary border-b border-stone-800 pb-2 flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-brand-primary" />
            {t.healthStatus.title}
          </h3>

          <p className="text-xs leading-relaxed font-light">{t.healthStatus.description}</p>

          <div className="space-y-4 pt-2">
            <label className="block text-xs font-mono uppercase tracking-wider">
              {t.medicalSection.medicalRemarksLabel}
            </label>

            <div className="grid grid-cols-2 gap-4">
              {/* Option: No */}
              <label
                className={`p-4 rounded-2xl text-brand-text border-2 bg-white cursor-pointer transition-all flex items-center gap-3 ${
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
                  {t.medicalSection.noRemarks}
                </span>
              </label>

              {/* Option: Yes */}
              <label
                className={`p-4 rounded-2xl border-2 bg-white cursor-pointer transition-all flex items-center gap-3 ${
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
                <span className="text-xs font-mono font-bold uppercase text-brand-text">
                  {t.medicalSection.yesRemarks}
                </span>
              </label>
            </div>

            {watchMedical === "yes" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-4 pt-2"
              >
                <div>
                  <label className="block text-xs text-brand-text font-mono uppercase tracking-wider mb-1">
                    {t.medicalSection.detailsLabel}
                  </label>
                  <textarea
                    {...register("medicalDetails")}
                    rows={2}
                    placeholder={t.medicalSection.detailsPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white brand-border text-brand-text placeholder-stone-400 focus:border-brand-primary focus:outline-none transition-colors text-sm"
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
                      {t.medicalSection.medicationsLabel}
                    </label>
                    <input
                      {...register("medications")}
                      type="text"
                      placeholder={t.medicalSection.medicationsPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white text-brand-text brand-border placeholder-stone-400 focus:border-brand-primary focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-1">
                      {t.medicalSection.allergiesLabel}
                    </label>
                    <input
                      {...register("allergies")}
                      type="text"
                      placeholder={t.medicalSection.allergiesPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white text-brand-text brand-border placeholder-stone-400 focus:border-brand-primary focus:outline-none transition-colors text-sm"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
        <section>
          <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary border-b border-stone-800 pb-2 flex items-center gap-2">
            <Camera className="w-5 h-5 text-brand-primary" />
            {t.mediaConsent.title}
          </h3>

          <p className="text-xs leading-relaxed font-light">{t.mediaConsent.description}</p>

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
                          : "border-stone-800 text-stone-500 hover:border-stone-700"
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
                          <span className="block text-xs font-mono font-bold uppercase">
                            {option.label}
                          </span>
                          <span className="block text-[11px] text-stone-500 mt-1 font-light leading-snug">
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
              <p className="text-brand-primary-super-light text-xs mt-1 font-mono flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.mediaConsent.message as string}
              </p>
            )}
          </div>
        </section>
        <section>
          <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary border-b border-stone-800 pb-2 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-brand-primary" />
            {t.declaration.title}
          </h3>

          <div className="max-h-48 overflow-y-auto p-4 rounded-2xl brand-border text-xs  space-y-2 font-mono scrollbar-thin scrollbar-thumb-stone-800">
            <p className=" font-bold">{t.declaration.summaryHeader}</p>
            <ul className="list-disc pl-4 space-y-1 text-[11px]">
              {t.declaration.summaryItems.map((item: string, index: number) => (
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
              <span className="text-xs leading-normal">{t.declaration.agreeToTermsLabel}</span>
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
                  {t.declaration.signatureDateLabel}
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
                  {t.declaration.gymSignatureLabel}
                </label>
                <div className="px-4 py-3 rounded-xl brand-border/80 text-stone-400 text-xs font-mono">
                  {t.declaration.gymSignatory}
                </div>
              </div>
            </div>
          </div>
        </section>

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center gap-2 px-10 py-3 rounded-xl bg-brand-primary text-white font-aldrich font-bold uppercase tracking-wider hover:bg-brand-primary-light transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)] disabled:opacity-50 text-xs cursor-pointer"
        >
          {isPending ? (
            <span>{t?.navigation?.submitting}</span>
          ) : (
            <>
              {t?.navigation?.submit}
            </>
          )}
        </button>
      </form>
  );
};
