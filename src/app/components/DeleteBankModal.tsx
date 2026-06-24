// ─────────────────────────────────────────────────────────────────────────────
// DeleteBankModal — confirmation before removing a bank account
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';

type Props = {
  bankLabel: string;
  onConfirm: () => void;
  onClose: () => void;
};

export default function DeleteBankModal({ bankLabel, onConfirm, onClose }: Props) {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center"
      style={{ background: 'var(--cp-bg-overlay-scrim)' }}
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
        <div className="bg-white flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full">

          {/* Title */}
          <div className="flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap">
              Delete Bank Account
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-[1.2]">
              You are about to permanently delete <span className="font-semibold">{bankLabel}</span>.
            </p>
          </div>

          {/* Warning block */}
          <div className="bg-red-50 border border-red-200 border-solid content-stretch flex flex-col gap-[10px] items-start p-[14px] relative rounded-[8px] shrink-0 w-full">
            <div className="flex gap-[10px] items-start w-full">
              {/* Warning icon */}
              <div className="shrink-0 mt-[1px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.856 1.756a1.3 1.3 0 0 1 2.288 0l5.85 10.4A1.3 1.3 0 0 1 13.85 14H2.15a1.3 1.3 0 0 1-1.144-1.844l5.85-10.4ZM8 5.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 5.5Zm0 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" fill="#DC2626"/>
                </svg>
              </div>
              <div className="flex flex-col gap-[6px] flex-1 min-w-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14.5px] text-red-700 leading-[1.2]">
                  This action cannot be undone
                </p>
                <ul className="flex flex-col gap-[8px] mt-[4px]">
                  {[
                    'The bank account will be permanently removed.',
                    'Your active bank payout settlements will automatically route to your custodial wallet.',
                    'Re-adding this account will require a new verification and approval process.',
                  ].map((line, i) => (
                    <li key={i} className="flex gap-[6px] items-start">
                      <span className="text-red-400 shrink-0 mt-[2px] text-[10px]">●</span>
                      <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-red-600 leading-[1.2]">{line}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Confirmation checkbox */}
          <button
            className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full cursor-pointer"
            onClick={() => setConfirmed(v => !v)}
          >
            <div className={`relative shrink-0 size-[16px] rounded-[3px] flex items-center justify-center border transition-colors ${confirmed ? 'bg-[var(--cp-text-secondary)] border-[var(--cp-text-secondary)]' : 'bg-white border-[var(--cp-border-default)]'}`}>
              {confirmed && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-secondary)] text-left leading-[1.2]">
              I understand this action is permanent and cannot be undone
            </p>
          </button>

          {/* Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={onClose}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">Cancel</p>
            </button>
            <button
              disabled={!confirmed}
              onClick={handleConfirm}
              className={`content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] transition-colors ${
                confirmed
                  ? 'bg-red-600 hover:bg-red-700 cursor-pointer'
                  : 'bg-[var(--cp-bg-2)] cursor-not-allowed'
              }`}
            >
              <p className={`font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-center whitespace-nowrap ${confirmed ? 'text-white' : 'text-[var(--cp-text-secondary)]'}`}>
                Delete Account
              </p>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
