export interface Onboarding {
  parentFullName: string;
  parentCin: string,
  parentPhone: string,
  parentAddress: string,
  childFullName: string,
  childBirthDate: Date,
  hasMedicalCondition: string,
  medicalDetails?: string,
  medications?: string,
  allergies?: string,
  mediaConsent: string,
  agreeToTerms: boolean,
  signatureDate: Date,
}
