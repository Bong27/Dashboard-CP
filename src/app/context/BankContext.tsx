// ─────────────────────────────────────────────────────────────────────────────
// BankContext — single source of truth for all bank account data
// ─────────────────────────────────────────────────────────────────────────────
import { createContext, useContext, useState, ReactNode } from 'react';

export type BankStatus = 'approved' | 'under_review';

export type BankEntry = {
  id: string;
  label: string;
  bankName: string;
  holder: string;
  iban: string;
  accountNumber: string;
  bic: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  status: BankStatus;
};

export const BIC_TO_BANK: Record<string, string> = {
  TRWIGB2LXXX: 'Wise Payments Limited',
  BARCGB22XXX: 'Barclays Bank PLC',
  MIDLGB22XXX: 'HSBC UK Bank PLC',
};

const INITIAL_BANKS: BankEntry[] = [
  { id: 'wise',     label: 'Wise',     bankName: 'Wise Payments Limited', holder: 'Acme Corp', iban: 'GB97 TRWI 2308 0120 5078 10', accountNumber: '20507810', bic: 'TRWIGB2LXXX', address: 'Flat 4, 25 Baker Street', city: 'London', postalCode: 'W1U 8EE',  country: 'United Kingdom', status: 'approved' },
  { id: 'barclays', label: 'Barclays', bankName: 'Barclays Bank PLC',     holder: 'Acme Corp', iban: 'GB29 NWBK 6016 1331 9268 19', accountNumber: '31926819', bic: 'BARCGB22XXX', address: '1 Churchill Place',     city: 'London', postalCode: 'E14 5HP', country: 'United Kingdom', status: 'approved' },
  { id: 'hsbc',     label: 'HSBC',     bankName: 'HSBC UK Bank PLC',      holder: 'Acme Corp', iban: 'GB94 MIDL 4005 1512 3456 78', accountNumber: '12345678', bic: 'MIDLGB22XXX', address: '8 Canada Square',       city: 'London', postalCode: 'E14 5HQ', country: 'United Kingdom', status: 'approved' },
];

type BankContextValue = {
  banks: BankEntry[];
  primaryId: string;
  setPrimaryId: (id: string) => void;
  addBank: (bank: Omit<BankEntry, 'id'>) => void;
  updateBank: (id: string, patch: Partial<BankEntry>) => void;
  removeBank: (id: string) => void;
};

const BankContext = createContext<BankContextValue | null>(null);

export function BankProvider({ children }: { children: ReactNode }) {
  const [banks, setBanks] = useState<BankEntry[]>(INITIAL_BANKS);
  const [primaryId, setPrimaryId] = useState('wise');

  const addBank = (bank: Omit<BankEntry, 'id'>) => {
    const id = `bank_${Date.now()}`;
    setBanks(prev => [...prev, { ...bank, id, status: 'under_review' }]);
  };

  const updateBank = (id: string, patch: Partial<BankEntry>) => {
    setBanks(prev => prev.map(b => b.id === id ? { ...b, ...patch } : b));
  };

  const removeBank = (id: string) => {
    setBanks(prev => prev.filter(b => b.id !== id));
  };

  return (
    <BankContext.Provider value={{ banks, primaryId, setPrimaryId, addBank, updateBank, removeBank }}>
      {children}
    </BankContext.Provider>
  );
}

export function useBanks() {
  const ctx = useContext(BankContext);
  if (!ctx) throw new Error('useBanks must be used within BankProvider');
  return ctx;
}
