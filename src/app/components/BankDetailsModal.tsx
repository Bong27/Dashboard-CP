// ─────────────────────────────────────────────────────────────────────────────
// BankDetailsModal
// Source: Figma node 1623:265565 "Bank Details Modal (label)"
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';
import { SelectField } from './SelectField';

type Props = {
  onClose: () => void;
  bankName?: string;
  bankAccount?: string;
};

// ─── Data row ─────────────────────────────────────────────────────────────────
function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" style={{ height: 54 }}>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">
        {label}
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-[1.35] overflow-hidden w-full" style={{ WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>
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
const BANK_DETAILS: Record<string, {
  holder: string; bankName: string; iban: string;
  accountNumber: string; bic: string; address: string; label: string;
}> = {
  Wise: {
    holder: 'Acme Corp',
    bankName: 'Wise Payments Limited',
    iban: 'GB97 TRWI 2308 0120 5078 10',
    accountNumber: '20507810',
    bic: 'TRWIGB2LXXX',
    address: 'Flat 4, 25 Baker Street, London, W1U 8EE, United Kingdom',
    label: 'Wise',
  },
  Barclays: {
    holder: 'Acme Corp',
    bankName: 'Barclays Bank PLC',
    iban: 'GB29 NWBK 6016 1331 9268 19',
    accountNumber: '31926819',
    bic: 'BARCGB22XXX',
    address: '1 Churchill Place, London, E14 5HP, United Kingdom',
    label: 'Barclays',
  },
  HSBC: {
    holder: 'Acme Corp',
    bankName: 'HSBC UK Bank PLC',
    iban: 'GB94 MIDL 4005 1512 3456 78',
    accountNumber: '12345678',
    bic: 'MIDLGB22XXX',
    address: '8 Canada Square, London, E14 5HQ, United Kingdom',
    label: 'HSBC',
  },
};

// ─── Modal ────────────────────────────────────────────────────────────────────
export default function BankDetailsModal({ onClose, bankName = 'Wise', bankAccount = 'GB97TRWI23080120507810' }: Props) {
  // Find initial bank from options, fall back to Wise
  const initialBank = BANK_OPTIONS.find(b => b.name === bankName) ?? BANK_OPTIONS[0];
  const [selectedBank, setSelectedBank] = useState(initialBank);
  const [bankOpen, setBankOpen] = useState(false);
  const [updateState, setUpdateState] = useState<'idle' | 'saved'>('idle');
  const [removeState, setRemoveState] = useState<'idle' | 'confirm'>('idle');

  const details = BANK_DETAILS[selectedBank.name] ?? BANK_DETAILS['Wise'];

  const handleUpdate = () => {
    setUpdateState('saved');
    setTimeout(() => {
      setUpdateState('idle');
    }, 2000);
  };

  const handleRemoveClick = () => {
    if (removeState === 'idle') {
      setRemoveState('confirm');
    } else {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.55)' }}
      onClick={() => { setBankOpen(false); setRemoveState('idle'); onClose(); }}
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
        <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full">

          {/* Title */}
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap">
            Settlement Mode (Nightly to Bank)
          </p>

          {/* Bank selector */}
          <div className="relative w-full cursor-pointer" style={{ overflow: 'visible' }} onClick={() => setBankOpen(o => !o)}>
            <SelectField
              label="BANK"
              height={56}
              selector={
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]">
                  <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
                  <Chevron open={bankOpen} />
                </div>
              }
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">
                {selectedBank.name}
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-tertiary)] overflow-hidden text-ellipsis whitespace-nowrap">
                {selectedBank.account}
              </p>
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
                    {BANK_OPTIONS.map(bank => (
                      <div
                        key={bank.name}
                        className={`relative rounded-[5px] shrink-0 w-full cursor-pointer transition-colors ${
                          selectedBank.name === bank.name
                            ? 'bg-[var(--cp-brand-primary)]'
                            : 'bg-white hover:bg-[var(--cp-bg-1)]'
                        }`}
                        onClick={() => { setSelectedBank(bank); setBankOpen(false); setRemoveState('idle'); setUpdateState('idle'); }}
                      >
                        {selectedBank.name !== bank.name && (
                          <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
                        )}
                        <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px]">
                          <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full ${selectedBank.name === bank.name ? 'text-white' : 'text-[var(--cp-text-primary)]'}`}>
                            {bank.name}
                          </p>
                          <p className={`font-['Inter:Medium',sans-serif] font-medium relative shrink-0 w-full ${selectedBank.name === bank.name ? 'text-white/80' : 'text-[var(--cp-text-secondary)]'}`}>
                            {bank.account}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons — same style as bank rows */}
                  <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
                    {(['Edit Bank', 'Add New Bank', 'Manage Bank Accounts'] as const).map(action => (
                      <button
                        key={action}
                        className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch cursor-pointer flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0 w-full hover:bg-[var(--cp-bg-1)] transition-colors"
                        onClick={() => setBankOpen(false)}
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
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <DataRow label="Account Holder Name" value={details.holder} />
            <DataRow label="Bank Name"            value={details.bankName} />
            <DataRow label="IBAN"                 value={details.iban} />
            <DataRow label="Account Number"       value={details.accountNumber} />
            <DataRow label="BIC / SWIFT"          value={details.bic} />
            <DataRow label="Recipient Address"    value={details.address} />
            <DataRow label="Label"                value={details.label} />
          </div>

          {/* Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">

            {/* Remove */}
            <button
              className={`border border-solid content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer transition-colors ${
                removeState === 'confirm'
                  ? 'bg-red-50 border-red-300 hover:bg-red-100'
                  : 'bg-white border-[var(--cp-border-default)] hover:bg-[var(--cp-bg-2)]'
              }`}
              onClick={handleRemoveClick}
            >
              <p className={`font-['Inter:Medium',sans-serif] font-medium text-[13px] text-center whitespace-nowrap transition-colors ${
                removeState === 'confirm' ? 'text-red-600' : 'text-[var(--cp-text-secondary)]'
              }`}>
                {removeState === 'confirm' ? 'Confirm Remove' : 'Remove'}
              </p>
            </button>

            {/* Update */}
            <button
              className={`content-stretch flex flex-1 h-[46px] items-center justify-center gap-[6px] overflow-clip px-[10px] relative rounded-[5px] cursor-pointer transition-colors ${
                updateState === 'saved'
                  ? 'bg-[var(--cp-success)]'
                  : 'bg-[var(--cp-bg-2)] hover:bg-[var(--cp-bg-3)]'
              }`}
              onClick={handleUpdate}
            >
              {updateState === 'saved' && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                  <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              <p className={`font-['Inter:Medium',sans-serif] font-medium text-[13px] text-center whitespace-nowrap ${
                updateState === 'saved' ? 'text-white' : 'text-[var(--cp-text-secondary)]'
              }`}>
                {updateState === 'saved' ? 'Saved' : 'Update'}
              </p>
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
