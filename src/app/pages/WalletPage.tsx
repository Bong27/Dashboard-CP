import { useState } from 'react';
import svgPaths from '../../imports/Wallet-2/svg-tfchl2zu4w';
import BankPayoutModal from '../components/BankPayoutModal';
import { CircleIcon } from '../components/CircleIcon';

// ─── Inline SVG icons (paths from Figma export, inlined so fill color is controllable) ──

// Each icon is a self-contained SVG that fills its container via w-full h-full.
// preserveAspectRatio="xMidYMid meet" keeps correct proportions inside the 16×16 slot.
// fill="currentColor" so the parent CircleIcon controls color via CSS `color`.

function IconConvert() {
  return (
    <svg width="10.88" height="13.03" viewBox="0 0 10.8835 13.0339" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.8447 0.318097C8.0022 0.160637 8.2575 0.160637 8.4149 0.318097L10.5654 2.46856C10.7229 2.62602 10.7229 2.88132 10.5654 3.03878L8.4149 5.18924C8.2575 5.34671 8.0022 5.34671 7.8447 5.18924C7.6872 5.03178 7.6872 4.77648 7.8447 4.61902L9.7101 2.75367L7.8447 0.888327C7.6872 0.730857 7.6872 0.475557 7.8447 0.318097Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.75368 3.15683C2.29028 3.15683 1.84586 3.34091 1.51818 3.66859C1.19051 3.99626 1.00643 4.44068 1.00643 4.90408V5.97931C1.00643 6.202 0.825897 6.38252 0.603217 6.38252C0.380527 6.38252 0.200007 6.202 0.200007 5.97931V4.90408C0.200007 4.2268 0.469048 3.58217 0.948028 3.10319C1.42701 2.62421 2.07164 2.35517 2.75368 2.35517H10.2803C10.6134 2.35517 10.8835 2.62523 10.8835 2.95838C10.8835 3.29152 10.6134 3.56159 10.2803 3.56159H2.75368V3.15683Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.03879 7.84468C3.19625 8.00214 3.19625 8.25744 3.03879 8.4149L1.17344 10.2803L3.03879 12.1456C3.19625 12.3031 3.19625 12.5584 3.03879 12.7158C2.88132 12.8733 2.62603 12.8733 2.46856 12.7158L0.318097 10.5654C0.160637 10.4079 0.160637 10.1526 0.318097 9.99513L2.46856 7.84468C2.62603 7.68722 2.88132 7.68722 3.03879 7.84468Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.2803 6.65138C10.503 6.65138 10.6835 6.8319 10.6835 7.05459V8.12982C10.6835 8.80708 10.4144 9.45658 9.9355 9.93558C9.4566 10.4145 8.8071 10.6835 8.1298 10.6835H0.603217C0.380527 10.6835 0.200007 10.503 0.200007 10.2803C0.200007 10.0576 0.380527 9.877 0.603217 9.877H8.1298C8.5401 9.877 8.9337 9.71399 9.2239 9.42382C9.514 9.13365 9.677 8.7401 9.677 8.12982V7.05459C9.677 6.8319 9.8575 6.65138 10.2803 6.65138Z" fill="currentColor"/>
    </svg>
  );
}

function IconReceive() {
  return (
    <svg width="12.37" height="12.21" viewBox="0 0 12.3758 12.2171" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.18791 10.3001C5.92045 10.3001 5.70364 10.0833 5.70364 9.81578V0.68428C5.70364 0.41682 5.92045 0.2 6.18791 0.2C6.45536 0.2 6.67218 0.41682 6.67218 0.68428V9.81578C6.67218 10.0833 6.45536 10.3001 6.18791 10.3001Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.0961 4.9076C11.2852 5.09672 11.2852 5.40334 11.0961 5.59246L6.53034 10.1582C6.34122 10.3474 6.0346 10.3474 5.84548 10.1582L1.27972 5.59246C1.0906 5.40334 1.0906 5.09672 1.27972 4.9076C1.46884 4.71848 1.77546 4.71848 1.96458 4.9076L6.18791 9.13088L10.4112 4.9076C10.6004 4.71848 10.907 4.71848 11.0961 4.9076Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 11.7262C0 11.4551 0.21978 11.2353 0.49089 11.2353H11.885C12.1561 11.2353 12.3758 11.4551 12.3758 11.7262C12.3758 11.9973 12.1561 12.2171 11.885 12.2171H0.49089C0.21978 12.2171 0 11.9973 0 11.7262Z" fill="currentColor"/>
    </svg>
  );
}

function IconBankPayout() {
  return (
    <svg width="16" height="14.48" viewBox="0 0 17.5 15.8335" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.33334 1.66667C2.89131 1.66667 2.46739 1.84226 2.15483 2.15482C1.84227 2.46738 1.66667 2.89131 1.66667 3.33334V10C1.66667 10.442 1.84227 10.8659 2.15483 11.1785C2.46739 11.491 2.89131 11.6666 3.33334 11.6666H8.33334C8.7936 11.6666 9.1667 12.0397 9.1667 12.5C9.1667 12.9602 8.7936 13.3333 8.33334 13.3333H3.33334C2.44928 13.3333 1.60144 12.9821 0.97631 12.357C0.35119 11.7319 0 10.884 0 10V3.33334C0 2.44928 0.35119 1.60143 0.97631 0.97631C1.60144 0.35119 2.44928 0 3.33334 0H13.3333C14.2174 0 15.0652 0.35119 15.6904 0.97631C16.3155 1.60143 16.6667 2.44928 16.6667 3.33334V7.08335C16.6667 7.54355 16.2936 7.91665 15.8333 7.91665C15.3731 7.91665 15 7.54355 15 7.08335V3.33334C15 2.89131 14.8244 2.46738 14.5118 2.15482C14.1993 1.84226 13.7754 1.66667 13.3333 1.66667H3.33334Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 5.00008C0 4.53985 0.3731 4.16675 0.83334 4.16675H15.8333C16.2936 4.16675 16.6667 4.53985 16.6667 5.00008C16.6667 5.46032 16.2936 5.83342 15.8333 5.83342H0.83334C0.3731 5.83342 0 5.46032 0 5.00008Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.3335 9.16685C3.3335 8.70655 3.7066 8.33345 4.16683 8.33345H4.17517C4.6354 8.33345 5.0085 8.70655 5.0085 9.16685C5.0085 9.62705 4.6354 10.0001 4.17517 10.0001H4.16683C3.7066 10.0001 3.3335 9.62705 3.3335 9.16685Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.667 9.16685C6.667 8.70655 7.04009 8.33345 7.50033 8.33345H9.167C9.6272 8.33345 10.0003 8.70655 10.0003 9.16685C10.0003 9.62705 9.6272 10.0001 9.167 10.0001H7.50033C7.04009 10.0001 6.667 9.62705 6.667 9.16685Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.5 12.5001C17.5 12.9604 17.1269 13.3335 16.6667 13.3335H11.6667C11.2064 13.3335 10.8333 12.9604 10.8333 12.5001C10.8333 12.0399 11.2064 11.6669 11.6667 11.6669H16.6667C17.1269 11.6669 17.5 12.0399 17.5 12.5001Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.5774 15.5895C13.252 15.264 13.252 14.7363 13.5774 14.4109L15.4882 12.5001L13.5774 10.5894C13.252 10.2639 13.252 9.73635 13.5774 9.41095C13.9029 9.08545 14.4305 9.08545 14.7559 9.41095L17.2559 11.9109C17.5814 12.2363 17.5814 12.764 17.2559 13.0895L14.7559 15.5895C14.4305 15.915 13.9029 15.915 13.5774 15.5895Z" fill="currentColor"/>
    </svg>
  );
}

function IconSend() {
  return (
    <svg width="9.4" height="9.4" viewBox="0 0 9.40295 9.40295" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.0493 0.35367C9.2542 0.55856 9.2542 0.89076 9.0493 1.09565L1.09572 9.0492C0.89083 9.2541 0.55864 9.2541 0.35375 9.0492C0.14886 8.8443 0.14886 8.5122 0.35375 8.3073L8.3073 0.35367C8.5122 0.14878 8.8444 0.14878 9.0493 0.35367Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.15816 0.72466C1.15816 0.4349 1.39305 0.2 1.68282 0.2H8.6783C8.968 0.2 9.2029 0.4349 9.2029 0.72466V7.7201C9.2029 8.0099 8.968 8.2448 8.6783 8.2448C8.3885 8.2448 8.1536 8.0099 8.1536 7.7201V1.24932H1.68282C1.39305 1.24932 1.15816 1.01442 1.15816 0.72466Z" fill="currentColor"/>
    </svg>
  );
}

function TooltipCaret() {
  return (
    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="shrink-0">
      <path d="M10 0H0L3.58579 3.58579C4.36684 4.36684 5.63316 4.36684 6.41421 3.58579L10 0Z" fill="black"/>
    </svg>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────
type CoinData = { name: string; symbol: string };
const COINS: CoinData[] = Array(7).fill({ name: 'Bitcoin', symbol: 'BTC' });

// ─── Bitcoin logo ─────────────────────────────────────────────────────────────
function Bitcoin() {
  return (
    <div className="relative shrink-0 size-[36px]">
      <div className="absolute inset-[0_0.01%_0_0] overflow-clip">
        <div className="absolute contents inset-0">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9959 36">
            <path d={svgPaths.p3bb04e00} fill="#F7931A" />
            <path d={svgPaths.p3f7e8e00} fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────
function Tooltip({ text }: { text: string }) {
  return (
    <div className="absolute flex flex-col items-center pointer-events-none z-50"
         style={{ bottom: 'calc(100% + 4px)', left: '50%', transform: 'translateX(-50%)' }}>
      <div className="bg-black rounded-[5px] px-[10px] py-[10px] shrink-0 whitespace-nowrap">
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-none">
          {text}
        </p>
      </div>
      <TooltipCaret />
    </div>
  );
}

// ─── Action definitions ───────────────────────────────────────────────────────
type ActionDef = {
  label: string;
  iconEl: React.ReactNode;     // for CircleIcon (collapsed)
  icon: (color: string) => React.ReactNode; // for CtaCard (expanded)
  inset: string;
};

const ACTIONS: ActionDef[] = [
  { label: 'Convert',     iconEl: <IconConvert />,    icon: () => <IconConvert />,    inset: 'inset-[9.27%_17.99%]' },
  { label: 'Receive',     iconEl: <IconReceive />,    icon: () => <IconReceive />,    inset: 'inset-[11.82%_13.6%_11.83%_13.6%]' },
  { label: 'Bank Payout', iconEl: <IconBankPayout />, icon: () => <IconBankPayout />, inset: 'inset-[16.67%_4.17%_4.17%_8.33%]' },
  { label: 'Send',        iconEl: <IconSend />,       icon: () => <IconSend />,       inset: 'inset-[18.75%_24.1%_22.48%_20.59%]' },
];


// ─── CTA labelled button (expanded) ──────────────────────────────────────────
function CtaCard({ label, icon, inset }: ActionDef) {
  return (
    <div className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch flex gap-[10px] h-[36px] items-center justify-center overflow-clip px-[20px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-[var(--cp-text-primary)] text-center whitespace-nowrap">
        {label}
      </p>
      <div className={`relative size-[14px]`}>
        <div className={`absolute ${inset}`}>
          {icon('#8492A6')}
        </div>
      </div>
    </div>
  );
}

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
          <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[18px]" style={{ letterSpacing: '-1px' }}>$0.00 USD</p>
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

// ─── Wallet list ──────────────────────────────────────────────────────────────
function WalletList({ onBankPayout }: { onBankPayout: () => void }) {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      {COINS.map((coin, index) => {
        const isExpanded = expandedRow === index;
        const isAlt = index % 2 === 1;
        return (
          <div
            key={index}
            className={`${isExpanded ? 'bg-white' : isAlt ? 'bg-[var(--cp-bg-2)]' : 'bg-[var(--cp-bg-1)]'} relative rounded-[5px] shrink-0 w-full`}
            style={{ overflow: 'visible' }}
          >
            {isExpanded ? (
              <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
                {/* Header — click anywhere on the coin/title row to collapse */}
                <div className="border-[var(--cp-border-default)] border-b border-solid content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-full">
                  <div
                    className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer"
                    onClick={() => setExpandedRow(null)}
                  >
                    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                      <Bitcoin />
                      <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14.5px] text-[var(--cp-text-primary)] w-full">{coin.name}</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[var(--cp-text-tertiary)] w-full">{coin.symbol}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                      {ACTIONS.map((a) => (
                      <div key={a.label} onClick={a.label === 'Bank Payout' ? onBankPayout : undefined}>
                        <CtaCard {...a} />
                      </div>
                    ))}
                    </div>
                  </div>
                </div>
                {/* Balance data */}
                <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                  {['PRIMARY BALANCE', 'API BALANCE', 'TOTAL BALANCE'].map((label) => (
                    <div key={label} className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative">
                      <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-[var(--cp-text-primary)] uppercase whitespace-nowrap">{label}</p>
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14.5px] text-[var(--cp-text-secondary)] whitespace-nowrap">0.0000000 {coin.symbol}</p>
                      </div>
                      <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-[var(--cp-text-primary)] uppercase whitespace-nowrap">VALUE</p>
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14.5px] text-[var(--cp-text-secondary)] whitespace-nowrap">$0.00 USD</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ) : (
              <div
                className="content-stretch flex h-[76px] items-center justify-between p-[20px] relative w-full cursor-pointer hover:bg-[var(--cp-bg-3)] transition-colors rounded-[5px]"
                onClick={() => setExpandedRow(index)}
              >
                {/* Left */}
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-[390px]">
                  <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                    <Bitcoin />
                    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14.5px] text-[var(--cp-text-primary)] w-full">{coin.name}</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[var(--cp-text-tertiary)] w-full">{coin.symbol}</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center px-[20px] relative shrink-0">
                    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[105px]">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14.5px] text-[var(--cp-text-primary)] w-full">0.000000 {coin.symbol}</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[var(--cp-text-tertiary)] w-full">{coin.symbol}</p>
                    </div>
                  </div>
                </div>
                {/* Right: action buttons */}
                <div
                  className="content-stretch flex gap-[10px] items-center relative shrink-0"
                  style={{ overflow: 'visible' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {ACTIONS.map((a) => (
                    <div key={a.label} onClick={a.label === 'Bank Payout' ? onBankPayout : undefined}>
                      <CircleIcon label={a.label} icon={a.iconEl} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WalletPage() {
  const [showBankPayout, setShowBankPayout] = useState(false);
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full">
      {showBankPayout && <BankPayoutModal onClose={() => setShowBankPayout(false)} />}
      <TopControls />
      <SwitchBalances />
      <WalletList onBankPayout={() => setShowBankPayout(true)} />
    </div>
  );
}
