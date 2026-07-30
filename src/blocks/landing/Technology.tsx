import { MessageCircle, Sparkles } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionLabel, SectionTitle } from "@/components/common/Section";
import { technologies } from "@/constants/landing";
import { whatsappUrl } from "@/config/site";

export function Technology() {
  return (
    <section id="tecnologia" className="py-28 bg-secondary">
      <Container>
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
          {technologies.map((t) => (
            <div key={t.title} className="group relative p-7 bg-card rounded-xl border border-border hover:border-gold/40 transition-all hover:-translate-y-0.5 hover:shadow-[0_25px_50px_-25px_oklch(0.235_0.055_260_/_0.25)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold mb-5 group-hover:bg-gold group-hover:text-navy transition-colors">
                <t.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
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
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-navy text-navy-foreground px-6 py-3 text-sm font-semibold hover:bg-navy/90 transition-all shrink-0">
            <MessageCircle className="h-4 w-4" /> Solicitar análise
          </a>
        </div>
      </Container>
    </section>
  );
}
