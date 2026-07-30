import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Wrapper de largura máxima do design system (classe `container-luxe`). */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("container-luxe", className)}>{children}</div>;
}
