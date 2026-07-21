import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Phone, MessageCircle, Menu, X, MapPin, Mail, Instagram, Facebook,
  Compass, Hammer, Cpu, HeartHandshake, Eye, ShieldCheck,
  Home, TreePine, Waves, Mountain, ChevronDown, ArrowRight, Check, Star,
  Layers, Building2, Boxes, Ruler, Wrench, Sparkles,
} from "lucide-react";

import heroHouse from "@/assets/hero-house.jpg";
import casaResidencial from "@/assets/casa-residencial.jpg";
import casaCampo from "@/assets/casa-campo.jpg";
import casaPraia from "@/assets/casa-praia.jpg";
import ctaHouse from "@/assets/cta-house.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import logoNova from "@/assets/logo-nova.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Construtora Nova — Casas personalizadas de alto padrão | Projeto, engenharia e construção sob medida" },
      { name: "description", content: "Construtora especializada em casas personalizadas de alto padrão. Projetamos e construímos residências urbanas, casas de campo, praia e serra com engenharia, arquitetura sob medida e as principais tecnologias construtivas do mercado." },
      { name: "keywords", content: "construtora de casas, casa personalizada, alto padrão, casa de campo, casa de praia, casa na serra, steel frame, estrutura metálica, EPS, blocos estruturais, concreto armado, construção sob medida" },
      { property: "og:title", content: "Construtora Nova — Casas personalizadas de alto padrão" },
      { property: "og:description", content: "Projetos autorais e construção premium sob medida. Casas urbanas, de campo, de praia e na serra — com a tecnologia construtiva ideal para cada obra." },
      { property: "og:image", content: heroHouse },
      { property: "twitter:image", content: heroHouse },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "Construtora Nova",
          description: "Construtora especializada em casas personalizadas de alto padrão — projeto, engenharia e obra completa.",
          image: heroHouse,
          telephone: "+55 11 94100-2900",
          areaServed: "Brasil",
          address: { "@type": "PostalAddress", addressCountry: "BR", addressRegion: "SP" },
          sameAs: [
            "https://campo.construtoranova.com",
            "https://praia.construtoranova.com",
            "https://serra.construtoranova.com",
          ],
        }),
      },
    ],
  }),
  component: LandingPage,
});

const WHATSAPP = "https://api.whatsapp.com/send?phone=5511941002900&text=" +
  encodeURIComponent("Olá! Gostaria de receber mais informações sobre os projetos de casas sob medida da Construtora Nova.");

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Manifesto />
      <Diferenciais />
      <Especialidades />
      <Processo />
      <Tecnologia />
      <Galeria />
      <Depoimentos />
      <FAQ />
      <CTAFinal />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ------------------------------- HEADER ------------------------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: "Manifesto", href: "#manifesto" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Processo", href: "#processo" },
    { label: "Tecnologias", href: "#tecnologia" },
    { label: "Projetos", href: "#galeria" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/60">
      <div className="container-luxe flex items-center justify-between h-20">
        <a href="#top" className="flex items-center" aria-label="Construtora Nova - Início">
          <img src={logoNova} alt="Construtora Nova" className="h-12 md:h-14 w-auto object-contain" />
        </a>
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {nav.map(n => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/70 hover:text-navy transition-colors relative group">
              {n.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-navy text-navy-foreground px-5 py-2.5 text-sm font-medium hover:bg-navy/90 transition-all shadow-[0_8px_24px_-12px_oklch(0.235_0.055_260_/_0.5)] hover:-translate-y-0.5">
            <MessageCircle className="h-4 w-4" /> Falar agora
          </a>
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6 text-navy" /> : <Menu className="h-6 w-6 text-navy" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-luxe py-6 flex flex-col gap-4">
            {nav.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-base font-medium text-foreground/80 hover:text-navy">{n.label}</a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy text-navy-foreground px-5 py-3 text-sm font-medium mt-2">
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* -------------------------------- HERO -------------------------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroHouse} alt="Casa de alto padrão projetada pela Construtora Nova" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
      </div>
      <div className="container-luxe relative z-10 py-24 lg:py-32">
        <div className="max-w-2xl text-navy-foreground animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Arquitetura, engenharia e construção
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6">
            A casa que você imagina.<br />
            <span className="text-gold-gradient">A engenharia que ela merece.</span>
          </h1>
          <p className="text-lg lg:text-xl text-navy-foreground/85 max-w-xl leading-relaxed mb-4">
            Projetamos e construímos casas personalizadas de alto padrão — residências urbanas, refúgios de campo, casas de praia e retiros na serra.
          </p>
          <p className="text-base text-navy-foreground/70 max-w-xl leading-relaxed mb-10">
            Arquitetura autoral, engenharia de excelência e obra sob medida. Cada projeto nasce do seu terreno, do seu jeito de viver e do patrimônio que você quer construir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contato" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold text-gold-foreground px-7 py-4 text-sm font-semibold tracking-wide hover:bg-gold/90 transition-all hover:-translate-y-0.5 shadow-[0_20px_50px_-15px_oklch(0.74_0.13_80_/_0.6)]">
              Solicitar Projeto <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-foreground/10 text-navy-foreground border border-navy-foreground/30 backdrop-blur px-7 py-4 text-sm font-semibold tracking-wide hover:bg-navy-foreground/20 transition-all">
              <MessageCircle className="h-4 w-4" /> Falar com Especialista
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-navy-foreground/15">
            {[
              { t: "Projeto", s: "Autoral" },
              { t: "Engenharia", s: "Especializada" },
              { t: "Obra", s: "Chave na mão" },
            ].map(i => (
              <div key={i.t}>
                <div className="text-xs uppercase tracking-[0.18em] text-gold mb-1">{i.t}</div>
                <div className="text-sm font-medium text-navy-foreground/90">{i.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-navy-foreground/60 animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}

/* ------------------------------- STATS -------------------------------- */
function Stats() {
  const items = [
    { n: "+15", l: "Anos de experiência" },
    { n: "+120", l: "Projetos entregues" },
    { n: "+80", l: "Famílias atendidas" },
    { n: "4", l: "Regiões de atuação" },
  ];
  return (
    <section aria-label="Números da Construtora Nova" className="bg-background border-y border-border">
      <div className="container-luxe grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-border">
        {items.map((s, i) => (
          <div key={s.l} className={`py-10 text-center ${i > 1 ? "sm:border-t-0" : ""}`}>
            <div className="font-display text-4xl lg:text-5xl font-semibold text-navy">
              {s.n}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- MANIFESTO ----------------------------- */
function Manifesto() {
  return (
    <section id="manifesto" className="py-28 bg-secondary/40">
      <div className="container-luxe max-w-4xl">
        <SectionLabel>Manifesto</SectionLabel>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy leading-[1.15] mb-8">
          Cada terreno é único. <span className="text-gold-gradient">Cada família também.</span>
        </h2>
        <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
          <p>
            Nenhuma casa deveria começar por um catálogo. Nascem de conversas — sobre o
            terreno, a rotina, os hábitos, a luz do fim de tarde, a árvore que ninguém quer
            derrubar, a lembrança que se quer transformar em cotidiano.
          </p>
          <p>
            É por isso que projetamos cada casa como um projeto autoral: arquitetura pensada
            para o seu jeito de viver, engenharia dimensionada para o seu terreno e a
            tecnologia construtiva mais adequada — não a que está na moda.
          </p>
          <p className="text-navy font-medium">
            Não construímos apenas casas de alto padrão. Construímos patrimônio,
            memória e a certeza de que o lugar onde a sua vida acontece foi feito
            para durar gerações.
          </p>
        </div>
        <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gold">
          <span className="h-px w-8 bg-gold" /> Construtora Nova · desde 2008
        </div>
      </div>
    </section>
  );
}

/* --------------------------- DIFERENCIAIS ---------------------------- */
function Diferenciais() {
  const items = [
    { icon: Compass, t: "Projeto Autoral", d: "Arquitetura sob medida para o seu terreno, seu estilo de vida e seus objetivos de longo prazo." },
    { icon: Hammer, t: "Obra Chave na Mão", d: "Do estudo preliminar à entrega das chaves com uma única empresa responsável — sem intermediários." },
    { icon: Cpu, t: "Engenharia Especializada", d: "Estrutura, fundação, hidráulica e elétrica dimensionadas por profissionais próprios." },
    { icon: HeartHandshake, t: "Atendimento Consultivo", d: "Acompanhamento próximo, decisões compartilhadas e clareza técnica em cada etapa." },
    { icon: Eye, t: "Transparência Total", d: "Cronograma, planilhas, fotos e relatórios acessíveis. Você acompanha tudo em tempo real." },
    { icon: ShieldCheck, t: "Alto Padrão Construtivo", d: "Materiais selecionados, normas técnicas rigorosas e garantia estrutural certificada." },
  ];
  return (
    <section id="diferenciais" className="py-28 bg-background">
      <div className="container-luxe">
        <SectionLabel>Por que Construtora Nova</SectionLabel>
        <SectionTitle>Uma construtora que entrega <span className="text-gold-gradient">muito além da obra.</span></SectionTitle>
        <p className="max-w-2xl text-muted-foreground text-lg mb-16">
          Reunimos arquitetura, engenharia e gestão de obra em um único time. É assim que garantimos
          previsibilidade, qualidade e uma experiência tranquila do primeiro esboço à entrega das chaves.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i, idx) => (
            <div key={i.t} className="group relative p-8 bg-card rounded-xl border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-[0_30px_60px_-30px_oklch(0.235_0.055_260_/_0.25)] hover:-translate-y-1">
              <div className="absolute top-6 right-6 text-xs font-mono text-muted-foreground/40">0{idx + 1}</div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-navy text-gold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors">
                <i.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">{i.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- ESPECIALIDADES -------------------------- */
function Especialidades() {
  const items = [
    { icon: Home, img: casaResidencial, t: "Casas Urbanas", d: "Residências contemporâneas para moradia permanente — conforto, funcionalidade e valorização em lotes urbanos." },
    { icon: TreePine, img: casaCampo, t: "Casas de Campo", d: "Refúgios autorais integrados à paisagem, feitos para desacelerar sem abrir mão da sofisticação." },
    { icon: Waves, img: casaPraia, t: "Casas de Praia", d: "Projetos preparados para o litoral: alto padrão, resistência à maresia e máxima valorização patrimonial." },
    { icon: Mountain, img: g3, t: "Casas na Serra", d: "Retiros que dialogam com a montanha — vidro, madeira e pedra pensados para o clima e o horizonte." },
  ];
  return (
    <section id="especialidades" className="py-28 surface-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_20%,oklch(0.74_0.13_80)_0%,transparent_50%)]" />
      <div className="container-luxe relative">
        <SectionLabel light>Especialidades</SectionLabel>
        <h2 className="font-display text-4xl lg:text-5xl font-semibold text-navy-foreground mb-4 max-w-3xl">
          Quatro cenários. <span className="text-gold-gradient">Uma só excelência.</span>
        </h2>
        <p className="text-navy-foreground/70 text-lg max-w-2xl mb-16">
          Da rotina urbana ao silêncio das montanhas: projetamos cada casa com a mesma exigência técnica e a mesma escuta consultiva.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(i => (
            <div key={i.t} className="group relative overflow-hidden rounded-xl bg-navy-foreground/5 border border-navy-foreground/10">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={i.img} alt={`${i.t} — Construtora Nova`} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold text-navy mb-3">
                  <i.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-foreground mb-1.5">{i.t}</h3>
                <p className="text-navy-foreground/75 text-sm leading-relaxed">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PROCESSO ----------------------------- */
function Processo() {
  const steps = [
    { n: "01", t: "Escuta e Terreno", d: "Entendemos seu estilo de vida e fazemos a análise técnica do terreno, potencial construtivo e viabilidade." },
    { n: "02", t: "Projeto Autoral", d: "Arquitetura sob medida integrada à engenharia estrutural, hidráulica e elétrica." },
    { n: "03", t: "Planejamento", d: "Cronograma, orçamento detalhado, escolha de materiais e definição da tecnologia construtiva ideal." },
    { n: "04", t: "Execução", d: "Obra acompanhada por engenheiros próprios, com relatórios e fotos periódicas de cada etapa." },
    { n: "05", t: "Entrega das Chaves", d: "Vistoria final, ajustes técnicos e a alegria de receber a casa que nasceu do seu sonho." },
  ];
  return (
    <section id="processo" className="py-28 bg-background">
      <div className="container-luxe">
        <SectionLabel>Como funciona</SectionLabel>
        <SectionTitle>Um processo claro do <span className="text-gold-gradient">terreno às chaves.</span></SectionTitle>
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((s) => (
              <div key={s.n} className="relative text-center lg:px-2">
                <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-secondary" />
                  <div className="absolute inset-2 rounded-full border border-gold/30 bg-background flex items-center justify-center">
                    <span className="font-display text-2xl text-navy font-semibold">{s.n}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TECNOLOGIA ---------------------------- */
function Tecnologia() {
  const techs = [
    { icon: Building2, t: "Estrutura Metálica", d: "Vãos livres, velocidade de execução e liberdade arquitetônica para projetos contemporâneos." },
    { icon: Layers, t: "Steel Frame", d: "Sistema leve e industrializado com excelente desempenho térmico, acústico e precisão dimensional." },
    { icon: Boxes, t: "EPS com Bloco Estrutural", d: "Isolamento térmico superior, redução de resíduos e obras significativamente mais rápidas." },
    { icon: Ruler, t: "Blocos Estruturais", d: "Alvenaria estruturada, racional e econômica, com ótimo custo-benefício em obras de médio porte." },
    { icon: ShieldCheck, t: "Concreto Armado", d: "Solidez e durabilidade consagradas — a escolha certa para grandes vãos e cargas elevadas." },
    { icon: Wrench, t: "Alvenaria Convencional", d: "A tradição executada com rigor técnico, para quem busca o padrão consagrado do mercado." },
  ];
  return (
    <section id="tecnologia" className="py-28 bg-secondary">
      <div className="container-luxe">
        <div className="max-w-3xl">
          <SectionLabel>Tecnologias construtivas</SectionLabel>
          <SectionTitle>A tecnologia certa para <span className="text-gold-gradient">cada projeto.</span></SectionTitle>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Não defendemos um único sistema construtivo — defendemos o sistema
            <strong className="text-navy font-semibold"> mais adequado para o seu projeto</strong>.
            Analisamos terreno, clima, prazo, orçamento e desempenho para recomendar a solução
            que entrega o melhor resultado técnico e econômico.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {techs.map((t) => (
            <div key={t.t} className="group relative p-7 bg-card rounded-xl border border-border hover:border-gold/40 transition-all hover:-translate-y-0.5 hover:shadow-[0_25px_50px_-25px_oklch(0.235_0.055_260_/_0.25)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold mb-5 group-hover:bg-gold group-hover:text-navy transition-colors">
                <t.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy mb-2">{t.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-card border border-border p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-navy shrink-0">
            <Sparkles className="h-6 w-6 text-gold" strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-navy mb-1.5">
              Consultoria construtiva sem custo
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Envie seu terreno e ideia inicial. Nossa engenharia indica a tecnologia construtiva
              mais indicada, com comparativo de prazo, desempenho e investimento.
            </p>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-semibold hover:bg-navy/90 transition-all shrink-0">
            <MessageCircle className="h-4 w-4" /> Solicitar análise
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ GALERIA ------------------------------ */
type Cat = "Todos" | "Urbana" | "Campo" | "Praia" | "Serra";
function Galeria() {
  const items: { img: string; t: string; tag: Exclude<Cat, "Todos"> }[] = [
    { img: g2, t: "Villa Atlântica", tag: "Praia" },
    { img: g1, t: "Residência Mont", tag: "Urbana" },
    { img: g3, t: "Refúgio Serra", tag: "Serra" },
    { img: g5, t: "Casa Linear", tag: "Urbana" },
    { img: g4, t: "Mirante do Mar", tag: "Praia" },
    { img: casaCampo, t: "Retiro do Vale", tag: "Campo" },
    { img: g6, t: "Casa Zen", tag: "Urbana" },
    { img: casaCampo, t: "Fazenda Contemporânea", tag: "Campo" },
  ];
  const cats: Cat[] = ["Todos", "Urbana", "Campo", "Praia", "Serra"];
  const [active, setActive] = useState<Cat>("Todos");
  const filtered = useMemo(
    () => (active === "Todos" ? items : items.filter(i => i.tag === active)),
    [active],
  );

  return (
    <section id="galeria" className="py-28 bg-background">
      <div className="container-luxe">
        <SectionLabel>Portfólio</SectionLabel>
        <SectionTitle>Projetos autorais, <span className="text-gold-gradient">construção premium.</span></SectionTitle>
        <p className="max-w-2xl text-muted-foreground text-lg mb-10">
          Uma seleção de projetos que traduzem a nossa filosofia: arquitetura contemporânea,
          engenharia de excelência e integração com a paisagem.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                active === c
                  ? "bg-navy text-navy-foreground border-navy"
                  : "bg-transparent text-foreground/70 border-border hover:border-gold/50 hover:text-navy"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {filtered.map((p) => (
            <a key={p.t} href={WHATSAPP} target="_blank" rel="noopener noreferrer"
               className="group relative overflow-hidden rounded-xl bg-secondary">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={`${p.t} — projeto ${p.tag}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-navy-foreground translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-xs uppercase tracking-[0.2em] text-gold mb-1">{p.tag}</div>
                <div className="font-display text-base sm:text-lg font-semibold">{p.t}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- DEPOIMENTOS ---------------------------- */
function Depoimentos() {
  const items = [
    { n: "Marina e Rafael Costa", r: "Residência em Alphaville", t: "Fizeram exatamente a casa que sonhamos. Acompanhamento impecável do projeto à entrega. Recomendamos sem hesitar." },
    { n: "Eduardo Almeida", r: "Casa de campo, Itu", t: "Profissionalismo e transparência em cada etapa. A casa superou nossas expectativas em qualidade e acabamento." },
    { n: "Família Mendonça", r: "Casa de praia, Maresias", t: "Da escolha do terreno à entrega das chaves, tivemos suporte completo. Construtora de verdade, com gente que se importa." },
  ];
  return (
    <section className="py-28 bg-secondary">
      <div className="container-luxe">
        <SectionLabel>Prova social</SectionLabel>
        <SectionTitle>Quem construiu com a Nova, <span className="text-gold-gradient">recomenda.</span></SectionTitle>
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {items.map(d => (
            <div key={d.n} className="bg-card rounded-xl p-8 border border-border hover:shadow-[var(--shadow-soft)] transition-shadow">
              <div className="flex gap-1 text-gold mb-5">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-8 italic">"{d.t}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-navy to-navy/60 text-navy-foreground flex items-center justify-center font-display font-semibold">
                  {d.n.split(" ")[0][0]}{d.n.split(" ").slice(-1)[0][0]}
                </div>
                <div>
                  <div className="font-semibold text-navy">{d.n}</div>
                  <div className="text-xs text-muted-foreground">{d.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- FAQ -------------------------------- */
function FAQ() {
  const items = [
    { q: "Vocês constroem em condomínios fechados?", a: "Sim. Temos ampla experiência em condomínios de alto padrão e trabalhamos com os manuais de obra, normativas e restrições construtivas de cada empreendimento." },
    { q: "Trabalham com terrenos em aclive ou declive?", a: "Sim. Terrenos com topografia acidentada exigem soluções específicas de fundação, contenção e implantação — nossa engenharia está preparada para transformar essas condições em ganho arquitetônico." },
    { q: "Posso utilizar meu próprio arquiteto?", a: "Podemos executar seu projeto de arquitetura preferido — nesse formato, entramos com engenharia, compatibilização, planejamento e execução da obra chave na mão." },
    { q: "Vocês executam somente a obra ou também fazem o projeto?", a: "Ambos. O modelo mais recomendado é o pacote completo (projeto + obra), pois garante coerência técnica e previsibilidade — mas atendemos também apenas execução." },
    { q: "Quais tecnologias construtivas vocês utilizam?", a: "Trabalhamos com Estrutura Metálica, Steel Frame, EPS, Blocos Estruturais, Concreto Armado e Alvenaria Convencional. Recomendamos a tecnologia ideal para cada projeto." },
    { q: "Quanto tempo leva uma construção?", a: "Depende do porte, terreno e tecnologia construtiva. Um projeto médio pode variar de 8 a 18 meses. Definimos o cronograma real após a análise técnica do seu caso." },
    { q: "Vocês atendem quais regiões?", a: "Atuamos em São Paulo capital, interior, litoral (Baixada Santista e Litoral Norte) e regiões serranas selecionadas. Avaliamos cada projeto sob demanda." },
    { q: "Como funciona o orçamento?", a: "Basta chamar no WhatsApp com informações do terreno e do que você imagina. Em até 24h úteis nossa equipe retorna com os próximos passos e uma análise inicial sem compromisso." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 bg-background">
      <div className="container-luxe max-w-4xl">
        <SectionLabel>Perguntas frequentes</SectionLabel>
        <SectionTitle>Tudo o que você precisa <span className="text-gold-gradient">saber.</span></SectionTitle>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => (
            <div key={i} className={`rounded-xl border transition-all ${open === i ? "border-gold/50 bg-secondary/50" : "border-border bg-card"}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 flex items-center justify-between gap-4">
                <span className="font-semibold text-navy text-lg">{it.q}</span>
                <ChevronDown className={`h-5 w-5 text-navy shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-up">{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CTA FINAL ---------------------------- */
function CTAFinal() {
  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={ctaHouse} alt="Casa moderna ao entardecer" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
      </div>
      <div className="container-luxe relative z-10 text-center max-w-3xl">
        <span className="gold-divider mx-auto mb-8" />
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-foreground mb-6 leading-tight">
          O seu terreno já existe.<br />
          <span className="text-gold-gradient">Falta a casa da sua vida.</span>
        </h2>
        <p className="text-navy-foreground/85 text-lg lg:text-xl mb-10 max-w-xl mx-auto">
          Converse hoje com nossa equipe. Avaliação técnica gratuita, sem compromisso — e uma
          proposta de projeto pensada exclusivamente para você.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-gold text-gold-foreground px-9 py-5 text-base font-semibold tracking-wide hover:bg-gold/90 transition-all hover:-translate-y-0.5 shadow-[0_25px_60px_-15px_oklch(0.74_0.13_80_/_0.7)]">
          <MessageCircle className="h-5 w-5" /> Falar com Especialista
        </a>
        <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-navy-foreground/70 text-sm">
          <span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Avaliação técnica gratuita</span>
          <span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Resposta em até 24h úteis</span>
          <span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Sem compromisso</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FOOTER ------------------------------ */
function Footer() {
  return (
    <footer className="surface-navy pt-20 pb-8 border-t border-navy-foreground/10">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoNova} alt="Construtora Nova" className="h-14 w-auto object-contain brightness-0 invert" />
              <div>
                <div className="font-display text-xl font-semibold text-navy-foreground">Construtora Nova</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Casas sob medida</div>
              </div>
            </div>
            <p className="text-navy-foreground/65 text-sm leading-relaxed">
              Construímos casas personalizadas de alto padrão — residências urbanas, casas de campo,
              casas de praia e retiros na serra. Arquitetura, engenharia e obra chave na mão.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook].map((I, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full border border-navy-foreground/20 flex items-center justify-center text-navy-foreground/70 hover:text-gold hover:border-gold/50 transition-colors" aria-label="Rede social">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-5">Especialidades</h4>
            <ul className="space-y-3 text-sm text-navy-foreground/70">
              <li><a href="#especialidades" className="hover:text-gold transition-colors">Casas Urbanas</a></li>
              <li><a href="https://campo.construtoranova.com" className="hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">Casas de Campo</a></li>
              <li><a href="https://praia.construtoranova.com" className="hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">Casas de Praia</a></li>
              <li><a href="https://serra.construtoranova.com" className="hover:text-gold transition-colors" target="_blank" rel="noopener noreferrer">Casas na Serra</a></li>
              <li><a href="#tecnologia" className="hover:text-gold transition-colors">Tecnologias construtivas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-5">Contato</h4>
            <ul className="space-y-4 text-sm text-navy-foreground/70">
              <li className="flex gap-3"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /> (11) 94100-2900</li>
              <li className="flex gap-3"><MessageCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp 24h</a>
              </li>
              <li className="flex gap-3"><Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" /> contato@construtoranova.com.br</li>
              <li className="flex gap-3"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> São Paulo — SP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-5">Onde estamos</h4>
            <div className="rounded-lg overflow-hidden border border-navy-foreground/10">
              <iframe
                title="Mapa da Construtora Nova"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6606%2C-23.5613%2C-46.6500%2C-23.5510&layer=mapnik"
                className="w-full h-40 grayscale opacity-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-navy-foreground/50">
          <div>© {new Date().getFullYear()} Construtora Nova. Todos os direitos reservados.</div>
          <div className="flex gap-6"><a href="#" className="hover:text-gold">Privacidade</a><a href="#" className="hover:text-gold">Termos</a></div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------- FLOATING WHATSAPP ------------------------- */
function FloatingWhatsApp() {
  return (
    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
       className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gold text-navy flex items-center justify-center shadow-[0_20px_50px_-10px_oklch(0.74_0.13_80_/_0.6)] hover:scale-110 transition-transform">
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full animate-ping bg-gold/40" />
    </a>
  );
}

/* ------------------------------- HELPERS ----------------------------- */
function SectionLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-5 text-xs uppercase tracking-[0.3em] ${light ? "text-gold" : "text-gold"}`}>
      <span className="h-px w-8 bg-gold" />
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl lg:text-5xl font-semibold text-navy mb-4 max-w-3xl leading-[1.1]">
      {children}
    </h2>
  );
}
