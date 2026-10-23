"use client";

import { useDictionary } from "@/contexts";
import { CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { OnboardingFormData } from "../model/schema";
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
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onSubmit = async (data: OnboardingFormData) => {
    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

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
        <h2 className="text-2xl font-bold font-aldrich text-brand-text uppercase">
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
      <form
        onSubmit={handleSubmit(
          onSubmit,
          (errors) => console.log("Validation errors on submit:", errors)
        )}
        className="space-y-8"
      >
        <GuardianAthlete />
        <HealthDisclosure />
        <MediaConsent />
        <Engagement />

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
      </form>
    </FormProvider>
  );
};
