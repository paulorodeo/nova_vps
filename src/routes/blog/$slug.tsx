import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { CallToAction } from "@/blocks/landing";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { getRoute } from "@/config/routes";
import { findPost } from "@/constants/blog";
import { SiteLayout } from "@/layouts/SiteLayout";
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildRouteHead } from "@/lib/seo";
import { formatDate } from "@/utils/format";

const blogRoute = getRoute("/blog");

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = findPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artigo indisponível — Construtora Nova" },
          { name: "robots", content: "noindex, nofollow" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      ...buildRouteHead(
        { ...blogRoute, path: `/blog/${post.slug}` },
        {
          path: `/blog/${post.slug}`,
          title: `${post.title} — Blog | Construtora Nova`,
          description: post.excerpt,
          type: "article",
        },
      ),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildArticleJsonLd(post)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${params.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: PostNotFound,
  errorComponent: PostNotFound,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        breadcrumb={[
          { label: "Blog", path: "/blog" },
        ]}
      />
      <section className="py-24 bg-background">
        <Container>
          <div className="max-w-3xl">
            <time className="text-xs uppercase tracking-[0.2em] text-muted-foreground" dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            <div className="mt-8 space-y-5">
              {post.body.map((p) => (
                <p key={p} className="text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CallToAction />
    </SiteLayout>
  );
}

function PostNotFound() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Artigo não encontrado."
        description="O conteúdo que você procura não existe ou ainda não foi publicado."
        breadcrumb={[{ label: "Blog", path: "/blog" }]}
      />
      <section className="py-24 bg-background">
        <Container>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-navy text-navy-foreground px-7 py-4 text-sm font-medium hover:bg-navy/90 transition-all hover:-translate-y-0.5"
          >
            Voltar para o blog
          </Link>
        </Container>
      </section>
    </SiteLayout>
  );
}
