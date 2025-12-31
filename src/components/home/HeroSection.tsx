import { useRef, useEffect } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Webhook,
  Globe,
  Terminal,
  Layout,
} from "lucide-react";

import developerBg from "../../assets/web-dev-1.png";

/* ---------------------------------------------
   Floating Icon Component
---------------------------------------------- */
const FloatingIcon = ({
  Icon,
  top,
  left,
  delay,
  color,
  glow,
}: {
  Icon: any;
  top: string;
  left: string;
  delay: number;
  color: string;
  glow: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{
      opacity: [0.6, 1, 0.6],
      y: [0, -28, 0],
      rotate: [0, 8, -8, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{ top, left, translateX: "-50%", translateY: "-50%" }}
    className={`absolute hidden md:block z-20 ${color}`}
  >
    <Icon
      size={44}
      strokeWidth={1.5}
      className="relative z-10 drop-shadow-[0_0_18px_currentColor]"
    />
    <div
      className={`absolute inset-0 rounded-full blur-2xl opacity-25 animate-pulse ${glow}`}
    />
  </motion.div>
);

/* ---------------------------------------------
   Floating Icons Config
---------------------------------------------- */
const FLOATING_ICONS = [
  { Icon: Code2, top: "22%", left: "50%", color: "text-blue-400", glow: "bg-blue-500", delay: 0 },

  { Icon: Monitor, top: "35%", left: "12%", color: "text-cyan-400", glow: "bg-cyan-500", delay: 0.4 },
  { Icon: Server, top: "55%", left: "10%", color: "text-emerald-400", glow: "bg-emerald-500", delay: 0.8 },
  { Icon: Database, top: "75%", left: "14%", color: "text-indigo-400", glow: "bg-indigo-500", delay: 1.2 },

  { Icon: Webhook, top: "35%", left: "88%", color: "text-yellow-400", glow: "bg-yellow-500", delay: 0.6 },
  { Icon: Globe, top: "55%", left: "90%", color: "text-sky-400", glow: "bg-sky-500", delay: 1.0 },
  { Icon: Terminal, top: "75%", left: "86%", color: "text-rose-400", glow: "bg-rose-500", delay: 1.4 },

  { Icon: Layout, top: "88%", left: "50%", color: "text-purple-400", glow: "bg-purple-500", delay: 0.9 },
];

/* ---------------------------------------------
   Hero Section
---------------------------------------------- */
const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Mouse Parallax */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const spring = { damping: 30, stiffness: 120 };

  const textX = useSpring(useTransform(mouseX, [0, 1], [20, -20]), spring);
  const textY = useSpring(useTransform(mouseY, [0, 1], [20, -20]), spring);
  const bgX = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), spring);
  const bgY = useSpring(useTransform(mouseY, [0, 1], [-30, 30]), spring);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const bioLines = [
    "Highly skilled Full-Stack Developer crafting scalable, high-performance applications.",
    "Expert in solving complex problems using clean architecture and modern stacks.",
    "Experienced in leading teams, Agile delivery, and mentoring developers.",
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#020617] pt-20"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${developerBg})`,
          x: bgX,
          y: bgY,
          scale: 1.1,
        }}
      >
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Bottom blend into dark blue */}
        <div
          className="absolute inset-x-0 bottom-0 h-56"
          style={{
            background:
              "linear-gradient(to bottom, rgba(2,6,23,0) 0%, rgba(2,6,23,1) 100%)",
          }}
        />
      </motion.div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {FLOATING_ICONS.map((icon, i) => (
          <FloatingIcon key={i} {...icon} />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ x: textX, y: textY }}
        className="relative z-30 max-w-5xl px-6 text-center"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          className="text-blue-400 font-mono tracking-[0.35em] text-sm md:text-xl mb-4 uppercase"
        >
          Hi, I am
        </motion.h2>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 text-white">
          <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent">
            <Typewriter
              words={["Susan Pant", "Full Stack Developer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h1>

        {/* Bio */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          {bioLines.map((line, i) => (
            <motion.p
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              className="text-gray-300 text-lg md:text-2xl font-light leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-gray-400 text-xs tracking-[0.3em]"
      >
        SCROLL
      </motion.div>
    </section>
  );
};

export default HeroSection;
