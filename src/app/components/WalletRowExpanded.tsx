import { useState } from 'react';
import svgPaths from '../../imports/Wallet-2/svg-tfchl2zu4w';
import { AutoSweepTab } from './AutoSweepTab';

type TabId = 'wallets' | 'transactions' | 'auto-sweep' | 'vaulting';

const TABS: { id: TabId; label: string }[] = [
  { id: 'wallets', label: 'Wallets' },
  { id: 'transactions', label: 'Recent Transactions' },
  { id: 'auto-sweep', label: 'Auto-Sweep' },
  { id: 'vaulting', label: 'Vaulting' },
];

export function WalletExpandedTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('wallets');

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative shrink-0 group"
          >
            <div
              aria-hidden="true"
              className={`absolute border-b-2 border-solid inset-0 pointer-events-none transition-colors ${
                activeTab === tab.id
                  ? 'border-[var(--cp-brand-primary)]'
                  : 'border-transparent group-hover:border-[var(--cp-text-grey)]'
              }`}
            />
            <p
              className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'text-[var(--cp-brand-primary)]'
                  : 'text-[var(--cp-text-grey-disabled)] group-hover:text-[var(--cp-text-grey)]'
              }`}
            >
              {tab.label}
            </p>
          </button>
        ))}
      </div>

      {activeTab === 'wallets' && (
        <div className="bg-[var(--cp-bg-1)] relative shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative size-full">
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
                      Wallets are managed by integration credentials for the purpose of segregating funds and addresses. <a className="cursor-pointer underline" href="https://a-docs.coinpayments.net/api/wallets/" target="_blank" rel="noreferrer">Click here to learn more</a>.
                    </p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
              </div>

              <div className="content-stretch flex gap-[20px] h-[40px] items-center relative shrink-0">
                <div className="bg-white h-[38px] relative rounded-[5px] shrink-0 w-[298px]">
                  <div className="content-stretch flex items-center justify-between overflow-clip p-[10px] relative rounded-[inherit] size-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-quinary)] text-[13px] whitespace-nowrap">Search</p>
                    <div className="relative shrink-0 size-[15px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                        <g clipPath="url(#clip0_search)">
                          <path clipRule="evenodd" d={svgPaths.p34a3fe00} fill="var(--fill-0, #A8B7CA)" fillRule="evenodd" />
                          <path clipRule="evenodd" d={svgPaths.p1aa08900} fill="var(--fill-0, #A8B7CA)" fillRule="evenodd" />
                        </g>
                        <defs>
                          <clipPath id="clip0_search">
                            <rect fill="white" height="15" width="15" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
                </div>
                <div className="relative rounded-[5px] shrink-0 w-[209px]">
                  <div className="content-stretch flex items-center justify-between overflow-clip p-[10px] relative rounded-[inherit] size-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[13px] whitespace-nowrap">All integrations</p>
                    <div className="overflow-clip relative shrink-0 size-[18px]">
                      <div className="absolute inset-[34.38%_21.88%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 5.62498">
                          <path clipRule="evenodd" d="M0.439339,0.439339C0.683426,0.195252,1.07907,0.195252,1.32316,0.439339L5.0625,4.17868L8.80184,0.439339C9.04593,0.195252,9.44157,0.195252,9.68566,0.439339C9.92975,0.683426,9.92975,1.07907,9.68566,1.32316L5.50441,5.50441C5.26032,5.7485,4.86468,5.7485,4.62059,5.50441L0.439339,1.32316C0.195252,1.07907,0.195252,0.683426,0.439339,0.439339Z" fill="var(--fill-0, #A2A5AC)" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'auto-sweep' && <AutoSweepTab />}
    </div>
  );
}

interface WalletRowExpandedProps {
  coinName: string;
  coinSymbol: string;
}

export function WalletRowExpanded({ coinName, coinSymbol }: WalletRowExpandedProps) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pt-[20px] w-full">
      {/* Wallet Data */}
      <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
        {/* Primary Balance */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0">
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[11px] uppercase whitespace-nowrap">primary balance</p>
              <div className="overflow-clip relative shrink-0 size-[8px]">
                <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path clipRule="evenodd" d="M4,0C1.79086,0,0,1.79086,0,4C0,6.20914,1.79086,8,4,8C6.20914,8,8,6.20914,8,4C8,1.79086,6.20914,0,4,0ZM4.4,6C4.4,6.22091,4.22091,6.4,4,6.4C3.77909,6.4,3.6,6.22091,3.6,6L3.6,3.6C3.6,3.37909,3.77909,3.2,4,3.2C4.22091,3.2,4.4,3.37909,4.4,3.6L4.4,6ZM4,2.8C4.22091,2.8,4.4,2.62091,4.4,2.4C4.4,2.17909,4.22091,2,4,2C3.77909,2,3.6,2.17909,3.6,2.4C3.6,2.62091,3.77909,2.8,4,2.8Z" fill="var(--fill-0, #D3D6E1)" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-secondary)] text-[14.5px] whitespace-nowrap">0.0000000 {coinSymbol}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0">
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[11px] uppercase whitespace-nowrap">value</p>
            </div>
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-secondary)] text-[14.5px] whitespace-nowrap">$0.00 USD</p>
            </div>
          </div>
        </div>

        {/* API Balance */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0">
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[11px] uppercase whitespace-nowrap">API BALANCE</p>
              <div className="overflow-clip relative shrink-0 size-[8px]">
                <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path clipRule="evenodd" d="M4,0C1.79086,0,0,1.79086,0,4C0,6.20914,1.79086,8,4,8C6.20914,8,8,6.20914,8,4C8,1.79086,6.20914,0,4,0ZM4.4,6C4.4,6.22091,4.22091,6.4,4,6.4C3.77909,6.4,3.6,6.22091,3.6,6L3.6,3.6C3.6,3.37909,3.77909,3.2,4,3.2C4.22091,3.2,4.4,3.37909,4.4,3.6L4.4,6ZM4,2.8C4.22091,2.8,4.4,2.62091,4.4,2.4C4.4,2.17909,4.22091,2,4,2C3.77909,2,3.6,2.17909,3.6,2.4C3.6,2.62091,3.77909,2.8,4,2.8Z" fill="var(--fill-0, #D3D6E1)" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-secondary)] text-[14.5px] whitespace-nowrap">0.0000000 {coinSymbol}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0">
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[11px] uppercase whitespace-nowrap">value</p>
            </div>
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-secondary)] text-[14.5px] whitespace-nowrap">$0.00 USD</p>
            </div>
          </div>
        </div>

        {/* Total Balance */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0">
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[11px] uppercase whitespace-nowrap">TOTAL BALANCE</p>
              <div className="overflow-clip relative shrink-0 size-[8px]">
                <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path clipRule="evenodd" d="M4,0C1.79086,0,0,1.79086,0,4C0,6.20914,1.79086,8,4,8C6.20914,8,8,6.20914,8,4C8,1.79086,6.20914,0,4,0ZM4.4,6C4.4,6.22091,4.22091,6.4,4,6.4C3.77909,6.4,3.6,6.22091,3.6,6L3.6,3.6C3.6,3.37909,3.77909,3.2,4,3.2C4.22091,3.2,4.4,3.37909,4.4,3.6L4.4,6ZM4,2.8C4.22091,2.8,4.4,2.62091,4.4,2.4C4.4,2.17909,4.22091,2,4,2C3.77909,2,3.6,2.17909,3.6,2.4C3.6,2.62091,3.77909,2.8,4,2.8Z" fill="var(--fill-0, #D3D6E1)" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-secondary)] text-[14.5px] whitespace-nowrap">0.0000000 {coinSymbol}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0">
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[11px] uppercase whitespace-nowrap">value</p>
            </div>
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-secondary)] text-[14.5px] whitespace-nowrap">$0.00 USD</p>
            </div>
          </div>
        </div>
      </div>

      <WalletExpandedTabs />
    </div>
  );
}
