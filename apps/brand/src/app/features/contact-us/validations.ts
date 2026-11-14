import { PURPOSE_OPTIONS } from "./types";
import { z } from 'zod';

export const contactFormSchema = z.object({
  purpose: z.enum([
      "Infrastructure & Hosting",
      "Domain & DNS Management",
      "Business Email Setup",
      "CRM Integration (Chatwoot / Mailcow)",
      "Full Startup Launch Stack",
      "General Inquiry"
    ]).or(z.literal('')),
  name: z
    .string()
    .trim()
    .min(2, 'NAME MUST BE AT LEAST 2 CHARACTERS.')
    .max(100, 'NAME MUST BE UNDER 100 CHARACTERS.'),
  email: z
    .string()
    .trim()
    .min(1, 'WORK EMAIL IS REQUIRED.')
    .email('ENTER A VALID EMAIL ADDRESS (E.G. FOUNDER@STARTUP.IO).'),
  phone: z
    .string()
    .trim()
    .min(7, 'ENTER A VALID PHONE NUMBER (MIN 7 DIGITS).')
    .max(25, 'PHONE NUMBER IS TOO LONG.')
    .regex(/^[+()0-9\s-]+$/, 'PHONE NUMBER MAY ONLY CONTAIN DIGITS, +, -, ( ).'),
  message: z
    .string()
    .trim()
    .min(10, 'PROJECT BRIEF MUST BE AT LEAST 10 CHARACTERS.')
    .max(2000, 'PROJECT BRIEF MUST BE UNDER 2000 CHARACTERS.'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
