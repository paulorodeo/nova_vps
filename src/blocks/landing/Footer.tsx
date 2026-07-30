import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import logoNova from "@/assets/logo-nova.png";
import { Container } from "@/components/common/Container";
import { footerSpecialties, legalLinks } from "@/config/navigation";
import { siteConfig, whatsappUrl } from "@/config/site";
import { currentYear } from "@/utils/format";

export function Footer() {
  return (
    <footer className="surface-navy pt-20 pb-8 border-t border-navy-foreground/10">
      <Container>
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoNova} alt={siteConfig.name} loading="lazy" className="h-14 w-auto object-contain brightness-0 invert" />
              <div>
                <div className="font-display text-xl font-semibold text-navy-foreground">{siteConfig.name}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{siteConfig.tagline}</div>
              </div>
            </div>
            <p className="text-navy-foreground/65 text-sm leading-relaxed">
              Construímos casas personalizadas de alto padrão — residências urbanas, casas de campo,
              casas de praia e retiros na serra. Arquitetura, engenharia e obra chave na mão.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook].map((I, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full border border-navy-foreground/20 flex items-center justify-center text-navy-foreground/70 hover:text-gold hover:border-gold/50 transition-colors" aria-label="Rede social">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-5">Especialidades</h4>
            <ul className="space-y-3 text-sm text-navy-foreground/70">
              {footerSpecialties.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="hover:text-gold transition-colors"
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-5">Contato</h4>
            <ul className="space-y-4 text-sm text-navy-foreground/70">
              <li className="flex gap-3"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /> {siteConfig.contact.phoneLabel}</li>
              <li className="flex gap-3"><MessageCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp 24h</a>
              </li>
              <li className="flex gap-3"><Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" /> {siteConfig.contact.email}</li>
              <li className="flex gap-3"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" /> {siteConfig.contact.city}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold mb-5">Onde estamos</h4>
            <div className="rounded-lg overflow-hidden border border-navy-foreground/10">
              <iframe
                title={siteConfig.map.title}
                src={siteConfig.map.embedUrl}
                className="w-full h-40 grayscale opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-navy-foreground/50">
          <div>© {currentYear()} {siteConfig.name}. Todos os direitos reservados.</div>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-gold">{l.label}</a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
