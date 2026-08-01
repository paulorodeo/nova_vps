import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { CallToAction, Process } from "@/blocks/landing";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { getRoute } from "@/config/routes";
import { services } from "@/constants/pages";
import { SiteLayout } from "@/layouts/SiteLayout";
import { buildBreadcrumbJsonLd, buildRouteHead } from "@/lib/seo";

const route = getRoute("/servicos");

export const Route = createFileRoute("/servicos")({
  head: () => ({
    ...buildRouteHead(route),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([{ name: route.label, path: route.path }]),
        ),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Serviços"
        title="Do estudo preliminar"
        highlight="à entrega das chaves."
        description="Cada serviço pode ser contratado isoladamente ou em pacote completo, com responsabilidade técnica única."
        breadcrumb={[{ label: route.label, path: route.path }]}
      />

      <section className="py-24 bg-background">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="rounded-xl border border-border bg-card p-8 hover:border-gold/50 transition-colors"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold mb-5">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h2 className="font-display text-xl font-semibold text-navy mb-3">{s.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {s.description}
                </p>
                <ul className="space-y-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-2.5 text-sm text-foreground/70">
                      <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Process />
      <CallToAction />
    </SiteLayout>
  );
}
