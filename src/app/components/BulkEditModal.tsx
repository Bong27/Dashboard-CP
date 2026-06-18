import { createPortal } from 'react-dom';
import { useState, useRef, useEffect } from 'react';
import { PayoutCurrencyDropdown } from './PayoutCurrencyDropdown';
import { useBanks } from '../context/BankContext';
import { truncateIban } from '../utils';

const CHEVRON = "M0.109836 0.109836C0.256284 -0.036612 0.493716 -0.036612 0.640164 0.109836L3.375 2.84466L6.10986 0.109836C6.25626 -0.036612 6.49374 -0.036612 6.64014 0.109836C6.7866 0.256284 6.7866 0.493716 6.64014 0.640164L3.64014 3.64014C3.49374 3.7866 3.25628 3.7866 3.10984 3.64014L0.109836 0.640164C-0.036612 0.493716 -0.036612 0.256284 0.109836 0.109836Z";

const INFO_ICON = "M4,0C1.79086,0,0,1.79086,0,4C0,6.20914,1.79086,8,4,8C6.20914,8,8,6.20914,8,4C8,1.79086,6.20914,0,4,0ZM4.4,6C4.4,6.22091,4.22091,6.4,4,6.4C3.77909,6.4,3.6,6.22091,3.6,6L3.6,3.6C3.6,3.37909,3.77909,3.2,4,3.2C4.22091,3.2,4.4,3.37909,4.4,3.6L4.4,6ZM4,2.8C4.22091,2.8,4.4,2.62091,4.4,2.4C4.4,2.17909,4.22091,2,4,2C3.77909,2,3.6,2.17909,3.6,2.4C3.6,2.62091,3.77909,2.8,4,2.8Z";

function ChevronSelector({ open = false }: { open?: boolean }) {
  return (
    <div className={`flex items-center justify-between shrink-0 w-[21px] self-stretch transition-transform ${open ? 'rotate-180' : ''}`}>
      <div className="bg-[var(--cp-border-default)] h-[34px] w-px shrink-0" />
      <div className="overflow-clip relative shrink-0 size-[12px]">
        <div className="absolute inset-[34.38%_21.88%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.74999 3.74999">
            <path clipRule="evenodd" d={CHEVRON} fill="var(--fill-0, #A2A5AC)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FieldLabel({ text }: { text: string }) {
  return (
    <div className="flex gap-[5px] items-center shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">{text}</p>
      <div className="overflow-clip relative shrink-0 size-[8px]">
        <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path clipRule="evenodd" d={INFO_ICON} fill="var(--fill-0, #D3D6E1)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const SETTLEMENT_OPTIONS = [
  { label: 'Disabled', description: '' },
  { label: 'To Custody', description: 'Received payments are stored in your CoinPayments wallet for later withdrawal at your leisure. This option allows you to automatically convert payments into another currency as well.' },
  { label: 'Nightly to Bank', description: 'Received payments are batched and wired nightly to your USD bank account. A $100 minimum balance is required per wire.' },
  { label: 'To Non-Custody', description: 'Received payments are sent to the address or wallet ID you specify as soon as they are received and confirmed. This option allows you to automatically convert payments into another currency as well.' },
  { label: 'Hourly To Non-Custody', description: 'Received payments are grouped together and sent hourly. The main benefit of this option is it will save you coin network fees.' },
  { label: 'Nightly To Non-Custody', description: 'Received payments are grouped together and sent daily (at approx. midnight EST GMT-05:00). The main benefit of this option is it will save you coin network fees.' },
  { label: 'Weekly To Non-Custody', description: 'Received payments are grouped together and sent every Sunday (at approx. midnight EST GMT-05:00). The main benefit of this option is it will save you coin network fees.' },
];

export function BulkEditModal({ selectedCount, onClose, onConfirm }: {
  selectedCount: number;
  onClose: () => void;
  onConfirm: () => void;
}) {
  const { banks, primaryId } = useBanks();
  const primaryBank = banks.find(b => b.id === primaryId) ?? banks[0];
  const [settlementMode, setSettlementMode] = useState('Nightly to Bank');
  const [payoutCurrency, setPayoutCurrency] = useState<string | null>(null);
  const [modeOpen, setModeOpen] = useState(false);
  const modeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (modeRef.current && !modeRef.current.contains(e.target as Node)) {
        setModeOpen(false);
      }
    };
    if (modeOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [modeOpen]);

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-[10px] p-[20px] w-[420px] flex flex-col gap-[20px] shadow-xl">

        {/* Title */}
        <div className="flex flex-col gap-[20px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase">BULK EDIT</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-snug">
            Bulk edit your payment settings for {selectedCount} selected {selectedCount === 1 ? 'currency' : 'currencies'}
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-[8px]">

          {/* Settlement Mode */}
          <div ref={modeRef} className={`relative ${modeOpen ? 'z-[100]' : ''}`} style={{ overflow: 'visible' }}>
            <div
              className="bg-white group h-[56px] relative rounded-[5px] cursor-pointer"
              style={{ overflow: 'visible' }}
              onClick={() => setModeOpen(v => !v)}
            >
              <div className="flex items-start justify-between p-[10px] h-full">
                <div className="flex flex-col h-full items-start justify-between shrink-0">
                  <FieldLabel text="SETTLEMENT MODE" />
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic shrink-0 text-[var(--cp-text-primary)] text-[14.5px] whitespace-nowrap">{settlementMode}</p>
                </div>
                <ChevronSelector open={modeOpen} />
              </div>
              <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[5px] transition-colors ${modeOpen ? 'border-[var(--cp-border-hover)]' : 'border-[var(--cp-border-default)] group-hover:border-[var(--cp-border-hover)]'}`} />
            </div>
            {modeOpen && (
              <div className="absolute bg-white left-0 mt-[5px] rounded-[5px] shadow-lg top-[56px] w-full z-50">
                <div aria-hidden="true" className="absolute border border-[var(--cp-border-hover)] border-solid inset-0 pointer-events-none rounded-[5px]" />
                <div className="flex flex-col gap-[5px] items-start p-[10px] relative">
                  {SETTLEMENT_OPTIONS.map(({ label, description }) => {
                    const isActive = label === settlementMode;
                    return (
                      <div
                        key={label}
                        className={`relative rounded-[5px] shrink-0 w-full cursor-pointer transition-colors ${isActive ? 'bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)]' : 'bg-white hover:bg-[var(--cp-bg-1)]'}`}
                        onClick={() => { setSettlementMode(label); setModeOpen(false); }}
                      >
                        {!isActive && <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />}
                        <div className={`flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px] ${isActive ? 'text-white' : ''}`}>
                          <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold shrink-0 w-full ${isActive ? 'text-white' : 'text-[var(--cp-text-primary)]'}`}>{label}</p>
                          {description && <p className={`font-['Inter:Medium',sans-serif] font-medium shrink-0 w-full ${isActive ? 'text-white/80' : 'text-[var(--cp-text-secondary)]'}`}>{description}</p>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Bank */}
          <div className="bg-white group h-[56px] relative rounded-[5px]">
            <div className="flex items-start justify-between p-[10px] h-full">
              <div className="flex flex-col h-full items-start justify-between shrink-0 min-w-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">BANK</p>
                <div className="flex gap-[5px] items-center min-w-0 overflow-hidden">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic shrink-0 text-[var(--cp-text-primary)] text-[14.5px] whitespace-nowrap">
                    {primaryBank?.label ?? '—'}
                  </p>
                  {primaryBank && (
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[var(--cp-text-tertiary)] text-[13px] overflow-hidden text-ellipsis whitespace-nowrap">
                      {truncateIban(primaryBank.iban)}
                    </p>
                  )}
                </div>
              </div>
              <ChevronSelector />
            </div>
            <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] group-hover:border-[var(--cp-border-hover)] border-solid inset-0 pointer-events-none rounded-[5px] transition-colors" />
          </div>

          {/* Payout Currency */}
          <PayoutCurrencyDropdown
            value={payoutCurrency}
            onChange={setPayoutCurrency}
            className="w-full"
          />

          {/* Discount */}
          <div className="bg-white group h-[56px] relative rounded-[5px]">
            <div className="flex items-start justify-between p-[10px] h-full">
              <div className="flex flex-col h-full items-start justify-between shrink-0">
                <FieldLabel text="DISCOUNT" />
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic shrink-0 text-[var(--cp-text-quinary)] text-[14.5px] whitespace-nowrap">Optional</p>
              </div>
              <ChevronSelector />
            </div>
            <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] group-hover:border-[var(--cp-border-hover)] border-solid inset-0 pointer-events-none rounded-[5px] transition-colors" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-[10px]">
          <button
            onClick={onClose}
            className="flex-1 h-[46px] border border-[var(--cp-border-default)] rounded-[5px] font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-secondary)] hover:border-[var(--cp-border-hover)] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 h-[46px] bg-[var(--cp-brand-primary)] rounded-[5px] font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white hover:bg-[var(--cp-brand-active)] transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
