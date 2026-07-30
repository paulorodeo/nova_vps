import { siteConfig } from "@/config/site";
import { defaultSeo, socialProfiles } from "@/config/seo";

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

export { defaultSeo };
