/**
 * Configuração central do site (TopLeo Platform).
 * Toda informação institucional/contato vive aqui — nunca hardcoded em componentes.
 */

const phoneDigits = import.meta.env.VITE_SITE_PHONE_DIGITS ?? "5511941002900";

export const siteConfig = {
  name: "Construtora Nova",
  tagline: "Casas sob medida",
  description:
    "Construtora especializada em casas personalizadas de alto padrão. Projetamos e construímos residências urbanas, casas de campo, praia e serra com engenharia, arquitetura sob medida e as principais tecnologias construtivas do mercado.",
  url: import.meta.env.VITE_SITE_URL ?? "https://construtora-topleo.lovable.app",
  locale: "pt-BR",
  foundedYear: 2008,
  contact: {
    phoneLabel: "(11) 94100-2900",
    phoneE164: "+55 11 94100-2900",
    phoneDigits,
    email: "contato@construtoranova.com.br",
    city: "São Paulo — SP",
    region: "SP",
    country: "BR",
  },
  whatsapp: {
    message:
      "Olá! Gostaria de receber mais informações sobre os projetos de casas sob medida da Construtora Nova.",
  },
  map: {
    embedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=-46.6606%2C-23.5613%2C-46.6500%2C-23.5510&layer=mapnik",
    title: "Mapa da Construtora Nova",
  },
} as const;

export const whatsappUrl =
  `https://api.whatsapp.com/send?phone=${siteConfig.contact.phoneDigits}&text=` +
  encodeURIComponent(siteConfig.whatsapp.message);
