import type { NavItem, LinkItem } from "@/types/navigation";

export const mainNav: NavItem[] = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Processo", href: "#processo" },
  { label: "Tecnologias", href: "#tecnologia" },
  { label: "Projetos", href: "#galeria" },
  { label: "FAQ", href: "#faq" },
];

export const footerSpecialties: LinkItem[] = [
  { label: "Casas Urbanas", href: "#especialidades" },
  { label: "Casas de Campo", href: "https://campo.construtoranova.com", external: true },
  { label: "Casas de Praia", href: "https://praia.construtoranova.com", external: true },
  { label: "Casas na Serra", href: "https://serra.construtoranova.com", external: true },
  { label: "Tecnologias construtivas", href: "#tecnologia" },
];

export const legalLinks: LinkItem[] = [
  { label: "Privacidade", href: "#" },
  { label: "Termos", href: "#" },
];
