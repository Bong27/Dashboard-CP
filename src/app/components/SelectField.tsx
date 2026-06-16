// ─────────────────────────────────────────────────────────────────────────────
// SelectField — reusable input field with selector
// Source: Figma node 211:2998 (Settings / Settlement mode input component)
//
// States:
//   default:  bg-white, border #e5e9f2
//   hover:    border #bec4d0 (--cp-border-hover), selector area bg #eff1f8
//   active:   border #2A5ED5 (--cp-border-active)
//
// Props:
//   label        — uppercase label text (e.g. "AMOUNT")
//   labelInfo    — show info icon next to label
//   children     — the main content (value display)
//   selector     — right-side slot (currency badge + chevron), omit for plain fields
//   height       — field height, default 62px
// ─────────────────────────────────────────────────────────────────────────────
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
      className="bg-white content-stretch flex items-start justify-between p-[10px] relative rounded-[5px] shrink-0 w-full transition-colors duration-100 cursor-pointer"
      style={{
        height,
        border: `1px solid ${hovered ? 'var(--cp-border-hover)' : 'var(--cp-border-default)'}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left: label + value */}
      <div className="flex flex-col items-start justify-between relative flex-1 min-w-0 overflow-hidden" style={{ height: height - 20 }}>
        {/* Label row */}
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">
            {label}
          </p>
          {labelInfo && <InfoIcon />}
        </div>
        {/* Value */}
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
          {children}
        </div>
      </div>

      {/* Right: selector slot — caller provides full content including divider/chevron */}
      {selector && (
        <div className="content-stretch flex self-stretch items-stretch relative shrink-0">
          {selector}
        </div>
      )}
    </div>
  );
}
