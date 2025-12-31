import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon: LucideIcon;
  label: string;
  title: string;
  highlightedWord: string;
  className?: string;
}

const SectionHeader = ({
  icon: Icon,
  label,
  title,
  highlightedWord,
  className = "mb-20",
}: SectionHeaderProps) => {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 text-blue-500 font-mono tracking-[0.3em] text-xs uppercase mb-3"
      >
        <Icon size={14} /> {label}
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase"
      >
        {title}{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
          {highlightedWord}
        </span>
      </motion.h2>
    </div>
  );
};

export default SectionHeader;