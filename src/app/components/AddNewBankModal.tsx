// ─────────────────────────────────────────────────────────────────────────────
// AddNewBankModal
// Source: Figma node 1613:185212 "New Bank (iban)"
// Opens from BankDetailsModal > "Add New Bank" button
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useRef, useEffect } from 'react';

type Props = {
  onClose: () => void;
};

// ─── Info icon ────────────────────────────────────────────────────────────────
function InfoIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx="8" cy="8" r="7.5" fill="#8492A6" />
      <path d="M8 7V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="5" r="0.75" fill="white" />
    </svg>
  );
}

// ─── Chevron ─────────────────────────────────────────────────────────────────
function ChevronSelector() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px] self-stretch">
      <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
      <div className="overflow-clip relative shrink-0 size-[12px]">
        <div className="absolute inset-[34.38%_21.88%]">
          <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 6.74999 3.74999">
            <path clipRule="evenodd" d="M0.292893,0.292893C0.455612,0.130168,0.719387,0.130168,0.882107,0.292893L3.375,2.78579L5.86789,0.292893C6.03061,0.130168,6.29439,0.130168,6.45711,0.292893C6.61983,0.455612,6.61983,0.719387,6.45711,0.882107L3.66961,3.66961C3.50688,3.83233,3.24312,3.83233,3.08039,3.66961L0.292893,0.882107C0.130168,0.719387,0.130168,0.455612,0.292893,0.292893Z" fill="var(--cp-text-quinary)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Input field ──────────────────────────────────────────────────────────────
function Field({
  label,
  value,
  onChange,
  placeholder = '',
  hasChevron = false,
  hasInfo = false,
  dimValue = false,
  halfWidth = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hasChevron?: boolean;
  hasInfo?: boolean;
  dimValue?: boolean;
  halfWidth?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={`bg-white relative rounded-[5px] h-[56px] flex items-start justify-between p-[10px] ${halfWidth ? 'flex-1 min-w-0' : 'w-full shrink-0'}`}
      style={{ border: `1px solid ${focused ? 'var(--cp-border-active)' : 'var(--cp-border-default)'}`, transition: 'border-color 0.1s' }}
    >
      {/* Label + input */}
      <div className="flex flex-col items-start justify-between self-stretch flex-1 min-w-0">
        <div className="flex gap-[5px] items-center shrink-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">
            {label}
          </p>
          {hasInfo && <InfoIcon />}
        </div>
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] bg-transparent border-none outline-none w-full min-w-0 leading-none placeholder:text-[var(--cp-text-quinary)] overflow-hidden text-ellipsis whitespace-nowrap"
          style={{
            color: dimValue ? 'var(--cp-text-quaternary)' : 'var(--cp-text-primary)',
            caretColor: 'var(--cp-brand-primary)',
          }}
        />
      </div>
      {hasChevron && <ChevronSelector />}
    </div>
  );
}

// ─── Bank Country field (flag + text, non-editable style) ────────────────────
function BankCountryField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className="bg-white relative rounded-[5px] h-[56px] flex items-start justify-between p-[10px] w-full shrink-0"
      style={{ border: `1px solid ${focused ? 'var(--cp-border-active)' : 'var(--cp-border-default)'}`, transition: 'border-color 0.1s' }}
    >
      <div className="flex flex-col items-start justify-between self-stretch flex-1 min-w-0">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">
          Bank Country
        </p>
        <div className="flex gap-[5px] items-center shrink-0">
          {/* UK flag emoji as stand-in */}
          <span className="text-[14px] leading-none shrink-0">🇬🇧</span>
          <input
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] bg-transparent border-none outline-none min-w-0 leading-none"
            style={{ caretColor: 'var(--cp-brand-primary)' }}
          />
        </div>
      </div>
      <ChevronSelector />
    </div>
  );
}

// ─── IBAN field with type dropdown ───────────────────────────────────────────
const IBAN_TYPES = [
  { label: 'IBAN', description: 'International Bank Account Number — used for cross-border payments in Europe and beyond.' },
  { label: 'Account Number', description: 'Local account number — used for domestic transfers within a specific country.' },
];

function IBANField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [focused, setFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const [ibanType, setIbanType] = useState('IBAN');
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const placeholder = ibanType === 'IBAN'
    ? 'Enter a valid IBAN (up to 34 characters)'
    : 'Enter account number';

  return (
    <div ref={wrapperRef} className="relative w-full shrink-0" style={{ overflow: 'visible' }}>
      {/* Input row */}
      <div
        className="bg-white relative rounded-[5px] h-[56px] flex items-start justify-between p-[10px] w-full"
        style={{ border: `1px solid ${focused || open ? 'var(--cp-border-active)' : 'var(--cp-border-default)'}`, transition: 'border-color 0.1s' }}
      >
        <div className="flex flex-col items-start justify-between self-stretch flex-1 min-w-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">
            {ibanType}
          </p>
          <input
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] bg-transparent border-none outline-none w-full min-w-0 leading-none overflow-hidden text-ellipsis whitespace-nowrap placeholder:text-[var(--cp-text-quinary)]"
            style={{ caretColor: 'var(--cp-brand-primary)' }}
          />
        </div>
        {/* Chevron toggle */}
        <button
          className="content-stretch flex items-center justify-between relative shrink-0 w-[21px] self-stretch cursor-pointer"
          onClick={() => setOpen(o => !o)}
          tabIndex={-1}
          type="button"
        >
          <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
          <div className={`flex items-center justify-center relative shrink-0 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}>
            <div className="overflow-clip relative shrink-0 size-[12px]">
              <div className="absolute inset-[34.38%_21.88%]">
                <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 6.74999 3.74999">
                  <path clipRule="evenodd" d="M0.292893,0.292893C0.455612,0.130168,0.719387,0.130168,0.882107,0.292893L3.375,2.78579L5.86789,0.292893C6.03061,0.130168,6.29439,0.130168,6.45711,0.292893C6.61983,0.455612,6.61983,0.719387,6.45711,0.882107L3.66961,3.66961C3.50688,3.83233,3.24312,3.83233,3.08039,3.66961L0.292893,0.882107C0.130168,0.719387,0.130168,0.455612,0.292893,0.292893Z" fill="var(--cp-text-quinary)" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute bg-white left-0 mt-[5px] rounded-[5px] w-full z-50"
          style={{ top: 56, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', border: '1px solid var(--cp-border-hover)' }}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col gap-[5px] p-[10px]">
            {IBAN_TYPES.map(type => {
              const isActive = type.label === ibanType;
              return (
                <div
                  key={type.label}
                  className={`relative rounded-[5px] shrink-0 w-full cursor-pointer transition-colors ${isActive ? 'bg-[var(--cp-brand-primary)]' : 'bg-white hover:bg-[var(--cp-bg-1)]'}`}
                  onClick={() => { setIbanType(type.label); setOpen(false); }}
                >
                  {!isActive && <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />}
                  <div className="flex flex-col items-start p-[10px]">
                    <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] leading-none ${isActive ? 'text-white' : 'text-[var(--cp-text-primary)]'}`}>
                      {type.label}
                    </p>
                    <p className={`font-['Inter:Medium',sans-serif] font-medium text-[11px] leading-tight mt-[4px] ${isActive ? 'text-white/80' : 'text-[var(--cp-text-secondary)]'}`}>
                      {type.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Read-only data row for confirmation view ─────────────────────────────────
function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">{label}</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-tight">{value}</p>
    </div>
  );
}

// Simple BIC → bank name lookup (extends existing BANK_DETAILS)
const BIC_TO_BANK: Record<string, string> = {
  TRWIGB2LXXX: 'Wise Payments Limited',
  BARCGB22XXX: 'Barclays Bank PLC',
  MIDLGB22XXX: 'HSBC UK Bank PLC',
};

// ─── Modal ────────────────────────────────────────────────────────────────────
export default function AddNewBankModal({ onClose }: Props) {
  const [step, setStep]                 = useState<'form' | 'confirm'>('form');
  const [holderName, setHolderName]     = useState('Acme Corp');
  const [bankCountry, setBankCountry]   = useState('United Kingdom');
  const [iban, setIban]                 = useState('');
  const [bic, setBic]                   = useState('');
  const [address, setAddress]           = useState('Flat 4, 25 Baker Street');
  const [city, setCity]                 = useState('London');
  const [postalCode, setPostalCode]     = useState('W1U 8EE');
  const [accountType, setAccountType]   = useState('');
  const [check1, setCheck1]             = useState(true);
  const [check2, setCheck2]             = useState(true);

  const bankName = BIC_TO_BANK[bic.trim().toUpperCase()] ?? null;
  const [label, setLabel]               = useState('');
  // keep label in sync with bankName when user hasn't manually edited it
  const labelValue = label || bankName || '---';

  const canContinue = iban.trim() !== '' && bic.trim() !== '';

  return step === 'form' ? (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.55)' }}
      onClick={onClose}
    >
      <div className="relative flex flex-col" style={{ width: 400 }} onClick={e => e.stopPropagation()}>
        {/* Dismiss */}
        <button
          className="absolute right-0 top-[-30px] flex items-center justify-center p-[4px] cursor-pointer"
          onClick={onClose}
        >
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">Dismiss</p>
        </button>

        {/* Card — natural height */}
        <div className="bg-white flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full">

          {/* Title area */}
          <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap">
              Enter Bank Details
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-tight">
              You can withdraw your crypto balance as fiat to any supported bank with up to same day settlement.
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <Field label="Account Holder Name" value={holderName}  onChange={setHolderName} />
            <BankCountryField value={bankCountry} onChange={setBankCountry} />
            <IBANField value={iban} onChange={setIban} />
            <Field label="BIC / SWIFT"  value={bic}         onChange={setBic} />
            <Field label="Address"      value={address}     onChange={setAddress} />
            <Field label="Town / City"  value={city}        onChange={setCity} />
            <Field label="Postal / ZIP Code" value={postalCode} onChange={setPostalCode} />
            <Field label="Bank Account Type" value={accountType} onChange={setAccountType} placeholder="Business" dimValue={accountType === ''} hasInfo />
          </div>

          {/* Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={onClose}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">Cancel</p>
            </button>
            <button
              disabled={!canContinue}
              onClick={() => canContinue && setStep('confirm')}
              className={`content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] transition-colors ${
                canContinue
                  ? 'bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] cursor-pointer'
                  : 'bg-[var(--cp-bg-2)] cursor-not-allowed'
              }`}
            >
              <p className={`font-['Inter:Medium',sans-serif] font-medium text-[13px] text-center whitespace-nowrap ${canContinue ? 'text-white' : 'text-[var(--cp-text-secondary)]'}`}>
                Continue
              </p>
            </button>
          </div>

        </div>
      </div>
    </div>
  ) : (
    /* ── Step 2: Confirmation ─────────────────────────────────────────────── */
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.55)' }}
      onClick={onClose}
    >
      <div className="relative flex flex-col" style={{ width: 400 }} onClick={e => e.stopPropagation()}>
        <button className="absolute right-0 top-[-30px] flex items-center justify-center p-[4px] cursor-pointer" onClick={onClose}>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">Dismiss</p>
        </button>

        <div className="bg-white flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full">

          {/* Title */}
          <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap">Bank Details</p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-tight">
              Please verify your banking information and make sure these details match your records.
            </p>
          </div>

          {/* Data rows */}
          <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-full">

            {/* Account Holder Name */}
            <DataRow label="Account Holder Name" value={holderName} />

            {/* Bank Name */}
            <DataRow label="Bank Name" value={bankName ?? '---'} />

            {/* IBAN */}
            <DataRow label="IBAN" value={iban} />

            {/* Account Number + BIC side by side */}
            <div className="flex items-start justify-between relative shrink-0 w-full gap-[10px]">
              <DataRow label="Account Number" value={iban.replace(/\s/g, '').slice(-8) || '---'} />
              <DataRow label="BIC / SWIFT" value={bic} />
            </div>

            {/* Recipient Address */}
            <DataRow label="Recipient Address" value={`${address}, ${city}, ${postalCode}, ${bankCountry}`} />
          </div>

          {/* Add Label editable field */}
          <div className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch flex h-[56px] items-start justify-between p-[10px] relative rounded-[5px] shrink-0 w-full">
            <div className="flex flex-col h-full items-start justify-between relative shrink-0 flex-1 min-w-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">Add Label</p>
              <input
                type="text"
                value={labelValue === '---' && !label ? '' : label}
                onChange={e => setLabel(e.target.value)}
                placeholder={bankName ?? '---'}
                className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] bg-transparent border-none outline-none w-full min-w-0 leading-none"
                style={{ caretColor: 'var(--cp-brand-primary)' }}
              />
            </div>
            {/* Edit icon */}
            <div className="flex items-center justify-center self-stretch px-[10px] py-[5px] shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-8 8A1 1 0 0 1 6 13H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 .293-.707l8-8Z" stroke="var(--cp-text-tertiary)" strokeWidth="1.2" fill="none"/>
                <path d="M10 3l3 3" stroke="var(--cp-text-tertiary)" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Terms */}
          <div className="flex flex-col gap-[5px] items-start relative shrink-0 w-full">
            {[
              { id: 'c1', checked: check1, set: setCheck1, text: 'I confirm the bank and address details provided are for the entity registered with CoinPayments' },
              { id: 'c2', checked: check2, set: setCheck2, text: null, rich: true },
            ].map(({ id, checked, set, text, rich }) => (
              <div key={id} className="bg-[var(--cp-bg-1)] content-stretch flex flex-col items-start overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-full">
                <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
                  {/* Checkbox */}
                  <button
                    onClick={() => set((v: boolean) => !v)}
                    className={`relative shrink-0 size-[16px] rounded-[3px] flex items-center justify-center cursor-pointer transition-colors border ${checked ? 'bg-[var(--cp-brand-primary)] border-[var(--cp-brand-primary)]' : 'bg-white border-[var(--cp-border-default)]'}`}
                  >
                    {checked && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                  <div className="bg-[var(--cp-border-default)] h-[20px] relative shrink-0 w-px" />
                  {rich ? (
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] flex-1 min-w-0 leading-normal">
                      I have read and agree with the terms listed above and in the{' '}
                      <span className="text-[var(--cp-brand-primary)] cursor-pointer">User Agreement</span>.
                    </p>
                  ) : (
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] flex-1 min-w-0 leading-normal">{text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={() => setStep('form')}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">Back</p>
            </button>
            <button
              className="bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer transition-colors"
              onClick={onClose}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white text-center whitespace-nowrap">Confirm</p>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
