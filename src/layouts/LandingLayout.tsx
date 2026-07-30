import type { ReactNode } from "react";

import { Header, Footer, FloatingWhatsApp } from "@/blocks/landing";

/** Layout de landing pages (header fixo + footer + CTA flutuante). */
export function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
