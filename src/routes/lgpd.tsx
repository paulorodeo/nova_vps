import { createFileRoute } from "@tanstack/react-router";

import { getRoute } from "@/config/routes";
import { legalLastUpdate, lgpdStatement } from "@/constants/legal";
import { LegalLayout } from "@/layouts/LegalLayout";
import { buildBreadcrumbJsonLd, buildRouteHead } from "@/lib/seo";

const route = getRoute("/lgpd");

export const Route = createFileRoute("/lgpd")({
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
  component: () => (
    <LegalLayout
      eyebrow="LGPD"
      title="Proteção de"
      highlight="dados pessoais."
      document={lgpdStatement}
      lastUpdate={legalLastUpdate}
    />
  ),
});
