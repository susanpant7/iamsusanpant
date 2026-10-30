import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, ArrowRight, Mail } from "lucide-react";
import { NAV_LINKS } from "./NavLinks";

const MOBILE_LINKS = [...NAV_LINKS, { name: "Contact", to: "/contact", icon: Mail }];

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-1000 px-3 md:px-4 py-2">
        <div className="max-w-7xl mx-auto">
          <div className="sk-panel sk-stitch relative flex items-center justify-between px-3 md:px-8 py-2 md:py-3">
            {/* Logo: brass medallion */}
            <Link to="/" className="flex items-center gap-3 z-50">
              <div className="sk-brass h-9 w-9 md:h-10 md:w-10 !rounded-full flex items-center justify-center">
                <Code2 size={20} />
              </div>

              <div>
                <span className="block sk-emboss font-serif font-bold tracking-wider text-base md:text-lg leading-tight">
                  Susan Pant
                </span>
                <span className="hidden sm:block text-[13px] text-gray-400 font-sans font-semibold tracking-normal">
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

            {/* Right action */}
            <Link
              to="/contact"
              className="sk-brass group px-4 md:px-5 py-2 md:py-2.5 z-50"
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
          </div>
        </div>
      </nav>

      {/* Mobile: app-style tab bar pinned to the bottom, same sliding knob */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-1000 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="sk-panel !rounded-3xl p-2">
          <div className="sk-inset !rounded-2xl p-1 flex">
            {MOBILE_LINKS.map(({ name, to, icon: Icon }) => (
              <Link
                key={name}
                to={to}
                className="relative flex-1 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] rounded-xl"
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-knob-mobile"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        className="sk-brass absolute inset-0 !rounded-xl"
                      />
                    )}
                    <span
                      className={`relative z-10 flex flex-col items-center gap-1 ${
                        isActive ? "text-[var(--on-accent)]" : "text-black"
                      }`}
                    >
                      <Icon size={18} />
                      {name}
                    </span>
                  </>
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
