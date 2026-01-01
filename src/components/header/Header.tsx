import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Code2, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "./NavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-1000 px-4 py-2">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className={`relative overflow-hidden rounded-3xl border flex items-center justify-between px-4 md:px-8 py-3 transition-all duration-700 ${
            scrolled
              ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl"
              : "bg-white/5 backdrop-blur-sm border-white/10"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group z-50">
            <div className="h-10 w-10 rounded-2xl bg-linear-to-tr from-blue-600 to-indigo-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
              <Code2 size={22} className="text-white" />
            </div>

            <div className="hidden sm:block">
              <span className="block text-white font-black tracking-widest uppercase text-lg">
                Susan Pant
              </span>
              <span className="text-[9px] text-blue-400 font-mono tracking-[0.3em] uppercase">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 p-1 rounded-2xl">
            {NAV_LINKS.map(({ name, to, icon: Icon }) => (
              <Link
                key={name}
                to={to}
                className="relative px-6 py-2 text-[11px] font-bold uppercase tracking-[0.2em]"
                activeProps={{ className: "text-white" }}
                inactiveProps={{
                  className: "text-gray-400 hover:text-gray-300",
                }}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon size={14} />
                      {name}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl"
                        transition={{ type: "spring", bounce: 0.2 }}
                      />
                    )}
                  </>
                )}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="relative group px-5 py-2.5 bg-blue-600 rounded-xl overflow-hidden shadow-lg shadow-blue-600/20 hover:bg-blue-500 active:scale-95"
              activeProps={{
                className: "border-2 border-white",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
              <span className="relative text-white text-[11px] font-black tracking-widest flex items-center gap-2">
                LET’S TALK
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Scroll progress */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-600 to-cyan-400 origin-left"
            style={{ scaleX }}
          />
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 bg-zinc-900 border border-white/10 rounded-3xl p-8 md:hidden shadow-2xl flex flex-col gap-6"
          >
            {NAV_LINKS.map(({ name, to, icon: Icon }) => (
              <Link
                key={name}
                to={to}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-2xl font-black text-gray-400"
                activeProps={{ className: "text-blue-500" }}
              >
                <Icon size={24} />
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
