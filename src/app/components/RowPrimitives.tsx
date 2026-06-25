// Shared primitives used across all row variants (Wallet, Transaction, Bank, Settings).
// Extract order: RowDivider → RowCellLabel → RowIdentity → StatusDot → RowAmountBlock → RowContainer

// ─── Step 1: RowDivider ───────────────────────────────────────────────────────
// The 1px × 34px vertical separator used between columns in every row type.

export function RowDivider() {
  return <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />;
}

// ─── Step 2: RowCellLabel ─────────────────────────────────────────────────────
// Uppercase 11px column header. color='tertiary' (default) for standard column
// headers; color='primary' for the Wallet expanded balance block labels.

type RowCellLabelProps = {
  children: React.ReactNode;
  color?: 'tertiary' | 'primary';
};

export function RowCellLabel({ children, color = 'tertiary' }: RowCellLabelProps) {
  const textColor = color === 'primary' ? 'text-[var(--cp-text-primary)]' : 'text-[var(--cp-text-tertiary)]';
  return (
    <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] ${textColor} uppercase whitespace-nowrap leading-none`}>
      {children}
    </p>
  );
}

// ─── Step 3: RowIdentity ──────────────────────────────────────────────────────
// Icon (36px) + name (14.5px semibold) + subtitle stacked left block.
// textWidth    — fixed width class on the text wrapper, e.g. 'w-[140px]' (Wallet rows)
// truncate     — flex-1 min-w-0 + text-ellipsis on both lines (Bank row)
// subtitleSize — '13' (default, Wallet/Settings) | '14.5' (Bank row IBAN)

type RowIdentityProps = {
  icon: React.ReactNode;
  name: string;
  subtitle: string;
  textWidth?: string;
  truncate?: boolean;
  subtitleSize?: '13' | '14.5';
};

export function RowIdentity({ icon, name, subtitle, textWidth, truncate, subtitleSize = '13' }: RowIdentityProps) {
  const textWrapperClass = [
    'content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0',
    truncate ? 'flex-1 min-w-0 overflow-hidden' : '',
    textWidth ?? '',
  ].filter(Boolean).join(' ');

  const nameClass = [
    "font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap",
    truncate ? 'overflow-hidden text-ellipsis w-full' : 'relative shrink-0',
  ].join(' ');

  const subtitleClass = [
    "font-['Inter:Regular',sans-serif] font-normal text-[var(--cp-text-tertiary)] whitespace-nowrap",
    subtitleSize === '14.5' ? 'text-[14.5px]' : 'text-[13px]',
    truncate ? 'overflow-hidden text-ellipsis w-full' : 'relative shrink-0',
  ].join(' ');

  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      {icon}
      <div className={textWrapperClass}>
        <p className={nameClass}>{name}</p>
        <p className={subtitleClass}>{subtitle}</p>
      </div>
    </div>
  );
}

// ─── Step 4: StatusDot ───────────────────────────────────────────────────────
// 8px colored dot + 13px medium label. Used in Tx rows and Bank rows.
// color accepts any CSS color value or token string.

type StatusDotProps = {
  color: string;
  label: string;
};

export function StatusDot({ color, label }: StatusDotProps) {
  return (
    <div className="flex items-center gap-[5px] shrink-0">
      <div className="rounded-[100px] shrink-0 size-[8px]" style={{ background: color }} />
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

// ─── Step 5: RowAmountBlock ───────────────────────────────────────────────────
// Bold 14.5px primary value + regular 13px tertiary sub-value, stacked.
// align='end' (default, Tx row right side) | 'start' (Wallet collapsed left-aligned balance)
// width — optional fixed width class, e.g. 'w-[140px]' (Wallet collapsed)

type RowAmountBlockProps = {
  primary: string;
  secondary: string;
  align?: 'start' | 'end';
  width?: string;
};

export function RowAmountBlock({ primary, secondary, align = 'end', width }: RowAmountBlockProps) {
  const alignClass = align === 'start' ? 'items-start' : 'items-end';
  return (
    <div className={`flex flex-col ${alignClass} shrink-0 ${width ?? ''}`}>
      <p
        className="font-['Inter',sans-serif] font-bold leading-[normal] not-italic text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap"
        style={{ letterSpacing: '-0.5px' }}
      >
        {primary}
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">
        {secondary}
      </p>
    </div>
  );
}

// ─── Step 6: RowContainer ────────────────────────────────────────────────────
// Outer row wrapper. Handles zebra striping, optional hover, and bg variants.
// alt       — zebra: true → bg-2, false/undefined → bg-1
// bg        — 'zebra' (default, alt-aware) | 'white' (always white, e.g. expanded Wallet row)
// clickable — adds cursor-pointer + hover:bg-3 + transition-colors
// className — escape hatch for per-row padding/height/overflow differences

type RowContainerProps = {
  alt?: boolean;
  bg?: 'zebra' | 'white';
  clickable?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function RowContainer({ alt, bg = 'zebra', clickable, className, children }: RowContainerProps) {
  const bgClass =
    bg === 'white'
      ? 'bg-white'
      : alt
      ? 'bg-[var(--cp-bg-2)]'
      : 'bg-[var(--cp-bg-1)]';

  return (
    <div
      className={[
        'content-stretch flex items-center justify-between w-full rounded-[5px]',
        bgClass,
        clickable ? 'cursor-pointer transition-colors hover:bg-[var(--cp-bg-3)]' : '',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}
