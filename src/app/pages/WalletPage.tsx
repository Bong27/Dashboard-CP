import { useState } from 'react';
import svgPaths from '../../imports/Wallet-2/svg-tfchl2zu4w';
import { WalletRowExpanded } from '../components/WalletRowExpanded';

// ─── Coin data ────────────────────────────────────────────────────────────────

interface CoinRow {
  name: string;
  symbol: string;
  logo: React.ReactNode;
}

function BitcoinLogo() {
  return (
    <div className="relative shrink-0 size-[36px]">
      <div className="absolute inset-[0_0.01%_0_0] overflow-clip">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9959 36">
          <g>
            <path d={svgPaths.p3bb04e00} fill="var(--fill-0, #F7931A)" />
            <path d={svgPaths.p3f7e8e00} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

const COIN_ROWS: CoinRow[] = [
  { name: 'Bitcoin', symbol: 'BTC', logo: <BitcoinLogo /> },
  { name: 'Bitcoin', symbol: 'BTC', logo: <BitcoinLogo /> },
  { name: 'Bitcoin', symbol: 'BTC', logo: <BitcoinLogo /> },
  { name: 'Bitcoin', symbol: 'BTC', logo: <BitcoinLogo /> },
  { name: 'Bitcoin', symbol: 'BTC', logo: <BitcoinLogo /> },
  { name: 'Bitcoin', symbol: 'BTC', logo: <BitcoinLogo /> },
  { name: 'Bitcoin', symbol: 'BTC', logo: <BitcoinLogo /> },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_wallet_search)">
          <path clipRule="evenodd" d={svgPaths.p34a3fe00} fill="var(--fill-0, #A8B7CA)" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1aa08900} fill="var(--fill-0, #A8B7CA)" fillRule="evenodd" />
        </g>
        <defs>
          <clipPath id="clip0_wallet_search">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]">
      <div className="absolute inset-[34.38%_21.88%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 5.62498">
          <path clipRule="evenodd" d={svgPaths.p3f5aa180} fill="var(--fill-0, #A2A5AC)" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function ConvertIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute inset-[9.27%_17.99%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.96288 11.4047">
          <g>
            <path clipRule="evenodd" d={svgPaths.p28e65480} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p23d2c80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p8311e00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3f77e80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p22c70000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3e540080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pc43c680} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p19eb8700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ReceiveIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute inset-[11.82%_13.6%_11.83%_13.6%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1918 10.6899">
          <g>
            <path clipRule="evenodd" d={svgPaths.p2cad1000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pcd29c00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3eb1dc00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p36f81900} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p39b6700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SendIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute inset-[18.75%_24.1%_22.48%_20.59%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.74361 8.22758">
          <g>
            <path clipRule="evenodd" d={svgPaths.p9eec080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1255df80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2c049700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1bc13700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TopControls() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full">
      {/* Search + Filter */}
      <div className="content-stretch flex gap-[20px] h-full items-center relative shrink-0">
        <div className="bg-white h-[38px] relative rounded-[5px] shrink-0 w-[298px]">
          <div className="content-stretch flex items-center justify-between overflow-clip p-[10px] relative rounded-[inherit] size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-quinary)] text-[13px] whitespace-nowrap">Search</p>
            <SearchIcon />
          </div>
          <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
        </div>
        <div className="relative rounded-[5px] shrink-0 w-[209px]">
          <div className="content-stretch flex items-center justify-between overflow-clip p-[10px] relative rounded-[inherit] size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[13px] whitespace-nowrap">Show all coins</p>
            <ChevronDown />
          </div>
          <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
        </div>
      </div>

      {/* Estimated Balance */}
      <div className="content-stretch flex gap-[16px] h-full items-center relative shrink-0">
        <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-end leading-[normal] not-italic relative shrink-0 w-[118px] whitespace-nowrap">
          <p className="relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase">ESTIMATED BALANCE</p>
          <p className="font-['Fira_Mono:Bold',monospace] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[18px] tracking-[-0.2px]">$0.00 USD</p>
        </div>
        <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
        <div className="bg-white relative rounded-[100px] shrink-0 size-[24px]">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]">
              <div className="absolute inset-[3.12%_0.05%_0.05%_4.5%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8177 10.3289">
                  <path clipRule="evenodd" d={svgPaths.p26277800} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
        </div>
      </div>
    </div>
  );
}

function SwitchBalances() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <button className="block cursor-pointer h-[20px] relative shrink-0 w-[32px]">
        <div className="absolute bg-[var(--cp-brand-primary)] inset-0 rounded-[50px]" />
        <div className="absolute inset-[7.69%_4.76%_7.7%_42.86%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7619 16.9231">
            <ellipse cx="8.38095" cy="8.46154" fill="var(--fill-0, white)" rx="8.38095" ry="8.46154" />
          </svg>
        </div>
      </button>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-secondary)] text-[13px] whitespace-nowrap">
        Auto-Accept Incorrect Deposits into Primary Balances
      </p>
      <div className="overflow-clip relative shrink-0 size-[12px]">
        <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p2df82080} fill="var(--fill-0, #D3D6E1)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CoinRowCollapsed({ coin }: { coin: CoinRow }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative">
      {/* Coin + value */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[390px]">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          {coin.logo}
          <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">{coin.name}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">{coin.symbol}</p>
          </div>
        </div>
        <div className="content-stretch flex items-center px-[20px] relative shrink-0">
          <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[105px]">
            <p className="font-['Fira_Mono:Bold',monospace] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">0.000000 {coin.symbol}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">{coin.symbol}</p>
          </div>
        </div>
      </div>
      {/* Icon-only action buttons */}
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
        {[
          { label: 'Convert', icon: <ConvertIcon /> },
          { label: 'Receive', icon: <ReceiveIcon /> },
          { label: 'Send', icon: <SendIcon /> },
        ].map(({ label, icon }) => (
          <div key={label} className="bg-white relative rounded-[100px] shrink-0 size-[36px]">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]">
                {icon}
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function CoinRowExpanded({ coin }: { coin: CoinRow }) {
  return (
    <div className="content-stretch flex items-center justify-between relative w-full">
      <div className="content-stretch flex gap-[150px] items-center relative shrink-0">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          {coin.logo}
          <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">{coin.name}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">{coin.symbol}</p>
          </div>
        </div>
      </div>
      {/* Labelled action buttons */}
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
        {[
          { label: 'Convert', icon: <ConvertIcon /> },
          { label: 'Receive', icon: <ReceiveIcon /> },
          { label: 'Send', icon: <SendIcon /> },
        ].map(({ label, icon }) => (
          <div key={label} className="bg-white h-[36px] relative rounded-[100px] shrink-0">
            <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[13px] text-center whitespace-nowrap">{label}</p>
              {icon}
            </div>
            <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function WalletList() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const rowBgs = ['bg-[var(--cp-bg-2)]', 'bg-[var(--cp-bg-1)]'];

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      {COIN_ROWS.map((coin, index) => {
        const isExpanded = expandedRow === index;
        return (
          <div
            key={index}
            className={`${isExpanded ? 'bg-white' : rowBgs[index % 2]} ${isExpanded ? 'min-h-[76px]' : 'h-[76px]'} relative rounded-[5px] shrink-0 w-full transition-all duration-300 ${isExpanded ? 'mb-[10px]' : ''} ${!isExpanded ? 'cursor-pointer hover:bg-[var(--cp-border-default)]' : ''}`}
          >
            <div className={`flex flex-col ${isExpanded ? '' : 'size-full'}`}>
              <div
                className={`flex flex-row items-center ${isExpanded ? 'border-b border-[var(--cp-border-default)]' : 'size-full'} cursor-pointer`}
                onClick={() => setExpandedRow(isExpanded ? null : index)}
              >
                <div className={`content-stretch flex items-center ${isExpanded ? 'justify-between' : 'justify-center'} p-[20px] relative ${isExpanded ? 'w-full' : 'size-full'}`}>
                  {isExpanded
                    ? <CoinRowExpanded coin={coin} />
                    : <CoinRowCollapsed coin={coin} />
                  }
                </div>
              </div>
              {isExpanded && (
                <div className="px-[20px] pb-[20px]" onClick={(e) => e.stopPropagation()}>
                  <WalletRowExpanded coinName={coin.name} coinSymbol={coin.symbol} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WalletPage() {
  return (
    <div className="bg-[var(--cp-bg-1)] content-stretch flex flex-col items-start relative size-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
          <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full">
            <TopControls />
            <SwitchBalances />
            <WalletList />
          </div>
        </div>
      </div>
    </div>
  );
}
