import { useDictionary } from "@/contexts";
import { MedicalSection } from "@/entities/onboarding/ui/medical-section";
import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";

export const HealthDisclosure = () => {
  const dict = useDictionary();
  const t = dict.onboardingForm.healthStatus;

  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h3 className="font-aldrich text-lg font-bold uppercase text-brand-primary-light border-b border-stone-800 pb-2 flex items-center gap-2">
        <HeartPulse className="w-5 h-5 text-brand-primary-light" />
        {t.title}
      </h3>

      <p className="text-xs leading-relaxed font-light">{t.description}</p>

      <MedicalSection />
    </motion.div>
  );
};
