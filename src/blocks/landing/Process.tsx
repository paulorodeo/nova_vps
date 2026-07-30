import { Container } from "@/components/common/Container";
import { SectionLabel, SectionTitle } from "@/components/common/Section";
import { processSteps } from "@/constants/landing";

export function Process() {
  return (
    <section id="processo" className="py-28 bg-background">
      <Container>
        <SectionLabel>Como funciona</SectionLabel>
        <SectionTitle>Um processo claro do <span className="text-gold-gradient">terreno às chaves.</span></SectionTitle>
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((s) => (
              <div key={s.step} className="relative text-center lg:px-2">
                <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-secondary" />
                  <div className="absolute inset-2 rounded-full border border-gold/30 bg-background flex items-center justify-center">
                    <span className="font-display text-2xl text-navy font-semibold">{s.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
