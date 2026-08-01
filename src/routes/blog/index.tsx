import { createFileRoute, Link } from "@tanstack/react-router";

import { CallToAction } from "@/blocks/landing";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { getRoute } from "@/config/routes";
import { publishedPosts } from "@/constants/blog";
import { SiteLayout } from "@/layouts/SiteLayout";
import { buildBreadcrumbJsonLd, buildRouteHead } from "@/lib/seo";
import { formatDate } from "@/utils/format";

const route = getRoute("/blog");

export const Route = createFileRoute("/blog/")({
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
    links: [
      ...buildRouteHead(route).links,
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "Blog — Construtora Nova",
        href: "/rss.xml",
      },
    ],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Conteúdo técnico sobre"
        highlight="construir sob medida."
        description="Artigos sobre projeto, engenharia, custos e tecnologias construtivas para quem vai construir uma casa de alto padrão."
        breadcrumb={[{ label: route.label, path: route.path }]}
      />

      <section className="py-24 bg-background">
        <Container>
          {publishedPosts.length === 0 ? (
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold text-navy mb-4">
                Primeiros artigos em produção
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Estamos preparando os primeiros conteúdos do blog. Enquanto isso, fale com nossa
                equipe para tirar dúvidas técnicas sobre o seu projeto.
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-navy text-navy-foreground px-7 py-4 text-sm font-medium hover:bg-navy/90 transition-all hover:-translate-y-0.5"
              >
                Falar com a equipe
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedPosts.map((p) => (
                <article
                  key={p.slug}
                  className="rounded-xl border border-border bg-card p-8 hover:border-gold/50 transition-colors"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">
                    {p.category}
                  </div>
                  <h2 className="font-display text-xl font-semibold text-navy mb-3">
                    <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-gold transition-colors">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.excerpt}</p>
                  <time className="text-xs text-muted-foreground" dateTime={p.publishedAt}>
                    {formatDate(p.publishedAt)}
                  </time>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CallToAction />
    </SiteLayout>
  );
}
