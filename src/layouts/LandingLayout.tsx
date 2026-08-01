import type { ReactNode } from "react";

import { SiteLayout } from "@/layouts/SiteLayout";

/**
 * Layout de landing pages.
 * Mantido como alias de `SiteLayout` para preservar a Home inalterada.
 */
export function LandingLayout({ children }: { children: ReactNode }) {
  return <SiteLayout>{children}</SiteLayout>;
}
