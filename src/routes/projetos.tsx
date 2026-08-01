import { createFileRoute } from "@tanstack/react-router";

import { CallToAction, Gallery, Testimonials } from "@/blocks/landing";
import { PageHero } from "@/components/common/PageHero";
import { getRoute } from "@/config/routes";
import { SiteLayout } from "@/layouts/SiteLayout";
import { buildBreadcrumbJsonLd, buildRouteHead } from "@/lib/seo";

const route = getRoute("/projetos");

export const Route = createFileRoute("/projetos")({
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
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Projetos"
        title="Projetos autorais,"
        highlight="construção premium."
        description="Uma seleção de obras que traduzem nossa filosofia: arquitetura contemporânea, engenharia de excelência e integração com a paisagem."
        breadcrumb={[{ label: route.label, path: route.path }]}
      />

      <Gallery />
      <Testimonials />
      <CallToAction />
    </SiteLayout>
  );
}
