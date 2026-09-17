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
  childBirthDate: z
    .string()
    .min(1, { message: "La date de naissance est obligatoire" }),
  childAge: z
    .number({ message: "L'âge doit être un nombre" })
    .min(4, { message: "L'âge minimum est de 4 ans" })
    .max(17, { message: "L'adhésion mineur concerne les moins de 18 ans" }),

  // Medical Details
  hasMedicalCondition: z.enum(["no", "yes"]),
  medicalDetails: z.string().optional(),
  medications: z.string().optional(),
  allergies: z.string().optional(),

  // Media Consent
  mediaConsent: z.enum(["full", "whatsapp_only", "none"]),

  // Contract Declarations
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter les termes du contrat",
  }),
  signatureDate: z.string().min(1, { message: "Date de signature requise" }),
});
// .refine(
//   (data: unknown) => {
//     if (data?.hasMedicalCondition === "yes") {
//       return !!data?.medicalDetails && data?.medicalDetails.trim().length > 2;
//     }
//     return true;
//   },
//   {
//     message: "Veuillez préciser la condition médicale de l'enfant",
//     path: ["medicalDetails"],
//   },
// );

export type OnboardingFormData = z.infer<typeof onboardingSchema>;
