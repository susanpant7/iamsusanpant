const BIO_LINES = [
  "An Experienced Full-Stack Developer crafting scalable, high-performance applications.",
  "Expert in solving complex problems using clean architecture and modern stacks.",
  "Experienced in leading teams, Agile delivery, and mentoring developers.",
  "Building real-world applications powered by fine-tuned AI models and RAG (Retrieval-Augmented Generation).",
];

const IntroSection = () => (
  <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-28 pb-12 px-4">
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
  </section>
);

export default IntroSection;
