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
    <div className="relative shrink-0 w-full">
      {/* Inner — mirrors EditField's h-[56px] flex items-start justify-between p-[10px] exactly */}
      <div
        className="bg-white flex items-start justify-between p-[10px] rounded-[5px] w-full cursor-pointer transition-colors duration-100"
        style={{
          height,
          border: `1px solid ${hovered ? 'var(--cp-border-hover)' : 'var(--cp-border-default)'}`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left — identical to EditField inner column */}
        <div className="flex flex-col items-start justify-between self-stretch flex-1 min-w-0">
          <div className="flex gap-[5px] items-center shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">
              {label}
            </p>
            {labelInfo && <InfoIcon />}
          </div>
          <div className="flex gap-[5px] items-center shrink-0 min-w-0 overflow-hidden">
            {children}
          </div>
        </div>

        {/* Right — optional selector */}
        {selector && (
          <div className="flex items-center justify-between relative shrink-0 self-stretch">
            {selector}
          </div>
        )}
      </div>
    </div>
  );
}
