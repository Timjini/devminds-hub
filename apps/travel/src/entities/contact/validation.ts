import * as z from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  //   inquiryContext: z.enum([
  //     "General_Marketplace_Inquiry",
  //     "Host_Account_Space_Listing_Question",
  //     "Renter_Billing_Interval_Preference_Adjustment",
  //     "Trust_Safety_Insurance_Claims",
  //   ]),
  message: z.string().min(6, "Please Enter a Message"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
