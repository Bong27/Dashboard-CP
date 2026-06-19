import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router';
import { useBanks } from '../context/BankContext';
import { getBankAccountIdentifier } from '../utils';
import AddNewBankModal from './AddNewBankModal';

type SweepBankAccountDropdownProps = {
  value: string;
  onChange: (bankId: string) => void;
  className?: string;
};

function DropdownChevron({ open }: { open: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px] self-stretch">
      <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
      <div
        className={`flex items-center justify-center relative shrink-0 transition-transform duration-150 ${
          open ? 'rotate-180' : ''
        }`}
      >
        <div className="overflow-clip relative shrink-0 size-[12px]">
          <div className="absolute inset-[34.38%_21.88%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.74999 3.74999">
              <path
                clipRule="evenodd"
                d="M0.292893,0.292893C0.455612,0.130168,0.719387,0.130168,0.882107,0.292893L3.375,2.78579L5.86789,0.292893C6.03061,0.130168,6.29439,0.130168,6.45711,0.292893C6.61983,0.455612,6.61983,0.719387,6.45711,0.882107L3.66961,3.66961C3.50688,3.83233,3.24312,3.83233,3.08039,3.66961L0.292893,0.882107C0.130168,0.719387,0.130168,0.455612,0.292893,0.292893Z"
                fill="var(--fill-0, #A2A5AC)"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SweepBankAccountDropdown({ value, onChange, className = '' }: SweepBankAccountDropdownProps) {
  const navigate = useNavigate();
  const { banks } = useBanks();
  const [open, setOpen] = useState(false);
  const [showAddNewBank, setShowAddNewBank] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const approvedBanks = banks.filter((bank) => bank.status === 'approved');
  const underReviewBanks = banks.filter((bank) => bank.status === 'under_review');
  const selectedBank = banks.find((bank) => bank.id === value);
  const selectedBankUnderReview = selectedBank?.status === 'under_review';

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const isPlaceholder = !selectedBank;

  return (
    <>
    {showAddNewBank && createPortal(
      <AddNewBankModal
        onClose={() => setShowAddNewBank(false)}
        onBankAdded={(bankId) => { onChange(bankId); }}
      />,
      document.body,
    )}
    <div ref={ref} className={`relative ${open ? 'z-[100]' : ''} ${className}`} style={{ overflow: 'visible' }}>
      <div
        className="bg-white h-[56px] relative rounded-[5px] cursor-pointer group"
        onClick={() => setOpen((current) => !current)}
      >
        <div className="content-stretch flex h-full items-start justify-between p-[10px] relative rounded-[inherit] w-full">
          <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 flex-1 min-w-0">
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">
                SWEEP bank account
              </p>
              <div className="overflow-clip relative shrink-0 size-[8px]">
                <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path
                      clipRule="evenodd"
                      d="M4,0C1.79086,0,0,1.79086,0,4C0,6.20914,1.79086,8,4,8C6.20914,8,8,6.20914,8,4C8,1.79086,6.20914,0,4,0ZM4.4,6C4.4,6.22091,4.22091,6.4,4,6.4C3.77909,6.4,3.6,6.22091,3.6,6L3.6,3.6C3.6,3.37909,3.77909,3.2,4,3.2C4.22091,3.2,4.4,3.37909,4.4,3.6L4.4,6ZM4,2.8C4.22091,2.8,4.4,2.62091,4.4,2.4C4.4,2.17909,4.22091,2,4,2C3.77909,2,3.6,2.17909,3.6,2.4C3.6,2.62091,3.77909,2.8,4,2.8Z"
                      fill="var(--fill-0, #D3D6E1)"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {isPlaceholder ? (
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14.5px] text-[var(--cp-text-quinary)] whitespace-nowrap overflow-hidden text-ellipsis w-full">
                Select a bank account
              </p>
            ) : (
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0 min-w-0 overflow-hidden w-full">
                <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14.5px] whitespace-nowrap ${selectedBankUnderReview ? 'text-[var(--cp-text-primary)] opacity-60' : 'text-[var(--cp-text-primary)]'}`}>
                  {selectedBank.label}
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[var(--cp-text-tertiary)] overflow-hidden text-ellipsis whitespace-nowrap">
                  {getBankAccountIdentifier(selectedBank)}
                </p>
              </div>
            )}
          </div>
          {selectedBankUnderReview && (
            <div className="flex items-center gap-[4px] shrink-0 mr-[8px] self-center">
              <span className="bg-orange-100 text-orange-600 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[9px] uppercase px-[5px] py-[2px] rounded-[3px] whitespace-nowrap">
                Under Review
              </span>
              <div className="relative group/tooltip shrink-0">
                <div className="overflow-clip relative shrink-0 size-[12px] cursor-default">
                  <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 12 12">
                    <circle cx="6" cy="6" r="6" fill="#FED7AA" />
                    <text x="6" y="9" textAnchor="middle" fontSize="8" fontWeight="700" fill="#EA580C" fontFamily="Inter, sans-serif">i</text>
                  </svg>
                </div>
                <div className="absolute bottom-[calc(100%+6px)] right-0 pointer-events-none opacity-0 group-hover/tooltip:opacity-100 transition-opacity z-[200] w-[280px]">
                  <div className="bg-[#1a1a1a] rounded-[6px] px-[10px] py-[8px]">
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-[1.4] text-center">This bank account is under review. All settlements will temporarily route to your custodial wallet until approval is complete (24–48h). We will notify you as soon as your account is active.</p>
                  </div>
                  <div className="flex justify-end pr-[4px]">
                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none">
                      <path d="M10 0H0L3.58579 3.58579C4.36684 4.36684 5.63316 4.36684 6.41421 3.58579L10 0Z" fill="#1a1a1a"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DropdownChevron open={open} />
        </div>
        <div
          aria-hidden="true"
          className={`absolute border border-solid inset-0 pointer-events-none rounded-[5px] transition-colors ${
            open
              ? 'border-[var(--cp-border-hover)]'
              : 'border-[var(--cp-border-default)] group-hover:border-[var(--cp-border-hover)]'
          }`}
        />
      </div>

      {open && (
        <div
          className="absolute bg-white left-0 mt-[5px] rounded-[5px] shadow-lg top-[56px] w-full z-50"
          onClick={(event) => event.stopPropagation()}
        >
          <div aria-hidden="true" className="absolute border border-[var(--cp-border-hover)] border-solid inset-0 pointer-events-none rounded-[5px]" />
          <div className="content-stretch flex flex-col gap-[20px] items-start p-[10px] relative">
            <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
            {[
              ...approvedBanks.sort((a, b) => a.id === value ? -1 : b.id === value ? 1 : 0),
              ...underReviewBanks,
            ].map((bank) => {
              const isSelected = bank.id === value;
              const isUnderReview = bank.status === 'under_review';
              return (
                <div
                  key={bank.id}
                  className={`relative rounded-[5px] shrink-0 w-full transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)]'
                      : 'bg-white hover:bg-[var(--cp-bg-1)]'
                  }`}
                  onClick={() => { onChange(bank.id); setOpen(false); }}
                >
                  {!isSelected && (
                    <div
                      aria-hidden="true"
                      className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]"
                    />
                  )}
                  <div className="content-stretch flex items-center justify-between leading-[normal] not-italic p-[10px] relative size-full text-[11px]">
                    <div className="flex flex-col items-start">
                      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full ${isSelected ? 'text-white' : 'text-[var(--cp-text-primary)]'}`}>
                        {bank.label}
                      </p>
                      <p className={`font-['Inter:Medium',sans-serif] font-medium relative shrink-0 w-full ${isSelected ? 'text-white/80' : 'text-[var(--cp-text-secondary)]'}`}>
                        {getBankAccountIdentifier(bank)}
                      </p>
                    </div>
                    {isUnderReview && (
                      <span className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[9px] uppercase px-[5px] py-[2px] rounded-[3px] whitespace-nowrap shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-600'}`}>
                        Under Review
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
            </div>
            <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
              {[
                {
                  label: 'Add New Bank',
                  action: () => {
                    setOpen(false);
                    setShowAddNewBank(true);
                  },
                },
                {
                  label: 'Manage Bank Accounts',
                  action: () => {
                    setOpen(false);
                    navigate('/bank-accounts');
                  },
                },
              ].map(({ label, action }) => (
                <button
                  key={label}
                  type="button"
                  className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch cursor-pointer flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0 w-full hover:bg-[var(--cp-bg-1)] transition-colors text-left"
                  onClick={action}
                >
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-brand-primary)] leading-[normal] not-italic relative shrink-0 w-full">
                    {label}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
