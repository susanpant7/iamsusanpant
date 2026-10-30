import { useState } from "react";
import { Link } from "@tanstack/react-router";
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
              <span className="text-[9px] sk-brass-text font-mono tracking-[0.3em] uppercase">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop nav: recessed track, pressed-in active tab */}
          <div className="hidden md:flex items-center gap-1 sk-inset p-1 z-50">
            {NAV_LINKS.map(({ name, to, icon: Icon }) => (
              <Link
                key={name}
                to={to}
                className="px-6 py-2 text-[11px] font-bold uppercase tracking-[0.2em] rounded-lg transition-colors"
                activeProps={{
                  className:
                    "sk-key  text-[#bfe3ff]",
                }}
                inactiveProps={{
                  className: "text-gray-400 hover:text-gray-200",
                }}
              >
                <span className="flex items-center gap-2">
                  <Icon size={14} />
                  {name}
                </span>
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
              <span className="text-[11px] font-black tracking-widest flex items-center gap-2">
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
              className="md:hidden sk-key p-2.5 text-[#bfe3ff] active:translate-y-0.5"
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
              className="flex items-center gap-4 text-2xl font-serif font-bold text-gray-400"
              activeProps={{ className: "!text-[#bfe3ff]" }}
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
