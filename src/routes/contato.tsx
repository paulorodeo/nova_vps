import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { getRoute } from "@/config/routes";
import { siteConfig, whatsappUrl } from "@/config/site";
import { SiteLayout } from "@/layouts/SiteLayout";
import { buildBreadcrumbJsonLd, buildOrganizationJsonLd, buildRouteHead } from "@/lib/seo";
import heroHouse from "@/assets/hero-house.jpg";

const route = getRoute("/contato");

export const Route = createFileRoute("/contato")({
  head: () => ({
    ...buildRouteHead(route, { image: heroHouse }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildOrganizationJsonLd(heroHouse)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([{ name: route.label, path: route.path }]),
        ),
      },
    ],
  }),
  component: ContactPage,
});

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

function ContactPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  /**
   * Sem backend nesta etapa: a solicitação é encaminhada por WhatsApp
   * e o usuário é redirecionado para a página de agradecimento.
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = encodeURIComponent(
      `Olá! Meu nome é ${name}. Telefone: ${phone}. ${message}`.trim(),
    );
    window.open(
      `https://api.whatsapp.com/send?phone=${siteConfig.contact.phoneDigits}&text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
    void navigate({ to: "/obrigado" });
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre"
        highlight="a casa da sua vida."
        description="Envie as informações do seu terreno ou projeto. Nossa equipe retorna em até 24h úteis com os próximos passos."
        breadcrumb={[{ label: route.label, path: route.path }]}
      />

      <section className="py-24 bg-background">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-semibold text-navy mb-6">
                Canais diretos
              </h2>
              <ul className="space-y-5 text-foreground/75">
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  {siteConfig.contact.phoneLabel}
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-navy"
                  >
                    WhatsApp — atendimento 24h
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  {siteConfig.contact.email}
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  {siteConfig.contact.city}
                </li>
              </ul>

              <div className="rounded-xl overflow-hidden border border-border mt-8">
                <iframe
                  title={siteConfig.map.title}
                  src={siteConfig.map.embedUrl}
                  className="w-full h-64"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="font-display text-3xl font-semibold text-navy mb-2">
                Solicitar avaliação
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                Preencha os campos e continue a conversa pelo WhatsApp.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Sobre o projeto
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={inputClass}
                    placeholder="Conte sobre o terreno, a região e o que você imagina."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold text-gold-foreground px-7 py-4 text-sm font-semibold tracking-wide hover:bg-gold/90 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" /> Enviar solicitação
                </button>
                <p className="text-xs text-muted-foreground">
                  Ao enviar, você concorda com a nossa Política de Privacidade.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
