import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionLabel, SectionTitle } from "@/components/common/Section";
import { faqItems } from "@/constants/landing";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 bg-background">
      <Container className="max-w-4xl">
        <SectionLabel>Perguntas frequentes</SectionLabel>
        <SectionTitle>Tudo o que você precisa <span className="text-gold-gradient">saber.</span></SectionTitle>
        <div className="mt-12 space-y-3">
          {faqItems.map((it, i) => (
            <div key={it.question} className={`rounded-xl border transition-all ${open === i ? "border-gold/50 bg-secondary/50" : "border-border bg-card"}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 flex items-center justify-between gap-4" aria-expanded={open === i}>
                <span className="font-semibold text-navy text-lg">{it.question}</span>
                <ChevronDown className={`h-5 w-5 text-navy shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-up">{it.answer}</div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
