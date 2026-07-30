import { siteConfig } from "@/config/site";

/** Metadados SEO reutilizáveis por rota (TanStack `head()`). */
export const defaultSeo = {
  title:
    "Construtora Nova — Casas personalizadas de alto padrão | Projeto, engenharia e construção sob medida",
  description: siteConfig.description,
  keywords:
    "construtora de casas, casa personalizada, alto padrão, casa de campo, casa de praia, casa na serra, steel frame, estrutura metálica, EPS, blocos estruturais, concreto armado, construção sob medida",
  ogTitle: "Construtora Nova — Casas personalizadas de alto padrão",
  ogDescription:
    "Projetos autorais e construção premium sob medida. Casas urbanas, de campo, de praia e na serra — com a tecnologia construtiva ideal para cada obra.",
} as const;

export const socialProfiles = [
  "https://campo.construtoranova.com",
  "https://praia.construtoranova.com",
  "https://serra.construtoranova.com",
];
