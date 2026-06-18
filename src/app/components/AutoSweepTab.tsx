import { useState, useEffect } from 'react';
import { InputMaster } from './InputMaster';
import { SweepDestinationDropdown, type SweepDestination } from './SweepDestinationDropdown';
import { SweepBankAccountDropdown } from './SweepBankAccountDropdown';
import { PayoutCurrencyDropdown } from './PayoutCurrencyDropdown';
import { useBanks } from '../context/BankContext';

function UsdtTrc20Badge() {
  return (
    <>
      <div className="content-stretch flex items-center relative shrink-0">
        <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
      </div>
      <div className="content-stretch flex gap-[10px] items-center pl-[5px] pr-[20px] py-[5px] relative shrink-0">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] text-center whitespace-nowrap">USDT.TRC20</p>
        <div className="relative shrink-0 size-[24px]">
          <div className="absolute bg-[#50af95] inset-0 rounded-[999px]">
            <div className="absolute inset-[9.9%_4.65%_-1.56%_3.69%] overflow-clip">
              <div className="absolute inset-[5.56%_0_7.45%_0]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9993 19.1378">
                  <g>
                    <path clipRule="evenodd" d="M11.0003,0C4.92535,0,0,4.28578,0,9.56973C0,14.8529,4.92535,19.1378,11.0003,19.1378C17.0751,19.1378,22.0005,14.8529,22.0005,9.56973C21.9993,4.28578,17.0751,0,11.0003,0ZM12.1449,12.0726V14.3042C10.7736,14.2677,9.41664,14.2187,8.43048,14.1077V11.9138C9.86048,12.0973,11.2373,12.137,12.1449,12.0726Z" fill="var(--fill-0, #50AF95)" fillRule="evenodd" />
                    <path clipRule="evenodd" d="M14.4734,4.09648C13.4451,4.09648,12.4119,4.22473,11.6299,4.41098V5.21748C12.4131,5.03273,13.4451,4.90348,14.4734,4.90348C15.5026,4.90348,16.5354,5.03273,17.3174,5.21748V4.41098C16.5359,4.22473,15.5026,4.09648,14.4734,4.09648Z" fill="var(--fill-0, white)" fillRule="evenodd" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute bg-white border-[0.529px] border-solid border-white bottom-0 h-[10.667px] left-[55.56%] overflow-clip right-0 rounded-[792.727px]">
            <div className="absolute inset-[calc(16.67%-0.35px)] overflow-clip">
              <div className="absolute inset-[0_2.54%_0_2.42%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75859 7.11121">
                  <path d="M0.0795898,6.90446L0.0795898,6.55946L0.0795898,0.137207L0.652589,0.0742188L3.52609,0.00146484L3.86559,0.0137207L5.88259,1.49221L6.75859,2.08071L3.86559,7.11121L0.652589,7.08821C0.300589,7.08671,0.0799898,6.90446,0.0795898,6.90446ZM3.49809,1.69621C3.49159,1.67696,3.47109,1.66696,3.45534,1.66696L1.52409,1.60996L1.42634,1.64671L1.42634,5.57496L3.52459,5.57946L3.58709,5.53471L5.80534,1.96396L3.94784,1.69471L3.49809,1.69621Z" fill="var(--fill-0, #FF060A)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function AutoSweepTab() {
  const { primaryId } = useBanks();
  const [sweepDestination, setSweepDestination] = useState<SweepDestination>(null);
  const [selectedBankId, setSelectedBankId] = useState(primaryId);
  const [payoutCurrency, setPayoutCurrency] = useState<string | null>(null);
  const [triggerAmount, setTriggerAmount] = useState('');
  const [showError, setShowError] = useState(false);
  const isBankAccount = sweepDestination === 'bank-account';

  const numericAmount = parseFloat(triggerAmount);
  const hasAmount = triggerAmount.trim() !== '';
  const isAmountInvalid = hasAmount && (isNaN(numericAmount) || numericAmount < 100 || numericAmount > 1_000_000);
  const isAmountValid = hasAmount && !isAmountInvalid;

  useEffect(() => {
    if (!isAmountInvalid) { setShowError(false); return; }
    const t = setTimeout(() => setShowError(true), 500);
    return () => clearTimeout(t);
  }, [isAmountInvalid]);
  const saveEnabled = isBankAccount ? (isAmountValid && payoutCurrency !== null) : false;

  const triggerAmountField = (
    <div className={`relative min-w-[200px] ${isBankAccount ? 'flex-[1_0_0]' : 'w-full'}`} style={{ overflow: 'visible' }}>
      <div className="bg-white h-[56px] relative rounded-[5px] group">
        <div className="content-stretch flex items-start justify-between overflow-clip p-[10px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 flex-1 min-w-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">
              TRIGGER AMOUNT (USDT.TRC20)
            </p>
            <input
              type="number"
              value={triggerAmount}
              onChange={e => setTriggerAmount(e.target.value)}
              placeholder="Min-Max Payout: $100 - $1,000,000"
              className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[14.5px] text-[var(--cp-text-primary)] placeholder:text-[var(--cp-text-quinary)] bg-transparent outline-none border-none w-full min-w-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <UsdtTrc20Badge />
        </div>
        <div
          aria-hidden="true"
          className={`absolute border border-solid inset-0 pointer-events-none rounded-[5px] transition-colors ${
            showError
              ? 'border-[#E53935]'
              : 'border-[var(--cp-border-default)] group-hover:border-[var(--cp-border-hover)]'
          }`}
        />
      </div>
      {showError && (
        <div className="absolute left-0 right-0 top-full bg-[#E53935] px-[10px] py-[6px] rounded-b-[5px] z-10">
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-[normal]">
            Please enter a trigger amount equivalent to at least 100 USD and no more than 1,000,000 USD
          </p>
        </div>
      )}
    </div>
  );

  const saveButton = saveEnabled ? (
    <div className="bg-[var(--cp-brand-primary)] content-stretch flex h-[46px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[var(--cp-brand-active)] transition-colors">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-white text-[13px] text-center whitespace-nowrap">Save</p>
    </div>
  ) : (
    <div className="bg-[var(--cp-bg-2)] content-stretch flex h-[46px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[5px] shrink-0 cursor-not-allowed">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-secondary)] text-[13px] text-center whitespace-nowrap">Save</p>
    </div>
  );

  return (
    <div className="bg-[var(--cp-bg-1)] relative shrink-0 w-full">
      <div className="rounded-[inherit] size-full" style={{ overflow: 'visible' }}>
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[20px] relative size-full">
          {/* Warning Banner */}
          <div className="bg-[var(--cp-bg-4)] relative rounded-[5px] shrink-0 w-full">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[10px] items-center justify-center p-[20px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[16px]">
                  <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path clipRule="evenodd" d="M8,0C3.58172,0,0,3.58172,0,8C0,12.4183,3.58172,16,8,16C12.4183,16,16,12.4183,16,8C16,3.58172,12.4183,0,8,0ZM8.8,12C8.8,12.4418,8.44183,12.8,8,12.8C7.55817,12.8,7.2,12.4418,7.2,12L7.2,7.2C7.2,6.75817,7.55817,6.4,8,6.4C8.44183,6.4,8.8,6.75817,8.8,7.2L8.8,12ZM8,5.6C8.44183,5.6,8.8,5.24183,8.8,4.8C8.8,4.35817,8.44183,4,8,4C7.55817,4,7.2,4.35817,7.2,4.8C7.2,5.24183,7.55817,5.6,8,5.6Z" fill="var(--fill-0, #5A6679)" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[var(--cp-text-secondary)] text-[13px]">
                  Auto-Sweep automatically withdraws your selected wallet to the address you specify once the balance reaches the trigger amount.
                </p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
          </div>

          {isBankAccount ? (
            <div className="content-stretch flex flex-col gap-[10px] items-start pt-[10px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <InputMaster label="wallet" value="Primary Balance" className="flex-[1_0_0] h-[56px] min-w-[200px]" />
                <SweepDestinationDropdown
                  value={sweepDestination}
                  onChange={setSweepDestination}
                  className="flex-[1_0_0] min-w-[200px]"
                />
              </div>
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                {triggerAmountField}
                <SweepBankAccountDropdown
                  value={selectedBankId}
                  onChange={setSelectedBankId}
                  className="flex-[1_0_0] min-w-[200px]"
                />
              </div>
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
                <PayoutCurrencyDropdown
                  value={payoutCurrency}
                  onChange={setPayoutCurrency}
                  className="flex-[1_0_0] min-w-[200px]"
                />
                <div className="flex-[1_0_0] min-w-[200px]" />
              </div>
              {saveButton}
            </div>
          ) : (
            <div className="content-stretch flex gap-[10px] items-start pt-[10px] relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-[200px] relative">
                <InputMaster label="wallet" value="Primary Balance" className="h-[56px] w-full" />
                {triggerAmountField}
                {saveButton}
              </div>

              <SweepDestinationDropdown
                value={sweepDestination}
                onChange={setSweepDestination}
                className="flex-[1_0_0] min-w-[200px]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
