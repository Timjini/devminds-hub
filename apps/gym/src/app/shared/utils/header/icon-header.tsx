import { motion } from "framer-motion";

interface IconHeaderProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IconHeader: React.FC<IconHeaderProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-4 max-w-3xl mx-auto"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-600/30 bg-red-950/20 text-red-500 font-mono text-xs uppercase tracking-widest">
        {icon}
        <span>KBM Gym Weekly Program</span>
      </div>
      <h2 className="text-4xl sm:text-6xl font-black font-aldrich uppercase italic tracking-tight">
        {title}
      </h2>
      <p className="text-stone-400 text-sm md:text-base font-light">
        {description}
      </p>
    </motion.div>
  );
};

export default IconHeader;
