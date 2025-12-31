import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Code2, ArrowRight } from "lucide-react";

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
    <nav className="fixed top-0 w-full transition-all duration-500 z-1000 px-4 py-2">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes custom-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: custom-shimmer 2.5s infinite;
        }
      `,
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className={`relative overflow-hidden border transition-all duration-700 rounded-3xl flex items-center justify-between px-4 md:px-8 py-3 ${
            scrolled
              ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl"
              : "bg-white/2 border-white/5 backdrop-blur-sm"
          }`}
        >
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative h-10 w-10 bg-linear-to-tr from-blue-600 to-indigo-400 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-3">
              <Code2 size={22} className="text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="block text-white font-black tracking-widest text-lg leading-tight uppercase">
                Susan Pant
              </span>
              <span className="text-[9px] text-blue-400 font-mono tracking-[0.3em] uppercase leading-none">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/5 p-1 rounded-2xl">
            {[
              { name: "Home", to: "/" },
              { name: "Courses", to: "/courses" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="relative px-6 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all"
                activeProps={{ className: "text-white" }}
                inactiveProps={{
                  className: "text-gray-400 hover:text-gray-300",
                }}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
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
              className="relative group px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl overflow-hidden transition-all active:scale-95 shadow-lg shadow-blue-600/20"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
              <span className="relative text-white text-[11px] font-black tracking-widest flex items-center gap-2">
                LET'S TALK{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Link>

            <button
              className="md:hidden p-2.5 text-white bg-white/5 rounded-xl border border-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Scroll Progress line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-600 to-cyan-400 origin-left"
            style={{ scaleX }}
          />
        </motion.div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 bg-zinc-900 border border-white/10 rounded-3xl p-8 md:hidden shadow-2xl flex flex-col gap-6"
          >
            <Link
              to="/"
              className="text-2xl font-black text-gray-400"
              activeProps={{ className: "text-blue-500" }}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="text-2xl font-black text-gray-400"
              activeProps={{ className: "text-blue-500" }}
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
