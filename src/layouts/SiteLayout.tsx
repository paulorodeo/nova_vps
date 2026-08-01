import type { ReactNode } from "react";

import { Header, Footer, FloatingWhatsApp } from "@/blocks/landing";

/** Layout base de todas as páginas do site (header fixo + footer + CTA flutuante). */
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
