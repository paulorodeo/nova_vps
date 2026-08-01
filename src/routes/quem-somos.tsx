import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/common/PageHero";
import { Prose, ProseContainer } from "@/components/common/Prose";
import { CallToAction } from "@/blocks/landing";
import { getRoute } from "@/config/routes";
import { aboutIntro, aboutSections, plannedCollections } from "@/constants/pages";
import { stats } from "@/constants/landing";
import { SiteLayout } from "@/layouts/SiteLayout";
import { buildBreadcrumbJsonLd, buildRouteHead } from "@/lib/seo";
import { Container } from "@/components/common/Container";

const route = getRoute("/quem-somos");

export const Route = createFileRoute("/quem-somos")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quem Somos"
        title="Engenharia, arquitetura e obra"
        highlight="sob um único compromisso."
        description={aboutIntro}
        breadcrumb={[{ label: route.label, path: route.path }]}
      />

      <section className="py-16 bg-background border-b border-border">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-semibold text-navy">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProseContainer>
        <Prose sections={aboutSections} />
        <div className="mt-12">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-navy mb-4">
            Coleções em preparação
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Nossa estrutura está preparada para receber páginas dedicadas a cada tipologia:
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
        </div>
      </ProseContainer>

      <CallToAction />
    </SiteLayout>
  );
}
