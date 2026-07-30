import { Container } from "@/components/common/Container";
import { SectionLabel } from "@/components/common/Section";
import { siteConfig } from "@/config/site";

export function Manifesto() {
  return (
    <section id="manifesto" className="py-28 bg-secondary/40">
      <Container className="max-w-4xl">
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
          <span className="h-px w-8 bg-gold" /> {siteConfig.name} · desde {siteConfig.foundedYear}
        </div>
      </Container>
    </section>
  );
}
