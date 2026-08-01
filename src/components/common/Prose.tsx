import type { ReactNode } from "react";

import { Container } from "@/components/common/Container";
import type { ContentSection as ContentSectionType } from "@/types/content";

/** Bloco de texto longo com a tipografia da marca (páginas institucionais/legais). */
export function Prose({ sections }: { sections: ContentSectionType[] }) {
  return (
    <div className="space-y-12">
      {sections.map((s) => (
        <section key={s.heading}>
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-navy mb-4">
            {s.heading}
          </h2>
          <div className="space-y-4">
            {s.paragraphs.map((p) => (
              <p key={p} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          {s.bullets ? (
            <ul className="mt-5 space-y-2.5">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}

/** Coluna de leitura centralizada usada pelas páginas de texto. */
export function ProseContainer({ children }: { children: ReactNode }) {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="max-w-3xl">{children}</div>
      </Container>
    </section>
  );
}
