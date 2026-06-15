// ─────────────────────────────────────────────────────────────────────────────
// EditBankModal
// Source: Figma node 2377:379266 "Edit Bank V1 (save)"
// Opens from BankDetailsModal > "Edit Bank" button
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';

type Props = {
  onClose: () => void;
  onBack?: () => void;
  onSave: (data: EditBankData) => void;
  // pre-filled from current bank
  label?: string;
  holderName?: string;
  accountNumber?: string;
  bic?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  bankCountry?: string;
};

export type EditBankData = {
  label: string;
  holderName: string;
  accountNumber: string;
  bic: string;
  address: string;
  city: string;
  postalCode: string;
  bankCountry: string;
};

// ─── Reusable input field (matches existing SelectField visual style) ─────────
function EditField({
  label,
  value,
  onChange,
  placeholder = '',
  halfWidth = false,
  hasSelector = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  halfWidth?: boolean;
  hasSelector?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      className={`bg-white relative rounded-[5px] h-[56px] flex items-start justify-between p-[10px] ${halfWidth ? 'flex-1 min-w-0' : 'w-full shrink-0'}`}
      style={{ border: `1px solid ${focused ? 'var(--cp-border-active)' : 'var(--cp-border-default)'}`, transition: 'border-color 0.1s' }}
    >
      {/* Left: label + input */}
      <div className="flex flex-col items-start justify-between self-stretch flex-1 min-w-0">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">
          {label}
        </p>
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] bg-transparent border-none outline-none w-full min-w-0 leading-none overflow-hidden text-ellipsis whitespace-nowrap"
          style={{ caretColor: 'var(--cp-brand-primary)' }}
        />
      </div>
      {/* Right: optional chevron selector */}
      {hasSelector && (
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
      )}
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
export default function EditBankModal({
  onClose,
  onBack,
  onSave,
  label: labelProp = '',
  holderName: holderProp = '',
  accountNumber: accountProp = '',
  bic: bicProp = '',
  address: addressProp = '',
  city: cityProp = '',
  postalCode: postalProp = '',
  bankCountry: countryProp = 'United Kingdom',
}: Props) {
  const [label, setLabel]               = useState(labelProp);
  const [holderName, setHolderName]     = useState(holderProp);
  const [bankCountry, setBankCountry]   = useState(countryProp);
  const [accountNumber, setAccountNumber] = useState(accountProp);
  const [bic, setBic]                   = useState(bicProp);
  const [address, setAddress]           = useState(addressProp);
  const [city, setCity]                 = useState(cityProp);
  const [postalCode, setPostalCode]     = useState(postalProp);

  const isDirty =
    label !== labelProp ||
    holderName !== holderProp ||
    bankCountry !== countryProp ||
    accountNumber !== accountProp ||
    bic !== bicProp ||
    address !== addressProp ||
    city !== cityProp ||
    postalCode !== postalProp;

  const handleSave = () => {
    if (!isDirty) return;
    onSave({ label, holderName, accountNumber, bic, address, city, postalCode, bankCountry });
    onClose();
  };

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

        {/* Card — fixed height matches BankDetailsModal */}
        <div
          className="bg-white flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full"
        >
          {/* Title */}
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap shrink-0">
            Edit Bank Details
          </p>

          {/* Form — flex-1 fills space, pushing buttons to bottom */}
          <div className="flex flex-col gap-[8px] items-start relative w-full">
            <EditField label="Label"                value={label}         onChange={setLabel} />
            <EditField label="Account Holder Name"  value={holderName}    onChange={setHolderName} />
            <EditField label="Bank Country"         value={bankCountry}   onChange={setBankCountry} hasSelector />
            <EditField label="Account Number"       value={accountNumber} onChange={setAccountNumber} />
            <EditField label="BIC / SWIFT"          value={bic}           onChange={setBic} />
            {/* Town/City + Postal side by side */}
            <div className="flex gap-[8px] items-start relative shrink-0 w-full">
              <EditField label="Town / City"        value={city}          onChange={setCity}       halfWidth />
              <EditField label="Postal / ZIP Code"  value={postalCode}    onChange={setPostalCode} halfWidth />
            </div>
            <EditField label="Address"              value={address}       onChange={setAddress} />
          </div>

          {/* Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={onBack ?? onClose}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">Back</p>
            </button>
            <button
              disabled={!isDirty}
              onClick={handleSave}
              className={`content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] transition-colors ${
                isDirty
                  ? 'bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] cursor-pointer'
                  : 'bg-[var(--cp-bg-2)] cursor-not-allowed'
              }`}
            >
              <p className={`font-['Inter:Medium',sans-serif] font-medium text-[13px] text-center whitespace-nowrap ${isDirty ? 'text-white' : 'text-[var(--cp-text-secondary)]'}`}>
                Save Changes
              </p>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
