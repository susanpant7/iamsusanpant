import { Battery, Signal, Wifi, Code2, Mail, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";

const BIO_LINES = [
  "An Experienced Full-Stack Developer crafting scalable, high-performance applications.",
  "Expert in solving complex problems using clean architecture and modern stacks.",
  "Experienced in leading teams, Agile delivery, and mentoring developers.",
  "Building real-world applications powered by fine-tuned AI models and RAG (Retrieval-Augmented Generation).",
];

const IntroSection = () => (
  <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-28 pb-12 px-4">
    {/* Mobile: phone with a chat-style intro */}
    <div className="md:hidden sk-panel sk-clay-teal w-full max-w-[340px] p-3 !rounded-[2.5rem]">
      <div className="rounded-[2rem] overflow-hidden bg-[var(--paper)] border-2 border-black flex flex-col min-h-[560px]">
        {/* Status bar + notch */}
        <div className="relative flex items-center justify-between px-5 pt-3 pb-2 text-[11px] font-bold">
          <span>9:41</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-2 h-4 w-20 rounded-full bg-black" />
          <span className="flex items-center gap-1">
            <Signal size={12} />
            <Wifi size={12} />
            <Battery size={14} />
          </span>
        </div>

        {/* Contact header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b-2 border-black">
          <div className="sk-brass h-11 w-11 !rounded-full flex items-center justify-center shrink-0">
            <Code2 size={22} />
          </div>
          <div>
            <h1 className="font-serif text-2xl leading-none">Susan Pant</h1>
            <p className="text-xs font-bold mt-1">Full Stack Developer</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 flex flex-col gap-3 p-4 text-[13px] leading-snug">
          {BIO_LINES.map((line) => (
            <p key={line} className="sk-inset !rounded-2xl !rounded-tl-md px-4 py-3 self-start max-w-[92%]">
              {line}
            </p>
          ))}
        </div>

        {/* Quick actions, like a message input row */}
        <div className="flex gap-2 p-3 border-t-2 border-black">
          <Link to="/blogs" className="sk-brass flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold">
            <FileText size={14} /> Read blogs
          </Link>
          <Link to="/contact" className="sk-brass flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold">
            <Mail size={14} /> Message me
          </Link>
        </div>
        <div className="mx-auto mb-2 h-1 w-24 rounded-full bg-black" />
      </div>
    </div>

    <div className="hidden md:flex flex-col items-center w-full">
    {/* Monitor bezel */}
    <div className="sk-panel sk-clay-teal relative w-full max-w-7xl p-3 md:p-6 !rounded-3xl">
      {/* Screen: the terminal fills it */}
      <div className="rounded-xl overflow-hidden flex flex-col bg-[var(--paper)] border-2 border-black">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 h-10 bg-[var(--paper)] border-b-2 border-black shrink-0">
          <span className="w-3 h-3 rounded-full bg-black" />
          <span className="w-3 h-3 rounded-full bg-black" />
          <span className="w-3 h-3 rounded-full bg-black" />
          <span className="flex-1 text-center text-xs text-gray-400 font-mono pr-10">
            susan — zsh — 80×24
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-6 md:p-12 font-mono text-left text-sm md:text-lg leading-relaxed md:min-h-[560px]">
          <p className="text-gray-500">
            <span className="text-emerald-400">$</span> whoami
          </p>
          <h1 className="font-serif text-5xl md:text-7xl sk-brass-text my-3">
            Susan Pant
          </h1>
          <p className="text-gray-500 mb-4">
            <span className="text-emerald-400">$</span> cat role.txt
          </p>
          <p className="text-gray-200 font-bold mb-6">Full Stack Developer</p>
          <p className="text-gray-500 mb-3">
            <span className="text-emerald-400">$</span> cat about.md
          </p>
          <div className="space-y-2 text-gray-300 text-[13px] md:text-base">
            {BIO_LINES.map((line) => (
              <p key={line}>
                <span className="text-blue-500">›</span> {line}
              </p>
            ))}
          </div>
          <p className="mt-6 text-gray-500">
            <span className="text-emerald-400">$</span>{" "}
            <span className="inline-block w-2 h-4 align-middle bg-[var(--accent)]" />
          </p>
        </div>
      </div>

      {/* Bezel details */}
      <div className="flex items-center justify-center gap-3 pt-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--paper)]" />
      </div>
    </div>

    {/* Stand */}
    <div className="sk-key sk-clay-teal w-24 h-8 !rounded-none -mt-px" />
    <div className="sk-panel sk-clay-teal w-56 h-3 !rounded-full" />
    </div>
  </section>
);

export default IntroSection;
