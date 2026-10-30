import type { ReactNode } from "react";

/** Raised, stitched leather card. Pure CSS: no JS animation, no blur. */
export const GlassCard = ({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) => (
  <div
    className={`sk-panel sk-stitch p-8 ${hover ? "sk-lift" : ""} ${className}`}
  >
    {children}
  </div>
);
