import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  action: () => void;
  htmlContent: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({ action, htmlContent }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={action}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-stone-950 border-2 border-red-600 rounded-2xl p-6 sm:p-8 text-stone-100 shadow-[0_0_50px_rgba(220,38,38,0.3)] space-y-6"
        >
          {/* Close Button */}
          <button
            onClick={action}
            className="absolute top-4 right-4 p-2 rounded-full bg-stone-900 text-stone-400 hover:text-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {htmlContent}
          <button
            onClick={action}
            className="w-full py-3 rounded-xl bg-red-600 text-stone-950 font-aldrich font-bold uppercase tracking-wider hover:bg-red-500 transition-colors"
          >
            Close Details
          </button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomModal;
