import { useState } from 'react';

type SelectFieldProps = {
  label: string;
  labelInfo?: boolean;
  children: React.ReactNode;
  selector?: React.ReactNode;
  height?: number;
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

export function SelectField({ label, labelInfo, children, selector, height = 62 }: SelectFieldProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="bg-white content-stretch flex items-start justify-between p-[10px] relative rounded-[5px] shrink-0 w-full cursor-pointer transition-colors duration-100"
      style={{
        height,
        border: `1px solid ${hovered ? 'var(--cp-border-hover)' : 'var(--cp-border-default)'}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left — h-full + justify-between pins label top, value bottom */}
      <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 flex-1 min-w-0">
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">
            {label}
          </p>
          {labelInfo && <InfoIcon />}
        </div>
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0 min-w-0 overflow-hidden">
          {children}
        </div>
      </div>

      {/* Right — h-full items-center for chevron/badge */}
      {selector && (
        <div className="content-stretch flex gap-[5px] h-full items-center relative shrink-0">
          {selector}
        </div>
      )}
    </div>
  );
}
