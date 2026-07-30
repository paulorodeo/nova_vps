import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";

import heroHouse from "@/assets/hero-house.jpg";
import { Container } from "@/components/common/Container";
import { heroHighlights } from "@/constants/landing";
import { whatsappUrl } from "@/config/site";

export function Hero() {
  return (
    <section id="top" className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroHouse} alt="Casa de alto padrão projetada pela Construtora Nova" className="w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
      </div>
      <Container className="relative z-10 py-24 lg:py-32">
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
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-foreground/10 text-navy-foreground border border-navy-foreground/30 backdrop-blur px-7 py-4 text-sm font-semibold tracking-wide hover:bg-navy-foreground/20 transition-all">
              <MessageCircle className="h-4 w-4" /> Falar com Especialista
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-navy-foreground/15">
            {heroHighlights.map((i) => (
              <div key={i.title}>
                <div className="text-xs uppercase tracking-[0.18em] text-gold mb-1">{i.title}</div>
                <div className="text-sm font-medium text-navy-foreground/90">{i.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-navy-foreground/60 animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
