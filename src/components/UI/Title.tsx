interface BeautifulTitleProps {
  label?: string;
  title: string;
  highlightedWord?: string;
  subtitle?: string;
}

const BeautifulTitle = ({
  label = "Technical Module",
  title,
  highlightedWord,
  subtitle,
}: BeautifulTitleProps) => {
  return (
    <div className="relative mb-16 flex flex-col items-start">
      {/* 1. Top Label */}
      <div className="flex items-center gap-3 mb-4 group">
        <div className="h-px w-8 bg-blue-500/40 group-hover:w-12 transition-all duration-500" />
        <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
          {label}
        </span>
      </div>

      {/* 2. Main Title */}
      <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.85] uppercase mb-10">
        <span className="block opacity-90">{title}</span>
        {highlightedWord && (
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-cyan-400">
            {highlightedWord}.
          </span>
        )}
      </h1>

      {/* 3. The Beautiful Subtitle Box */}
      {subtitle && (
        <div className="relative group max-w-3xl">
          {/* Accent Glow behind the box */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500/20 to-purple-500/0 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

          <div className="relative flex items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden">
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 to-indigo-600" />

            {/* Box Content */}
            <div className="space-y-2">
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed italic">
                "{subtitle}"
              </p>
            </div>

            {/* Subtle tech-grid pattern background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px]" />
          </div>
        </div>
      )}

      {/* 4. Background Decorative Glow */}
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
};

export default BeautifulTitle;
