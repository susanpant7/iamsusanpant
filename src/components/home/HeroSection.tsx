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
/**
 * Enhanced Floating Icon Component
 * Uses 'glow' prop for the diffused aura and 'color' for the icon neon effect.
 */
const FloatingIcon = ({ Icon, top, left, delay, color, glow }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: [0.7, 1, 0.7],
      y: [0, -30, 0], // Gentle floating bob
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
    style={{ top, left, translateX: "-50%", translateY: "-50%" }}
    className={`absolute ${color} hidden md:block z-20`}
  >
    <Icon
      size={44}
      strokeWidth={1.5}
      className="drop-shadow-[0_0_15px_currentColor] relative z-10"
    />
    <div
      className={`absolute inset-0 rounded-full blur-2xl opacity-20 animate-pulse ${glow}`}
    />
  </motion.div>
);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion Values for Parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { damping: 30, stiffness: 100 };

  // Spring animations for smooth movement
  const textX = useSpring(
    useTransform(mouseX, [0, 1], [20, -20]),
    springConfig
  );
  const textY = useSpring(
    useTransform(mouseY, [0, 1], [20, -20]),
    springConfig
  );
  const bgX = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), springConfig);
  const bgY = useSpring(useTransform(mouseY, [0, 1], [-30, 30]), springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - left) / width);
      mouseY.set((e.clientY - top) / height);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const bioText =
    "Highly skilled Full-Stack Developer with a strong track record of designing and building scalable, high-performance applications. Experienced in solving complex technical challenges and delivering innovative solutions. I also excel at leading teams, managing Agile sprints, and mentoring developers to drive project success.";

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* 1. PARALLAX BACKGROUND */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${developerBg})`,
          x: bgX,
          y: bgY,
          scale: 1.1,
        }}
      >
        <div className="absolute inset-0 bg-black/85" />
      </motion.div>

      {/* 2. SYMMETRIC FLOATING ICONS (1-1-3-3 Pattern) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* TOP CENTER */}
        <FloatingIcon
          Icon={Code2}
          top="22%"
          left="50%"
          delay={0}
          color="text-blue-400"
          glow="bg-blue-500"
        />

        {/* LEFT SIDE (3 Icons) */}
        <FloatingIcon
          Icon={Monitor}
          top="35%"
          left="12%"
          delay={0.5}
          color="text-cyan-400"
          glow="bg-cyan-500"
        />
        <FloatingIcon
          Icon={Server}
          top="55%"
          left="10%"
          delay={1.2}
          color="text-emerald-400"
          glow="bg-emerald-500"
        />
        <FloatingIcon
          Icon={Database}
          top="75%"
          left="14%"
          delay={2.0}
          color="text-indigo-400"
          glow="bg-indigo-500"
        />

        {/* RIGHT SIDE (3 Icons) */}
        <FloatingIcon
          Icon={Webhook}
          top="35%"
          left="88%"
          delay={0.8}
          color="text-yellow-400"
          glow="bg-yellow-500"
        />
        <FloatingIcon
          Icon={Globe}
          top="55%"
          left="90%"
          delay={1.5}
          color="text-sky-400"
          glow="bg-sky-500"
        />
        <FloatingIcon
          Icon={Terminal}
          top="75%"
          left="86%"
          delay={2.2}
          color="text-rose-400"
          glow="bg-rose-500"
        />

        {/* BOTTOM CENTER */}
        <FloatingIcon
          Icon={Layout}
          top="88%"
          left="50%"
          delay={1.0}
          color="text-purple-400"
          glow="bg-purple-500"
        />
      </div>

      {/* 3. PARALLAX CONTENT */}
      <motion.div
        style={{ x: textX, y: textY }}
        className="relative z-30 max-w-5xl px-6 text-center"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          className="text-blue-400 font-mono tracking-[0.4em] text-sm md:text-xl mb-4 uppercase"
        >
          Hi, I am
        </motion.h2>

        <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter text-white">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent">
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

        <div className="flex flex-wrap justify-center max-w-4xl mx-auto">
          {bioText.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1 + i * 0.02, duration: 0.4 }}
              className="text-gray-300 text-lg md:text-2xl font-light mr-[8px] hover:text-white transition-colors cursor-default"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
