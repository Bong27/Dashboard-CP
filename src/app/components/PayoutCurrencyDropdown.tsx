import { useEffect, useRef, useState } from 'react';
import svgPaths from '../../imports/PaySettingsRow/svg-dulsyl96to';

const CURRENCIES = [
  { id: 'USD', label: 'Dollar (United States)', letter: '$' },
  { id: 'EUR', label: 'Euro', letter: 'E' },
  { id: 'GBP', label: 'British Pound', letter: '£' },
];

type PayoutCurrencyDropdownProps = {
  value: string | null;
  onChange: (value: string) => void;
  className?: string;
};

export function PayoutCurrencyDropdown({ value, onChange, className = '' }: PayoutCurrencyDropdownProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const selected = CURRENCIES.find(c => c.id === value);
  const filtered = CURRENCIES.filter(c =>
    c.label.toLowerCase().includes(search.toLowerCase()) ||
    c.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div ref={ref} className={`relative ${open ? 'z-[100]' : ''} ${className}`} style={{ overflow: 'visible' }}>
      <div
        className="bg-white group h-[56px] relative rounded-[5px] cursor-pointer"
        style={{ overflow: 'visible' }}
        onClick={() => setOpen(o => !o)}
      >
        <div className="content-stretch flex items-start justify-between p-[10px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
            {/* Label */}
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">
                PAYOUT CURRENCY
              </p>
              <div className="overflow-clip relative shrink-0 size-[8px]">
                <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path clipRule="evenodd" d={svgPaths.pe418400} fill="var(--fill-0, #D3D6E1)" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Value */}
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              {selected ? (
                <>
                  <div className="border border-[var(--cp-brand-primary)] border-solid flex items-center justify-center relative rounded-[999px] shrink-0 size-[14px]">
                    <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[var(--cp-brand-primary)] leading-none" style={{ fontSize: 7 }}>
                      {selected.letter}
                    </span>
                  </div>
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] whitespace-nowrap">
                    {selected.id}
                  </p>
                </>
              ) : (
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-quinary)] text-[14.5px] whitespace-nowrap">
                  Select currency
                </p>
              )}
            </div>
          </div>
          {/* Chevron */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px] self-stretch">
            <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
            <div className={`flex items-center justify-center relative shrink-0 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}>
              <div className="overflow-clip relative shrink-0 size-[12px]">
                <div className="absolute inset-[34.38%_21.88%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.74999 3.74999">
                    <path clipRule="evenodd" d={svgPaths.p1a1bd900} fill="var(--fill-0, #A2A5AC)" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className={`absolute border border-solid inset-0 pointer-events-none rounded-[5px] transition-colors ${
            open
              ? 'border-[var(--cp-border-hover)]'
              : 'border-[var(--cp-border-default)] group-hover:border-[var(--cp-border-hover)]'
          }`}
        />
      </div>

      {open && (
        <div
          className="absolute bg-white left-0 mt-[5px] rounded-[5px] shadow-lg top-[56px] w-full z-50"
          onClick={e => e.stopPropagation()}
        >
          <div aria-hidden="true" className="absolute border border-[var(--cp-border-hover)] border-solid inset-0 pointer-events-none rounded-[5px]" />
          <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative">
            {/* Search */}
            <div className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch flex h-[38px] items-center justify-between overflow-clip p-[10px] relative rounded-[5px] w-full">
              <input
                autoFocus
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search"
                className="flex-1 font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-primary)] placeholder:text-[var(--cp-text-quinary)] bg-transparent outline-none border-none"
              />
              <svg className="shrink-0 size-[15px]" fill="none" viewBox="0 0 15 15">
                <path clipRule="evenodd" d="M6.5 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM0 6.5a6.5 6.5 0 1 1 11.436 4.23l3.168 3.167a.75.75 0 0 1-1.06 1.06l-3.168-3.167A6.5 6.5 0 0 1 0 6.5Z" fill="#A2A5AC" fillRule="evenodd" />
              </svg>
            </div>
            {/* Currency list */}
            <div className="content-stretch flex flex-col gap-[5px] items-start relative w-full">
              {filtered.map(currency => {
                const isActive = currency.id === value;
                return (
                  <div
                    key={currency.id}
                    className={`content-stretch flex gap-[20px] h-[46px] items-center overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-full cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-[var(--cp-brand-primary)] border border-[var(--cp-brand-primary)]'
                        : 'bg-white border border-[var(--cp-border-default)] hover:bg-[var(--cp-bg-1)]'
                    }`}
                    onClick={() => { onChange(currency.id); setOpen(false); setSearch(''); }}
                  >
                    {/* Circle letter */}
                    <div className={`border border-solid flex items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[24px] ${isActive ? 'border-white' : 'border-[var(--cp-brand-primary)]'}`}>
                      <span className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none ${isActive ? 'text-white' : 'text-[var(--cp-brand-primary)]'}`} style={{ fontSize: 10 }}>
                        {currency.letter}
                      </span>
                    </div>
                    {/* Name */}
                    <p className={`flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[11px] text-ellipsis whitespace-nowrap ${isActive ? 'text-white' : 'text-[var(--cp-text-primary)]'}`}>
                      {currency.label}
                    </p>
                    {/* Code */}
                    <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] whitespace-nowrap ${isActive ? 'text-white/80' : 'text-[var(--cp-text-secondary)]'}`}>
                      {currency.id}
                    </p>
                  </div>
                );
              })}
              {filtered.length === 0 && (
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-tertiary)] p-[5px]">No currencies found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
