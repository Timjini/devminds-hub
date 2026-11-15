import { ContactFormValues } from "./validations";

export const PURPOSE_OPTIONS = [
  'Infrastructure & Hosting',
  'Domain & DNS Management',
  'Business Email Setup',
  'CRM Integration (Chatwoot / Mailcow)',
  'Full Startup Launch Stack',
  'General Inquiry',
] as const;


export type ContactPurpose = (typeof PURPOSE_OPTIONS)[number];

export interface ContactApiResponse {
  id: string;
  receivedAt: string;
  status: 'accepted';
  data: ContactFormValues;
  simulated?: boolean;
}

export interface ContactFormProps {
  // contactForm: UseContactFormReturn;
  purposeOptions?: string[];
}

export interface Contact {
  email: string;
  phone: string;
  message: string;
  purpose: string;
  fullName: string;
}
