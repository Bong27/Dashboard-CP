// ─────────────────────────────────────────────────────────────────────────────
// BankDetailsModal
// Source: Figma node 1623:265565 "Bank Details Modal (label)"
// Bank selector reuses SelectField component (Settings / Settlement mode style)
// ─────────────────────────────────────────────────────────────────────────────
import { SelectField } from './SelectField';

type Props = { onClose: () => void };

// ─── Data row ─────────────────────────────────────────────────────────────────
function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">
        {label}
      </p>
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-none">
        {value}
      </p>
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
export default function BankDetailsModal({ onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
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

        {/* Card */}
        <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full">

          {/* Title */}
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap">
            Settlement Mode (Nightly to Bank)
          </p>

          {/* Bank selector — reusing SelectField */}
          <SelectField
            label="BANK"
            height={56}
            selector={<div />}
          >
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">
              Wise
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-tertiary)] overflow-hidden text-ellipsis whitespace-nowrap">
              GB97TRWI23080120507810
            </p>
          </SelectField>

          {/* Bank detail rows */}
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <DataRow label="Account Holder Name" value="Acme Corp" />
            <DataRow label="Bank Name"            value="Wise Payments Limited" />
            <DataRow label="IBAN"                 value="GB97 TRWI 2308 0120 5078 10" />
            <DataRow label="Account Number"       value="20507810" />
            <DataRow label="BIC / SWIFT"          value="TRWIGB2LXXX" />
            <DataRow label="Recipient Address"    value="Flat 4, 25 Baker Street, London, W1U 8EE, United Kingdom" />
            <DataRow label="Label"                value="Wise" />
          </div>

          {/* Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={onClose}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">
                Remove
              </p>
            </button>
            <button
              className="bg-[var(--cp-bg-2)] content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-3)] transition-colors"
              onClick={onClose}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">
                Update
              </p>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
