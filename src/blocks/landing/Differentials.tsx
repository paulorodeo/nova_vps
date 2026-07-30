import { Container } from "@/components/common/Container";
import { SectionLabel, SectionTitle } from "@/components/common/Section";
import { differentials } from "@/constants/landing";

export function Differentials() {
  return (
    <section id="diferenciais" className="py-28 bg-background">
      <Container>
        <SectionLabel>Por que Construtora Nova</SectionLabel>
        <SectionTitle>Uma construtora que entrega <span className="text-gold-gradient">muito além da obra.</span></SectionTitle>
        <p className="max-w-2xl text-muted-foreground text-lg mb-16">
          Reunimos arquitetura, engenharia e gestão de obra em um único time. É assim que garantimos
          previsibilidade, qualidade e uma experiência tranquila do primeiro esboço à entrega das chaves.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((i, idx) => (
            <div key={i.title} className="group relative p-8 bg-card rounded-xl border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-[0_30px_60px_-30px_oklch(0.235_0.055_260_/_0.25)] hover:-translate-y-1">
              <div className="absolute top-6 right-6 text-xs font-mono text-muted-foreground/40">0{idx + 1}</div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-navy text-gold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors">
                <i.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">{i.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{i.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
