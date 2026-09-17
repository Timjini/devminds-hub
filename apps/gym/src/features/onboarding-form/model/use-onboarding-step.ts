"use client";

import { useDictionary } from "@/contexts";
import { useState } from "react";
import { UseFormTrigger } from "react-hook-form";
import { OnboardingFormData } from "../model/schema";

export interface StepConfig {
  id: number;
  fields: (keyof OnboardingFormData)[];
}

const STEPS_CONFIG: StepConfig[] = [
  {
    id: 1,
    fields: [
      "parentFullName",
      "parentCin",
      "parentPhone",
      "parentAddress",
      "childFullName",
      "childBirthDate",
      "childAge",
    ],
  },
  {
    id: 2,
    fields: [
      "hasMedicalCondition",
      "medicalDetails",
      "medications",
      "allergies",
    ],
  },
  {
    id: 3,
    fields: ["mediaConsent"],
  },
  {
    id: 4,
    fields: ["agreeToTerms", "signatureDate"],
  },
];

export function useOnboardingSteps(
  trigger: UseFormTrigger<OnboardingFormData>,
) {
  const [step, setStep] = useState<number>(1);
  const dict = useDictionary();
  const totalSteps = STEPS_CONFIG.length;

  const nextStep = async () => {
    const currentStepConfig = STEPS_CONFIG.find((s) => s.id === step);
    if (!currentStepConfig) return;

    const isValid = await trigger(currentStepConfig.fields);
    if (isValid) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToStep = (stepNumber: number) => {
    if (stepNumber >= 1 && stepNumber <= totalSteps) {
      setStep(stepNumber);
    }
  };

  return {
    step,
    totalSteps,
    isFirstStep: step === 1,
    isLastStep: step === totalSteps,
    nextStep,
    prevStep,
    goToStep,
  };
}
