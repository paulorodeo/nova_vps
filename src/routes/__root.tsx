import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { ErrorState } from "@/components/common/ErrorState";
import { SiteLayout } from "@/layouts/SiteLayout";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";


function NotFoundComponent() {
  return (
    <SiteLayout>
      <ErrorState
        code="404"
        title="Página não encontrada."
        description="O endereço acessado não existe ou foi movido. Use o mapa do site para encontrar o que procura."
      />
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <SiteLayout>
      <ErrorState
        code="500"
        title="Erro inesperado."
        description="Algo não funcionou como esperado ao carregar esta página. Tente novamente em instantes ou fale com a nossa equipe."
        action={
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center gap-2 rounded-full bg-navy-foreground/10 border border-navy-foreground/25 text-navy-foreground px-7 py-4 text-sm font-medium hover:border-gold/50 hover:text-gold transition-colors"
          >
            Tentar novamente
          </button>
        }
      />
    </SiteLayout>
  );
}


export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Construtora Nova - Casas personalizadas de alto padrão" },
      { name: "description", content: "Projetamos e construímos casas residenciais, de campo e de praia sob medida, com tecnologia construtiva moderna e atendimento consultivo." },
      { property: "og:title", content: "Construtora Nova - Casas personalizadas de alto padrão" },
      { property: "og:description", content: "Projetamos e construímos casas residenciais, de campo e de praia sob medida, com tecnologia construtiva moderna e atendimento consultivo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Construtora Nova - Casas personalizadas de alto padrão" },
      { name: "twitter:description", content: "Projetamos e construímos casas residenciais, de campo e de praia sob medida, com tecnologia construtiva moderna e atendimento consultivo." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/srcaFCj6DKdaM4bozBr1th2Ku2s2/social-images/social-1780883756149-ChatGPT_Image_4_de_jun._de_2026,_21_29_53.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/srcaFCj6DKdaM4bozBr1th2Ku2s2/social-images/social-1780883756149-ChatGPT_Image_4_de_jun._de_2026,_21_29_53.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
