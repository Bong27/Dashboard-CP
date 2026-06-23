// ─────────────────────────────────────────────────────────────────────────────
// AddNewBankModal
// Source: Figma node 1613:185212 "New Bank (iban)"
// Opens from BankDetailsModal > "Add New Bank" button
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useBanks, BIC_TO_BANK } from '../context/BankContext';
import BankAddedModal from './BankAddedModal';

type Props = {
  onClose: () => void;
  onBankAdded?: (bankId: string) => void;
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

function InfoIconWithTooltip({ text }: { text: string }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  const onEnter = () => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setPos({ top: r.top - 6, left: r.left + r.width / 2 });
    }
    setHovered(true);
  };

  return (
    <div ref={ref} className="shrink-0 flex items-center cursor-default" onMouseEnter={onEnter} onMouseLeave={() => setHovered(false)}>
      <InfoIcon />
      {hovered && createPortal(
        <div className="fixed z-[9999] pointer-events-none" style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -100%)' }}>
          <div className="rounded-[6px] px-[10px] py-[8px] w-[240px]" style={{ background: '#1a1a1a' }}>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-[1.4] text-center">{text}</p>
          </div>
          <div className="flex justify-center">
            <svg width="10" height="5" viewBox="0 0 10 5" fill="none">
              <path d="M10 0H0L3.58579 3.58579C4.36684 4.36684 5.63316 4.36684 6.41421 3.58579L10 0Z" fill="#1a1a1a"/>
            </svg>
          </div>
        </div>,
        document.body
      )}
    </div>
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
  helper = '',
  inactive = false,
  validate,
  infoTooltip = '',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hasChevron?: boolean;
  hasInfo?: boolean;
  dimValue?: boolean;
  halfWidth?: boolean;
  helper?: string;
  inactive?: boolean;
  validate?: (v: string) => string | null;
  infoTooltip?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [touched, setTouched] = useState(false);

  const errorText = validate ? validate(value) : null;
  const showError = !!errorText && touched && !focused && !inactive;
  const showHelper = focused && helper && !showError;

  const borderColor = inactive
    ? 'var(--cp-border-default)'
    : showError
      ? '#E53935'
      : focused
        ? 'var(--cp-brand-primary)'
        : hovered
          ? 'var(--cp-border-hover)'
          : 'var(--cp-border-default)';

  const borderRadius = (showHelper || showError) ? '5px 5px 0 0' : '5px';

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
          border: `1px solid ${borderColor}`,
          transition: 'border-color 0.1s',
          borderRadius,
          pointerEvents: inactive ? 'none' : undefined,
          opacity: inactive ? 0.6 : 1,
        }}
      >
        <div className="flex flex-col items-start justify-between self-stretch flex-1 min-w-0">
          <div className="flex gap-[5px] items-center shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">
              {label}
            </p>
            {hasInfo && (infoTooltip
              ? <span style={{ pointerEvents: 'auto' }}><InfoIconWithTooltip text={infoTooltip} /></span>
              : <InfoIcon />)}
          </div>
          <input
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => { setFocused(false); setTouched(true); }}
            className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] bg-transparent border-none outline-none w-full min-w-0 leading-none placeholder:text-[var(--cp-text-quinary)] overflow-hidden text-ellipsis whitespace-nowrap"
            style={{
              color: dimValue ? 'var(--cp-text-quaternary)' : 'var(--cp-text-primary)',
              caretColor: 'var(--cp-brand-primary)',
            }}
          />
        </div>
        {hasChevron && <ChevronSelector />}
      </div>
      {/* Blue helper */}
      {showHelper && (
        <div
          className="absolute left-0 right-0 px-[10px] py-[6px] rounded-b-[5px] z-10"
          style={{ top: '100%', background: 'var(--cp-brand-primary)', border: '1px solid var(--cp-brand-primary)', borderTop: 'none' }}
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-[1.2]">{helper}</p>
        </div>
      )}
      {/* Red error helper */}
      {showError && (
        <div
          className="absolute left-0 right-0 px-[10px] py-[6px] rounded-b-[5px] z-10"
          style={{ top: '100%', background: '#E53935', border: '1px solid #E53935', borderTop: 'none' }}
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-[1.2]">{errorText}</p>
        </div>
      )}
    </div>
  );
}

// ─── Country list ─────────────────────────────────────────────────────────────
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

// ─── Bank Country field with searchable dropdown ──────────────────────────────
function BankCountryField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = COUNTRIES.find(c => c.name === value) ?? COUNTRIES.find(c => c.name === 'United Kingdom')!;
  const filtered = COUNTRIES.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    };
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  const borderColor = hovered || open ? 'var(--cp-border-hover)' : 'var(--cp-border-default)';
  const borderRadius = '5px';

  return (
    <div ref={wrapperRef} className="relative w-full shrink-0" style={{ overflow: 'visible' }}>
      {/* Trigger field */}
      <div
        className="bg-white relative h-[56px] flex items-start justify-between p-[10px] w-full cursor-pointer"
        style={{ border: `1px solid ${borderColor}`, borderRadius, transition: 'border-color 0.1s' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex flex-col items-start justify-between self-stretch flex-1 min-w-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">
            Bank Country
          </p>
          <div className="flex gap-[5px] items-center shrink-0">
            <span className="text-[14px] leading-none shrink-0">{selected.flag}</span>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-none whitespace-nowrap">
              {selected.name}
            </p>
          </div>
        </div>
        {/* Chevron */}
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

      {/* Dropdown panel */}
      {open && (
        <div
          className="absolute left-0 right-0 bg-white z-50 rounded-[5px]"
          style={{ top: 60, boxShadow: '0 4px 16px rgba(0,0,0,0.12)', border: '1px solid var(--cp-border-hover)' }}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col gap-[20px] p-[10px]">

            {/* Search field — styled as a bank item card */}
            <div className="relative rounded-[5px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
              <div className="flex flex-col items-start p-[10px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase leading-none">Search</p>
                <input
                  ref={searchRef}
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Type country name"
                  className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-secondary)] bg-transparent border-none outline-none w-full leading-none placeholder:text-[var(--cp-text-quinary)] mt-[3px]"
                  style={{ caretColor: 'var(--cp-brand-primary)' }}
                />
              </div>
            </div>

            {/* Country list */}
            <div className="flex flex-col gap-[5px] overflow-y-auto" style={{ maxHeight: 220 }}>
              {filtered.map(country => {
                const isSelected = country.name === value;
                return (
                  <div
                    key={country.code}
                    className={`relative rounded-[5px] shrink-0 w-full cursor-pointer transition-colors ${isSelected ? 'bg-[var(--cp-brand-primary)]' : 'bg-white hover:bg-[var(--cp-bg-1)]'}`}
                    onClick={() => { onChange(country.name); setOpen(false); setSearch(''); }}
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
        </div>
      )}
    </div>
  );
}

// ─── IBAN validator (global format, 14–34 chars) ─────────────────────────────
export function isValidUkIban(raw: string): boolean {
  const v = raw.replace(/\s/g, '').toUpperCase();
  return /^[A-Z]{2}[A-Z0-9]{12,32}$/.test(v);
}

// ─── IBAN field with type dropdown ───────────────────────────────────────────
const IBAN_TYPES = [
  { label: 'IBAN', description: 'International Bank Account Number — used for cross-border payments in Europe and beyond.' },
  { label: 'Account Number', description: 'Local account number — used for domestic transfers within a specific country.' },
];

export function IBANField({ value, onChange, ibanType, onIbanTypeChange, hideTypeSelector }: { value: string; onChange: (v: string) => void; ibanType: string; onIbanTypeChange: (t: string) => void; hideTypeSelector?: boolean }) {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [touched, setTouched] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  useEffect(() => { setTouched(false); }, [ibanType]);


  const placeholder = ibanType === 'IBAN'
    ? 'Enter a valid IBAN (14–34 characters)'
    : 'Enter your bank account number';

  const isIbanValid = ibanType === 'IBAN' && isValidUkIban(value);
  const isAccountValid = ibanType === 'Account Number' && /^\d+$/.test(value) && value.length > 6;
  const isValid = isIbanValid;  // checkmark only for IBAN

  const stripped = value.replace(/\s/g, '');

  const showIbanError = ibanType === 'IBAN' && !isIbanValid && !focused && !open && value.trim() !== '' && (
    stripped.length >= 34 || touched
  );
  const showAccountError = ibanType === 'Account Number' && !isAccountValid && !focused && !open && value.trim() !== '' && touched;
  const showError = showIbanError || showAccountError;

  const errorText = showIbanError
    ? 'Please enter a valid IBAN (14–34 characters)'
    : 'Must contain numbers only and be more than 6 digits';
  const borderColor = showError
    ? '#E53935'
    : focused || open ? 'var(--cp-border-active)'
    : hovered ? 'var(--cp-border-hover)'
    : 'var(--cp-border-default)';

  return (
    <div ref={wrapperRef} className="relative w-full shrink-0" style={{ overflow: 'visible' }}>
      {/* Input row */}
      <div
        className="bg-white relative h-[56px] flex items-start justify-between p-[10px] w-full"
        style={{ border: `1px solid ${borderColor}`, borderRadius: showError ? '5px 5px 0 0' : '5px', transition: 'border-color 0.1s' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex flex-col items-start justify-between self-stretch flex-1 min-w-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">
            {ibanType}
          </p>
          <input
            type="text"
            value={value}
            onChange={e => {
              const v = ibanType === 'Account Number' ? e.target.value.replace(/\D/g, '') : e.target.value;
              onChange(v);
            }}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => { setFocused(false); setTouched(true); }}
            className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] bg-transparent border-none outline-none w-full min-w-0 leading-none overflow-hidden text-ellipsis whitespace-nowrap placeholder:text-[var(--cp-text-quinary)]"
            style={{ caretColor: 'var(--cp-brand-primary)' }}
          />
        </div>
        {/* Right side: [checkmark when valid] | divider | chevron — divider+chevron block stays fixed */}
        {!hideTypeSelector && <button
          className="content-stretch flex items-center relative shrink-0 self-stretch cursor-pointer"
          onClick={() => setOpen(o => !o)}
          tabIndex={-1}
          type="button"
        >
          {isValid && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="shrink-0 mr-[10px]">
              <path d="M1 4L3.5 6.5L9 1" stroke="var(--cp-text-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
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
        </button>}
      </div>

      {/* Dropdown */}
      {!hideTypeSelector && open && (
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
                  onClick={() => { onIbanTypeChange(type.label); onChange(''); setOpen(false); }}
                >
                  {!isActive && <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />}
                  <div className="flex flex-col items-start p-[10px]">
                    <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] leading-none ${isActive ? 'text-white' : 'text-[var(--cp-text-primary)]'}`}>
                      {type.label}
                    </p>
                    <p className={`font-['Inter:Medium',sans-serif] font-medium text-[11px] leading-[1.2] mt-[4px] ${isActive ? 'text-white/80' : 'text-[var(--cp-text-secondary)]'}`}>
                      {type.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* Error helper */}
      {showError && (
        <div
          className="absolute left-0 right-0 px-[10px] py-[6px] rounded-b-[5px] z-10"
          style={{ top: '100%', background: '#E53935', border: '1px solid #E53935', borderTop: 'none' }}
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-[1.2]">
            {errorText}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Edit button — same as PaySettingsRow EditButton (Figma 743:5958) ─────────
function AddLabelEditButton({ onClick }: { onClick?: () => void }) {
  const [hovered, setHovered] = useState(false);
  const color = hovered ? '#1C60DD' : '#8492A6';
  return (
    <div className="relative shrink-0" style={{ overflow: 'visible' }}>
      <button
        className="content-stretch flex h-full items-center justify-center px-[10px] py-[5px] relative shrink-0 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
      >
        <div className="relative shrink-0 size-[16px]">
          <div className="absolute inset-[12.29%_12.29%_3.96%_3.96%]">
            <svg className="absolute block inset-0 size-full" viewBox="0 0 13.4 13.4" fill="none" preserveAspectRatio="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.595549 0.595549C0.976874 0.214225 1.49406 0 2.03333 0H6.7C7.0866 0 7.4 0.313401 7.4 0.7C7.4 1.0866 7.0866 1.4 6.7 1.4H2.03333C1.86536 1.4 1.70427 1.46673 1.5855 1.5855C1.46673 1.70427 1.4 1.86536 1.4 2.03333V11.3667C1.4 11.5346 1.46673 11.6957 1.5855 11.8145C1.70427 11.9333 1.86536 12 2.03333 12H11.3667C11.5346 12 11.6957 11.9333 11.8145 11.8145C11.9333 11.6957 12 11.5346 12 11.3667V6.7C12 6.3134 12.3134 6 12.7 6C13.0866 6 13.4 6.3134 13.4 6.7V11.3667C13.4 11.9059 13.1858 12.4231 12.8045 12.8045C12.4231 13.1858 11.9059 13.4 11.3667 13.4H2.03333C1.49406 13.4 0.976873 13.1858 0.595549 12.8045C0.214226 12.4231 0 11.9059 0 11.3667V2.03333C0 1.49406 0.214225 0.976874 0.595549 0.595549Z" fill={color} />
            </svg>
          </div>
          <div className="absolute inset-[3.45%_3.45%_28.96%_28.96%]">
            <svg className="absolute block inset-0 size-full" viewBox="0 0 10.8142 10.8142" fill="none" preserveAspectRatio="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.70002 1.4C8.51059 1.4 8.32893 1.47525 8.19499 1.60919L1.99876 7.80542L1.66207 9.15216L3.00881 8.81547L9.20504 2.61924C9.33898 2.4853 9.41423 2.30363 9.41423 2.11421C9.41423 1.92479 9.33898 1.74313 9.20504 1.60919C9.0711 1.47525 8.88944 1.4 8.70002 1.4ZM7.20504 0.619239C7.60153 0.222747 8.13929 0 8.70002 0C9.26074 0 9.7985 0.222747 10.195 0.619239C10.5915 1.01573 10.8142 1.55349 10.8142 2.11421C10.8142 2.67494 10.5915 3.2127 10.195 3.60919L3.86166 9.94252C3.77195 10.0322 3.65954 10.0959 3.53646 10.1266L0.86979 10.7933C0.631247 10.8529 0.378906 10.7831 0.20504 10.6092C0.0311738 10.4353 -0.0387205 10.183 0.0209151 9.94444L0.687582 7.27777C0.718352 7.15469 0.781996 7.04228 0.871707 6.95257L7.20504 0.619239Z" fill={color} />
            </svg>
          </div>
        </div>
      </button>
      {hovered && (
        <div
          className="absolute flex flex-col items-center pointer-events-none z-50"
          style={{ bottom: 'calc(100% + 4px)', left: '50%', transform: 'translateX(-50%)' }}
        >
          <div className="bg-black rounded-[5px] px-[10px] py-[10px] shrink-0 whitespace-nowrap">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-none">Edit</p>
          </div>
          <svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="shrink-0">
            <path d="M10 0H0L3.58579 3.58579C4.36684 4.36684 5.63316 4.36684 6.41421 3.58579L10 0Z" fill="black" />
          </svg>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-[1.2] break-words">{value}</p>
    </div>
  );
}

// ─── 2FA code input field ─────────────────────────────────────────────────────
function TwoFaField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const borderColor = focused ? 'var(--cp-brand-primary)' : hovered ? 'var(--cp-border-hover)' : 'var(--cp-border-default)';
  return (
    <div
      className="bg-white relative rounded-[5px] shrink-0 w-full cursor-text"
      style={{ border: `1px solid ${borderColor}`, transition: 'border-color 0.1s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col items-start justify-between p-[10px] relative" style={{ minHeight: 83 }}>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">
          CONFIRMATION CODE
        </p>
        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder=""
          className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-[var(--cp-text-primary)] bg-transparent border-none outline-none w-full min-w-0 mt-[10px]"
          style={{ letterSpacing: '-0.6px', caretColor: 'var(--cp-brand-primary)' }}
        />
      </div>
    </div>
  );
}

// ─── Add Label field with hover + focus border ───────────────────────────────
function AddLabelField({ labelInputRef, label, setLabel, bankName, labelValue }: {
  labelInputRef: React.RefObject<HTMLInputElement>;
  label: string;
  setLabel: (v: string) => void;
  bankName: string | null;
  labelValue: string;
}) {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const borderColor = focused ? 'var(--cp-brand-primary)' : hovered ? 'var(--cp-border-hover)' : 'var(--cp-border-default)';
  return (
    <div
      className="bg-white h-[56px] flex items-start justify-between p-[10px] relative rounded-[5px] shrink-0 w-full cursor-text"
      style={{ border: `1px solid ${borderColor}`, transition: 'border-color 0.1s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => labelInputRef.current?.focus()}
    >
      <div className="flex flex-col h-full items-start justify-between relative shrink-0 flex-1 min-w-0">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">Add Label</p>
        <input
          ref={labelInputRef}
          type="text"
          value={label || bankName || ''}
          onChange={e => setLabel(e.target.value)}
          placeholder="---"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] bg-transparent border-none outline-none w-full min-w-0 leading-none"
          style={{ caretColor: 'var(--cp-brand-primary)' }}
        />
      </div>
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
export default function AddNewBankModal({ onClose, onBankAdded }: Props) {
  const { addBank } = useBanks();
  const [step, setStep] = useState<'form' | 'confirm' | '2fa' | 'done'>('form');
  const [twoFaCode, setTwoFaCode] = useState('');
  const [holderName, setHolderName]     = useState('Acme Corp');
  const [bankCountry, setBankCountry]   = useState('United Kingdom');
  const [iban, setIban]                 = useState('');
  const [ibanType, setIbanType]         = useState('IBAN');
  const [bic, setBic]                   = useState('');
  const [address, setAddress]           = useState('Flat 4, 25 Baker Street');
  const [city, setCity]                 = useState('London');
  const [postalCode, setPostalCode]     = useState('W1U 8EE');
  const [accountType, setAccountType]   = useState('');
  const [check1, setCheck1]             = useState(true);
  const [check2, setCheck2]             = useState(true);
  const labelInputRef                   = useRef<HTMLInputElement>(null);

  const ibanValid = isValidUkIban(iban);
  const bicFromIban = ibanValid ? (() => {
    const v = iban.replace(/\s/g, '').toUpperCase();
    const bankCode = v.slice(4, 8);          // e.g. BARC
    const countryCode = v.slice(0, 2);       // e.g. GB
    // Derive 2-char location code from sort code digits (positions 8-13)
    const sortDigits = v.slice(8, 14);
    const loc0 = String.fromCharCode(48 + (parseInt(sortDigits[0]) % 10)); // digit
    const loc1 = String.fromCharCode(65 + (parseInt(sortDigits[1]) % 26)); // letter
    const base8 = `${bankCode}${countryCode}${loc0}${loc1}`;
    // Use IBAN char-sum parity to decide 8 or 11 chars
    const hash = v.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    return hash % 2 === 0 ? base8 : `${base8}XXX`;
  })() : null;

  const prevIbanValid = useRef(false);
  useEffect(() => {
    if (ibanValid) {
      setBic(bicFromIban!);
    } else if (prevIbanValid.current) {
      setBic('');
    }
    prevIbanValid.current = ibanValid;
  }, [ibanValid, bicFromIban]);

  // When country changes from default UK, reset all fields except Account Holder Name
  const prevCountry = useRef(bankCountry);
  useEffect(() => {
    if (bankCountry === prevCountry.current) return;
    prevCountry.current = bankCountry;
    setIban('');
    setBic('');
    setAddress('');
    setCity('');
    setPostalCode('');
    setAccountType('');
    setLabel('');
    setIbanType(bankCountry === 'Canada' ? 'Account Number' : 'IBAN');
  }, [bankCountry]);

  // Derive bank name: first try full BIC lookup, then use 4-char prefix from IBAN to rotate examples
  const IBAN_BANK_EXAMPLES = ['HSBC', 'Barclays Bank', 'Citibank', 'Wise'];
  const bankNameFromBic = BIC_TO_BANK[bic.trim().toUpperCase()] ?? null;
  const bankNameFromIban = ibanValid
    ? (() => {
        const v = iban.replace(/\s/g, '').toUpperCase();
        const hash = v.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
        return IBAN_BANK_EXAMPLES[hash % IBAN_BANK_EXAMPLES.length];
      })()
    : null;
  const bankName = bankNameFromBic ?? bankNameFromIban;
  const [label, setLabel]               = useState('');
  // keep label in sync with bankName when user hasn't manually edited it
  const labelValue = label || bankName || '---';

  const accountNumberValid = /^\d+$/.test(iban) && iban.length > 6;
  const bicValid = bic.trim().length >= 8 && bic.trim().length <= 11;
  const fieldsComplete = address.trim() !== '' && city.trim() !== '' && postalCode.trim() !== '';
  const canContinue = fieldsComplete && (ibanType === 'IBAN'
    ? ibanValid && bic.trim() !== ''
    : accountNumberValid && bicValid);

  if (step === 'done') return <BankAddedModal onClose={onClose} />;

  if (step === '2fa') return (
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
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-white">Dismiss</p>
        </button>
        <div className="bg-white flex flex-col items-start justify-between p-[20px] rounded-[10px] w-full">
          {/* Title area */}
          <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full mb-[20px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap leading-none">
              CONFIRMATION
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-[1.4]">
              Please enter your authenticator app 2FA code.
            </p>
          </div>

          {/* Code input */}
          <TwoFaField value={twoFaCode} onChange={setTwoFaCode} />

          {/* Buttons */}
          <div className="flex gap-[10px] items-center relative shrink-0 w-full mt-[20px]">
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={() => { setStep('confirm'); setTwoFaCode(''); }}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">Cancel</p>
            </button>
            <button
              disabled={twoFaCode.replace(/\D/g, '').length < 2}
              className={`flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] transition-colors ${twoFaCode.replace(/\D/g, '').length >= 2 ? 'bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] cursor-pointer' : 'bg-[var(--cp-bg-2)] cursor-not-allowed'}`}
              onClick={() => {
                if (twoFaCode.replace(/\D/g, '').length < 2) return;
                const newId = addBank({
                  label: labelValue,
                  bankName: bankName ?? '---',
                  holder: holderName,
                  iban: iban,
                  accountNumber: iban.replace(/\s/g, '').slice(-8),
                  bic: bic,
                  address: address,
                  city: city,
                  postalCode: postalCode,
                  country: bankCountry,
                  status: 'under_review',
                });
                onBankAdded?.(newId);
                setStep('done');
              }}
            >
              <p className={`font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-center whitespace-nowrap ${twoFaCode.replace(/\D/g, '').length >= 2 ? 'text-white' : 'text-[var(--cp-text-secondary)]'}`}>Submit</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

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
        <div className="bg-white flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full" style={{ height: 704 }}>

          {/* Title area */}
          <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap">
              Enter Bank Details
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-[1.2]">
              You can withdraw your crypto balance as fiat to any supported bank with up to same day settlement.
            </p>
          </div>

          {/* Form — scrollable so it never overflows the padded card */}
          <div className="flex flex-col gap-[8px] items-start relative w-full flex-1 min-h-0 overflow-y-auto">
            <Field label="Account Holder Name" value={holderName}  onChange={setHolderName} helper="Must exactly match the name registered with your bank" />
            <BankCountryField value={bankCountry} onChange={setBankCountry} />
            <IBANField value={iban} onChange={setIban} ibanType={ibanType} onIbanTypeChange={setIbanType} hideTypeSelector={bankCountry === 'Canada'} />
            <Field
              label="BIC / SWIFT"
              value={bic}
              onChange={setBic}
              inactive={!!bicFromIban}
              placeholder={ibanType === 'IBAN' ? '' : 'Enter a valid BIC/SWIFT code. E.g. TRWIGB2LXXX'}
              validate={v => {
                if (!bicFromIban && v.trim() !== '' && (v.trim().length < 8 || v.trim().length > 11)) return 'BIC / SWIFT must be between 8 and 11 characters';
                return null;
              }}
            />
            <Field label="Address"      value={address}     onChange={setAddress} helper="Must exactly match the billing address registered with your bank" />
            <Field label="Town / City"  value={city}        onChange={setCity}    helper="Must exactly match the billing address registered with your bank" />
            <Field label="Postal / ZIP Code" value={postalCode} onChange={setPostalCode} helper="Must exactly match the billing address registered with your bank" />
            <Field label="Bank Account Type" value={accountType} onChange={setAccountType} placeholder="Business" dimValue={accountType === ''} hasInfo infoTooltip="Transfers are restricted to business bank accounts matching your registered CoinPayments name" inactive />
          </div>

          {/* Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={onClose}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">Cancel</p>
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
              <p className={`font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-center whitespace-nowrap ${canContinue ? 'text-white' : 'text-[var(--cp-text-secondary)]'}`}>
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

        <div className="bg-white flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full" style={{ height: 704 }}>
          <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap">Bank Details</p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-[1.2]">
              Please verify your banking information and make sure these details match your records.
            </p>
          </div>

          {/* Data rows */}
          <div className="flex flex-col gap-[10px] items-start relative shrink-0 w-full">

            {/* Account Holder Name */}
            <DataRow label="Account Holder Name" value={holderName} />

            {/* Bank Name */}
            <DataRow label="Bank Name" value={bankName ?? '---'} />

            {/* IBAN — only shown when IBAN mode */}
            {ibanType === 'IBAN' && <DataRow label="IBAN" value={iban} />}

            {/* Account Number + BIC side by side */}
            <div className="flex items-start justify-between relative shrink-0 w-full gap-[10px]">
              <div className="flex-1 min-w-0">
                <DataRow label="Account Number" value={ibanType === 'IBAN' ? (iban.replace(/\s/g, '').slice(-8) || '---') : iban} />
              </div>
              <div className="flex-1 min-w-0">
                <DataRow label="BIC / SWIFT" value={bic} />
              </div>
            </div>

            {/* Recipient Address */}
            <DataRow label="Recipient Address" value={`${address}, ${city}, ${postalCode}, ${bankCountry}`} />
          </div>

          {/* Add Label editable field */}
          <AddLabelField labelInputRef={labelInputRef} label={label} setLabel={setLabel} bankName={bankName} labelValue={labelValue} />

          {/* Spacer — absorbs extra height to match step 1 modal height */}
          <div className="flex-1" />

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
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] flex-1 min-w-0 leading-[1.2]">
                      I have read and agree with the terms listed above and in the{' '}
                      <span className="text-[var(--cp-brand-primary)] cursor-pointer">User Agreement</span>.
                    </p>
                  ) : (
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] flex-1 min-w-0 leading-[1.2]">{text}</p>
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
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">Back</p>
            </button>
            <button
              className="bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer transition-colors"
              onClick={() => setStep('2fa')}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-white text-center whitespace-nowrap">Confirm</p>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
