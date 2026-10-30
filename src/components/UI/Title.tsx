interface BeautifulTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
}

const BeautifulTitle = ({ label, title, subtitle }: BeautifulTitleProps) => {
  return (
    <div className="relative mb-4 flex flex-col items-start w-full">
      {/* 1. Top Label (only if provided) */}
      {label && (
        <div className="flex items-center gap-3 mb-4 group">
          <div className="h-0.5 w-8 bg-blue-500/60" />
          <span className="sk-brass-text font-mono text-xs uppercase tracking-[0.1em] font-bold">
            {label}
          </span>
        </div>
      )}

      {/* 2. Main Title */}
      <h1 className="w-full text-3xl md:text-5xl font-bold sk-emboss tracking-tight leading-tight mb-8">
        {title}
      </h1>

      {/* 3. Subtitle (only if provided, full width) */}
      {subtitle && (
        <div className="relative group w-full">
          <div className="relative w-full sk-inset !rounded-2xl p-6 md:p-8 overflow-hidden">
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent)]" />

            {/* Content */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic font-serif max-w-none">
              "{subtitle}"
            </p>

          </div>
        </div>
      )}

    </div>
  );
};

export default BeautifulTitle;
