import { Link } from "@tanstack/react-router";
import { MessageCircle, Menu, X } from "lucide-react";

import logoNova from "@/assets/logo-nova.png";
import { Container } from "@/components/common/Container";
import { mainNav } from "@/config/navigation";
import { siteConfig, whatsappUrl } from "@/config/site";
import { useDisclosure } from "@/hooks/useDisclosure";

export function Header() {
  const { isOpen, toggle, close } = useDisclosure();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/60">
      <Container className="flex items-center justify-between h-20">
        <Link to="/" className="flex items-center" aria-label={`${siteConfig.name} - Início`}>
          <img src={logoNova} alt={siteConfig.name} className="h-12 md:h-14 w-auto object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {mainNav.map((n) => (
            <Link
              key={n.href}
              to={n.href}
              activeOptions={{ exact: n.href === "/" }}
              className="text-sm font-medium text-foreground/70 hover:text-navy transition-colors relative group data-[status=active]:text-navy"
            >
              {n.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-gold transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-navy text-navy-foreground px-5 py-2.5 text-sm font-medium hover:bg-navy/90 transition-all shadow-[0_8px_24px_-12px_oklch(0.235_0.055_260_/_0.5)] hover:-translate-y-0.5">
            <MessageCircle className="h-4 w-4" /> Falar agora
          </a>
        </div>
        <button className="lg:hidden p-2" onClick={toggle} aria-label="Menu">
          {isOpen ? <X className="h-6 w-6 text-navy" /> : <Menu className="h-6 w-6 text-navy" />}
        </button>
      </Container>
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <Container className="py-6 flex flex-col gap-4">
            {mainNav.map((n) => (
              <Link key={n.href} to={n.href} onClick={close} className="text-base font-medium text-foreground/80 hover:text-navy">{n.label}</Link>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy text-navy-foreground px-5 py-3 text-sm font-medium mt-2">
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
