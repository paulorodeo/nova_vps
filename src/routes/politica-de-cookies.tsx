import { createFileRoute } from "@tanstack/react-router";

import { getRoute } from "@/config/routes";
import { cookiePolicy, legalLastUpdate } from "@/constants/legal";
import { LegalLayout } from "@/layouts/LegalLayout";
import { buildBreadcrumbJsonLd, buildRouteHead } from "@/lib/seo";

const route = getRoute("/politica-de-cookies");

export const Route = createFileRoute("/politica-de-cookies")({
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
      eyebrow="Cookies"
      title="Política de"
      highlight="Cookies."
      document={cookiePolicy}
      lastUpdate={legalLastUpdate}
    />
  ),
});
