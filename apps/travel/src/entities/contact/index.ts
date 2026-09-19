export type ContactProps = {
  fullName: string;
  email: string;
  phone: string;
  inquiryContext?: Subjects;
  message: string;
};

type Subjects =
  | "General_Marketplace_Inquiry"
  | "Host_Account_Space_Listing_Question"
  | "Renter_Billing_Interval_Preference_Adjustment"
  | "Trust_Safety_Insurance_Claims";
