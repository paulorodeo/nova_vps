import { Container } from "@/components/common/Container";
import { SectionLabel } from "@/components/common/Section";
import { specialties } from "@/constants/landing";

export function Specialties() {
  return (
    <section id="especialidades" className="py-28 surface-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_20%,oklch(0.74_0.13_80)_0%,transparent_50%)]" />
      <Container className="relative">
        <SectionLabel light>Especialidades</SectionLabel>
        <h2 className="font-display text-4xl lg:text-5xl font-semibold text-navy-foreground mb-4 max-w-3xl">
          Quatro cenários. <span className="text-gold-gradient">Uma só excelência.</span>
        </h2>
        <p className="text-navy-foreground/70 text-lg max-w-2xl mb-16">
          Da rotina urbana ao silêncio das montanhas: projetamos cada casa com a mesma exigência técnica e a mesma escuta consultiva.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((i) => (
            <div key={i.title} className="group relative overflow-hidden rounded-xl bg-navy-foreground/5 border border-navy-foreground/10">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={i.image} alt={`${i.title} — Construtora Nova`} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold text-navy mb-3">
                  <i.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-foreground mb-1.5">{i.title}</h3>
                <p className="text-navy-foreground/75 text-sm leading-relaxed">{i.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
