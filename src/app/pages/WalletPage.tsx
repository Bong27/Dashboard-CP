import { useState } from 'react';
import svgPaths from '../../imports/Wallet-2/svg-tfchl2zu4w';
import imgBtcLogo from '../../imports/Wallet-2/7e6eebe580b2dba6f0a0b9b74d6ab1a4021a315d.png';

// ─── Types ────────────────────────────────────────────────────────────────────
type CoinRow = { name: string; symbol: string; logo: React.ReactNode };

// ─── Data ─────────────────────────────────────────────────────────────────────
const BTC_LOGO = (
  <div className="overflow-clip relative shrink-0 size-[36px]">
    <div className="absolute inset-[0.09%_0%_0.09%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36.0072">
        <path d={svgPaths.p3bb04e00} fill="#F7931A" />
        <path d={svgPaths.p3f7e8e00} fill="white" />
      </svg>
    </div>
  </div>
);

const COIN_ROWS: CoinRow[] = Array(7).fill(null).map(() => ({
  name: 'Bitcoin', symbol: 'BTC', logo: BTC_LOGO,
}));

// ─── Action icon SVGs ─────────────────────────────────────────────────────────
function ConvertSVG({ color }: { color: string }) {
  return (
    <div className="absolute inset-[9.27%_17.99%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.96288 11.4047">
        <path clipRule="evenodd" d={svgPaths.p28e65480} fill={color} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p23d2c80}  fill={color} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p8311e00}  fill={color} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3f77e80}  fill={color} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p22c70000} fill={color} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3e540080} fill={color} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pc43c680}  fill={color} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p19eb8700} fill={color} fillRule="evenodd" />
      </svg>
    </div>
  );
}

function ReceiveSVG({ color }: { color: string }) {
  return (
    <div className="absolute inset-[11.82%_13.6%_11.83%_13.6%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1918 10.6899">
        <path clipRule="evenodd" d={svgPaths.p2cad1000} fill={color} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pcd29c00}  fill={color} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3eb1dc00} fill={color} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p36f81900} fill={color} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p39b6700}  fill={color} fillRule="evenodd" />
      </svg>
    </div>
  );
}

function BankPayoutSVG({ color }: { color: string }) {
  return (
    <div className="absolute inset-[16.67%_4.17%_4.17%_8.33%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 19">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.5 0L23 6H0L11.5 0ZM11.5 2.18L19.09 6H3.91L11.5 2.18Z" fill={color}/>
        <path d="M2 7H4V15H2V7Z" fill={color}/>
        <path d="M10.25 7H12.75V15H10.25V7Z" fill={color}/>
        <path d="M19 7H21V15H19V7Z" fill={color}/>
        <path d="M0 16H23V19H0V16Z" fill={color}/>
      </svg>
    </div>
  );
}

function SendSVG({ color }: { color: string }) {
  return (
    <div className="absolute inset-[18.75%_24.1%_22.48%_20.59%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.74361 8.22758">
        <path clipRule="evenodd" d={svgPaths.p9eec080}  fill={color} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p1255df80} fill={color} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p2c049700} fill={color} fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p1bc13700} fill={color} fillRule="evenodd" />
      </svg>
    </div>
  );
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────
function Tooltip({ label }: { label: string }) {
  return (
    <div className="absolute flex flex-col items-center pointer-events-none z-50"
         style={{ bottom: 'calc(100% + 6px)', left: '50%', transform: 'translateX(-50%)' }}>
      <div className="bg-black rounded-[5px] px-[10px] py-[10px] shrink-0">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white whitespace-nowrap leading-none">
          {label}
        </p>
      </div>
      {/* Downward caret */}
      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="shrink-0">
        <path d="M0 0L5 5L10 0H0Z" fill="black"/>
      </svg>
    </div>
  );
}

// ─── Circle action button ─────────────────────────────────────────────────────
type ActionDef = {
  label: string;
  renderIcon: (color: string) => React.ReactNode;
};

function ActionButton({ label, renderIcon }: ActionDef) {
  const [hovered, setHovered] = useState(false);
  const iconColor = hovered ? '#ffffff' : '#8492A6';

  return (
    <div
      className="relative rounded-[100px] shrink-0 size-[36px] cursor-pointer"
      style={{
        background: hovered ? '#8492A6' : '#ffffff',
        border: `1px solid ${hovered ? '#8492A6' : 'var(--cp-border-default)'}`,
        transition: 'background 0.15s, border-color 0.15s',
        overflow: 'visible',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      {hovered && <Tooltip label={label} />}

      {/* Icon */}
      <div className="absolute inset-[calc(27.78%-0.44px)_calc(25%-0.5px)_calc(27.78%-0.44px)_calc(27.78%-0.44px)] overflow-clip">
        {renderIcon(iconColor)}
      </div>
    </div>
  );
}

const ACTIONS: ActionDef[] = [
  { label: 'Convert',      renderIcon: (c) => <ConvertSVG     color={c} /> },
  { label: 'Receive',      renderIcon: (c) => <ReceiveSVG     color={c} /> },
  { label: 'Bank Payout',  renderIcon: (c) => <BankPayoutSVG  color={c} /> },
  { label: 'Send',         renderIcon: (c) => <SendSVG        color={c} /> },
];

// ─── Misc icons ───────────────────────────────────────────────────────────────
function SearchIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="-translate-y-1/2 absolute aspect-square left-0 right-0 top-1/2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path clipRule="evenodd" d={svgPaths.p34a3fe00} fill="var(--cp-neutral-dark-blue)" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1aa08900} fill="var(--cp-neutral-dark-blue)" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <div className="absolute inset-[32.14%_21.43%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6">
          <path clipRule="evenodd" d={svgPaths.p3f5aa180} fill="var(--cp-text-quinary)" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

// ─── Top controls ─────────────────────────────────────────────────────────────
function TopControls() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full">
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
      <div className="content-stretch flex gap-[16px] h-full items-center relative shrink-0">
        <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-end leading-[normal] not-italic relative shrink-0 w-[118px] whitespace-nowrap">
          <p className="relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase">ESTIMATED BALANCE</p>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] text-[18px] tracking-[-0.2px]">$0.00 USD</p>
        </div>
        <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
        <div className="bg-white relative rounded-[100px] shrink-0 size-[24px]">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]">
              <div className="absolute inset-[3.12%_0.05%_0.05%_4.5%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8177 10.3289">
                  <path clipRule="evenodd" d={svgPaths.p26277800} fill="var(--cp-text-tertiary)" fillRule="evenodd" />
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

// ─── Toggle switch ────────────────────────────────────────────────────────────
function SwitchBalances() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <button className="block cursor-pointer h-[20px] relative shrink-0 w-[32px]">
        <div className="absolute bg-[var(--cp-brand-primary)] inset-0 rounded-[50px]" />
        <div className="absolute inset-[7.69%_4.76%_7.7%_42.86%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7619 16.9231">
            <ellipse cx="8.38095" cy="8.46154" fill="white" rx="8.38095" ry="8.46154" />
          </svg>
        </div>
      </button>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-secondary)] text-[13px] whitespace-nowrap">
        Auto-Accept Incorrect Deposits into Primary Balances
      </p>
      <div className="overflow-clip relative shrink-0 size-[12px]">
        <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p2df82080} fill="var(--cp-text-quaternary)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Coin rows ────────────────────────────────────────────────────────────────
function CoinRowCollapsed({ coin }: { coin: CoinRow }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative">
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
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">0.000000 {coin.symbol}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">{coin.symbol}</p>
          </div>
        </div>
      </div>
      {/* Action buttons */}
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0" style={{ overflow: 'visible' }}>
        {ACTIONS.map((action) => (
          <ActionButton key={action.label} {...action} />
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
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
        {ACTIONS.map(({ label, renderIcon }) => (
          <div key={label} className="bg-white h-[36px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors">
            <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[13px] text-center whitespace-nowrap">{label}</p>
              <div className="relative size-[14px]">
                {renderIcon('var(--cp-text-tertiary)')}
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Wallet list ──────────────────────────────────────────────────────────────
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
            style={{ overflow: isExpanded ? 'visible' : 'hidden' }}
            onClick={() => !isExpanded && setExpandedRow(index)}
          >
            <div className="content-stretch flex flex-col items-start px-[20px] py-[18px] relative size-full gap-[10px]">
              {isExpanded ? (
                <>
                  <CoinRowExpanded coin={coin} />
                  <div className="w-full border-t border-[var(--cp-border-default)]" />
                  <div className="w-full">
                    <p className="text-[13px] text-[var(--cp-text-tertiary)] font-['Inter:Regular',sans-serif] font-normal cursor-pointer" onClick={() => setExpandedRow(null)}>
                      ↑ Collapse
                    </p>
                  </div>
                </>
              ) : (
                <CoinRowCollapsed coin={coin} />
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
    <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
      <TopControls />
      <SwitchBalances />
      <WalletList />
    </div>
  );
}
