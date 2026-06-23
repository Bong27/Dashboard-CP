// ─────────────────────────────────────────────────────────────────────────────
// EditBankModal
// Source: Figma node 2377:379266
// Supports three modes: 'standard' | 'cautious' | 'locked'
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useBanks } from '../context/BankContext';
import EditWarningModal from './EditWarningModal';
import { IBANField, isValidUkIban } from './AddNewBankModal';

// ─── Country list (shared with AddNewBankModal) ────────────────────────────────
const COUNTRIES: { name: string; code: string; flag: string }[] = [
  { name: 'Albania',        code: 'AL', flag: '🇦🇱' },
  { name: 'Andorra',        code: 'AD', flag: '🇦🇩' },
  { name: 'Angola',         code: 'AO', flag: '🇦🇴' },
  { name: 'Argentina',      code: 'AR', flag: '🇦🇷' },
  { name: 'Armenia',        code: 'AM', flag: '🇦🇲' },
  { name: 'Australia',      code: 'AU', flag: '🇦🇺' },
  { name: 'Austria',        code: 'AT', flag: '🇦🇹' },
  { name: 'Azerbaijan',     code: 'AZ', flag: '🇦🇿' },
  { name: 'Belgium',        code: 'BE', flag: '🇧🇪' },
  { name: 'Brazil',         code: 'BR', flag: '🇧🇷' },
  { name: 'Bulgaria',       code: 'BG', flag: '🇧🇬' },
  { name: 'Canada',         code: 'CA', flag: '🇨🇦' },
  { name: 'Croatia',        code: 'HR', flag: '🇭🇷' },
  { name: 'Cyprus',         code: 'CY', flag: '🇨🇾' },
  { name: 'Czech Republic', code: 'CZ', flag: '🇨🇿' },
  { name: 'Denmark',        code: 'DK', flag: '🇩🇰' },
  { name: 'Estonia',        code: 'EE', flag: '🇪🇪' },
  { name: 'Finland',        code: 'FI', flag: '🇫🇮' },
  { name: 'France',         code: 'FR', flag: '🇫🇷' },
  { name: 'Germany',        code: 'DE', flag: '🇩🇪' },
  { name: 'Greece',         code: 'GR', flag: '🇬🇷' },
  { name: 'Hungary',        code: 'HU', flag: '🇭🇺' },
  { name: 'Iceland',        code: 'IS', flag: '🇮🇸' },
  { name: 'Ireland',        code: 'IE', flag: '🇮🇪' },
  { name: 'Italy',          code: 'IT', flag: '🇮🇹' },
  { name: 'Latvia',         code: 'LV', flag: '🇱🇻' },
  { name: 'Liechtenstein',  code: 'LI', flag: '🇱🇮' },
  { name: 'Lithuania',      code: 'LT', flag: '🇱🇹' },
  { name: 'Luxembourg',     code: 'LU', flag: '🇱🇺' },
  { name: 'Malta',          code: 'MT', flag: '🇲🇹' },
  { name: 'Netherlands',    code: 'NL', flag: '🇳🇱' },
  { name: 'New Zealand',    code: 'NZ', flag: '🇳🇿' },
  { name: 'Norway',         code: 'NO', flag: '🇳🇴' },
  { name: 'Poland',         code: 'PL', flag: '🇵🇱' },
  { name: 'Portugal',       code: 'PT', flag: '🇵🇹' },
  { name: 'Romania',        code: 'RO', flag: '🇷🇴' },
  { name: 'Singapore',      code: 'SG', flag: '🇸🇬' },
  { name: 'Slovakia',       code: 'SK', flag: '🇸🇰' },
  { name: 'Slovenia',       code: 'SI', flag: '🇸🇮' },
  { name: 'Spain',          code: 'ES', flag: '🇪🇸' },
  { name: 'Sweden',         code: 'SE', flag: '🇸🇪' },
  { name: 'Switzerland',    code: 'CH', flag: '🇨🇭' },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
  { name: 'United States',  code: 'US', flag: '🇺🇸' },
];

// ─── Bank Country trigger only (dropdown rendered at modal level) ─────────────
function BankCountryTrigger({ value, open, onToggle, inactive }: {
  value: string; open: boolean; onToggle: () => void; inactive?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const selected = COUNTRIES.find(c => c.name === value) ?? COUNTRIES.find(c => c.name === 'United Kingdom')!;
  const borderColor = hovered || open ? 'var(--cp-border-hover)' : 'var(--cp-border-default)';
  return (
    <div
      className="bg-white relative h-[56px] flex items-start justify-between p-[10px] w-full cursor-pointer rounded-[5px]"
      style={{ border: `1px solid ${borderColor}`, transition: 'border-color 0.1s', pointerEvents: inactive ? 'none' : undefined, opacity: inactive ? 0.5 : 1 }}
      onMouseEnter={() => !inactive && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => !inactive && onToggle()}
    >
      <div className="flex flex-col items-start justify-between self-stretch flex-1 min-w-0">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">Bank Country</p>
        <div className="flex gap-[5px] items-center shrink-0">
          <span className="text-[14px] leading-none shrink-0">{selected.flag}</span>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-none whitespace-nowrap">{selected.name}</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px] self-stretch">
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
      </div>
    </div>
  );
}

// ─── Country dropdown panel (rendered inside modal card) ──────────────────────
function CountryDropdownPanel({ value, search, onSearch, onSelect, searchRef }: {
  value: string; search: string; onSearch: (v: string) => void;
  onSelect: (name: string) => void; searchRef: React.RefObject<HTMLInputElement>;
}) {
  const filtered = COUNTRIES.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="flex flex-col gap-[20px] p-[10px] h-full min-h-0">
      <div className="relative rounded-[5px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
        <div className="flex flex-col items-start p-[10px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase leading-none">Search</p>
          <input
            ref={searchRef}
            type="text" value={search} onChange={e => onSearch(e.target.value)}
            placeholder="Type country name"
            className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-secondary)] bg-transparent border-none outline-none w-full leading-none placeholder:text-[var(--cp-text-quinary)] mt-[3px]"
            style={{ caretColor: 'var(--cp-brand-primary)' }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[5px] overflow-y-auto flex-1 min-h-0">
        {filtered.map(country => {
          const isSelected = country.name === value;
          return (
            <div
              key={country.code}
              className={`relative rounded-[5px] shrink-0 w-full cursor-pointer transition-colors ${isSelected ? 'bg-[var(--cp-brand-primary)]' : 'bg-white hover:bg-[var(--cp-bg-1)]'}`}
              onClick={() => onSelect(country.name)}
            >
              {!isSelected && <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />}
              <div className="flex items-center justify-between px-[10px] py-[13px]">
                <div className="flex items-center gap-[7px]">
                  <span className="text-[14px] leading-none shrink-0">{country.flag}</span>
                  <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] leading-none ${isSelected ? 'text-white' : 'text-[var(--cp-text-primary)]'}`}>{country.name}</p>
                </div>
                <p className={`font-['Inter:Medium',sans-serif] font-medium text-[11px] leading-none shrink-0 ${isSelected ? 'text-white/80' : 'text-[var(--cp-text-secondary)]'}`}>{country.code}</p>
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] p-[10px]">No results</p>
        )}
      </div>
    </div>
  );
}

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
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-[1.2]">{helper}</p>
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

  const [ibanType, setIbanType] = useState(countryProp === 'Canada' ? 'Account Number' : 'IBAN');

  // Reset all fields except Label and Account Holder Name when country changes
  const prevCountry = useRef(bankCountry);
  useEffect(() => {
    if (bankCountry === prevCountry.current) return;
    prevCountry.current = bankCountry;
    setAccountNumber('');
    setBic('');
    setAddress('');
    setCity('');
    setPostalCode('');
    setIbanType(bankCountry === 'Canada' ? 'Account Number' : 'IBAN');
  }, [bankCountry]);

  // Country dropdown state (lifted to modal so panel can escape overflow-hidden form)
  const [countryOpen, setCountryOpen]   = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [dropdownTop, setDropdownTop]   = useState(0);
  const countrySearchRef                = useRef<HTMLInputElement>(null);
  const countryTriggerRef               = useRef<HTMLDivElement>(null);
  const modalCardRef                    = useRef<HTMLDivElement>(null);

  const handleCountryToggle = () => {
    if (!countryOpen && countryTriggerRef.current && modalCardRef.current) {
      const triggerRect = countryTriggerRef.current.getBoundingClientRect();
      const cardRect = modalCardRef.current.getBoundingClientRect();
      setDropdownTop(triggerRect.bottom - cardRect.top + 4);
    }
    setCountryOpen(o => !o);
  };

  useEffect(() => {
    if (countryOpen) setTimeout(() => countrySearchRef.current?.focus(), 50);
    else setCountrySearch('');
  }, [countryOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (modalCardRef.current && !modalCardRef.current.contains(e.target as Node)) setCountryOpen(false);
    };
    if (countryOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [countryOpen]);

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

  const ibanValid = ibanType === 'IBAN' && isValidUkIban(accountNumber);
  const accountNumberValid = ibanType === 'Account Number' && /^\d+$/.test(accountNumber) && accountNumber.length > 6;
  const bicValid = bic.trim().length >= 8 && bic.trim().length <= 11;
  const isValid =
    holderName.trim() !== '' &&
    (ibanValid || accountNumberValid) &&
    bicValid &&
    address.trim() !== '' &&
    city.trim() !== '' &&
    postalCode.trim() !== '';

  // Cautious: show warning if non-label field changed
  const showBottomWarning = editMode === 'locked' && unlocked && nonLabelDirty;

  const countryChanged = bankCountry !== countryProp;
  const cautionHelper = editMode === 'cautious' ? PAUSE_WARNING : '';
  const holderHelper  = countryChanged ? 'Must exactly match the name registered with your bank' : cautionHelper;
  const addressHelper = countryChanged ? 'Must exactly match the billing address registered with your bank' : cautionHelper;

  const doSave = () => {
    if (!isDirty) return;
    const needsReview = (editMode === 'cautious' || editMode === 'locked') && nonLabelDirty;
    const ibanValue = ibanType === 'IBAN' ? accountNumber : '';
    const accNumValue = ibanType === 'Account Number' ? accountNumber : accountNumber.replace(/\s/g, '').slice(-8);
    if (bankId) updateBank(bankId, {
      label, holder: holderName, iban: ibanValue, accountNumber: accNumValue,
      bic, address, city, postalCode, country: bankCountry,
      ...(needsReview ? { status: 'under_review' } : {}),
    });
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

  if (showWarning) return (
    <EditWarningModal
      onCancel={() => setShowWarning(false)}
      onProceed={() => { setShowWarning(false); doSave(); }}
    />
  );

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.55)' }}
      onClick={onClose}
    >
      <div className="relative flex flex-col" style={{ width: 400 }} onClick={e => e.stopPropagation()}>
        <button className="absolute right-0 top-[-30px] flex items-center justify-center p-[4px] cursor-pointer" onClick={onClose}>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">Dismiss</p>
        </button>

        <div ref={modalCardRef} className="bg-white flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full" style={{ height: (isLocked || showBottomWarning) ? undefined : 590 }}>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap shrink-0">
            Edit Bank Details
          </p>

          {/* Form */}
          <div className={`flex flex-col gap-[8px] items-start relative w-full ${(isLocked || showBottomWarning) ? '' : 'flex-1'}`}>

            <EditField label="Label"               value={label}         onChange={setLabel} />

            {/* HSBC locked banner — between Label and below fields */}
            {editMode === 'locked' && !unlocked && (
              <div
                className="flex gap-[10px] items-center overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-full"
                style={{ background: 'rgba(245,158,11,0.2)' }}
              >
                <svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#f59e0b" />
                  <path d="M8 7V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="8" cy="5.5" r="0.75" fill="white" />
                </svg>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[1.2] flex-1 min-w-px" style={{ color: '#f59e0b' }}>
                  Editing bank details requires re-verification, which can take{' '}
                  <span className="font-['Inter:Bold',sans-serif] font-bold">up to 48 hours</span>
                  . During this time, incoming payments will settle to your CoinPayments wallet. Payouts switch back to your bank automatically once verified.{' '}
                  <span
                    className="font-['Inter:Bold',sans-serif] font-bold underline cursor-pointer"
                    style={{ color: '#f59e0b' }}
                    onClick={() => setUnlocked(true)}
                  >
                    Continue to edit
                  </span>
                </p>
              </div>
            )}
            <EditField label="Account Holder Name" value={holderName}    onChange={setHolderName}     inactive={isLocked} helper={holderHelper} />
            <div ref={countryTriggerRef} className="w-full shrink-0">
              <BankCountryTrigger value={bankCountry} open={countryOpen} onToggle={handleCountryToggle} inactive={isLocked} />
            </div>
            <IBANField
              value={accountNumber}
              onChange={setAccountNumber}
              ibanType={ibanType}
              onIbanTypeChange={t => { setIbanType(t); setAccountNumber(''); }}
              hideTypeSelector={bankCountry === 'Canada'}
            />
            <EditField label="BIC / SWIFT"         value={bic}           onChange={setBic}            inactive={isLocked} helper={countryChanged ? '' : cautionHelper} />
            <div className="flex gap-[8px] items-start relative shrink-0 w-full">
              <EditField label="Town / City"       value={city}          onChange={setCity}           inactive={isLocked} helper={addressHelper} halfWidth />
              <EditField label="Postal / ZIP Code" value={postalCode}    onChange={setPostalCode}     inactive={isLocked} helper={addressHelper} halfWidth />
            </div>
            <EditField label="Address"             value={address}       onChange={setAddress}        inactive={isLocked} helper={addressHelper} />
          </div>

          {/* Bottom warning — HSBC after unlocking and editing non-Label field */}
          {showBottomWarning && (
            <div
              className="flex gap-[10px] items-center overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-full"
              style={{ background: 'rgba(245,158,11,0.2)' }}
            >
              <svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#f59e0b" />
                <path d="M8 7V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="8" cy="5.5" r="0.75" fill="white" />
              </svg>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] leading-[1.2] flex-1 min-w-px" style={{ color: '#f59e0b' }}>
                {BOTTOM_WARNING}
              </p>
            </div>
          )}

          {/* Country dropdown panel — anchored just below the Bank Country trigger, same 20px inset */}
          {countryOpen && (
            <div
              className="absolute bg-white rounded-[5px] z-10 flex flex-col overflow-hidden"
              style={{ top: dropdownTop, left: 20, right: 20, bottom: 20, boxShadow: '0 4px 16px rgba(0,0,0,0.12)', border: '1px solid var(--cp-border-hover)' }}
              onClick={e => e.stopPropagation()}
            >
              <CountryDropdownPanel
                value={bankCountry}
                search={countrySearch}
                onSearch={setCountrySearch}
                onSelect={name => { setBankCountry(name); setCountryOpen(false); }}
                searchRef={countrySearchRef}
              />
            </div>
          )}

          {/* Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid flex flex-1 h-[46px] items-center justify-center rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={onBack ?? onClose}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-secondary)] text-center">Back</p>
            </button>
            <button
              disabled={!(isDirty && isValid)}
              onClick={handleSave}
              className={`flex flex-1 h-[46px] items-center justify-center rounded-[5px] transition-colors ${
                isDirty && isValid ? 'bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] cursor-pointer' : 'bg-[var(--cp-bg-2)] cursor-not-allowed'
              }`}
            >
              <p className={`font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-center ${isDirty && isValid ? 'text-white' : 'text-[var(--cp-text-secondary)]'}`}>
                Save Changes
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
