"use client";

import { ContractHeader } from "@/app/shared/ui/header/contract-header";
import { gymData } from "@/data/main";
import { MedicalSection } from "@/entities/onboarding/ui/medical-section";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
    AlertCircle,
    Camera,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    FileCheck,
    HeartPulse,
    Sparkles,
    User,
    Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

// ==========================================
// 1. ZOD VALIDATION SCHEMA
// ==========================================
const onboardingSchema = z.object({
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

type OnboardingFormData = z.infer<typeof onboardingSchema>;

// ==========================================
// 2. MAIN ONBOARDING COMPONENT
// ==========================================
export default function OnboardingPage() {
  // const dict = useDictionary();
  // const lang = useLanguage();

  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Today's date default
  const todayStr = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    watch,
    control,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      hasMedicalCondition: "no",
      mediaConsent: "full",
      signatureDate: todayStr,
      agreeToTerms: false,
    },
    mode: "onTouched",
  });

  // Step Validation logic before stepping forward
  const nextStep = async () => {
    let fieldsToValidate: (keyof OnboardingFormData)[] = [];
    if (step === 1) {
      fieldsToValidate = [
        "parentFullName",
        "parentCin",
        "parentPhone",
        "parentAddress",
        "childFullName",
        "childBirthDate",
        "childAge",
      ];
    } else if (step === 2) {
      fieldsToValidate = [
        "hasMedicalCondition",
        "medicalDetails",
        "medications",
        "allergies",
      ];
    } else if (step === 3) {
      fieldsToValidate = ["mediaConsent"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: OnboardingFormData) => {
    // Submit handler
    console.log("Form Submitted Successfully:", data);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen   font-sans selection:bg-brand-primary selection:text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-brand-primary/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
      <ContractHeader
        img={gymData.logo}
        title="KBM GYM"
        tag="Saison Sportive 2026 / 2027"
      />
      <div className="max-w-5xl mx-auto relative z-10">
        {/* CONTRACT HEADER / BRANDING */}

        {/* PRICING OFFER CARD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="relative p-5 rounded-2xl brand-primary-light/90 border-2 border-brand-primary shadow-[0_0_25px_rgba(220,38,38,0.2)] flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-primary  text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
              Offre Spéciale
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider  block mb-1">
                Jusqu'au 30 Septembre 2026
              </span>
              <div className="text-3xl font-black font-aldrich ">
                2 000{" "}
                <span className="text-brand-primary-light text-xl font-sans">
                  DH / An
                </span>
              </div>
            </div>
            <p className="text-[11px]  mt-2 font-mono">
              Inscriptions anticipées pour la saison 2026/2027.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/50 border border-stone-800 flex flex-col justify-between opacity-40 grayscale select-none pointer-events-none relative overflow-hidden">
            {/* Disabled Badge */}
            <div className="absolute top-3 right-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-stone-800 text-stone-200 border border-stone-700/50">
                Indisponible
              </span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider block mb-1 text-stone-500 line-through decoration-stone-600">
                À partir du 1er Octobre 2026
              </span>
              <div className="text-3xl font-black font-aldrich ">
                2 500{" "}
                <span className="text-xl font-sans text-stone-600">
                  DH / An
                </span>
              </div>
            </div>

            <p className="text-[11px] mt-2 font-mono text-stone-600">
              Tarif standard sans réduction.
            </p>
          </div>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 sm:p-12 rounded-3xl brand-primary-light/90 border-2 border-brand-primary text-center space-y-6 shadow-[0_0_50px_rgba(220,38,38,0.3)]"
          >
            <div className="w-20 h-20 bg-brand-primary/20 text-brand-primary-light rounded-full flex items-center justify-center mx-auto border-2 border-brand-primary animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-black font-aldrich uppercase ">
                Contrat Validé avec Succès !
              </h3>
              <p className=" text-sm max-w-lg mx-auto">
                Merci. L'inscription de votre enfant au club **KBM GYM AGADIR**
                est enregistrée pour la saison 2026/2027. Notre équipe vous
                contactera sous peu.
              </p>
            </div>
            <div className="p-4 rounded-xl  brand-border text-xs font-mono text-stone-400 inline-block">
              Responsable : Coach Issam • Tél : 0700110910
            </div>
            <div>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-brand-primary text-brand-text font-aldrich font-bold uppercase tracking-wider hover:bg-brand-primary-light transition-all shadow-lg"
              >
                Retour à l'accueil
              </Link>
            </div>
          </motion.div>
        ) : (
          /* MULTI-STEP FORM CARD */
          <div className=" backdrop-blur-xl brand-border rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            {/* STEP PROGRESS BAR */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-3 uppercase tracking-wider">
                <span
                  className={
                    step >= 1 ? "text-brand-primary-light font-bold" : ""
                  }
                >
                  1. Tuteur & Enfant
                </span>
                <span
                  className={
                    step >= 2 ? "text-brand-primary-light font-bold" : ""
                  }
                >
                  2. Santé
                </span>
                <span
                  className={
                    step >= 3 ? "text-brand-primary-light font-bold" : ""
                  }
                >
                  3. Médias
                </span>
                <span
                  className={
                    step >= 4 ? "text-brand-primary-light font-bold" : ""
                  }
                >
                  4. Engagement
                </span>
              </div>
              <div className="w-full h-2  rounded-full overflow-hidden brand-border">
                <motion.div
                  className="h-full bg-brand-primary"
                  initial={{ width: "25%" }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <AnimatePresence mode="wait">
                {/* STEP 1: PARENT & CHILD INFORMATION */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    {/* PARENT SECTION */}
                    <div className="space-y-4">
                      <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary-light border-b border-brand-text pb-2 flex items-center gap-2">
                        <User className="w-5 h-5 text-brand-primary-light" />
                        2. Informations du Parent / Tuteur Légal
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider  mb-1">
                            Nom et prénom du parent *
                          </label>
                          <input
                            {...register("parentFullName")}
                            type="text"
                            placeholder="ex: Mohamed Alami"
                            className="w-full px-4 py-3 rounded-xl  border border-stone-800  placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
                          />
                          {errors.parentFullName && (
                            <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />{" "}
                              {errors.parentFullName.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider  mb-1">
                            N° de CIN *
                          </label>
                          <input
                            {...register("parentCin")}
                            type="text"
                            placeholder="ex: JM123456"
                            className="w-full px-4 py-3 rounded-xl  border border-stone-800  placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm uppercase"
                          />
                          {errors.parentCin && (
                            <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />{" "}
                              {errors.parentCin.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider  mb-1">
                            Téléphone *
                          </label>
                          <input
                            {...register("parentPhone")}
                            type="tel"
                            placeholder="0600000000"
                            className="w-full px-4 py-3 rounded-xl  border border-stone-800  placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
                          />
                          {errors.parentPhone && (
                            <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />{" "}
                              {errors.parentPhone.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider  mb-1">
                            Adresse résidentielle *
                          </label>
                          <input
                            {...register("parentAddress")}
                            type="text"
                            placeholder="ex: Quartier Tilila, Agadir"
                            className="w-full px-4 py-3 rounded-xl  border border-stone-800  placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
                          />
                          {errors.parentAddress && (
                            <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />{" "}
                              {errors.parentAddress.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* CHILD SECTION */}
                    <div className="space-y-4 pt-4">
                      <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary-light border-b border-stone-800 pb-2 flex items-center gap-2">
                        <Users className="w-5 h-5 text-brand-primary-light" />
                        3. Informations de l'Enfant
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="sm:col-span-1 sm:col-span-1">
                          <label className="block text-xs font-mono uppercase tracking-wider  mb-1">
                            Nom et prénom de l'enfant *
                          </label>
                          <input
                            {...register("childFullName")}
                            type="text"
                            placeholder="ex: Youssef Alami"
                            className="w-full px-4 py-3 rounded-xl  border border-stone-800  placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
                          />
                          {errors.childFullName && (
                            <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />{" "}
                              {errors.childFullName.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider  mb-1">
                            Date de naissance *
                          </label>
                          <input
                            {...register("childBirthDate")}
                            type="date"
                            className="w-full px-4 py-3 rounded-xl  border border-stone-800  placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
                          />
                          {errors.childBirthDate && (
                            <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />{" "}
                              {errors.childBirthDate.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider  mb-1">
                            Âge (Ans) *
                          </label>
                          <input
                            {...register("childAge", { valueAsNumber: true })}
                            type="number"
                            placeholder="ex: 10"
                            className="w-full px-4 py-3 rounded-xl  border border-stone-800  placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
                          />
                          {errors.childAge && (
                            <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />{" "}
                              {errors.childAge.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary-light border-b border-stone-800 pb-2 flex items-center gap-2">
                      <HeartPulse className="w-5 h-5 text-brand-primary-light" />
                      ARTICLE 5 : État de Santé de l'Enfant
                    </h3>

                    <p className=" text-xs leading-relaxed font-light">
                      Le parent/tuteur déclare que l’enfant est apte à pratiquer
                      des activités sportives et s’engage à informer la
                      direction de KBM GYM AGADIR de toute information médicale
                      importante pouvant affecter la sécurité de l’enfant.
                    </p>

                    <MedicalSection
                      control={control}
                      register={register}
                      errors={errors}
                    />
                  </motion.div>
                )}

                {/* STEP 3: MEDIA CONSENT */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary-light border-b border-stone-800 pb-2 flex items-center gap-2">
                      <Camera className="w-5 h-5 text-brand-primary-light" />
                      ARTICLE 11 : Photos et Vidéos
                    </h3>

                    <p className=" text-xs leading-relaxed font-light">
                      KBM GYM AGADIR peut prendre des photos/vidéos durant les
                      cours et événements pour le suivi des parents et la
                      promotion sportive. Veuillez indiquer votre niveau
                      d'autorisation :
                    </p>

                    <div className="space-y-3 pt-2">
                      <Controller
                        name="mediaConsent"
                        control={control}
                        render={({ field }) => (
                          <>
                            {[
                              {
                                id: "full",
                                label:
                                  "Autorisation Complète (Groupe WhatsApp + Réseaux & Site Web)",
                                desc: "J'autorise la prise et l'utilisation des photos/vidéos pour le groupe WhatsApp et la promotion sportive générale de KBM GYM.",
                              },
                              {
                                id: "whatsapp_only",
                                label: "Groupe WhatsApp Uniquement",
                                desc: "J'autorise uniquement le partage dans le groupe privé des parents. Pas de publication publique.",
                              },
                              {
                                id: "none",
                                label: "Refus Total",
                                desc: "Je n'autorise pas la prise ni le partage de photos et vidéos de mon enfant.",
                              },
                            ].map((option) => (
                              <label
                                key={option.id}
                                className={`p-4 rounded-2xl border-2 cursor-pointer transition-all block ${
                                  field.value === option.id
                                    ? "bg-red-950/20 border-brand-primary "
                                    : " border-stone-800 text-stone-400 hover:border-stone-700"
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <input
                                    type="radio"
                                    value={option.id}
                                    checked={field.value === option.id}
                                    onChange={() => field.onChange(option.id)}
                                    className="sr-only"
                                  />
                                  <div
                                    className={`w-4 h-4 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center ${
                                      field.value === option.id
                                        ? "border-brand-primary bg-brand-primary"
                                        : "border-stone-600"
                                    }`}
                                  >
                                    {field.value === option.id && (
                                      <div className="w-1.5 h-1.5 rounded-full " />
                                    )}
                                  </div>
                                  <div>
                                    <span className="block text-xs font-mono font-bold uppercase text-stone-200">
                                      {option.label}
                                    </span>
                                    <span className="block text-[11px] text-stone-400 mt-1 font-light leading-snug">
                                      {option.desc}
                                    </span>
                                  </div>
                                </div>
                              </label>
                            ))}
                          </>
                        )}
                      />
                      {errors.mediaConsent && (
                        <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />{" "}
                          {errors.mediaConsent.message}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: CONTRACT TERMS & SIGNATURE */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary-light border-b border-stone-800 pb-2 flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-brand-primary-light" />
                      ARTICLE 14 : Déclaration et Signature
                    </h3>

                    <div className="max-h-48 overflow-y-auto p-4 rounded-2xl  border border-stone-800 text-xs text-stone-400 space-y-2 font-mono scrollbar-thin scrollbar-thumb-stone-800">
                      <p className="text-stone-200 font-bold">
                        En signant le présent contrat, le parent/tuteur
                        reconnaît avoir :
                      </p>
                      <ul className="list-disc pl-4 space-y-1 text-[11px]">
                        <li>
                          Lu et compris l’ensemble des clauses du contrat
                          (Articles 1 à 13).
                        </li>
                        <li>
                          Pris connaissance que l'adhésion est exclusivement
                          annuelle pour la saison 2026/2027.
                        </li>
                        <li>
                          Accepté le règlement intérieur, la discipline et le
                          respect des horaires (retard &gt; 15 min non admis).
                        </li>
                        <li>
                          Fourni des informations exactes concernant l’enfant et
                          son état de santé.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4 pt-2">
                      <label className="flex items-start gap-3 p-4 rounded-2xl border border-stone-800 cursor-pointer hover:border-stone-700 transition-colors">
                        <input
                          {...register("agreeToTerms")}
                          type="checkbox"
                          className="w-5 h-5 rounded border-stone-700 brand-primary-light text-brand-primary focus:ring-brand-primary accent-brand-primary mt-0.5"
                        />
                        <span className="text-xs  leading-normal">
                          Je confirme avoir lu, compris et accepté l'ensemble
                          des termes et conditions du présent contrat d'adhésion
                          annuelle. *
                        </span>
                      </label>
                      {errors.agreeToTerms && (
                        <p className="text-brand-primary-light text-xs font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />{" "}
                          {errors.agreeToTerms.message}
                        </p>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider  mb-1">
                            Fait à Agadir, le : *
                          </label>
                          <input
                            {...register("signatureDate")}
                            type="date"
                            className="w-full px-4 py-3 rounded-xl  border border-stone-800  placeholder-stone-600 focus:border-brand-primary focus:outline-none transition-colors text-sm"
                          />
                          {errors.signatureDate && (
                            <p className="text-brand-primary-light text-xs mt-1 font-mono flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />{" "}
                              {errors.signatureDate.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                            Pour KBM GYM AGADIR
                          </label>
                          <div className="px-4 py-3 rounded-xl /50 border border-stone-800/80 text-stone-400 text-xs font-mono">
                            Coach Issam (Signature & Cachet)
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* NAVIGATION BUTTONS */}
              <div className="flex items-center justify-between pt-6 border-t border-stone-800">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl brand-primary-light  hover: border border-stone-800 hover:border-stone-700 font-aldrich text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" /> Précédent
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="text-white inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-brand-primary text-brand-text font-aldrich font-bold uppercase tracking-wider hover:bg-brand-primary-light transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                  >
                    Suivant <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-10 py-3 rounded-xl bg-brand-primary text-brand-text font-aldrich font-bold uppercase tracking-wider hover:bg-brand-primary-light transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Validation en cours...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" /> Signer & Valider Le
                        Contrat
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* FOOTER INFO */}
        <div className="mt-8 text-center text-xs text-stone-500 font-mono">
          KBM GYM AGADIR • Coach Issam • Tél : 0700110910 • Agadir, Morocco
        </div>
      </div>
    </div>
  );
}
