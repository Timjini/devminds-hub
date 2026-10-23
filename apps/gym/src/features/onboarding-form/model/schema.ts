import { calculatePermittedAge } from "@/utils/calculate-permitted-age";
import { z } from "zod";

export const onboardingSchema = z.object({
  // Parent / Guardian Details
  parentFullName: z.string().min(3, {
    message: "Le nom du parent doit comporter au moins 3 caractères",
  }),
  parentCin: z.string().min(4, { message: "N° CIN invalide" }),
  parentPhone: z.string().regex(/^(?:\+212|0)[5-7]\d{8}$/, {
    message: "Numéro de téléphone marocain invalide (+212... ou 06...)",
  }),
  parentAddress: z.string().min(5, { message: "L'adresse doit être précisée" }),

  // Child Details
  childFullName: z.string().min(3, {
    message: "Le nom de l'enfant doit comporter au moins 3 caractères",
  }),
  childBirthDate: z.coerce.date().refine(
    (date) => calculatePermittedAge({ date }),
    { message: "Child must be between 5 and 20 years old." }
  ),
  // Medical Details
  hasMedicalCondition: z.enum(["no", "yes"]),
  medicalDetails: z.string().optional(),
  medications: z.string().optional(),
  allergies: z.string().optional(),

  // Media Consent
  mediaConsent: z.enum(["full", "whatsapp_only", "none"]),
  signatureDate: z.coerce.date(),
  agreeToTerms: z.boolean()
});


export type OnboardingFormData = z.infer<typeof onboardingSchema>;
