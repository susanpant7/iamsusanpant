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
  dotGrid?: boolean; // Optional: adds a subtle tech-grid background
}

export const Section = ({
  children,
  id,
  className = "",
  dotGrid = false,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`relative w-full min-h-screen py-24 px-6 md:px-12 flex flex-col items-center overflow-hidden bg-transparent ${className}`}
    >
      {/* Subtle Background Glow - Follows your Navy Root Theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Optional Tech Dot Grid */}
      {dotGrid && (
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      )}

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
