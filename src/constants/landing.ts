import {
  Compass,
  Hammer,
  Cpu,
  HeartHandshake,
  Eye,
  ShieldCheck,
  Home,
  TreePine,
  Waves,
  Mountain,
  Layers,
  Building2,
  Boxes,
  Ruler,
  Wrench,
} from "lucide-react";

import casaResidencial from "@/assets/casa-residencial.jpg";
import casaCampo from "@/assets/casa-campo.jpg";
import casaPraia from "@/assets/casa-praia.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

import type {
  FaqItem,
  FeatureItem,
  GalleryFilter,
  ProcessStep,
  ProjectItem,
  SpecialtyItem,
  StatItem,
  TestimonialItem,
} from "@/types/landing";

export const heroHighlights = [
  { title: "Projeto", subtitle: "Autoral" },
  { title: "Engenharia", subtitle: "Especializada" },
  { title: "Obra", subtitle: "Chave na mão" },
];

export const stats: StatItem[] = [
  { value: "+15", label: "Anos de experiência" },
  { value: "+120", label: "Projetos entregues" },
  { value: "+80", label: "Famílias atendidas" },
  { value: "4", label: "Regiões de atuação" },
];

export const differentials: FeatureItem[] = [
  {
    icon: Compass,
    title: "Projeto Autoral",
    description:
      "Arquitetura sob medida para o seu terreno, seu estilo de vida e seus objetivos de longo prazo.",
  },
  {
    icon: Hammer,
    title: "Obra Chave na Mão",
    description:
      "Do estudo preliminar à entrega das chaves com uma única empresa responsável — sem intermediários.",
  },
  {
    icon: Cpu,
    title: "Engenharia Especializada",
    description:
      "Estrutura, fundação, hidráulica e elétrica dimensionadas por profissionais próprios.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Consultivo",
    description:
      "Acompanhamento próximo, decisões compartilhadas e clareza técnica em cada etapa.",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    description:
      "Cronograma, planilhas, fotos e relatórios acessíveis. Você acompanha tudo em tempo real.",
  },
  {
    icon: ShieldCheck,
    title: "Alto Padrão Construtivo",
    description:
      "Materiais selecionados, normas técnicas rigorosas e garantia estrutural certificada.",
  },
];

export const specialties: SpecialtyItem[] = [
  {
    icon: Home,
    image: casaResidencial,
    title: "Casas Urbanas",
    description:
      "Residências contemporâneas para moradia permanente — conforto, funcionalidade e valorização em lotes urbanos.",
  },
  {
    icon: TreePine,
    image: casaCampo,
    title: "Casas de Campo",
    description:
      "Refúgios autorais integrados à paisagem, feitos para desacelerar sem abrir mão da sofisticação.",
  },
  {
    icon: Waves,
    image: casaPraia,
    title: "Casas de Praia",
    description:
      "Projetos preparados para o litoral: alto padrão, resistência à maresia e máxima valorização patrimonial.",
  },
  {
    icon: Mountain,
    image: g3,
    title: "Casas na Serra",
    description:
      "Retiros que dialogam com a montanha — vidro, madeira e pedra pensados para o clima e o horizonte.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Escuta e Terreno",
    description:
      "Entendemos seu estilo de vida e fazemos a análise técnica do terreno, potencial construtivo e viabilidade.",
  },
  {
    step: "02",
    title: "Projeto Autoral",
    description:
      "Arquitetura sob medida integrada à engenharia estrutural, hidráulica e elétrica.",
  },
  {
    step: "03",
    title: "Planejamento",
    description:
      "Cronograma, orçamento detalhado, escolha de materiais e definição da tecnologia construtiva ideal.",
  },
  {
    step: "04",
    title: "Execução",
    description:
      "Obra acompanhada por engenheiros próprios, com relatórios e fotos periódicas de cada etapa.",
  },
  {
    step: "05",
    title: "Entrega das Chaves",
    description:
      "Vistoria final, ajustes técnicos e a alegria de receber a casa que nasceu do seu sonho.",
  },
];

export const technologies: FeatureItem[] = [
  {
    icon: Building2,
    title: "Estrutura Metálica",
    description:
      "Vãos livres, velocidade de execução e liberdade arquitetônica para projetos contemporâneos.",
  },
  {
    icon: Layers,
    title: "Steel Frame",
    description:
      "Sistema leve e industrializado com excelente desempenho térmico, acústico e precisão dimensional.",
  },
  {
    icon: Boxes,
    title: "EPS com Bloco Estrutural",
    description:
      "Isolamento térmico superior, redução de resíduos e obras significativamente mais rápidas.",
  },
  {
    icon: Ruler,
    title: "Blocos Estruturais",
    description:
      "Alvenaria estruturada, racional e econômica, com ótimo custo-benefício em obras de médio porte.",
  },
  {
    icon: ShieldCheck,
    title: "Concreto Armado",
    description:
      "Solidez e durabilidade consagradas — a escolha certa para grandes vãos e cargas elevadas.",
  },
  {
    icon: Wrench,
    title: "Alvenaria Convencional",
    description:
      "A tradição executada com rigor técnico, para quem busca o padrão consagrado do mercado.",
  },
];

export const galleryFilters: GalleryFilter[] = ["Todos", "Urbana", "Campo", "Praia", "Serra"];

export const projects: ProjectItem[] = [
  { image: g2, title: "Villa Atlântica", tag: "Praia" },
  { image: g1, title: "Residência Mont", tag: "Urbana" },
  { image: g3, title: "Refúgio Serra", tag: "Serra" },
  { image: g5, title: "Casa Linear", tag: "Urbana" },
  { image: g4, title: "Mirante do Mar", tag: "Praia" },
  { image: casaCampo, title: "Retiro do Vale", tag: "Campo" },
  { image: g6, title: "Casa Zen", tag: "Urbana" },
  { image: casaCampo, title: "Fazenda Contemporânea", tag: "Campo" },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Marina e Rafael Costa",
    role: "Residência em Alphaville",
    text: "Fizeram exatamente a casa que sonhamos. Acompanhamento impecável do projeto à entrega. Recomendamos sem hesitar.",
  },
  {
    name: "Eduardo Almeida",
    role: "Casa de campo, Itu",
    text: "Profissionalismo e transparência em cada etapa. A casa superou nossas expectativas em qualidade e acabamento.",
  },
  {
    name: "Família Mendonça",
    role: "Casa de praia, Maresias",
    text: "Da escolha do terreno à entrega das chaves, tivemos suporte completo. Construtora de verdade, com gente que se importa.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Vocês constroem em condomínios fechados?",
    answer:
      "Sim. Temos ampla experiência em condomínios de alto padrão e trabalhamos com os manuais de obra, normativas e restrições construtivas de cada empreendimento.",
  },
  {
    question: "Trabalham com terrenos em aclive ou declive?",
    answer:
      "Sim. Terrenos com topografia acidentada exigem soluções específicas de fundação, contenção e implantação — nossa engenharia está preparada para transformar essas condições em ganho arquitetônico.",
  },
  {
    question: "Posso utilizar meu próprio arquiteto?",
    answer:
      "Podemos executar seu projeto de arquitetura preferido — nesse formato, entramos com engenharia, compatibilização, planejamento e execução da obra chave na mão.",
  },
  {
    question: "Vocês executam somente a obra ou também fazem o projeto?",
    answer:
      "Ambos. O modelo mais recomendado é o pacote completo (projeto + obra), pois garante coerência técnica e previsibilidade — mas atendemos também apenas execução.",
  },
  {
    question: "Quais tecnologias construtivas vocês utilizam?",
    answer:
      "Trabalhamos com Estrutura Metálica, Steel Frame, EPS, Blocos Estruturais, Concreto Armado e Alvenaria Convencional. Recomendamos a tecnologia ideal para cada projeto.",
  },
  {
    question: "Quanto tempo leva uma construção?",
    answer:
      "Depende do porte, terreno e tecnologia construtiva. Um projeto médio pode variar de 8 a 18 meses. Definimos o cronograma real após a análise técnica do seu caso.",
  },
  {
    question: "Vocês atendem quais regiões?",
    answer:
      "Atuamos em São Paulo capital, interior, litoral (Baixada Santista e Litoral Norte) e regiões serranas selecionadas. Avaliamos cada projeto sob demanda.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "Basta chamar no WhatsApp com informações do terreno e do que você imagina. Em até 24h úteis nossa equipe retorna com os próximos passos e uma análise inicial sem compromisso.",
  },
];
