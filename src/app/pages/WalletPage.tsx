import { useState } from 'react';
import svgPaths from '../../imports/Wallet-2/svg-tfchl2zu4w';
import imgBtcLogo from '../../imports/Wallet-2/7e6eebe580b2dba6f0a0b9b74d6ab1a4021a315d.png';

// ─── Figma asset URLs (served from Figma desktop localhost server) ─────────────
const imgConvert     = 'http://localhost:3845/assets/c7593b8323843632c170859efdc749b69d70778e.svg';
const imgReceive     = 'http://localhost:3845/assets/9ad994627bb32112ff09c7606d86d4f5298b4c2f.svg';
const imgBankPayout  = 'http://localhost:3845/assets/8cb6ad5d5aaf1a20af14f6d4f71bc15f47a95767.svg';
const imgSend        = 'http://localhost:3845/assets/f62f7331c7494166a6613fda9e8d8425fdd8b0e2.svg';
const imgReceiveExp  = 'http://localhost:3845/assets/7b760d22f4e9da9f56a33e2112da1dbde72ca0d9.svg';
const imgBankExp     = 'http://localhost:3845/assets/b8240a864d7233f6e1d0767fc31ff50231caac39.svg';
const imgSendExp     = 'http://localhost:3845/assets/a6a21c98f4a3e0cb4f5eb40a95b8ba88a4830a4d.svg';
const imgConvertExp  = 'http://localhost:3845/assets/1b28ded7592693c5b0ea1c578273e9390357ffc0.svg';
const imgTooltipCaret = 'http://localhost:3845/assets/a301617ab645e0a48fc4a8ea3fcd597cdff8b5d9.svg';

// ─── Types ────────────────────────────────────────────────────────────────────
type CoinData = { name: string; symbol: string };

const COINS: CoinData[] = Array(7).fill({ name: 'Bitcoin', symbol: 'BTC' });

// ─── Bitcoin logo ─────────────────────────────────────────────────────────────
function Bitcoin() {
  return (
    <div className="relative shrink-0 size-[36px]">
      <div className="absolute inset-[0_0.01%_0_0] overflow-clip">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBtcLogo} />
      </div>
    </div>
  );
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────
function Tooltip({ text }: { text: string }) {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[-15px] top-[-44px] pointer-events-none z-50">
      <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">
          {text}
        </p>
      </div>
      <div className="h-[5px] relative shrink-0 w-[10px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTooltipCaret} />
      </div>
    </div>
  );
}

// ─── Circle icon button (collapsed row) ───────────────────────────────────────
function CircleIconButton({ imgSrc, tooltip }: { imgSrc: string; tooltip: string; inset: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative rounded-[100px] shrink-0 size-[36px] overflow-visible"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="bg-[var(--cp-bg-white)] border border-[var(--cp-border-default)] border-solid overflow-clip relative rounded-[100px] size-[36px]">
        <div className="absolute inset-[calc(27.78%-0.44px)_calc(25%-0.5px)_calc(27.78%-0.44px)_calc(27.78%-0.44px)] overflow-clip">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSrc} />
        </div>
      </div>
      {hovered && <Tooltip text={tooltip} />}
    </div>
  );
}

// ─── CTA card (expanded row labelled buttons) ─────────────────────────────────
function CtaCard({ label, imgSrc, inset }: { label: string; imgSrc: string; inset: string }) {
  return (
    <div className="bg-[var(--cp-bg-white)] border border-[var(--cp-border-default)] border-solid content-stretch flex gap-[10px] h-[36px] items-center justify-center overflow-clip px-[20px] relative rounded-[100px] shrink-0 cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-[var(--cp-text-primary)] text-center whitespace-nowrap">
        {label}
      </p>
      <div className="overflow-clip relative shrink-0 size-[14px]">
        <div className={`absolute ${inset}`}>
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSrc} />
        </div>
      </div>
    </div>
  );
}

// ─── Collapsed controls ───────────────────────────────────────────────────────
function CollapsedControls() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" style={{ overflow: 'visible' }}>
      <CircleIconButton imgSrc={imgConvert}    tooltip="Convert"     inset="inset-[9.27%_17.99%]" />
      <CircleIconButton imgSrc={imgReceive}    tooltip="Receive"     inset="inset-[11.82%_13.6%_11.83%_13.6%]" />
      <CircleIconButton imgSrc={imgBankPayout} tooltip="Bank Payout" inset="inset-[16.67%_4.17%_4.17%_8.33%]" />
      <CircleIconButton imgSrc={imgSend}       tooltip="Send"        inset="inset-[18.75%_24.1%_22.48%_20.59%]" />
    </div>
  );
}

// ─── Expanded controls ────────────────────────────────────────────────────────
function ExpandedControls() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <CtaCard label="Convert"     imgSrc={imgConvertExp} inset="inset-[9.27%_17.99%]" />
      <CtaCard label="Receive"     imgSrc={imgReceiveExp} inset="inset-[11.82%_13.6%_11.83%_13.6%]" />
      <CtaCard label="Bank Payout" imgSrc={imgBankExp}    inset="inset-[16.67%_4.17%_4.17%_8.33%]" />
      <CtaCard label="Send"        imgSrc={imgSendExp}    inset="inset-[18.75%_24.1%_22.48%_20.59%]" />
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

// ─── Wallet list ──────────────────────────────────────────────────────────────
function WalletList() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const rowBgs = ['bg-[var(--cp-bg-1)]', 'bg-[var(--cp-bg-2)]'];

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      {COINS.map((coin, index) => {
        const isExpanded = expandedRow === index;
        const isAlt = index % 2 === 1;
        return (
          <div
            key={index}
            className={`${isExpanded ? 'bg-white' : isAlt ? 'bg-[var(--cp-bg-2)]' : 'bg-[var(--cp-bg-1)]'} relative rounded-[5px] shrink-0 w-full transition-colors duration-150`}
            style={{ overflow: 'visible' }}
          >
            {isExpanded ? (
              /* ── Expanded ──────────────────────────────────────────────── */
              <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
                {/* Header row */}
                <div className="border-[var(--cp-border-default)] border-b border-solid content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[150px] items-center relative shrink-0">
                      <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                        <Bitcoin />
                        <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]">
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14.5px] text-[var(--cp-text-primary)] w-full">{coin.name}</p>
                          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[var(--cp-text-tertiary)] w-full">{coin.symbol}</p>
                        </div>
                      </div>
                    </div>
                    <ExpandedControls />
                  </div>
                </div>
                {/* Balance data */}
                <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
                  {[
                    { label: 'PRIMARY BALANCE' },
                    { label: 'API BALANCE' },
                    { label: 'TOTAL BALANCE' },
                  ].map(({ label }) => (
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
                {/* Collapse */}
                <button
                  className="text-[13px] text-[var(--cp-text-tertiary)] font-['Inter:Regular',sans-serif] font-normal cursor-pointer hover:text-[var(--cp-text-primary)] transition-colors"
                  onClick={() => setExpandedRow(null)}
                >
                  ↑ Collapse
                </button>
              </div>
            ) : (
              /* ── Collapsed ─────────────────────────────────────────────── */
              <div
                className={`content-stretch flex h-[76px] items-center justify-between p-[20px] relative w-full cursor-pointer hover:bg-[var(--cp-bg-3)] transition-colors rounded-[5px]`}
                onClick={() => setExpandedRow(index)}
              >
                {/* Left: coin info + value */}
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
                  className="content-stretch flex gap-[10px] items-start relative shrink-0"
                  style={{ overflow: 'visible' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <CircleIconButton imgSrc={imgConvert}    tooltip="Convert"     inset="inset-[9.27%_17.99%]" />
                  <CircleIconButton imgSrc={imgReceive}    tooltip="Receive"     inset="inset-[11.82%_13.6%_11.83%_13.6%]" />
                  <CircleIconButton imgSrc={imgBankPayout} tooltip="Bank Payout" inset="inset-[16.67%_4.17%_4.17%_8.33%]" />
                  <CircleIconButton imgSrc={imgSend}       tooltip="Send"        inset="inset-[18.75%_24.1%_22.48%_20.59%]" />
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
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
      <TopControls />
      <SwitchBalances />
      <WalletList />
    </div>
  );
}
