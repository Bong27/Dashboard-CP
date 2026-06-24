export function isValidUkIban(raw: string): boolean {
  const v = raw.replace(/\s/g, '').toUpperCase();
  return /^[A-Z]{2}[A-Z0-9]{12,32}$/.test(v);
}
