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
  { id: 'wise',     label: 'Wise',     bankName: 'Wise Payments Limited', holder: 'Acme Corp', iban: 'GB97TRWI23080120507810', accountNumber: '20507810', bic: 'TRWIGB2LXXX', address: 'Flat 4, 25 Baker Street', city: 'London', postalCode: 'W1U 8EE',  country: 'United Kingdom', status: 'approved' },
  { id: 'barclays', label: 'Barclays', bankName: 'Barclays Bank PLC',     holder: 'Acme Corp', iban: 'GB29NWBK60161331926819', accountNumber: '31926819', bic: 'BARCGB22XXX', address: '1 Churchill Place',     city: 'London', postalCode: 'E14 5HP', country: 'United Kingdom', status: 'approved' },
  { id: 'hsbc',     label: 'HSBC',     bankName: 'HSBC UK Bank PLC',      holder: 'Acme Corp', iban: 'GB94MIDL40051512345678', accountNumber: '12345678', bic: 'MIDLGB22XXX', address: '8 Canada Square',       city: 'London', postalCode: 'E14 5HQ', country: 'United Kingdom', status: 'approved' },
];

type BankContextValue = {
  banks: BankEntry[];
  primaryId: string;
  emptyMode: boolean;
  setPrimaryId: (id: string) => void;
  addBank: (bank: Omit<BankEntry, 'id'>) => string;
  updateBank: (id: string, patch: Partial<BankEntry>) => void;
  removeBank: (id: string) => void;
  enterEmptyMode: () => void;
  exitEmptyMode: () => void;
};

const BankContext = createContext<BankContextValue | null>(null);

export function BankProvider({ children }: { children: ReactNode }) {
  const [banks, setBanks] = useState<BankEntry[]>(INITIAL_BANKS);
  const [primaryId, setPrimaryId] = useState('wise');
  const [emptyMode, setEmptyMode] = useState(false);
  const [hiddenBankIds, setHiddenBankIds] = useState<Set<string>>(new Set());

  const addBank = (bank: Omit<BankEntry, 'id'>): string => {
    const id = `bank_${Date.now()}`;
    setBanks(prev => {
      const baseLabel = bank.label;
      const isDuplicate = prev.some(b => b.label === baseLabel);
      if (isDuplicate) {
        // Find the highest numeric suffix already in use for this base label
        let n = 2;
        while (prev.some(b => b.label === `${baseLabel} ${n}`)) n++;
        return [...prev, { ...bank, id, label: `${baseLabel} ${n}`, status: 'under_review' }];
      }
      return [...prev, { ...bank, id, status: 'under_review' }];
    });
    return id;
  };

  const updateBank = (id: string, patch: Partial<BankEntry>) => {
    setBanks(prev => prev.map(b => b.id === id ? { ...b, ...patch } : b));
  };

  const removeBank = (id: string) => {
    setBanks(prev => {
      const next = prev.filter(b => b.id !== id);
      setPrimaryId(cur => cur === id ? (next[0]?.id ?? '') : cur);
      return next;
    });
  };

  const enterEmptyMode = () => {
    setHiddenBankIds(new Set(banks.map(b => b.id)));
    setEmptyMode(true);
  };
  const exitEmptyMode = () => {
    setEmptyMode(false);
    setHiddenBankIds(new Set());
  };

  // In empty mode, hide only the banks that existed when empty mode was entered;
  // banks added during the session remain visible.
  const visibleBanks = emptyMode ? banks.filter(b => !hiddenBankIds.has(b.id)) : banks;
  const visiblePrimaryId = emptyMode && hiddenBankIds.has(primaryId) ? (visibleBanks[0]?.id ?? '') : primaryId;

  return (
    <BankContext.Provider value={{
      banks: visibleBanks,
      primaryId: visiblePrimaryId,
      emptyMode,
      setPrimaryId,
      addBank,
      updateBank,
      removeBank,
      enterEmptyMode,
      exitEmptyMode,
    }}>
      {children}
    </BankContext.Provider>
  );
}

export function useBanks() {
  const ctx = useContext(BankContext);
  if (!ctx) throw new Error('useBanks must be used within BankProvider');
  return ctx;
}
