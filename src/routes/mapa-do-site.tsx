import { createFileRoute, Link } from "@tanstack/react-router";

import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { getRoute, siteRoutes } from "@/config/routes";
import { SiteLayout } from "@/layouts/SiteLayout";
import { buildBreadcrumbJsonLd, buildRouteHead } from "@/lib/seo";

const route = getRoute("/mapa-do-site");

export const Route = createFileRoute("/mapa-do-site")({
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
  component: SitemapPage,
});

const groups: { key: "institucional" | "legal"; title: string }[] = [
  { key: "institucional", title: "Páginas institucionais" },
  { key: "legal", title: "Documentos e informações legais" },
];

function SitemapPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Mapa do Site"
        title="Todas as páginas"
        highlight="em um só lugar."
        description="Navegação completa do site, organizada por seção."
        breadcrumb={[{ label: route.label, path: route.path }]}
      />

      <section className="py-24 bg-background">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            {groups.map((g) => (
              <div key={g.key}>
                <h2 className="font-display text-2xl font-semibold text-navy mb-6">{g.title}</h2>
                <ul className="space-y-5">
                  {siteRoutes
                    .filter((r) => r.group === g.key && r.indexable)
                    .map((r) => (
                      <li key={r.path}>
                        <Link
                          to={r.path}
                          className="font-medium text-foreground hover:text-gold transition-colors"
                        >
                          {r.label}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">{r.summary}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
