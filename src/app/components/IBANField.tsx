import { useState, useRef, useEffect } from 'react';
import { isValidUkIban } from '../utils/iban';

const IBAN_TYPES = [
  { label: 'IBAN', description: 'International Bank Account Number — used for cross-border payments in Europe and beyond.' },
  { label: 'Account Number', description: 'Local account number — used for domestic transfers within a specific country.' },
];

export function IBANField({ value, onChange, ibanType, onIbanTypeChange, hideTypeSelector, errorOverride }: {
  value: string;
  onChange: (v: string) => void;
  ibanType: string;
  onIbanTypeChange: (t: string) => void;
  hideTypeSelector?: boolean;
  errorOverride?: string | null;
}) {
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
  const isValid = isIbanValid;

  const stripped = value.replace(/\s/g, '');

  const showIbanError = ibanType === 'IBAN' && !isIbanValid && !focused && !open && value.trim() !== '' && (
    stripped.length >= 34 || touched
  );
  const showAccountError = ibanType === 'Account Number' && !isAccountValid && !focused && !open && value.trim() !== '' && touched;
  const showError = errorOverride != null ? true : (showIbanError || showAccountError);
  const showValid = isValid && !errorOverride;

  const errorText = errorOverride != null
    ? errorOverride
    : showIbanError
      ? 'Please enter a valid IBAN (14–34 characters)'
      : 'Must contain numbers only and be more than 6 digits';

  const borderColor = showError
    ? `var(--cp-error-field)`
    : focused || open ? 'var(--cp-border-active)'
    : hovered ? 'var(--cp-border-hover)'
    : 'var(--cp-border-default)';

  return (
    <div ref={wrapperRef} className="relative w-full shrink-0" style={{ overflow: 'visible' }}>
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
        {!hideTypeSelector && (
          <button
            className="content-stretch flex items-center relative shrink-0 self-stretch cursor-pointer"
            onClick={() => setOpen(o => !o)}
            tabIndex={-1}
            type="button"
          >
            {showValid && (
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
          </button>
        )}
      </div>

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

      {showError && (
        <div
          className="absolute left-0 right-0 px-[10px] py-[6px] rounded-b-[5px] z-10"
          style={{ top: '100%', background: `var(--cp-error-field)`, border: '1px solid var(--cp-error-field)', borderTop: 'none' }}
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-[1.2]">
            {errorText}
          </p>
        </div>
      )}
    </div>
  );
}
