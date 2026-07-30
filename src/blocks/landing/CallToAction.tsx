import { Check, MessageCircle } from "lucide-react";

import ctaHouse from "@/assets/cta-house.jpg";
import { Container } from "@/components/common/Container";
import { whatsappUrl } from "@/config/site";

export function CallToAction() {
  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={ctaHouse} alt="Casa moderna ao entardecer" loading="lazy" decoding="async" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
      </div>
      <Container className="relative z-10 text-center max-w-3xl">
        <span className="gold-divider mx-auto mb-8" />
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-foreground mb-6 leading-tight">
          O seu terreno já existe.<br />
          <span className="text-gold-gradient">Falta a casa da sua vida.</span>
        </h2>
        <p className="text-navy-foreground/85 text-lg lg:text-xl mb-10 max-w-xl mx-auto">
          Converse hoje com nossa equipe. Avaliação técnica gratuita, sem compromisso — e uma
          proposta de projeto pensada exclusivamente para você.
        </p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-gold text-gold-foreground px-9 py-5 text-base font-semibold tracking-wide hover:bg-gold/90 transition-all hover:-translate-y-0.5 shadow-[0_25px_60px_-15px_oklch(0.74_0.13_80_/_0.7)]">
          <MessageCircle className="h-5 w-5" /> Falar com Especialista
        </a>
        <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 text-navy-foreground/70 text-sm">
          <span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Avaliação técnica gratuita</span>
          <span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Resposta em até 24h úteis</span>
          <span className="flex items-center gap-2"><Check className="h-4 w-4 text-gold" /> Sem compromisso</span>
        </div>
      </Container>
    </section>
  );
}
