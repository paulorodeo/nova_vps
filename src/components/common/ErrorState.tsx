import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Container } from "@/components/common/Container";

/** Estado visual compartilhado pelas páginas de erro (404 e 500). */
export function ErrorState({
  code,
  title,
  description,
  action,
}: {
  code: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <section className="surface-navy relative overflow-hidden pt-40 pb-32">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_50%_20%,oklch(0.74_0.13_80)_0%,transparent_55%)]" />
      <Container className="relative text-center max-w-2xl">
        <div className="font-display text-7xl lg:text-8xl font-semibold text-gold-gradient mb-6">
          {code}
        </div>
        <h1 className="font-display text-3xl lg:text-4xl font-semibold text-navy-foreground mb-5">
          {title}
        </h1>
        <p className="text-navy-foreground/70 text-lg mb-10">{description}</p>
        <div className="flex flex-wrap justify-center gap-3">
          {action}
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-7 py-4 text-sm font-semibold hover:bg-gold/90 transition-all hover:-translate-y-0.5"
          >
            Voltar para a Home
          </Link>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 text-navy-foreground px-7 py-4 text-sm font-medium hover:border-gold/50 hover:text-gold transition-colors"
          >
            Falar com a equipe
          </Link>
        </div>
      </Container>
    </section>
  );
}
