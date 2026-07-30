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
