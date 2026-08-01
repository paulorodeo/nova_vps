import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/common/Container";
import { getRoute } from "@/config/routes";
import { SiteLayout } from "@/layouts/SiteLayout";
import { buildRouteHead } from "@/lib/seo";

const route = getRoute("/obrigado");

export const Route = createFileRoute("/obrigado")({
  head: () => buildRouteHead(route),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <SiteLayout>
      <section className="surface-navy relative overflow-hidden pt-40 pb-32">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_50%_20%,oklch(0.74_0.13_80)_0%,transparent_55%)]" />
        <Container className="relative text-center max-w-2xl">
          <CheckCircle2 className="h-14 w-14 text-gold mx-auto mb-8" strokeWidth={1.2} />
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-navy-foreground leading-tight mb-6">
            Solicitação enviada.{" "}
            <span className="text-gold-gradient">Obrigado pelo contato.</span>
          </h1>
          <p className="text-navy-foreground/75 text-lg mb-10">
            Recebemos as suas informações. Nossa equipe analisa o seu caso e retorna em até 24h
            úteis com os próximos passos — sem compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-7 py-4 text-sm font-semibold hover:bg-gold/90 transition-all hover:-translate-y-0.5"
            >
              Voltar para a Home
            </Link>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 text-navy-foreground px-7 py-4 text-sm font-medium hover:border-gold/50 hover:text-gold transition-colors"
            >
              Ver projetos
            </Link>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
