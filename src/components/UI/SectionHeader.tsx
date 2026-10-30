import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  icon: LucideIcon;
  label: string;
  title: string;
  highlightedWord: string;
  className?: string;
}

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Section = ({
  children,
  id,
  className = "",
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`relative w-full min-h-screen pt-24 pb-5 px-6 md:px-12 flex flex-col items-center overflow-hidden ${className}`}
    >
      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export const SectionHeader = ({
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
        className="inline-flex items-center gap-2 sk-brass px-3 py-1 !rounded-md font-sans tracking-[0.1em] text-sm font-bold uppercase mb-4 "
      >
        <Icon size={14} /> {label}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold sk-emboss tracking-tight"
      >
        {title} {highlightedWord}
      </motion.h2>
    </div>
  );
};

export default SectionHeader;
