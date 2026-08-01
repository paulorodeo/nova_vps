import type { NavItem, LinkItem } from "@/types/navigation";
import { siteRoutes } from "@/config/routes";

/** Menu principal — apenas rotas realmente existentes. */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  ...siteRoutes.filter((r) => r.inMainNav).map((r) => ({ label: r.label, href: r.path })),
];

/** Âncoras internas da Home (usadas apenas quando o usuário está na Home). */
export const homeSections: NavItem[] = [
  { label: "Manifesto", href: "/#manifesto" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Processo", href: "/#processo" },
  { label: "Tecnologias", href: "/#tecnologia" },
  { label: "FAQ", href: "/#faq" },
];

export const footerSpecialties: LinkItem[] = [
  { label: "Casas Urbanas", href: "/especialidades" },
  { label: "Casas de Campo", href: "https://campo.construtoranova.com", external: true },
  { label: "Casas de Praia", href: "https://praia.construtoranova.com", external: true },
  { label: "Casas na Serra", href: "https://serra.construtoranova.com", external: true },
  { label: "Tecnologias construtivas", href: "/#tecnologia" },
];

/** Links institucionais do rodapé. */
export const footerInstitutional: LinkItem[] = siteRoutes
  .filter((r) => r.group === "institucional" && r.path !== "/")
  .map((r) => ({ label: r.label, href: r.path }));

export const legalLinks: LinkItem[] = siteRoutes
  .filter((r) => r.group === "legal")
  .map((r) => ({ label: r.label, href: r.path }));
