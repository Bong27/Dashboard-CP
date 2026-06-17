// ─────────────────────────────────────────────────────────────────────────────
// BankAddedModal — "New Bank Added" confirmation screen
// Source: Figma node 1987:260170
// ─────────────────────────────────────────────────────────────────────────────
import { useNavigate } from 'react-router';

type Props = {
  onClose: () => void;
};

export default function BankAddedModal({ onClose }: Props) {
  const navigate = useNavigate();

  const handleBankAccounts = () => {
    onClose();
    navigate('/bank-accounts');
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center"
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

          {/* Title area */}
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap leading-none">
              New Bank Added
            </p>

            {/* Under review banner */}
            <div className="bg-[#ebf1fb] border border-[var(--cp-border-default)] border-solid content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[20px] relative rounded-[5px] shrink-0 w-full">
              {/* Info icon */}
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <svg className="absolute block inset-0 size-full" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#8492A6" />
                  <path d="M8 7V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="8" cy="5.5" r="0.75" fill="white" />
                </svg>
              </div>
              <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-secondary)] leading-[1.2] min-w-px">
                Your Bank Account is under review
              </p>
            </div>

            {/* Body text */}
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-[1.2]">
              Our team is currently verifying your bank account details to ensure secure processing.
              <br /><br />
              This review typically takes up to 24 business hours. Please note that you won't be able to initiate payouts or move funds to this account until the verification process is complete. We'll notify you as soon as it's approved!
              <br /><br />
              You can check your saved accounts at any time under{' '}
              <span
                className="text-[#1c60dd] cursor-pointer"
                onClick={handleBankAccounts}
              >
                Bank Accounts
              </span>{' '}
              section.
            </p>
          </div>

          {/* Info points */}
          <div className="bg-[var(--cp-bg-1)] content-stretch flex flex-col gap-[5px] items-start overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-full">
            {[
              <>Reviews are usually completed within 1-2 business days, contact <span className="text-[#3898ec]">Support</span> in case of longer timing.</>,
              <>CoinPayments' financial department may contact you via your registered email address to verify your transfer details.</>,
            ].map((text, i) => (
              <div key={i} className="content-stretch flex gap-[11px] items-start relative shrink-0 w-full">
                <div className="bg-[var(--cp-text-tertiary)] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[12px]">
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[6px] text-white text-center w-full leading-none">{i + 1}</p>
                </div>
                <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] leading-[1.2] min-w-px">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Done button */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <button
              className="bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer transition-colors"
              onClick={onClose}
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white text-center whitespace-nowrap">Done</p>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
