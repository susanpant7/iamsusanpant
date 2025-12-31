import { motion } from "framer-motion";

export const GlassCard = ({ children, className = "", hover = true }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={
      hover ? { y: -5, backgroundColor: "rgba(255,255,255,0.04)" } : {}
    }
    className={`p-8 rounded-[2.5rem] border border-white/10 bg-white/2 backdrop-blur-md transition-all shadow-2xl ${className}`}
  >
    {children}
  </motion.div>
);
