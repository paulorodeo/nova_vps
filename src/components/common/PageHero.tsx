import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { Container } from "@/components/common/Container";

export interface Crumb {
  label: string;
  path: string;
}

/**
 * Cabeçalho padrão das páginas internas.
 * Reaproveita a linguagem visual navy + gold usada na Home.
 */
export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  breadcrumb = [],
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  breadcrumb?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="surface-navy relative overflow-hidden pt-36 pb-20">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_25%_25%,oklch(0.74_0.13_80)_0%,transparent_55%)]" />
      <Container className="relative">
        <nav
          aria-label="Trilha de navegação"
          className="flex flex-wrap items-center gap-1.5 text-xs text-navy-foreground/50 mb-8"
        >
          <Link to="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          {breadcrumb.map((c) => (
            <span key={c.path} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3" />
              <Link to={c.path} className="hover:text-gold transition-colors">
                {c.label}
              </Link>
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-3 mb-5 text-xs uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-foreground leading-[1.08] max-w-4xl">
          {title} {highlight ? <span className="text-gold-gradient">{highlight}</span> : null}
        </h1>
        {description ? (
          <p className="mt-6 text-navy-foreground/70 text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}
