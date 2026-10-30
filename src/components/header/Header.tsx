import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Menu, X, Code2, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "./NavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-1000 px-4 py-2">
      <div className="max-w-7xl mx-auto">
        <div className="sk-panel sk-stitch relative flex items-center justify-between px-4 md:px-8 py-3">
          {/* Logo: brass medallion */}
          <Link to="/" className="flex items-center gap-3 z-50">
            <div className="sk-brass h-10 w-10 !rounded-full flex items-center justify-center">
              <Code2 size={20} />
            </div>

            <div className="hidden sm:block">
              <span className="block sk-emboss font-serif font-bold tracking-wider text-lg leading-tight">
                Susan Pant
              </span>
              <span className="text-[13px] text-gray-400 font-sans font-semibold tracking-normal">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop nav: segmented switch, the blue knob slides to the active tab */}
          <div className="hidden md:flex items-center sk-inset p-1 z-50">
            {NAV_LINKS.map(({ name, to, icon: Icon }) => (
              <Link
                key={name}
                to={to}
                className="relative px-6 py-2 text-xs font-bold uppercase tracking-[0.1em] rounded-xl"
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-knob"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        className="sk-brass absolute inset-0 !rounded-xl"
                      />
                    )}
                    <span
                      className={`relative z-10 flex items-center gap-2 transition-colors ${
                        isActive ? "text-[var(--on-accent)]" : "text-black"
                      }`}
                    >
                      <Icon size={14} />
                      {name}
                    </span>
                  </>
                )}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 z-50">
            <Link
              to="/contact"
              className="sk-brass group px-5 py-2.5"
              activeProps={{ className: "brightness-110" }}
            >
              <span className="text-xs font-black tracking-[0.08em] flex items-center gap-2">
                LET’S TALK
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden sk-brass !rounded-xl p-2.5"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 sk-panel sk-stitch p-8 md:hidden flex flex-col gap-6">
          {NAV_LINKS.map(({ name, to, icon: Icon }) => (
            <Link
              key={name}
              to={to}
              onClick={() => setIsOpen(false)}
              className="sk-brass flex items-center gap-4 px-6 py-3 text-xl font-serif"
              activeProps={{ className: "underline underline-offset-4 decoration-2" }}
            >
              <Icon size={24} />
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
