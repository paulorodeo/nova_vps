import { createFileRoute } from "@tanstack/react-router";

import { CallToAction, Specialties, Technology } from "@/blocks/landing";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { getRoute } from "@/config/routes";
import { plannedCollections } from "@/constants/pages";
import { SiteLayout } from "@/layouts/SiteLayout";
import { buildBreadcrumbJsonLd, buildRouteHead } from "@/lib/seo";

const route = getRoute("/especialidades");

export const Route = createFileRoute("/especialidades")({
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
  component: SpecialtiesPage,
});

function SpecialtiesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Especialidades"
        title="Cada cenário exige"
        highlight="uma engenharia diferente."
        description="Urbano, campo, praia ou serra: a arquitetura muda, o rigor técnico permanece o mesmo."
        breadcrumb={[{ label: route.label, path: route.path }]}
      />

      <Specialties />

      <section className="py-24 bg-background">
        <Container>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy mb-4 max-w-2xl">
            Tipologias em preparação
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-8">
            Novas páginas dedicadas serão publicadas para cada uma das tipologias abaixo. Enquanto
            isso, fale com a equipe para conhecer projetos de referência.
          </p>
          <div className="flex flex-wrap gap-2">
            {plannedCollections.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-full text-sm font-medium border border-border text-foreground/70"
              >
                {c}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <Technology />
      <CallToAction />
    </SiteLayout>
  );
}
