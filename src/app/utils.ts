// Truncate IBAN/account number for space-constrained display: XXXXX...XXX
export function truncateIban(iban: string, head = 5, tail = 3): string {
  const s = iban.replace(/\s/g, '');
  if (s.length <= head + tail + 3) return s;
  return `${s.slice(0, head)}...${s.slice(-tail)}`;
}
