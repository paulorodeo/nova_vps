import { createFileRoute } from "@tanstack/react-router";

import { getRoute } from "@/config/routes";
import { legalLastUpdate, termsOfUse } from "@/constants/legal";
import { LegalLayout } from "@/layouts/LegalLayout";
import { buildBreadcrumbJsonLd, buildRouteHead } from "@/lib/seo";

const route = getRoute("/termos-de-uso");

export const Route = createFileRoute("/termos-de-uso")({
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
      eyebrow="Termos"
      title="Termos de"
      highlight="Uso."
      document={termsOfUse}
      lastUpdate={legalLastUpdate}
    />
  ),
});
