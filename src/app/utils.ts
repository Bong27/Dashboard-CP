/** Truncate a label to maxChars, trimming any trailing space before the ellipsis. */
export function truncateLabel(label: string, maxChars = 14): string {
  if (label.length <= maxChars) return label;
  return label.slice(0, maxChars).trimEnd() + '…';
}

// Truncate IBAN/account number for space-constrained display: XXXXX...XXX
export function truncateIban(iban: string, head = 5, tail = 3): string {
  const s = iban.replace(/\s/g, '');
  if (s.length <= head + tail + 3) return s;
  return `${s.slice(0, head)}...${s.slice(-tail)}`;
}

/** IBAN or account number — whichever was provided when the bank was added. */
export function getBankAccountIdentifier(bank: { iban: string; accountNumber: string }): string {
  const iban = bank.iban.replace(/\s/g, '').trim();
  if (iban) return iban;
  return bank.accountNumber.trim();
}
