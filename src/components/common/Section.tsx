import type { ReactNode } from "react";

/** Rótulo pequeno acima dos títulos de seção. */
export function SectionLabel({ children }: { children: ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-5 text-xs uppercase tracking-[0.3em] text-gold">
      <span className="h-px w-8 bg-gold" />
      {children}
    </div>
  );
}

/** Título padrão de seção. */
export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-4xl lg:text-5xl font-semibold text-navy mb-4 max-w-3xl leading-[1.1]">
      {children}
    </h2>
  );
}
