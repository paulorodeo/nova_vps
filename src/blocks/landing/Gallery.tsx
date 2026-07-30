import { useMemo, useState } from "react";

import { Container } from "@/components/common/Container";
import { SectionLabel, SectionTitle } from "@/components/common/Section";
import { galleryFilters, projects } from "@/constants/landing";
import { whatsappUrl } from "@/config/site";
import type { GalleryFilter } from "@/types/landing";

export function Gallery() {
  const [active, setActive] = useState<GalleryFilter>("Todos");
  const filtered = useMemo(
    () => (active === "Todos" ? projects : projects.filter((i) => i.tag === active)),
    [active],
  );

  return (
    <section id="galeria" className="py-28 bg-background">
      <Container>
        <SectionLabel>Portfólio</SectionLabel>
        <SectionTitle>Projetos autorais, <span className="text-gold-gradient">construção premium.</span></SectionTitle>
        <p className="max-w-2xl text-muted-foreground text-lg mb-10">
          Uma seleção de projetos que traduzem a nossa filosofia: arquitetura contemporânea,
          engenharia de excelência e integração com a paisagem.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {galleryFilters.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                active === c
                  ? "bg-navy text-navy-foreground border-navy"
                  : "bg-transparent text-foreground/70 border-border hover:border-gold/50 hover:text-navy"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {filtered.map((p) => (
            <a key={p.title} href={whatsappUrl} target="_blank" rel="noopener noreferrer"
               className="group relative overflow-hidden rounded-xl bg-secondary">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={`${p.title} — projeto ${p.tag}`} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-navy-foreground translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-xs uppercase tracking-[0.2em] text-gold mb-1">{p.tag}</div>
                <div className="font-display text-base sm:text-lg font-semibold">{p.title}</div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
