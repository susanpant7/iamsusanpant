interface BeautifulTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
}

const splitTitle = (title: string) => {
  const words = title.trim().split(/\s+/);

  if (words.length <= 1) {
    return {
      normal: title,
      highlighted: "",
    };
  }

  return {
    normal: words.slice(0, 1).join(" "),
    highlighted: words.slice(1).join(" "),
  };
};

const BeautifulTitle = ({ label, title, subtitle }: BeautifulTitleProps) => {
  const { normal, highlighted } = splitTitle(title);

  return (
    <div className="relative mb-16 flex flex-col items-start w-full">
      {/* 1. Top Label (only if provided) */}
      {label && (
        <div className="flex items-center gap-3 mb-4 group">
          <div className="h-px w-8 bg-blue-500/40 group-hover:w-12 transition-all duration-500" />
          <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
            {label}
          </span>
        </div>
      )}

      {/* 2. Main Title (single line highlight logic) */}
      <h1 className="w-full text-3xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase mb-8 flex flex-wrap gap-x-3">
        <span className="opacity-90">{normal}</span>

        {highlighted && (
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-cyan-400">
            {highlighted}
          </span>
        )}
      </h1>

      {/* 3. Subtitle (only if provided, full width) */}
      {subtitle && (
        <div className="relative group w-full">
          {/* Glow */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500/20 to-purple-500/0 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000" />

          <div className="relative w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden">
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 to-indigo-600" />

            {/* Content */}
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed italic max-w-none">
              "{subtitle}"
            </p>

            {/* Subtle tech-grid background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px]" />
          </div>
        </div>
      )}

      {/* 4. Decorative Background Glow */}
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
};

export default BeautifulTitle;
