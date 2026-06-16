// ─────────────────────────────────────────────────────────────────────────────
// EditBankModal
// Source: Figma node 2377:379266
// Supports three modes: 'standard' | 'cautious' | 'locked'
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useBanks } from '../context/BankContext';
import EditWarningModal from './EditWarningModal';

export type EditBankData = {
  label: string; holderName: string; accountNumber: string; bic: string;
  address: string; city: string; postalCode: string; bankCountry: string;
};

type Props = {
  onClose: () => void;
  onBack?: () => void;
  onSave: (data: EditBankData) => void;
  bankId?: string;
  editMode?: 'standard' | 'cautious' | 'locked';
  label?: string; holderName?: string; accountNumber?: string; bic?: string;
  address?: string; city?: string; postalCode?: string; bankCountry?: string;
};

const PAUSE_WARNING = 'Editing this field will temporarily pause payouts to this account';
const BOTTOM_WARNING = 'Saving changes will immediately pause bank payouts. Settlements will be made to your CoinPayments wallet until your bank is verified.';
const LOCKED_BANNER = 'Editing bank details requires re-verification, which can take up to 48 hours. During this time, incoming payments will settle to your CoinPayments wallet. Payouts switch back to your bank automatically once verified.';

// ─── EditField ────────────────────────────────────────────────────────────────
function EditField({
  label, value, onChange, placeholder = '', halfWidth = false,
  hasSelector = false, inactive = false, helper = '',
}: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; halfWidth?: boolean; hasSelector?: boolean;
  inactive?: boolean; helper?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const showHelper = focused && !!helper;
  const borderColor = inactive
    ? 'var(--cp-border-default)'
    : focused ? 'var(--cp-brand-primary)'
    : hovered ? 'var(--cp-border-hover)'
    : 'var(--cp-border-default)';
  return (
    <div
      className={`relative ${halfWidth ? 'flex-1 min-w-0' : 'w-full shrink-0'}`}
      style={{ overflow: 'visible' }}
      onMouseEnter={() => !inactive && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="bg-white relative h-[56px] flex items-start justify-between p-[10px]"
        style={{
          border: `1px solid ${borderColor}`, transition: 'border-color 0.1s',
          borderRadius: showHelper ? '5px 5px 0 0' : '5px',
          pointerEvents: inactive ? 'none' : undefined,
          opacity: inactive ? 0.5 : 1,
        }}
      >
        <div className="flex flex-col items-start justify-between self-stretch flex-1 min-w-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">{label}</p>
          <input
            type="text" value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] bg-transparent border-none outline-none w-full min-w-0 leading-none overflow-hidden text-ellipsis whitespace-nowrap"
            style={{ caretColor: 'var(--cp-brand-primary)' }}
          />
        </div>
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
      {showHelper && (
        <div className="absolute left-0 right-0 px-[10px] py-[6px] rounded-b-[5px] z-10"
          style={{ top: '100%', background: 'var(--cp-brand-primary)', border: '1px solid var(--cp-brand-primary)', borderTop: 'none' }}>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-tight">{helper}</p>
        </div>
      )}
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
export default function EditBankModal({
  onClose, onBack, onSave, bankId, editMode = 'standard',
  label: labelProp = '', holderName: holderProp = '',
  accountNumber: accountProp = '', bic: bicProp = '',
  address: addressProp = '', city: cityProp = '',
  postalCode: postalProp = '', bankCountry: countryProp = 'United Kingdom',
}: Props) {
  const [label, setLabel]               = useState(labelProp);
  const [holderName, setHolderName]     = useState(holderProp);
  const [bankCountry, setBankCountry]   = useState(countryProp);
  const [accountNumber, setAccountNumber] = useState(accountProp);
  const [bic, setBic]                   = useState(bicProp);
  const [address, setAddress]           = useState(addressProp);
  const [city, setCity]                 = useState(cityProp);
  const [postalCode, setPostalCode]     = useState(postalProp);

  // HSBC locked mode — unlocked by "Continue to edit"
  const [unlocked, setUnlocked]         = useState(false);
  // Barclays warning modal
  const [showWarning, setShowWarning]   = useState(false);

  const { updateBank } = useBanks();

  const isLocked = editMode === 'locked' && !unlocked;

  const nonLabelDirty =
    holderName !== holderProp || bankCountry !== countryProp ||
    accountNumber !== accountProp || bic !== bicProp ||
    address !== addressProp || city !== cityProp || postalCode !== postalProp;

  const isDirty = label !== labelProp || nonLabelDirty;

  // Cautious: show warning if non-label field changed
  const showBottomWarning = editMode === 'locked' && unlocked && nonLabelDirty;

  const cautionHelper = editMode === 'cautious' ? PAUSE_WARNING : '';

  const doSave = () => {
    if (!isDirty) return;
    if (bankId) updateBank(bankId, { label, holder: holderName, accountNumber, bic, address, city, postalCode, country: bankCountry });
    onSave({ label, holderName, accountNumber, bic, address, city, postalCode, bankCountry });
  };

  const handleSave = () => {
    if (!isDirty) return;
    if (editMode === 'cautious' && nonLabelDirty) {
      setShowWarning(true);
    } else {
      doSave();
    }
  };

  return (
    <>
    {showWarning && createPortal(
      <EditWarningModal
        onCancel={() => setShowWarning(false)}
        onProceed={() => { setShowWarning(false); doSave(); }}
      />, document.body
    )}
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.55)' }}
      onClick={onClose}
    >
      <div className="relative flex flex-col" style={{ width: 400 }} onClick={e => e.stopPropagation()}>
        <button className="absolute right-0 top-[-30px] flex items-center justify-center p-[4px] cursor-pointer" onClick={onClose}>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">Dismiss</p>
        </button>

        <div className="bg-white flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full" style={{ height: 590 }}>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap shrink-0">
            Edit Bank Details
          </p>

          {/* Form */}
          <div className="flex flex-col gap-[8px] items-start relative w-full flex-1 overflow-hidden">

            {/* HSBC locked banner — above the fields */}
            {editMode === 'locked' && !unlocked && (
              <div className="bg-[#ebf1fb] border border-[var(--cp-border-default)] border-solid flex gap-[10px] items-start p-[14px] relative rounded-[5px] shrink-0 w-full">
                <svg className="shrink-0 mt-[1px]" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#8492A6" />
                  <path d="M8 7V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="8" cy="5.5" r="0.75" fill="white" />
                </svg>
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-secondary)] leading-normal flex-1 min-w-0">
                  {LOCKED_BANNER}{' '}
                  <span
                    className="text-[var(--cp-brand-primary)] cursor-pointer underline"
                    onClick={() => setUnlocked(true)}
                  >
                    Continue to edit
                  </span>
                </p>
              </div>
            )}

            <EditField label="Label"               value={label}         onChange={setLabel} />
            <EditField label="Account Holder Name" value={holderName}    onChange={setHolderName}     inactive={isLocked} helper={cautionHelper} />
            <EditField label="Bank Country"        value={bankCountry}   onChange={setBankCountry}    inactive={isLocked} helper={cautionHelper} hasSelector />
            <EditField label="Account Number"      value={accountNumber} onChange={setAccountNumber}  inactive={isLocked} helper={cautionHelper} />
            <EditField label="BIC / SWIFT"         value={bic}           onChange={setBic}            inactive={isLocked} helper={cautionHelper} />
            <div className="flex gap-[8px] items-start relative shrink-0 w-full">
              <EditField label="Town / City"       value={city}          onChange={setCity}           inactive={isLocked} helper={cautionHelper} halfWidth />
              <EditField label="Postal / ZIP Code" value={postalCode}    onChange={setPostalCode}     inactive={isLocked} helper={cautionHelper} halfWidth />
            </div>
            <EditField label="Address"             value={address}       onChange={setAddress}        inactive={isLocked} helper={cautionHelper} />
          </div>

          {/* Bottom warning for cautious + locked after editing */}
          {showBottomWarning && (
            <div className="bg-orange-50 border border-orange-200 border-solid flex gap-[10px] items-start p-[12px] relative rounded-[5px] shrink-0 w-full">
              <svg className="shrink-0 mt-[1px]" width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.856 1.756a1.3 1.3 0 0 1 2.288 0l5.85 10.4A1.3 1.3 0 0 1 13.85 14H2.15a1.3 1.3 0 0 1-1.144-1.844l5.85-10.4ZM8 5.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 5.5Zm0 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" fill="#D97706"/>
              </svg>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-orange-700 leading-normal flex-1 min-w-0">
                {BOTTOM_WARNING}
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid flex flex-1 h-[46px] items-center justify-center rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={onBack ?? onClose}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-secondary)] text-center">Back</p>
            </button>
            <button
              disabled={!isDirty}
              onClick={handleSave}
              className={`flex flex-1 h-[46px] items-center justify-center rounded-[5px] transition-colors ${
                isDirty ? 'bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] cursor-pointer' : 'bg-[var(--cp-bg-2)] cursor-not-allowed'
              }`}
            >
              <p className={`font-['Inter:Medium',sans-serif] font-medium text-[13px] text-center ${isDirty ? 'text-white' : 'text-[var(--cp-text-secondary)]'}`}>
                Save Changes
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
