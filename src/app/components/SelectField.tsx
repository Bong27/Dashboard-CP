import { useState } from 'react';

type SelectFieldProps = {
  label: string;
  labelInfo?: boolean;
  labelInfoTooltip?: string;
  children: React.ReactNode;
  selector?: React.ReactNode;
  height?: number;
  focused?: boolean;
};

function InfoIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx="8" cy="8" r="7.5" fill="#8492A6" />
      <path d="M8 7V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="5" r="0.75" fill="white" />
    </svg>
  );
}

export function SelectField({ label, labelInfo, labelInfoTooltip, children, selector, height = 62, focused }: SelectFieldProps) {
  const [hovered, setHovered] = useState(false);
  // Map height to Tailwind class so h-full works on children
  const hClass = height === 56 ? 'h-[56px]' : height === 62 ? 'h-[62px]' : height === 46 ? 'h-[46px]' : 'h-[56px]';
  const borderColor = focused
    ? 'var(--cp-brand-primary)'
    : hovered ? 'var(--cp-border-hover)' : 'var(--cp-border-default)';
  const borderRadius = focused ? '5px 5px 0 0' : '5px';
  return (
    <div
      className={`bg-white ${hClass} flex items-start justify-between p-[10px] relative shrink-0 w-full cursor-pointer transition-colors duration-100`}
      style={{ border: `1px solid ${borderColor}`, borderRadius }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left — h-full works because parent height is set via Tailwind class */}
      <div className="flex flex-col h-full items-stretch justify-between flex-1 min-w-0">
        <div className="flex gap-[5px] items-center shrink-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">
            {label}
          </p>
          {labelInfo && (
            labelInfoTooltip ? (
              <div className="relative group/tooltip shrink-0">
                <InfoIcon />
                <div className="absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover/tooltip:opacity-100 transition-opacity z-[200] w-[260px]">
                  <div className="bg-[#1a1a1a] rounded-[6px] px-[10px] py-[8px]">
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-[1.4] text-center">{labelInfoTooltip}</p>
                  </div>
                  <div className="flex justify-center">
                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none">
                      <path d="M10 0H0L3.58579 3.58579C4.36684 4.36684 5.63316 4.36684 6.41421 3.58579L10 0Z" fill="#1a1a1a"/>
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <InfoIcon />
            )
          )}
        </div>
        <div className="flex gap-[5px] items-center w-full min-w-0">
          {children}
        </div>
      </div>

      {/* Right — h-full items-center */}
      {selector && (
        <div className="flex h-full items-center shrink-0">
          {selector}
        </div>
      )}
    </div>
  );
}
