import { Star } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionLabel, SectionTitle } from "@/components/common/Section";
import { testimonials } from "@/constants/landing";
import { getInitials } from "@/utils/format";

export function Testimonials() {
  return (
    <section className="py-28 bg-secondary">
      <Container>
        <SectionLabel>Prova social</SectionLabel>
        <SectionTitle>Quem construiu com a Nova, <span className="text-gold-gradient">recomenda.</span></SectionTitle>
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((d) => (
            <div key={d.name} className="bg-card rounded-xl p-8 border border-border hover:shadow-[var(--shadow-soft)] transition-shadow">
              <div className="flex gap-1 text-gold mb-5">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-8 italic">"{d.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-navy to-navy/60 text-navy-foreground flex items-center justify-center font-display font-semibold">
                  {getInitials(d.name)}
                </div>
                <div>
                  <div className="font-semibold text-navy">{d.name}</div>
                  <div className="text-xs text-muted-foreground">{d.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
