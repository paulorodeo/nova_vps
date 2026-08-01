import type { RouteDefinition } from "@/types/content";

/**
 * Registro central das rotas do site.
 * Fonte única para: menu, rodapé, mapa do site e sitemap.xml.
 */
export const siteRoutes: RouteDefinition[] = [
  {
    path: "/",
    label: "Home",
    summary: "Apresentação da construtora, especialidades, processo e projetos.",
    title:
      "Construtora Nova — Casas personalizadas de alto padrão | Projeto, engenharia e construção sob medida",
    description:
      "Construtora especializada em casas personalizadas de alto padrão. Projetamos e construímos residências urbanas, casas de campo, praia e serra.",
    indexable: true,
    changefreq: "weekly",
    priority: "1.0",
    inMainNav: false,
    group: "institucional",
  },
  {
    path: "/quem-somos",
    label: "Quem Somos",
    summary: "História, valores e forma de trabalho da construtora.",
    title: "Quem Somos — Construtora Nova",
    description:
      "Conheça a Construtora Nova: propósito, valores e o modelo de trabalho consultivo que orienta cada casa que projetamos e construímos.",
    indexable: true,
    changefreq: "monthly",
    priority: "0.8",
    inMainNav: true,
    group: "institucional",
  },
  {
    path: "/servicos",
    label: "Serviços",
    summary: "Projeto arquitetônico, engenharia, obra chave na mão e gestão.",
    title: "Serviços — Projeto, engenharia e obra chave na mão | Construtora Nova",
    description:
      "Projeto arquitetônico autoral, engenharia completa, execução de obra chave na mão e gestão de cronograma e custos para casas de alto padrão.",
    indexable: true,
    changefreq: "monthly",
    priority: "0.8",
    inMainNav: true,
    group: "institucional",
  },
  {
    path: "/especialidades",
    label: "Especialidades",
    summary: "Casas urbanas, de campo, de praia e na serra.",
    title: "Especialidades — Casas urbanas, de campo, de praia e na serra | Construtora Nova",
    description:
      "Cada cenário exige uma engenharia diferente. Conheça nossas especialidades em casas urbanas, casas de campo, casas de praia e casas na serra.",
    indexable: true,
    changefreq: "monthly",
    priority: "0.8",
    inMainNav: true,
    group: "institucional",
  },
  {
    path: "/projetos",
    label: "Projetos",
    summary: "Seleção de projetos autorais executados pela construtora.",
    title: "Projetos — Portfólio de casas de alto padrão | Construtora Nova",
    description:
      "Portfólio de casas autorais: arquitetura contemporânea, engenharia de excelência e integração com a paisagem em diferentes regiões.",
    indexable: true,
    changefreq: "monthly",
    priority: "0.8",
    inMainNav: true,
    group: "institucional",
  },
  {
    path: "/blog",
    label: "Blog",
    summary: "Conteúdos sobre construção, projeto e tecnologias construtivas.",
    title: "Blog — Construção, projeto e tecnologias construtivas | Construtora Nova",
    description:
      "Artigos e materiais sobre projeto arquitetônico, engenharia, custos de obra e tecnologias construtivas para casas de alto padrão.",
    indexable: true,
    changefreq: "weekly",
    priority: "0.6",
    inMainNav: true,
    group: "institucional",
  },
  {
    path: "/contato",
    label: "Contato",
    summary: "Fale com a equipe e solicite uma avaliação técnica.",
    title: "Contato — Solicite uma avaliação técnica | Construtora Nova",
    description:
      "Fale com a equipe da Construtora Nova por WhatsApp, telefone ou e-mail e solicite uma avaliação técnica gratuita do seu terreno ou projeto.",
    indexable: true,
    changefreq: "yearly",
    priority: "0.9",
    inMainNav: true,
    group: "institucional",
  },
  {
    path: "/politica-de-privacidade",
    label: "Política de Privacidade",
    summary: "Como tratamos os dados pessoais coletados no site.",
    title: "Política de Privacidade — Construtora Nova",
    description:
      "Saiba quais dados pessoais são coletados neste site, com quais finalidades são tratados e como exercer seus direitos.",
    indexable: true,
    changefreq: "yearly",
    priority: "0.3",
    group: "legal",
  },
  {
    path: "/termos-de-uso",
    label: "Termos de Uso",
    summary: "Condições de uso do site e dos seus conteúdos.",
    title: "Termos de Uso — Construtora Nova",
    description:
      "Condições gerais de uso do site da Construtora Nova, propriedade intelectual dos conteúdos e limitações de responsabilidade.",
    indexable: true,
    changefreq: "yearly",
    priority: "0.3",
    group: "legal",
  },
  {
    path: "/politica-de-cookies",
    label: "Política de Cookies",
    summary: "Uso de cookies e tecnologias semelhantes.",
    title: "Política de Cookies — Construtora Nova",
    description:
      "Entenda quais cookies e tecnologias semelhantes este site utiliza e como gerenciar suas preferências no navegador.",
    indexable: true,
    changefreq: "yearly",
    priority: "0.3",
    group: "legal",
  },
  {
    path: "/lgpd",
    label: "LGPD",
    summary: "Adequação à Lei Geral de Proteção de Dados e direitos do titular.",
    title: "LGPD — Proteção de dados pessoais | Construtora Nova",
    description:
      "Informações sobre a adequação à Lei Geral de Proteção de Dados (Lei nº 13.709/2018), bases legais e direitos do titular de dados.",
    indexable: true,
    changefreq: "yearly",
    priority: "0.3",
    group: "legal",
  },
  {
    path: "/mapa-do-site",
    label: "Mapa do Site",
    summary: "Todas as páginas disponíveis, organizadas por seção.",
    title: "Mapa do Site — Construtora Nova",
    description: "Navegue por todas as páginas públicas do site da Construtora Nova.",
    indexable: true,
    changefreq: "monthly",
    priority: "0.3",
    group: "legal",
  },
  {
    path: "/obrigado",
    label: "Mensagem enviada",
    summary: "Confirmação de solicitação de orçamento enviada.",
    title: "Mensagem enviada — Construtora Nova",
    description: "Recebemos o seu contato. Nossa equipe retorna em até 24h úteis.",
    indexable: false,
    group: "sistema",
  },
  {
    path: "/erro",
    label: "Erro interno",
    summary: "Página de erro interno do servidor (500).",
    title: "Erro inesperado — Construtora Nova",
    description: "Ocorreu um erro inesperado ao carregar esta página.",
    indexable: false,
    group: "sistema",
  },
];

export const routeByPath = Object.fromEntries(
  siteRoutes.map((r) => [r.path, r]),
) as Record<string, RouteDefinition>;

/** Rota do registro, garantindo erro em build caso o caminho não exista. */
export function getRoute(path: string): RouteDefinition {
  const route = routeByPath[path];
  if (!route) throw new Error(`Rota não registrada em siteRoutes: ${path}`);
  return route;
}

export const indexableRoutes = siteRoutes.filter((r) => r.indexable);
