import { Container } from "@/components/common/Container";
import { stats } from "@/constants/landing";

export function Stats() {
  return (
    <section aria-label="Números da Construtora Nova" className="bg-background border-y border-border">
      <Container className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-border">
        {stats.map((s, i) => (
          <div key={s.label} className={`py-10 text-center ${i > 1 ? "sm:border-t-0" : ""}`}>
            <div className="font-display text-4xl lg:text-5xl font-semibold text-navy">
              {s.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </Container>
    </section>
  );
}
