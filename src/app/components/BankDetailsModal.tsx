// ─────────────────────────────────────────────────────────────────────────────
// BankDetailsModal
// Source: Figma node 1623:265565 "Bank Details Modal (label)"
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useRef, useEffect } from 'react';
import { SelectField } from './SelectField';
import { useBanks } from '../context/BankContext';
import { truncateIban } from '../utils';

type Props = {
  onClose: () => void;
  onUpdate?: (name: string, account: string) => void;
  onEditBank?: (name: string) => void;
  onAddNewBank?: () => void;
  onManageBankAccounts?: () => void;
  bankName?: string;
  bankAccount?: string;
  selectedBankName?: string;
};

// ─── Data row ─────────────────────────────────────────────────────────────────
function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">
        {label}
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-tight">
        {value}
      </p>
    </div>
  );
}

// ─── Chevron ─────────────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return (
    <div className={`overflow-clip relative shrink-0 size-[12px] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
      <div className="absolute inset-[34.38%_21.88%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.74999 3.74999">
          <path
            clipRule="evenodd"
            d="M0.292893,0.292893C0.455612,0.130168,0.719387,0.130168,0.882107,0.292893L3.375,2.78579L5.86789,0.292893C6.03061,0.130168,6.29439,0.130168,6.45711,0.292893C6.61983,0.455612,6.61983,0.719387,6.45711,0.882107L3.66961,3.66961C3.50688,3.83233,3.24312,3.83233,3.08039,3.66961L0.292893,0.882107C0.130168,0.719387,0.130168,0.455612,0.292893,0.292893Z"
            fill="var(--fill-0, #A2A5AC)"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

// Fake bank list for the selector dropdown
const BANK_OPTIONS = [
  { name: 'Wise', account: 'GB97TRWI23080120507810' },
  { name: 'Barclays', account: 'GB29NWBK60161331926819' },
  { name: 'HSBC', account: 'GB94MIDL40051512345678' },
];

// Detail data keyed by bank name
export const BANK_DETAILS: Record<string, {
  holder: string; bankName: string; iban: string;
  accountNumber: string; bic: string; address: string; label: string;
  city: string; postalCode: string;
}> = {
  Wise: {
    holder: 'Acme Corp',
    bankName: 'Wise Payments Limited',
    iban: 'GB97 TRWI 2308 0120 5078 10',
    accountNumber: '20507810',
    bic: 'TRWIGB2LXXX',
    address: 'Flat 4, 25 Baker Street',
    city: 'London',
    postalCode: 'W1U 8EE',
    label: 'Wise',
  },
  Barclays: {
    holder: 'Acme Corp',
    bankName: 'Barclays Bank PLC',
    iban: 'GB29 NWBK 6016 1331 9268 19',
    accountNumber: '31926819',
    bic: 'BARCGB22XXX',
    address: '1 Churchill Place',
    city: 'London',
    postalCode: 'E14 5HP',
    label: 'Barclays',
  },
  HSBC: {
    holder: 'Acme Corp',
    bankName: 'HSBC UK Bank PLC',
    iban: 'GB94 MIDL 4005 1512 3456 78',
    accountNumber: '12345678',
    bic: 'MIDLGB22XXX',
    address: '8 Canada Square',
    city: 'London',
    postalCode: 'E14 5HQ',
    label: 'HSBC',
  },
};

// ─── Modal ────────────────────────────────────────────────────────────────────
export default function BankDetailsModal({ onClose, onUpdate, onEditBank, onAddNewBank, onManageBankAccounts, bankName = 'Wise', bankAccount = 'GB97TRWI23080120507810', selectedBankName }: Props) {
  const { banks } = useBanks();
  // Build dropdown options from live context
  const BANK_OPTIONS = banks
    .map(b => ({ name: b.label, account: b.iban.replace(/\s/g, ''), id: b.id, status: b.status }))
    .sort((a, b) => {
      const current = selectedBankName ?? bankName;
      return a.name === current ? -1 : b.name === current ? 1 : 0;
    });
  const initialBank = BANK_OPTIONS.find(b => b.name === bankName) ?? BANK_OPTIONS[0];
  const restoredBank = selectedBankName ? (BANK_OPTIONS.find(b => b.name === selectedBankName) ?? initialBank) : initialBank;
  const [selectedBank, setSelectedBank] = useState(restoredBank ?? BANK_OPTIONS[0]);
  const [bankOpen, setBankOpen] = useState(false);
  const bankDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (bankDropdownRef.current && !bankDropdownRef.current.contains(e.target as Node)) {
        setBankOpen(false);
      }
    };
    if (bankOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [bankOpen]);

  // Derive details from context bank entry
  const bankEntry = banks.find(b => b.label === selectedBank?.name);
  const details = bankEntry ? {
    holder: bankEntry.holder,
    bankName: bankEntry.bankName,
    iban: bankEntry.iban,
    accountNumber: bankEntry.accountNumber,
    bic: bankEntry.bic,
    address: `${bankEntry.address}, ${bankEntry.city}, ${bankEntry.postalCode}, ${bankEntry.country}`,
    label: bankEntry.label,
  } : { holder: '---', bankName: '---', iban: '---', accountNumber: '---', bic: '---', address: '---', label: '---' };

  const isUnderReview = bankEntry?.status === 'under_review';
  const hasChanged = selectedBank?.name !== initialBank?.name;

  const handleUpdate = () => {
    if (!hasChanged || isUnderReview) return;
    onUpdate?.(selectedBank.name, selectedBank.account);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.55)' }}
      onClick={() => { setBankOpen(false); onClose(); }}
    >
      <div className="relative flex flex-col" style={{ width: 400 }} onClick={e => e.stopPropagation()}>

        {/* Dismiss */}
        <button
          className="absolute right-0 top-[-30px] flex items-center justify-center p-[4px] cursor-pointer"
          onClick={onClose}
        >
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">Dismiss</p>
        </button>

        {/* Card */}
        <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full overflow-hidden" style={{ height: 590 }}>

          {/* Title */}
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap">
            Settlement Mode (Nightly to Bank)
          </p>

          {/* Bank selector */}
          <div ref={bankDropdownRef} className="relative w-full cursor-pointer" style={{ overflow: 'visible' }} onClick={() => setBankOpen(o => !o)}>
            <SelectField
              label="BANK"
              height={56}
              selector={
                <div className="content-stretch flex items-center gap-[8px] relative shrink-0 self-stretch">
                  {isUnderReview && (
                    <span className="bg-orange-100 text-orange-600 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[9px] uppercase px-[5px] py-[2px] rounded-[3px] whitespace-nowrap shrink-0 self-center">
                      Under Review
                    </span>
                  )}
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px] self-stretch">
                    <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
                    <Chevron open={bankOpen} />
                  </div>
                </div>
              }
            >
              <div className={`flex items-center gap-[5px] min-w-0 overflow-hidden ${isUnderReview ? 'opacity-60' : ''}`}>
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap shrink-0">
                  {selectedBank.name}
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-tertiary)] overflow-hidden text-ellipsis whitespace-nowrap">
                  {isUnderReview ? truncateIban(selectedBank.account) : selectedBank.account}
                </p>
              </div>
            </SelectField>

            {/* Bank dropdown */}
            {bankOpen && (
              <div
                className="absolute bg-white left-0 mt-[5px] rounded-[5px] shadow-lg w-full z-50"
                style={{ top: 56 }}
                onClick={e => e.stopPropagation()}
              >
                <div aria-hidden="true" className="absolute border border-[var(--cp-border-hover)] border-solid inset-0 pointer-events-none rounded-[5px]" />
                <div className="content-stretch flex flex-col gap-[20px] items-start p-[10px] relative">
                  {/* Bank list */}
                  <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
                    {BANK_OPTIONS.map(bank => {
                      const isUnderReview = bank.status === 'under_review';
                      const isSelected = selectedBank.name === bank.name;
                      return (
                        <div
                          key={bank.name}
                          className={`relative rounded-[5px] shrink-0 w-full transition-colors ${
                            isUnderReview && isSelected
                              ? 'bg-orange-50 cursor-not-allowed'
                              : isUnderReview
                                ? 'opacity-60 cursor-not-allowed bg-white'
                                : isSelected
                                  ? 'bg-[var(--cp-brand-primary)] cursor-pointer'
                                  : 'bg-white hover:bg-[var(--cp-bg-1)] cursor-pointer'
                          }`}
                          onClick={() => { if (!isUnderReview) { setSelectedBank(bank); setBankOpen(false); } }}
                        >
                          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[5px] ${isUnderReview && isSelected ? 'border-orange-200' : isSelected ? 'border-transparent' : 'border-[var(--cp-border-default)]'}`} />
                          <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px]">
                          <div className="flex items-center justify-between w-full">
                              <div className="flex flex-col items-start">
                                <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 ${isSelected && !isUnderReview ? 'text-white' : 'text-[var(--cp-text-primary)]'}`}>
                                  {bank.name}
                                </p>
                                <p className={`font-['Inter:Medium',sans-serif] font-medium relative shrink-0 ${isSelected && !isUnderReview ? 'text-white/80' : 'text-[var(--cp-text-secondary)]'}`}>
                                  {bank.account}
                                </p>
                              </div>
                              {isUnderReview && (
                                <span className="bg-orange-100 text-orange-600 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[9px] uppercase px-[5px] py-[2px] rounded-[3px] whitespace-nowrap shrink-0 self-center">
                                  Under Review
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action buttons — same style as bank rows */}
                  <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
                    {/* Edit Bank — swaps to EditBankModal */}
                    <button
                      className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch cursor-pointer flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0 w-full hover:bg-[var(--cp-bg-1)] transition-colors"
                      onClick={() => { setBankOpen(false); onClose(); onEditBank?.(selectedBank.name); }}
                    >
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-brand-primary)] leading-[normal] not-italic relative shrink-0 w-full text-left">
                        Edit Bank
                      </p>
                    </button>
                    {(['Add New Bank', 'Manage Bank Accounts'] as const).map(action => (
                      <button
                        key={action}
                        className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch cursor-pointer flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0 w-full hover:bg-[var(--cp-bg-1)] transition-colors"
                        onClick={() => {
                          setBankOpen(false);
                          if (action === 'Add New Bank') { onClose(); onAddNewBank?.(); }
                          else if (action === 'Manage Bank Accounts') { onClose(); onManageBankAccounts?.(); }
                          else setBankOpen(false);
                        }}
                      >
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-brand-primary)] leading-[normal] not-italic relative shrink-0 w-full text-left">
                          {action}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bank detail rows */}
          <div className="content-stretch flex flex-col gap-[10px] items-start relative flex-1 overflow-hidden w-full">
            <DataRow label="Account Holder Name" value={details.holder} />
            <DataRow label="Bank Name"            value={details.bankName} />
            <DataRow label="IBAN"                 value={details.iban} />
            <DataRow label="Account Number"       value={details.accountNumber} />
            <DataRow label="BIC / SWIFT"          value={details.bic} />
            <DataRow label="Recipient Address"    value={`${details.address}, ${details.city}, ${details.postalCode}, United Kingdom`} />
            <DataRow label="Label"                value={details.label} />
          </div>

          {/* Under review notice */}
          {isUnderReview && (
            <div
              className="flex gap-[8px] items-start p-[10px] relative rounded-[5px] shrink-0 w-full"
              style={{ background: 'rgba(245,158,11,0.15)' }}
            >
              <svg className="shrink-0 mt-[1px]" width="14" height="14" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#f59e0b" />
                <path d="M8 7V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="8" cy="5.5" r="0.75" fill="white" />
              </svg>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] leading-normal flex-1 min-w-px" style={{ color: '#d97706' }}>
                This account is under review. All transactions and payouts are paused until verification is complete and the account is approved.
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">

            {/* Cancel */}
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={onClose}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">
                Cancel
              </p>
            </button>

            {/* Update */}
            <button
              className={`content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] transition-colors ${
                hasChanged && !isUnderReview
                  ? 'bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] cursor-pointer'
                  : 'bg-[var(--cp-bg-2)] cursor-not-allowed'
              }`}
              onClick={handleUpdate}
              disabled={!hasChanged || isUnderReview}
            >
              <p className={`font-['Inter:Medium',sans-serif] font-medium text-[13px] text-center whitespace-nowrap ${
                hasChanged && !isUnderReview ? 'text-white' : 'text-[var(--cp-text-secondary)]'
              }`}>
                Update
              </p>
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
