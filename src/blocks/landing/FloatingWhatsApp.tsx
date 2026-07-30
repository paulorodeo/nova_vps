import { MessageCircle } from "lucide-react";

import { whatsappUrl } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
       className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gold text-navy flex items-center justify-center shadow-[0_20px_50px_-10px_oklch(0.74_0.13_80_/_0.6)] hover:scale-110 transition-transform">
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full animate-ping bg-gold/40" />
    </a>
  );
}
