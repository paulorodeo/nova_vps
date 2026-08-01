import type { ReactNode } from "react";

import { PageHero } from "@/components/common/PageHero";
import { Prose, ProseContainer } from "@/components/common/Prose";
import { SiteLayout } from "@/layouts/SiteLayout";
import { formatDate } from "@/utils/format";
import type { LegalDocument } from "@/types/content";

/**
 * Layout compartilhado das páginas legais (privacidade, termos, cookies, LGPD).
 * Mantém a mesma linguagem visual da Home.
 */
export function LegalLayout({
  eyebrow,
  title,
  highlight,
  document,
  lastUpdate,
  footer,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  document: LegalDocument;
  lastUpdate: string;
  footer?: ReactNode;
}) {
  return (
    <SiteLayout>
      <PageHero eyebrow={eyebrow} title={title} highlight={highlight} description={document.intro} />
      <ProseContainer>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">
          Última atualização: {formatDate(lastUpdate)}
        </p>
        <Prose sections={document.sections} />
        {footer ? <div className="mt-12">{footer}</div> : null}
      </ProseContainer>
    </SiteLayout>
  );
}
