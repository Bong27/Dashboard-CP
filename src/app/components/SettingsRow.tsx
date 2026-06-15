// ─────────────────────────────────────────────────────────────────────────────
// SettingsRow — Bank Payout settlement row
// Source: Figma node 1591:191528 (PaySettingsRow, Bank Payouts off-ramp file)
//
// Structure: [Coin logo + name] [Settlement Mode field] [Payout Currency] [Discount] [Radio]
// The Settlement Mode field has an extra Edit button alongside the chevron.
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';
import svgPaths from '../../imports/Wallet-2/svg-tfchl2zu4w';

// ─── Shared primitives ────────────────────────────────────────────────────────

function InfoIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx="8" cy="8" r="7.5" fill="#8492A6" />
      <path d="M8 7V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="5" r="0.75" fill="white" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-8 8A1 1 0 0 1 6 13H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 .293-.707l8-8ZM5 11.414V12h.586L13 4.586 12.414 4 5 11.414Z"
        fill="var(--cp-text-tertiary)" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[12px]">
      <div className="absolute inset-[34.38%_21.88%]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 8 6">
          <path fillRule="evenodd" clipRule="evenodd"
            d="M0.18306 0.18306C0.42714 -0.06102 0.82286 -0.06102 1.06694 0.18306L4 3.11612L6.93306 0.18306C7.17714 -0.06102 7.57286 -0.06102 7.81694 0.18306C8.06102 0.42714 8.06102 0.82286 7.81694 1.06694L4.44194 4.44194C4.19786 4.68602 3.80214 4.68602 3.55806 4.44194L0.18306 1.06694C-0.06102 0.82286 -0.06102 0.42714 0.18306 0.18306Z"
            fill="var(--cp-text-quinary)" />
        </svg>
      </div>
    </div>
  );
}

function LineDivider() {
  return <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />;
}

// ─── Field component ──────────────────────────────────────────────────────────

type FieldProps = {
  label: string;
  labelInfo?: boolean;
  children: React.ReactNode;
  showEdit?: boolean;
  width?: string;
  flex?: boolean;
  hovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function Field({ label, labelInfo, children, showEdit, width, flex, hovered, onMouseEnter, onMouseLeave }: FieldProps) {
  return (
    <div
      className={`bg-white border border-solid h-[56px] content-stretch flex items-start justify-between p-[10px] relative rounded-[5px] transition-colors duration-100 ${flex ? 'flex-1 min-w-[200px]' : ''}`}
      style={{
        borderColor: hovered ? 'var(--cp-border-hover)' : 'var(--cp-border-default)',
        ...(width ? { width } : {}),
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Left: label + value */}
      <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 flex-1 min-w-0 overflow-hidden">
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">
            {label}
          </p>
          {labelInfo && <InfoIcon />}
        </div>
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full min-w-0">
          {children}
        </div>
      </div>

      {/* Right: controls */}
      <div className="content-stretch flex gap-[5px] h-full items-center relative shrink-0 cursor-pointer">
        {showEdit && (
          <button className="content-stretch flex h-full items-center justify-center px-[10px] py-[5px] relative shrink-0 hover:opacity-70 transition-opacity">
            <EditIcon />
          </button>
        )}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]">
          <LineDivider />
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  );
}

// ─── USD badge ────────────────────────────────────────────────────────────────

function UsdBadge({ size = 14 }: { size?: number }) {
  return (
    <div
      className="rounded-[99999px] border-2 border-[var(--cp-brand-primary)] flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
    >
      <span className="text-[var(--cp-brand-primary)] font-bold leading-none select-none" style={{ fontSize: size * 0.42 }}>$</span>
    </div>
  );
}

// ─── Radio button ─────────────────────────────────────────────────────────────

function RadioButton({ checked = false }: { checked?: boolean }) {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[16px]">
      <div className="absolute inset-[4.55%]">
        <svg className="block size-full" fill="none" viewBox="0 0 16.1455 16.1455">
          <circle cx="8.07" cy="8.07" r="7.27"
            fill={checked ? 'var(--cp-brand-primary)' : 'white'}
            stroke={checked ? 'var(--cp-brand-primary)' : 'var(--cp-border-default)'}
            strokeWidth="1.6" />
          {checked && <circle cx="8.07" cy="8.07" r="3" fill="white" />}
        </svg>
      </div>
    </button>
  );
}

// ─── SettingsRow ──────────────────────────────────────────────────────────────

export type SettingsRowProps = {
  coinLogo: React.ReactNode;
  coinName: string;
  coinSymbol: string;
  bankName?: string;
  bankAccount?: string;
  payoutCurrency?: string;
  discount?: string;
  checked?: boolean;
  isAlt?: boolean;
};

export function SettingsRow({
  coinLogo,
  coinName,
  coinSymbol,
  bankName = 'Wise',
  bankAccount = 'GB97TRWI23080120507810',
  payoutCurrency = 'USD',
  discount,
  checked = false,
  isAlt = false,
}: SettingsRowProps) {
  const [settlementHovered, setSettlementHovered] = useState(false);
  const [payoutHovered, setPayoutHovered] = useState(false);
  const [discountHovered, setDiscountHovered] = useState(false);

  return (
    <div className={`${isAlt ? 'bg-[var(--cp-bg-2)]' : 'bg-[var(--cp-bg-1)]'} border-t border-[var(--cp-border-default)] border-solid content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative w-full`}>

      {/* Coin — fixed 178px matching Figma */}
      <div className="content-stretch flex items-center relative shrink-0 w-[178px]">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          {coinLogo}
          <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
            <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[14.5px] text-[var(--cp-text-primary)]">{coinName}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[var(--cp-text-tertiary)]">{coinSymbol}</p>
          </div>
        </div>
      </div>

      {/* Settlement Mode (Nightly to Bank) — flex-1, with edit button */}
      <Field
        label="Settlement Mode (Nightly to Bank)"
        labelInfo
        showEdit
        flex
        hovered={settlementHovered}
        onMouseEnter={() => setSettlementHovered(true)}
        onMouseLeave={() => setSettlementHovered(false)}
      >
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">{bankName}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-tertiary)] overflow-hidden text-ellipsis whitespace-nowrap">{bankAccount}</p>
      </Field>

      {/* Payout Currency — fixed 200px */}
      <Field
        label="Payout Currency"
        labelInfo
        width="200px"
        hovered={payoutHovered}
        onMouseEnter={() => setPayoutHovered(true)}
        onMouseLeave={() => setPayoutHovered(false)}
      >
        <UsdBadge size={14} />
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">{payoutCurrency}</p>
      </Field>

      {/* Discount — fixed 200px */}
      <Field
        label="Discount"
        labelInfo
        width="200px"
        hovered={discountHovered}
        onMouseEnter={() => setDiscountHovered(true)}
        onMouseLeave={() => setDiscountHovered(false)}
      >
        {discount
          ? <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">{discount}</p>
          : <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-quaternary)] whitespace-nowrap">Optional</p>
        }
      </Field>

      {/* Radio */}
      <RadioButton checked={checked} />
    </div>
  );
}
