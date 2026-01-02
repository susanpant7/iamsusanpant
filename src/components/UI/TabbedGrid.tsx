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
    <div className="w-full text-white font-sans bg-transparent">
      {/* 1. NAV BAR: No extra margins */}
      <nav className="sticky top-0 mb-4 z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full flex items-center justify-between p-4 transition-all"
        >
          <div className="flex items-center gap-2">
            <Menu size={18} className="text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-tight">
              {tabs[activeIdx].title}
            </span>
          </div>
          {isMenuOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {/* 2. DROPDOWN LIST: Positioned absolutely right under nav */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 bg-slate-900 border-b border-white/10 shadow-2xl">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveIdx(index);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm transition-colors border-l-4 ${
                  activeIdx === index
                    ? "bg-blue-600/20 border-blue-500 text-blue-400"
                    : "border-transparent text-slate-400 hover:bg-white/5"
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
        <div className="flex mt-4 border-t border-white/10 bg-white/5">
          <button
            onClick={prevTab}
            className={`flex-1 flex items-center justify-center gap-2 py-5 font-bold transition-all ${
              activeIdx === 0
                ? "hidden"
                : "border-r border-white/10 text-slate-400 hover:bg-white/5"
            }`}
          >
            <ChevronLeft size={16} /> Prev
          </button>

          <button
            onClick={nextTab}
            className={`flex-1 flex items-center justify-center gap-2 py-5 font-bold transition-all ${
              activeIdx === tabs.length - 1
                ? "bg-blue-600 text-white"
                : "text-slate-200 hover:bg-white/5"
            }`}
          >
            {activeIdx === tabs.length - 1 ? "Finish" : "Next"}
            {activeIdx !== tabs.length - 1 && <ChevronRight size={16} />}
          </button>
        </div>
      </main>
    </div>
  );
};
