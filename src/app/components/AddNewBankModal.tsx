// ─────────────────────────────────────────────────────────────────────────────
// AddNewBankModal
// Source: Figma node 1613:185212 "New Bank (iban)"
// Opens from BankDetailsModal > "Add New Bank" button
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';

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
          className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] bg-transparent border-none outline-none w-full min-w-0 leading-none placeholder:text-[var(--cp-text-quinary)]"
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

// ─── Modal ────────────────────────────────────────────────────────────────────
export default function AddNewBankModal({ onClose }: Props) {
  const [holderName, setHolderName]     = useState('Acme Corp');
  const [bankCountry, setBankCountry]   = useState('United Kingdom');
  const [iban, setIban]                 = useState('');
  const [bic, setBic]                   = useState('');
  const [address, setAddress]           = useState('Flat 4, 25 Baker Street');
  const [city, setCity]                 = useState('London');
  const [postalCode, setPostalCode]     = useState('W1U 8EE');
  const [accountType, setAccountType]   = useState('');

  const canContinue = holderName.trim() !== '' && iban.trim() !== '';

  return (
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
            <Field label="IBAN"         value={iban}        onChange={setIban}     placeholder="Enter a valid IBAN (up to 34 characters)" hasChevron />
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
  );
}
