// ─────────────────────────────────────────────────────────────────────────────
// EditWarningModal — Figma 2288:94673 "Re-verification required"
// Shown after Save Changes on Barclays (cautious mode)
// ─────────────────────────────────────────────────────────────────────────────
type Props = {
  onCancel: () => void;
  onProceed: () => void;
};

export default function EditWarningModal({ onCancel, onProceed }: Props) {
  return (
    <div
      className="fixed inset-0 z-[400] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.55)' }}
      onClick={onCancel}
    >
      <div className="relative flex flex-col" style={{ width: 400 }} onClick={e => e.stopPropagation()}>
        <button className="absolute right-0 top-[-30px] flex items-center justify-center p-[4px] cursor-pointer" onClick={onCancel}>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">Dismiss</p>
        </button>
        <div className="bg-white flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap leading-none">
            Re-verification Required
          </p>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-normal">
            Saving new bank details requires re-verification, which can take <span className="font-semibold">up to 48 hours.</span> During this time, incoming payments will settle to your CoinPayments wallet instead.
            <br /><br />
            Payouts switch back to your bank automatically once approved.
          </p>
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid flex flex-1 h-[46px] items-center justify-center rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={onCancel}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-secondary)]">Cancel</p>
            </button>
            <button
              className="bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] flex flex-1 h-[46px] items-center justify-center rounded-[5px] cursor-pointer transition-colors"
              onClick={onProceed}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white">Ok, proceed</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
