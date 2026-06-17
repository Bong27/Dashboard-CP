import { useEffect, useRef, useState } from 'react';

export type SweepDestination = 'wallet-address' | 'bank-account' | null;

const OPTIONS: { id: Exclude<SweepDestination, null>; label: string; description: string }[] = [
  {
    id: 'wallet-address',
    label: 'Wallet Address',
    description:
      'Received payments are sent to the address or wallet ID you specify as soon as they reach the trigger amount',
  },
  {
    id: 'bank-account',
    label: 'Bank Account',
    description:
      'Received payments are automatically converted to USD and wired to your USD bank account via our third-party partners. Available for selected cryptocurrencies only.',
  },
];

type SweepDestinationDropdownProps = {
  value: SweepDestination;
  onChange: (value: SweepDestination) => void;
  className?: string;
};

export function SweepDestinationDropdown({ value, onChange, className = '' }: SweepDestinationDropdownProps) {
  const [open, setOpen] = useState(false);
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

  const selected = OPTIONS.find((option) => option.id === value);
  const displayText = selected?.label ?? 'Select a sweep destination';
  const isPlaceholder = !selected;

  return (
    <div ref={ref} className={`relative ${open ? 'z-[100]' : ''} ${className}`} style={{ overflow: 'visible' }}>
      <div
        className="bg-white h-[56px] relative rounded-[5px] cursor-pointer group"
        onClick={() => setOpen((current) => !current)}
      >
        <div className="content-stretch flex h-full items-start justify-between p-[10px] relative rounded-[inherit] w-full">
          <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 flex-1 min-w-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">
              SWEEP DESTINATION
            </p>
            <p
              className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14.5px] whitespace-nowrap ${
                isPlaceholder ? 'text-[var(--cp-text-quinary)]' : 'text-[var(--cp-text-primary)]'
              }`}
            >
              {displayText}
            </p>
          </div>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px] self-stretch">
            <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
            <div
              className={`flex items-center justify-center relative shrink-0 transition-transform duration-150 ${
                open ? 'rotate-180' : ''
              }`}
            >
              <div className="overflow-clip relative shrink-0 size-[12px]">
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
          onClick={(event) => event.stopPropagation()}
        >
          <div aria-hidden="true" className="absolute border border-[var(--cp-border-hover)] border-solid inset-0 pointer-events-none rounded-[5px]" />
          <div className="content-stretch flex flex-col gap-[5px] items-start p-[10px] relative">
            {OPTIONS.map((option) => (
              <div
                key={option.id}
                className="bg-white relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-[var(--cp-bg-1)] transition-colors"
                onClick={() => {
                  onChange(option.id);
                  setOpen(false);
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]"
                />
                <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] w-full">
                    {option.label}
                  </p>
                  <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[var(--cp-text-secondary)] w-full">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
