import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router';

type Props = { onDismiss: () => void };

function DocumentIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
      <rect x="1" y="1" width="14" height="18" rx="2" stroke="#8492A6" strokeWidth="1.5" fill="none" />
      <path d="M4 7h8M4 10.5h8M4 14h5" stroke="#8492A6" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12 1v4h4" stroke="#8492A6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BankApprovedModal({ onDismiss }: Props) {
  const navigate = useNavigate();

  const handleBankAccounts = () => {
    onDismiss();
    navigate('/bank-accounts');
  };

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center" onClick={onDismiss}>
      <div className="absolute inset-0 bg-black/20" />
      <div
        className="relative w-full max-w-[720px] mx-[20px]"
        onClick={e => e.stopPropagation()}
      >
        {/* Dismiss above card, top-right */}
        <div className="flex justify-end mb-[8px]">
          <button
            onClick={onDismiss}
            className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white cursor-pointer hover:opacity-70 transition-opacity"
          >
            Dismiss
          </button>
        </div>

        {/* White card */}
        <div
          className="bg-white rounded-[14px] p-[20px] flex flex-col gap-[14px]"
          style={{ boxShadow: '0px 8px 32px rgba(0,0,0,0.16)' }}
        >
          {/* Top row: icon + title/date + unread badge */}
          <div className="flex items-start justify-between gap-[12px]">
            <div className="flex items-start gap-[12px]">
              <div className="shrink-0 mt-[2px]">
                <DocumentIcon />
              </div>
              <div className="flex flex-col gap-[4px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14.5px] text-[var(--cp-text-primary)] leading-none">
                  Your bank account has been approved
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal text-[14.5px] text-[var(--cp-text-tertiary)] leading-none">
                  11:03 Jun 3
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[6px] shrink-0 mt-[2px]">
              <div className="bg-[var(--cp-brand-primary)] rounded-full size-[8px]" />
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-brand-primary)] leading-none">
                Unread
              </p>
            </div>
          </div>

          {/* Body text */}
          <div className="flex flex-col gap-[12px] pl-[32px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14.5px] text-[var(--cp-text-primary)] leading-[1.5]">
              Your bank account has been successfully verified and is now active to receive payouts. Any automated payments you have configured for this bank within either your Settings or Auto-Sweep sections will now automatically start running.
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14.5px] text-[var(--cp-text-primary)] leading-[1.5]">
              To review your details or add another account, visit the{' '}
              <button
                onClick={handleBankAccounts}
                className="text-[var(--cp-brand-primary)] underline cursor-pointer hover:opacity-70 transition-opacity font-['Inter:Regular',sans-serif] font-normal text-[14.5px]"
              >
                Bank Accounts
              </button>
              {' '}section anytime.
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
