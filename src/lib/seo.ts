import { siteConfig } from "@/config/site";
import { defaultSeo, socialProfiles } from "@/config/seo";
import type { RouteDefinition } from "@/types/content";

/** Converte um caminho relativo em URL absoluta (exigido por crawlers sociais). */
export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** JSON-LD schema.org da construtora. */
export function buildOrganizationJsonLd(image: string) {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.name,
    description:
      "Construtora especializada em casas personalizadas de alto padrão — projeto, engenharia e obra completa.",
    image: absoluteUrl(image),
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneE164,
    email: siteConfig.contact.email,
    areaServed: "Brasil",
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.contact.country,
      addressRegion: siteConfig.contact.region,
    },
    sameAs: socialProfiles,
  };
}

/** JSON-LD de FAQ, alimentado pelo mesmo conteúdo renderizado no bloco FAQ. */
export function buildFaqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

/** JSON-LD de breadcrumb (Home → página atual). */
export function buildBreadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** JSON-LD de artigo do blog. */
export function buildArticleJsonLd(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };
}

export interface RouteMetaOptions {
  /** Imagem de destaque relativa ou absoluta (og:image / twitter:image). */
  image?: string;
  /** og:type — "website" (padrão) ou "article". */
  type?: "website" | "article";
  /** Sobrescreve título/descrição vindos do registro de rotas. */
  title?: string;
  description?: string;
  /** Caminho canônico alternativo (rotas dinâmicas). */
  path?: string;
}

/**
 * Gera `meta` + `links` padronizados (title, description, canonical,
 * Open Graph, Twitter Cards e robots) a partir do registro de rotas.
 */
export function buildRouteHead(route: RouteDefinition, options: RouteMetaOptions = {}) {
  const path = options.path ?? route.path;
  const title = options.title ?? route.title;
  const description = options.description ?? route.description;
  const url = absoluteUrl(path);
  const image = options.image ? absoluteUrl(options.image) : undefined;

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: options.type ?? "website" },
    { property: "og:site_name", content: siteConfig.name },
    { property: "og:locale", content: "pt_BR" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }

  if (!route.indexable) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }

  return {
    meta,
    links: route.indexable ? [{ rel: "canonical", href: url }] : [],
  };
}

export { defaultSeo };
