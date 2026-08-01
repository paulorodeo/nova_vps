import { createFileRoute } from "@tanstack/react-router";

import { getRoute } from "@/config/routes";
import { ErrorState } from "@/components/common/ErrorState";
import { SiteLayout } from "@/layouts/SiteLayout";
import { buildRouteHead } from "@/lib/seo";

const route = getRoute("/erro");

export const Route = createFileRoute("/erro")({
  head: () => buildRouteHead(route),
  component: ServerErrorPage,
});

function ServerErrorPage() {
  return (
    <SiteLayout>
      <ErrorState
        code="500"
        title="Erro inesperado."
        description="Algo não funcionou como esperado ao carregar esta página. Tente novamente em instantes ou fale com a nossa equipe."
      />
    </SiteLayout>
  );
}
