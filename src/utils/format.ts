/** Iniciais do primeiro e do último nome (ex.: "Marina e Rafael Costa" → "MC"). */
export function getInitials(fullName: string) {
  const parts = fullName.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return `${first}${last}`;
}

export function currentYear() {
  return new Date().getFullYear();
}

/** Formata uma data ISO (YYYY-MM-DD) no padrão brasileiro. */
export function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month - 1, day)),
  );
}
