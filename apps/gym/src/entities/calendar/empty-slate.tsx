import { motion } from "framer-motion";
import { CalendarIcon } from "lucide-react";

const EmptySlate = ({ description }: { description: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-16 text-stone-500 space-y-3 bg-stone-900/40 rounded-2xl border border-dashed border-stone-800"
    >
      <CalendarIcon className="w-10 h-10 text-stone-600" />
      <p className="font-mono text-sm">
        {/* {isRtl
          ? "لا توجد حصص رياضية مبرمجة لليوم المحدد."
          : "No classes scheduled for this day or filter."} */}
        {description}
      </p>
    </motion.div>
  );
};

export default EmptySlate;
