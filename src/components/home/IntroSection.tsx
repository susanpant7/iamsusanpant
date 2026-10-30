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

const DOCK = [
  { Icon: Code2, label: "Code" },
  { Icon: Monitor, label: "UI" },
  { Icon: Server, label: "API" },
  { Icon: Database, label: "SQL" },
  { Icon: Webhook, label: "Hooks" },
  { Icon: Globe, label: "Web" },
  { Icon: Terminal, label: "CLI" },
  { Icon: Layout, label: "Layout" },
];

const BIO_LINES = [
  "An Experienced Full-Stack Developer crafting scalable, high-performance applications.",
  "Expert in solving complex problems using clean architecture and modern stacks.",
  "Experienced in leading teams, Agile delivery, and mentoring developers.",
  "Building real-world applications powered by fine-tuned AI models and RAG (Retrieval-Augmented Generation).",
];

const IntroSection = () => (
  <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-28 pb-12 px-4">
    {/* Monitor */}
    <div className="sk-panel relative w-full max-w-5xl p-3 md:p-5 !rounded-3xl">
      {/* Screen */}
      <div className="sk-inset !rounded-xl overflow-hidden relative h-[560px] md:h-[600px] flex flex-col bg-[radial-gradient(ellipse_at_30%_20%,#8a4a2c,#101a14_75%)]">
        {/* Menu bar */}
        <div className="flex items-center justify-between px-4 h-7 bg-black/50 text-[11px] text-gray-400 font-mono shrink-0">
          <span className="sk-brass-text font-bold">◆ susan.os</span>
          <span className="hidden sm:block">Finder&nbsp;&nbsp;File&nbsp;&nbsp;Edit&nbsp;&nbsp;View</span>
          <span>Mon 9:41</span>
        </div>

        {/* Desktop area with window */}
        <div className="flex-1 flex items-center justify-center p-3 md:p-8 min-h-0">
          <div className="w-full max-w-3xl rounded-lg overflow-hidden border border-white/20 bg-[#0a110d]/70 shadow-[0_18px_30px_-10px_rgba(0,0,0,0.8)]">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-3 h-8 bg-linear-to-b from-white/25 to-white/10 border-b border-black">
              <span className="w-3 h-3 rounded-full bg-[#e0564b] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.4)]" />
              <span className="w-3 h-3 rounded-full bg-[#e2b043] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.4)]" />
              <span className="w-3 h-3 rounded-full bg-[#5fb663] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.4)]" />
              <span className="flex-1 text-center text-[11px] text-gray-400 font-mono pr-10">
                susan — zsh — 80×24
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-4 md:p-6 font-mono text-left text-sm md:text-base leading-relaxed">
              <p className="text-gray-500">
                <span className="text-emerald-400">$</span> whoami
              </p>
              <h1 className="font-serif text-5xl md:text-7xl sk-brass-text my-2">
                Susan Pant
              </h1>
              <p className="text-gray-500 mb-4">
                <span className="text-emerald-400">$</span> cat role.txt
              </p>
              <p className="text-gray-200 font-bold mb-4">Full Stack Developer</p>
              <p className="text-gray-500 mb-2">
                <span className="text-emerald-400">$</span> cat about.md
              </p>
              <div className="space-y-2 text-gray-300 text-[13px] md:text-sm">
                {BIO_LINES.map((line) => (
                  <p key={line}>
                    <span className="text-blue-500">›</span> {line}
                  </p>
                ))}
              </div>
              <p className="mt-4 text-gray-500">
                <span className="text-emerald-400">$</span>{" "}
                <span className="inline-block w-2 h-4 align-middle bg-blue-400" />
              </p>
            </div>
          </div>
        </div>

        {/* Dock */}
        <div className="shrink-0 flex justify-center pb-3">
          <div className="flex gap-2 px-3 py-2 rounded-2xl bg-black/40 border border-white/10">
            {DOCK.map(({ Icon, label }) => (
              <div
                key={label}
                title={label}
                className="sk-key w-9 h-9 md:w-11 md:h-11 flex items-center justify-center text-[#ffc9a0] !rounded-lg"
              >
                <Icon size={18} strokeWidth={1.75} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bezel details */}
      <div className="flex items-center justify-center gap-3 pt-3">
        <span className="sk-brass-text font-serif text-xs tracking-[0.3em] uppercase">
          Susan
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_#34d399]" />
      </div>
    </div>

    {/* Stand */}
    <div className="sk-key w-24 h-8 !rounded-none -mt-px" />
    <div className="sk-panel w-56 h-3 !rounded-full" />
  </section>
);

export default IntroSection;
