"use client";

import { useDictionary } from "@/contexts";
import { AnimatePresence } from "framer-motion";
import {
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    Sparkles,
} from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { OnboardingFormData } from "../model/schema";
import { useOnboardingSteps } from "../model/use-onboarding-step";
import { Engagement } from "./engagement";
import { GuardianAthlete } from "./guardian-athlete";
import { HealthDisclosure } from "./health-disclosure";
import { MediaConsent } from "./media-consent";

export const OnboardingForm = () => {
  const dict = useDictionary();
  const t = dict.onboardingForm;

  const methods = useForm<OnboardingFormData>({
    mode: "onBlur",
    defaultValues: {
      parentFullName: "",
      parentCin: "",
      parentPhone: "",
      parentAddress: "",
      childFullName: "",
      childBirthDate: "",
      childAge: 6,
      hasMedicalCondition: "no",
      medicalDetails: "",
      medications: "",
      allergies: "",
      mediaConsent: "full",
      agreeToTerms: false,
      signatureDate: new Date().toISOString().split("T")[0],
    },
  });

  const {
    trigger,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { step, isFirstStep, isLastStep, nextStep, prevStep } =
    useOnboardingSteps(trigger);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onSubmit = async (data: OnboardingFormData) => {
    try {
      console.log("Form Submitted Successfully:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold font-aldrich text-stone-100 uppercase">
          {t?.successTitle}
        </h2>
        <p className="text-stone-400 text-sm max-w-md mx-auto">
          {t?.successMessage}
        </p>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <AnimatePresence mode="wait">
          {step === 1 && <GuardianAthlete key="step1" />}
          {step === 2 && <HealthDisclosure key="step2" />}
          {step === 3 && <MediaConsent key="step3" />}
          {step === 4 && <Engagement key="step4" />}
        </AnimatePresence>

        <div className="flex items-center justify-between pt-6 border-t border-stone-800">
          {!isFirstStep ? (
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl brand-border text-stone-300 hover:border-stone-700 font-aldrich text-xs font-bold uppercase tracking-wider transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              {t?.navigation?.previous}
            </button>
          ) : (
            <div />
          )}

          {!isLastStep ? (
            <button
              type="button"
              onClick={nextStep}
              className="text-white inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-brand-primary font-aldrich font-bold uppercase tracking-wider hover:bg-brand-primary-light transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] text-xs"
            >
              {t?.navigation?.next} <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-10 py-3 rounded-xl bg-brand-primary text-white font-aldrich font-bold uppercase tracking-wider hover:bg-brand-primary-light transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)] disabled:opacity-50 text-xs cursor-pointer"
            >
              {isSubmitting ? (
                <span>{t?.navigation?.submitting}</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  {t?.navigation?.submit}
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
