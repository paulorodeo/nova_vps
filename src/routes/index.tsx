import { createFileRoute } from "@tanstack/react-router";

import heroHouse from "@/assets/hero-house.jpg";
import {
  Hero,
  Stats,
  Manifesto,
  Differentials,
  Specialties,
  Process,
  Technology,
  Gallery,
  Testimonials,
  Faq,
  CallToAction,
} from "@/blocks/landing";
import { siteConfig } from "@/config/site";
import { faqItems } from "@/constants/landing";
import { LandingLayout } from "@/layouts/LandingLayout";
import { absoluteUrl, buildFaqJsonLd, buildOrganizationJsonLd, defaultSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const ogImage = absoluteUrl(heroHouse);
    return {
      meta: [
        { title: defaultSeo.title },
        { name: "description", content: defaultSeo.description },
        { name: "keywords", content: defaultSeo.keywords },
        { property: "og:title", content: defaultSeo.ogTitle },
        { property: "og:description", content: defaultSeo.ogDescription },
        { property: "og:url", content: siteConfig.url },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: siteConfig.url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildOrganizationJsonLd(heroHouse)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(buildFaqJsonLd(faqItems)),
        },
      ],
    };
  },
  component: LandingPage,
});

function LandingPage() {
  return (
    <LandingLayout>
      <Hero />
      <Stats />
      <Manifesto />
      <Differentials />
      <Specialties />
      <Process />
      <Technology />
      <Gallery />
      <Testimonials />
      <Faq />
      <CallToAction />
    </LandingLayout>
  );
}
