import { useState, type ReactNode } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";

interface Tab {
  id: string;
  title: string;
  content: ReactNode;
}

interface TabbedGridProps {
  tabs: Tab[];
}

export const TabbedGrid = ({ tabs }: TabbedGridProps) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextTab = () => {
    if (activeIdx < tabs.length - 1) {
      setActiveIdx(activeIdx + 1);
      setIsMenuOpen(false);
      window.scrollTo(0, 0);
    }
  };

  const prevTab = () => {
    if (activeIdx > 0) {
      setActiveIdx(activeIdx - 1);
      setIsMenuOpen(false);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="w-full font-sans bg-transparent">
      {/* 1. NAV BAR: No extra margins */}
      <nav className="sticky top-0 mb-4 z-50 sk-panel !rounded-2xl p-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sk-brass !rounded-xl w-full flex items-center justify-between p-4"
        >
          <div className="flex items-center gap-2">
            <Menu size={18} />
            <span className="text-xs font-bold uppercase tracking-tight">
              {tabs[activeIdx].title}
            </span>
          </div>
          {isMenuOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* 2. DROPDOWN LIST: Positioned absolutely right under nav */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 sk-panel !rounded-2xl p-3 space-y-2">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveIdx(index);
                  setIsMenuOpen(false);
                }}
                className={`sk-brass !rounded-xl w-full text-left px-4 py-3 text-sm font-semibold ${
                  activeIdx === index ? "underline underline-offset-4 decoration-2" : ""
                }`}
              >
                {index + 1}. {tab.title}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* 3. CONTENT & BUTTONS: Removed container paddings */}
      <main className="w-full">
        {/* Child Content */}
        <div className="w-full">{tabs[activeIdx].content}</div>

        {/* Bottom Navigation: Tightly coupled to content */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={prevTab}
            className={`sk-brass flex-1 flex items-center justify-center gap-2 py-4 font-bold ${
              activeIdx === 0 ? "hidden" : ""
            }`}
          >
            <ChevronLeft size={16} /> Prev
          </button>

          <button
            onClick={nextTab}
            className="sk-brass flex-1 flex items-center justify-center gap-2 py-4 font-bold"
          >
            {activeIdx === tabs.length - 1 ? "Finish" : "Next"}
            {activeIdx !== tabs.length - 1 && <ChevronRight size={16} />}
          </button>
        </div>
      </main>
    </div>
  );
};
