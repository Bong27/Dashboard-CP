type Props = {
  onCancel: () => void;
  onProceed: () => void;
};

export default function BankUnderReviewWarningModal({ onCancel, onProceed }: Props) {
  return (
    <div
      className="fixed inset-0 z-[400] flex items-center justify-center"
      style={{ background: 'var(--cp-bg-overlay-scrim)' }}
      onClick={onCancel}
    >
      <div className="relative flex flex-col" style={{ width: 400 }} onClick={e => e.stopPropagation()}>
        <button
          className="absolute right-0 top-[-30px] flex items-center justify-center p-[4px] cursor-pointer"
          onClick={onCancel}
        >
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">Dismiss</p>
        </button>
        <div className="bg-white flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full">
          <div className="flex flex-col gap-[20px] items-start w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap leading-none">
              Bank Account Under Review
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-[1.4]">
              The selected bank account is still awaiting verification. Until approved, settlements <span className="font-['Inter:Bold',sans-serif] font-bold">will default to your CoinPayments wallet</span>.
              <br /><br />
              Any manual or automated payments configured for this account in Settings or Auto-Sweep will begin processing automatically once verified.
              <br /><br />
              We'll notify you as soon as the bank account is approved.
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid flex flex-1 h-[46px] items-center justify-center rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={onCancel}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-secondary)]">Cancel</p>
            </button>
            <button
              className="bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] flex flex-1 h-[46px] items-center justify-center rounded-[5px] cursor-pointer transition-colors"
              onClick={onProceed}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-white">Proceed</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
