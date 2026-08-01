import type { LucideIcon } from "lucide-react";

/** Definição central de uma rota do site (usada em nav, footer e sitemap). */
export interface RouteDefinition {
  /** Caminho absoluto da rota (ex.: "/quem-somos"). */
  path: string;
  /** Rótulo curto usado em navegação e mapa do site. */
  label: string;
  /** Descrição curta usada no mapa do site. */
  summary: string;
  /** `<title>` da página. */
  title: string;
  /** `<meta name="description">` da página. */
  description: string;
  /** Se `false`, a rota recebe `noindex` e fica fora do sitemap. */
  indexable: boolean;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  /** Aparece no menu principal. */
  inMainNav?: boolean;
  /** Grupo do rodapé/mapa do site. */
  group: "institucional" | "legal" | "sistema";
}

/** Bloco de texto de páginas institucionais/legais. */
export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

/** Página legal completa (privacidade, termos, cookies, LGPD). */
export interface LegalDocument {
  intro: string;
  sections: ContentSection[];
}

/** Serviço oferecido (página /servicos). */
export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
}

/** Post do blog — estrutura preparada para futura fonte de conteúdo/CMS. */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  category: string;
  /** Conteúdo em parágrafos simples (sem HTML) enquanto não há CMS. */
  body: string[];
  /** Rascunhos ficam fora do sitemap, do RSS e da listagem pública. */
  draft?: boolean;
}
