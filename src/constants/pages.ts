import { Compass, Cpu, Hammer, ClipboardList, Ruler, ShieldCheck } from "lucide-react";

import type { ContentSection, ServiceItem } from "@/types/content";

/** Página /quem-somos — conteúdo institucional (provisório, fácil de substituir). */
export const aboutIntro =
  "Somos uma construtora dedicada a casas personalizadas de alto padrão. Reunimos arquitetura autoral, engenharia própria e execução de obra em um único fluxo de trabalho, para que cada família receba exatamente a casa que imaginou.";

export const aboutSections: ContentSection[] = [
  {
    heading: "Nosso propósito",
    paragraphs: [
      "Acreditamos que uma casa sob medida é a tradução material de um jeito de viver. Por isso, o ponto de partida de todo projeto é a escuta: rotina, terreno, orçamento e planos de longo prazo.",
      "Esse entendimento orienta cada decisão técnica — da implantação no lote à escolha da tecnologia construtiva mais adequada.",
    ],
  },
  {
    heading: "Como trabalhamos",
    paragraphs: [
      "Trabalhamos com responsabilidade única: projeto, engenharia e obra sob o mesmo contrato e a mesma equipe. Isso elimina intermediários, reduz retrabalho e dá previsibilidade de prazo e custo.",
    ],
    bullets: [
      "Diagnóstico técnico do terreno antes de qualquer proposta",
      "Projeto arquitetônico autoral, compatibilizado com todas as disciplinas",
      "Cronograma físico-financeiro acompanhado pelo cliente",
      "Relatórios periódicos de obra com registro fotográfico",
    ],
  },
  {
    heading: "Nossos valores",
    paragraphs: [
      "Transparência, rigor técnico e respeito ao prazo combinado. São critérios simples, mas aplicados de forma inegociável em toda a operação.",
    ],
  },
  {
    heading: "Informações institucionais",
    paragraphs: [
      "[Conteúdo a definir] Esta seção deve receber razão social, CNPJ, endereço da sede, responsável técnico e registros profissionais da empresa. Os dados não foram preenchidos porque devem ser informados pela própria construtora.",
    ],
  },
];

/** Página /servicos. */
export const services: ServiceItem[] = [
  {
    icon: Compass,
    title: "Projeto Arquitetônico Autoral",
    description:
      "Concepção da casa a partir do terreno, do programa de necessidades e do estilo de vida da família.",
    deliverables: [
      "Estudo preliminar e implantação",
      "Anteprojeto e projeto executivo",
      "Detalhamento de ambientes e acabamentos",
    ],
  },
  {
    icon: Cpu,
    title: "Engenharia e Projetos Complementares",
    description:
      "Dimensionamento estrutural e das instalações por profissionais próprios, com compatibilização entre disciplinas.",
    deliverables: [
      "Fundação e estrutura",
      "Instalações hidráulicas e elétricas",
      "Compatibilização e memoriais técnicos",
    ],
  },
  {
    icon: Hammer,
    title: "Obra Chave na Mão",
    description:
      "Execução completa da construção com responsabilidade única, do canteiro à entrega das chaves.",
    deliverables: [
      "Gestão de equipes e fornecedores",
      "Controle de qualidade por etapa",
      "Entrega com vistoria assistida",
    ],
  },
  {
    icon: ClipboardList,
    title: "Gestão de Prazo e Custo",
    description:
      "Planejamento físico-financeiro com acompanhamento contínuo e visibilidade total para o cliente.",
    deliverables: [
      "Cronograma físico-financeiro",
      "Relatórios periódicos de avanço",
      "Controle de aditivos e mudanças de escopo",
    ],
  },
  {
    icon: Ruler,
    title: "Consultoria Técnica de Terreno",
    description:
      "Avaliação de viabilidade construtiva antes da compra do lote ou do início do projeto.",
    deliverables: [
      "Análise de topografia e restrições",
      "Verificação de normas e manuais de condomínio",
      "Estimativa inicial de investimento",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Execução de Projeto de Terceiros",
    description:
      "Construção de projetos assinados por outro arquiteto, com engenharia e gestão de obra por nossa conta.",
    deliverables: [
      "Revisão e compatibilização do projeto recebido",
      "Planejamento de obra",
      "Execução com o mesmo padrão construtivo",
    ],
  },
];

/** Coleções de landing pages previstas (estrutura preparada, ainda não publicadas). */
export const plannedCollections = [
  "Casas de Campo",
  "Casas de Praia",
  "Residências Urbanas",
  "Sobrados",
  "Chalés",
  "Cabanas",
  "Alto Padrão",
];
