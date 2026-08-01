import { createFileRoute } from "@tanstack/react-router";

import { getRoute } from "@/config/routes";
import { legalLastUpdate, privacyPolicy } from "@/constants/legal";
import { LegalLayout } from "@/layouts/LegalLayout";
import { buildBreadcrumbJsonLd, buildRouteHead } from "@/lib/seo";

const route = getRoute("/politica-de-privacidade");

export const Route = createFileRoute("/politica-de-privacidade")({
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
      eyebrow="Privacidade"
      title="Política de"
      highlight="Privacidade."
      document={privacyPolicy}
      lastUpdate={legalLastUpdate}
    />
  ),
});
