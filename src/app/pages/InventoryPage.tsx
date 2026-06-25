/**
 * /inventory — standalone visual inventory of all UI components used in the prototype.
 * No sidebar, no nav. Renders actual markup copied from source components.
 */
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PayoutCurrencyDropdown } from '../components/PayoutCurrencyDropdown';
import { CircleIcon } from '../components/CircleIcon';
import { COUNTRIES } from '../constants/countries';
import { WalletExpandedTabs } from '../components/WalletRowExpanded';
import svgPaths from '../../imports/Wallet-2/svg-tfchl2zu4w';

// ─── Layout helpers ───────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-[32px]">
      <div className="flex items-center gap-[16px]">
        <h2 className="font-['Inter',sans-serif] font-bold text-[11px] text-[var(--cp-text-secondary)] uppercase tracking-widest whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-1 h-px bg-[var(--cp-border-default)]" />
      </div>
      {children}
    </section>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[12px]">
      <p className="font-['Inter',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)]">{label}</p>
      <div className="flex items-start gap-[12px] flex-wrap">{children}</div>
    </div>
  );
}

// ─── Coin logos (exact from WalletPage / TransactionsPage) ────────────────────

function SvgUsdtLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14.6663 12.7585" fill="none" preserveAspectRatio="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.68524 0.0626632L0.0109944 5.67992C0.00081815 5.70082 -0.00240665 5.72442 0.00179163 5.74727C0.00598991 5.77013 0.017391 5.79105 0.0343277 5.80696L7.25683 12.7279C7.27734 12.7475 7.30467 12.7585 7.33309 12.7585C7.36152 12.7585 7.38884 12.7475 7.40936 12.7279L14.6319 5.80739C14.6488 5.79148 14.6602 5.77056 14.6644 5.74771C14.6686 5.72485 14.6654 5.70125 14.6552 5.68036L11.9809 0.0630953C11.9723 0.0442301 11.9584 0.028249 11.941 0.0170617C11.9235 0.00587452 11.9032 -4.5532e-05 11.8824 9.10716e-06H2.78462C2.76378 -0.000250221 2.74331 0.00552723 2.72567 0.0166445C2.70804 0.0277618 2.694 0.043744 2.68524 0.0626632Z" fill="#50AF95"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.26108 6.25676C8.20923 6.26065 7.94133 6.27663 7.34374 6.27663C6.86843 6.27663 6.53096 6.26238 6.41257 6.25676C4.57573 6.17596 3.20468 5.8562 3.20468 5.47337C3.20468 5.09053 4.57573 4.77121 6.41257 4.68911V5.9383C6.53269 5.94694 6.87664 5.96725 7.35195 5.96725C7.92232 5.96725 8.20793 5.94349 8.25935 5.93873V4.68997C10.0923 4.77164 11.4603 5.09139 11.4603 5.47337C11.4603 5.85534 10.0927 6.17509 8.25935 6.25633L8.26108 6.25676ZM8.26108 4.56078V3.44294H10.8191V1.73832H3.85456V3.44294H6.41214V4.56035C4.33332 4.65584 2.76999 5.06763 2.76999 5.56108C2.76999 6.05454 4.33332 6.46589 6.41214 6.56182V10.1439H8.26065V6.56052C10.3347 6.46503 11.8954 6.05367 11.8954 5.56065C11.8954 5.06763 10.336 4.65627 8.26065 4.56035L8.26108 4.56078Z" fill="white"/>
    </svg>
  );
}

function UsdtLogo36() {
  return (
    <div className="relative shrink-0 size-[36px] rounded-[999px] bg-[#50af95] flex items-center justify-center">
      <span className="text-white font-bold leading-none select-none" style={{ fontSize: 16 }}>₮</span>
    </div>
  );
}
function UsdcLogo36() {
  return (
    <div className="relative shrink-0 size-[36px] rounded-[999px] bg-[#2775CA] flex items-center justify-center">
      <span className="text-white font-bold leading-none select-none" style={{ fontSize: 13 }}>$</span>
    </div>
  );
}
function BtcLogo36() {
  return (
    <div className="relative shrink-0 size-[36px]">
      <div className="absolute inset-0 overflow-clip">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9959 36">
          <path d={svgPaths.p3bb04e00} fill="#F7931A" />
          <path d={svgPaths.p3f7e8e00} fill="white" />
        </svg>
      </div>
    </div>
  );
}

// ─── Wallet coin row (exact from WalletPage) ──────────────────────────────────

function IconConvert() {
  return (
    <svg width="11" height="13" viewBox="0 0 10.8835 13.0339" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.8447 0.318097C8.0022 0.160637 8.2575 0.160637 8.4149 0.318097L10.5654 2.46856C10.7229 2.62602 10.7229 2.88132 10.5654 3.03878L8.4149 5.18924C8.2575 5.34671 8.0022 5.34671 7.8447 5.18924C7.6872 5.03178 7.6872 4.77648 7.8447 4.61902L9.7101 2.75367L7.8447 0.888327C7.6872 0.730857 7.6872 0.475557 7.8447 0.318097Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.75368 3.15683C2.29028 3.15683 1.84586 3.34091 1.51818 3.66859C1.19051 3.99626 1.00643 4.44068 1.00643 4.90408V5.97931C1.00643 6.202 0.825897 6.38252 0.603217 6.38252C0.380527 6.38252 0.200007 6.202 0.200007 5.97931V4.90408C0.200007 4.2268 0.469048 3.58217 0.948028 3.10319C1.42701 2.62421 2.07164 2.35517 2.75368 2.35517H10.2803C10.6134 2.35517 10.8835 2.62523 10.8835 2.95838C10.8835 3.29152 10.6134 3.56159 10.2803 3.56159H2.75368V3.15683Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.03879 7.84468C3.19625 8.00214 3.19625 8.25744 3.03879 8.4149L1.17344 10.2803L3.03879 12.1456C3.19625 12.3031 3.19625 12.5584 3.03879 12.7158C2.88132 12.8733 2.62603 12.8733 2.46856 12.7158L0.318097 10.5654C0.160637 10.4079 0.160637 10.1526 0.318097 9.99513L2.46856 7.84468C2.62603 7.68722 2.88132 7.68722 3.03879 7.84468Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.2803 6.65138C10.503 6.65138 10.6835 6.8319 10.6835 7.05459V8.12982C10.6835 8.80708 10.4144 9.45658 9.9355 9.93558C9.4566 10.4145 8.8071 10.6835 8.1298 10.6835H0.603217C0.380527 10.6835 0.200007 10.503 0.200007 10.2803C0.200007 10.0576 0.380527 9.877 0.603217 9.877H8.1298C8.5401 9.877 8.9337 9.71399 9.2239 9.42382C9.514 9.13365 9.677 8.7401 9.677 8.12982V7.05459C9.677 6.8319 9.8575 6.65138 10.2803 6.65138Z" fill="currentColor"/>
    </svg>
  );
}
function IconReceive() {
  return (
    <svg width="12" height="12" viewBox="0 0 12.3758 12.2171" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.18791 10.3001C5.92045 10.3001 5.70364 10.0833 5.70364 9.81578V0.68428C5.70364 0.41682 5.92045 0.2 6.18791 0.2C6.45536 0.2 6.67218 0.41682 6.67218 0.68428V9.81578C6.67218 10.0833 6.45536 10.3001 6.18791 10.3001Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.0961 4.9076C11.2852 5.09672 11.2852 5.40334 11.0961 5.59246L6.53034 10.1582C6.34122 10.3474 6.0346 10.3474 5.84548 10.1582L1.27972 5.59246C1.0906 5.40334 1.0906 5.09672 1.27972 4.9076C1.46884 4.71848 1.77546 4.71848 1.96458 4.9076L6.18791 9.13088L10.4112 4.9076C10.6004 4.71848 10.907 4.71848 11.0961 4.9076Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 11.7262C0 11.4551 0.21978 11.2353 0.49089 11.2353H11.885C12.1561 11.2353 12.3758 11.4551 12.3758 11.7262C12.3758 11.9973 12.1561 12.2171 11.885 12.2171H0.49089C0.21978 12.2171 0 11.9973 0 11.7262Z" fill="currentColor"/>
    </svg>
  );
}
function IconBankPayoutSm() {
  return (
    <svg className="block size-full" viewBox="0 0 24 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 1L23 7H1L12 1Z" fill="currentColor"/>
      <rect x="3" y="9" width="2.5" height="8" fill="currentColor"/>
      <rect x="7.75" y="9" width="2.5" height="8" fill="currentColor"/>
      <rect x="12.5" y="9" width="2.5" height="8" fill="currentColor"/>
      <rect x="17.25" y="9" width="2.5" height="8" fill="currentColor"/>
      <rect x="1" y="18" width="22" height="2" fill="currentColor"/>
      <rect x="1" y="21" width="22" height="2" rx="1" fill="currentColor"/>
    </svg>
  );
}
function IconSendSm() {
  return (
    <svg width="9" height="9" viewBox="0 0 9.40295 9.40295" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.0493 0.35367C9.2542 0.55856 9.2542 0.89076 9.0493 1.09565L1.09572 9.0492C0.89083 9.2541 0.55864 9.2541 0.35375 9.0492C0.14886 8.8443 0.14886 8.5122 0.35375 8.3073L8.3073 0.35367C8.5122 0.14878 8.8444 0.14878 9.0493 0.35367Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.15816 0.72466C1.15816 0.4349 1.39305 0.2 1.68282 0.2H8.6783C8.968 0.2 9.2029 0.4349 9.2029 0.72466V7.7201C9.2029 8.0099 8.968 8.2448 8.6783 8.2448C8.3885 8.2448 8.1536 8.0099 8.1536 7.7201V1.24932H1.68282C1.39305 1.24932 1.15816 1.01442 1.15816 0.72466Z" fill="currentColor"/>
    </svg>
  );
}

function CtaCard({ label, icon, inset }: { label: string; icon: React.ReactNode; inset: string }) {
  return (
    <div className="bg-white border border-[var(--cp-border-default)] flex gap-[10px] h-[36px] items-center justify-center px-[20px] rounded-[100px] shrink-0 cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-primary)] whitespace-nowrap">{label}</p>
      <div className="relative flex size-[14px] shrink-0 items-center justify-center text-[#8492A6]">
        <div className={`absolute ${inset} flex items-center justify-center`}>{icon}</div>
      </div>
    </div>
  );
}

function WalletRowCollapsed({ logo, name, symbol, alt }: { logo: React.ReactNode; name: string; symbol: string; alt?: boolean }) {
  const baseTicker = symbol.split('.')[0];
  return (
    <div className={`content-stretch flex h-[76px] items-center justify-between p-[20px] relative w-full rounded-[5px] cursor-pointer transition-colors hover:bg-[var(--cp-bg-3)] ${alt ? 'bg-[var(--cp-bg-2)]' : 'bg-[var(--cp-bg-1)]'}`}>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[390px]">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          {logo}
          <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[140px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14.5px] text-[var(--cp-text-primary)] w-full whitespace-nowrap">{name}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[var(--cp-text-tertiary)] w-full whitespace-nowrap">{symbol}</p>
          </div>
        </div>
        <div className="content-stretch flex items-center px-[20px] relative shrink-0">
          <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[140px]">
            <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[14.5px] text-[var(--cp-text-primary)] w-full whitespace-nowrap" style={{ letterSpacing: '-0.5px' }}>0.000000 {baseTicker}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[var(--cp-text-tertiary)] w-full whitespace-nowrap">$0.00 USD</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0" style={{ overflow: 'visible' }}>
        <CircleIcon label="Convert" icon={<IconConvert />} />
        <CircleIcon label="Receive" icon={<IconReceive />} />
        <CircleIcon label="Bank Payout" icon={<div className="size-full"><IconBankPayoutSm /></div>} />
        <CircleIcon label="Send" icon={<IconSendSm />} />
      </div>
    </div>
  );
}

function WalletRowExpanded({ logo, name, symbol }: { logo: React.ReactNode; name: string; symbol: string }) {
  const ticker = symbol.split('.')[0];
  return (
    <div className="bg-white rounded-[5px] w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
        <div className="border-[var(--cp-border-default)] border-b border-solid content-stretch flex flex-col items-start pb-[20px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
              {logo}
              <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[140px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14.5px] text-[var(--cp-text-primary)] w-full whitespace-nowrap">{name}</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[var(--cp-text-tertiary)] w-full whitespace-nowrap">{symbol}</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
              <CtaCard label="Convert" icon={<IconConvert />} inset="inset-[9.27%_17.99%]" />
              <CtaCard label="Receive" icon={<IconReceive />} inset="inset-[11.82%_13.6%]" />
              <CtaCard label="Bank Payout" icon={<div className="size-full"><IconBankPayoutSm /></div>} inset="inset-0" />
              <CtaCard label="Send" icon={<IconSendSm />} inset="inset-[18.75%_24.1%_22.48%_20.59%]" />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
          {['PRIMARY BALANCE', 'API BALANCE', 'TOTAL BALANCE'].map(label => (
            <div key={label} className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative">
              <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-[var(--cp-text-primary)] uppercase whitespace-nowrap">{label}</p>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14.5px] text-[var(--cp-text-secondary)] whitespace-nowrap">0.0000000 {ticker}</p>
              </div>
              <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-[var(--cp-text-primary)] uppercase whitespace-nowrap">VALUE</p>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14.5px] text-[var(--cp-text-secondary)] whitespace-nowrap">$0.00 USD</p>
              </div>
            </div>
          ))}
        </div>
        <WalletExpandedTabs />
      </div>
    </div>
  );
}

// ─── Transaction row (exact from TransactionsPage) ────────────────────────────

function SvgBtcLogoTx({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 13.9984 14" fill="none" preserveAspectRatio="none">
      <path d="M13.789 8.69333C12.8541 12.4434 9.05592 14.7256 5.30544 13.7904C1.55653 12.8555 -0.725671 9.05711 0.20964 5.30738C1.14413 1.55693 4.94231 -0.725436 8.69163 0.209464C12.4418 1.14436 14.7239 4.94319 13.7889 8.6934L13.789 8.69333H13.789Z" fill="#F7931A"/>
      <path d="M10.0859 6.00267C10.2252 5.07112 9.51601 4.57038 8.54621 4.23634L8.86082 2.97448L8.09269 2.78307L7.78642 4.01171C7.58448 3.96135 7.37711 3.91389 7.17099 3.86685L7.47948 2.6301L6.71182 2.4387L6.39704 3.70015C6.22993 3.6621 6.0658 3.6245 5.90656 3.58488L5.90745 3.58091L4.84818 3.31639L4.64385 4.13681C4.64385 4.13681 5.21374 4.26744 5.20173 4.27548C5.51278 4.35311 5.56903 4.55902 5.55969 4.72223L5.20132 6.15979C5.22274 6.16523 5.25052 6.1731 5.28118 6.18542C5.25555 6.17905 5.22828 6.17211 5.19998 6.16533L4.69767 8.17914C4.65965 8.27365 4.56317 8.41547 4.34569 8.36161C4.35339 8.37277 3.7874 8.22229 3.7874 8.22229L3.40604 9.10156L4.40564 9.35075C4.5916 9.39738 4.77383 9.44617 4.95329 9.49206L4.63543 10.7684L5.40267 10.9598L5.71746 9.69701C5.92706 9.75391 6.13047 9.80639 6.3296 9.85587L6.01588 11.1127L6.78405 11.3041L7.10188 10.0302C8.41171 10.2781 9.3966 10.1781 9.81115 8.99337C10.1452 8.03951 9.79452 7.48933 9.10543 7.13055C9.60733 7.0148 9.98538 6.68469 10.0862 6.00277L10.0859 6.0026L10.0859 6.00267Z" fill="white"/>
    </svg>
  );
}

type TxCoin = 'usdt' | 'usdc' | 'btc' | 'usd';

function TxCoinBadge({ coin }: { coin: TxCoin }) {
  if (coin === 'usdt') return (
    <div className="absolute bg-[#50af95] inset-[1.22%_0_-1.22%_0] rounded-[999px] overflow-hidden flex items-center justify-center">
      <SvgUsdtLogo className="w-[75%] h-[75%]" />
    </div>
  );
  if (coin === 'usdc') return (
    <div className="absolute inset-0 rounded-[999px] bg-[#2775CA] flex items-center justify-center overflow-hidden">
      <span className="text-white font-bold leading-none select-none" style={{ fontSize: 7 }}>$</span>
    </div>
  );
  if (coin === 'usd') return (
    <div className="absolute inset-0 rounded-[999px] border border-[var(--cp-brand-primary)] bg-white flex items-center justify-center overflow-hidden">
      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[var(--cp-brand-primary)] leading-none select-none" style={{ fontSize: 7 }}>$</span>
    </div>
  );
  return (
    <div className="absolute inset-0 overflow-clip rounded-[999px]">
      <SvgBtcLogoTx className="absolute block inset-0 size-full" />
    </div>
  );
}

function TxCircle({ type, coin }: { type: 'bank-payout' | 'received' | 'sent'; coin: TxCoin }) {
  return (
    <div className="relative shrink-0 size-[36px]">
      <div className="absolute inset-0 rounded-[100px] border border-[var(--cp-border-hover)]" />
      <div className="absolute inset-0 flex items-center justify-center text-[var(--cp-text-secondary)]">
        {type === 'received' && <IconReceive />}
        {type === 'sent' && <IconSendSm />}
        {type === 'bank-payout' && (
          <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M7 0L14 3.5H0L7 0Z" fill="var(--cp-text-secondary)" />
            <rect x="1" y="5" width="2" height="5" fill="var(--cp-text-secondary)" />
            <rect x="4.5" y="5" width="2" height="5" fill="var(--cp-text-secondary)" />
            <rect x="8" y="5" width="2" height="5" fill="var(--cp-text-secondary)" />
            <rect x="11.5" y="5" width="2" height="5" fill="var(--cp-text-secondary)" />
            <rect x="0" y="11" width="14" height="1.5" fill="var(--cp-text-secondary)" />
          </svg>
        )}
      </div>
      <div className="absolute right-[-1px] top-[-1px] size-[16px]">
        <TxCoinBadge coin={coin} />
      </div>
    </div>
  );
}

function CurrencyIconTx({ type }: { type: TxCoin }) {
  if (type === 'btc') return (
    <div className="relative shrink-0 size-[14px] overflow-clip rounded-[999px]">
      <SvgBtcLogoTx className="absolute block inset-0 size-full" />
    </div>
  );
  if (type === 'usd') return (
    <div className="relative shrink-0 size-[14px] rounded-[999px] border border-[var(--cp-brand-primary)] flex items-center justify-center">
      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[var(--cp-brand-primary)] leading-none select-none" style={{ fontSize: 7 }}>$</span>
    </div>
  );
  if (type === 'usdc') return (
    <div className="relative shrink-0 size-[14px] rounded-[999px] bg-[#2775CA] flex items-center justify-center overflow-hidden">
      <span className="text-white font-bold leading-none select-none" style={{ fontSize: 8 }}>$</span>
    </div>
  );
  return (
    <div className="relative shrink-0 size-[14px] bg-[#50af95] rounded-[999px] overflow-hidden flex items-center justify-center">
      <SvgUsdtLogo className="w-[75%] h-[75%]" />
    </div>
  );
}

function TxStatusBadge({ status }: { status: 'completed' | 'pending' | 'failed' }) {
  const dotColor = status === 'completed' ? 'bg-[#21b75d]' : status === 'pending' ? 'bg-[#f59e0b]' : 'bg-red-500';
  const label = status === 'completed' ? 'Completed' : status === 'pending' ? 'Pending' : 'Failed';
  return (
    <div className="flex items-center gap-[5px]">
      <div className={`${dotColor} rounded-[100px] shrink-0 size-[8px]`} />
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">{label}</p>
    </div>
  );
}

function TxRow({
  date, time, type, label, status, coin, currencyIcon, currencyName, destination, amount, amountSub, alt
}: {
  date: string; time: string; type: 'bank-payout' | 'received' | 'sent';
  label: string; status: 'completed' | 'pending' | 'failed';
  coin: TxCoin; currencyIcon: TxCoin; currencyName: string; destination: string;
  amount: string; amountSub: string; alt?: boolean;
}) {
  return (
    <div className={`flex items-center justify-between p-[20px] w-full rounded-[5px] cursor-pointer transition-colors hover:bg-[var(--cp-bg-3)] ${alt ? 'bg-[var(--cp-bg-2)]' : 'bg-[var(--cp-bg-1)]'}`}>
      <div className="flex items-center gap-[40px]">
        <div className="flex items-center gap-[20px]">
          <div className="flex flex-col items-start w-[45px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[13px] text-[var(--cp-text-secondary)]">{date}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[13px] text-[var(--cp-text-secondary)]">{time}</p>
          </div>
          <div className="bg-[var(--cp-border-default)] h-[34px] w-px shrink-0" />
          <div className="flex items-center gap-[10px] w-[240px]">
            <TxCircle type={type} coin={coin} />
            <div className="flex flex-col items-start">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">{label}</p>
              <TxStatusBadge status={status} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="bg-[var(--cp-border-default)] h-[34px] w-px shrink-0" />
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-[5px]">
              <CurrencyIconTx type={currencyIcon} />
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">{currencyName}</p>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">{destination}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end shrink-0">
        <p className="font-['Inter',sans-serif] font-bold leading-[normal] not-italic text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap" style={{ letterSpacing: '-0.5px' }}>{amount}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">{amountSub}</p>
      </div>
    </div>
  );
}

// ─── Bank row (exact from BankAccountsPage) ───────────────────────────────────

function BankStatusBadge({ status }: { status: 'approved' | 'under_review' }) {
  const isReview = status === 'under_review';
  return (
    <div className="flex gap-[5px] items-center shrink-0">
      <div className="rounded-[100px] shrink-0 size-[8px]"
        style={{ background: isReview ? 'var(--cp-warning)' : 'var(--cp-success)' }} />
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">
        {isReview ? 'Under Review' : 'Approved'}
      </p>
    </div>
  );
}

function MoreBtn() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState({ top: 0, right: 0 });
  const handleOpen = () => {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setCoords({ top: r.top + r.height / 2, right: window.innerWidth - r.left + 4 });
    }
    setOpen(o => !o);
  };
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => { if (menuRef.current && !menuRef.current.contains(e.target as Node) && e.target !== btnRef.current) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);

  return (
    <>
      <button ref={btnRef} onClick={handleOpen}
        className="bg-white border border-[var(--cp-border-default)] rounded-[100px] shrink-0 size-[36px] flex items-center justify-center hover:bg-[var(--cp-bg-1)] transition-colors cursor-pointer">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
          <circle cx="8.5" cy="8" r="1.5" fill="#8492A6" />
          <circle cx="3.5" cy="8" r="1.5" fill="#8492A6" />
          <circle cx="13.5" cy="8" r="1.5" fill="#8492A6" />
        </svg>
      </button>
      {open && createPortal(
        <div ref={menuRef} className="fixed z-[500] bg-white border border-[var(--cp-border-default)] rounded-[8px] shadow-lg overflow-hidden w-[180px]"
          style={{ top: coords.top, right: coords.right, transform: 'translateY(-50%)' }}>
          {['Set as Primary', 'Edit', 'Delete'].map((item, i) => (
            <button key={item} onClick={() => setOpen(false)}
              className={`w-full px-[14px] py-[10px] text-left font-['Inter:Medium',sans-serif] font-medium text-[13px] transition-colors cursor-pointer border-t border-[var(--cp-border-default)] ${i === 0 ? 'border-t-0' : ''} ${item === 'Delete' ? 'text-red-500 hover:bg-red-50' : 'text-[var(--cp-text-secondary)] hover:bg-[var(--cp-bg-1)]'}`}>
              {item}
            </button>
          ))}
        </div>,
        document.body
      )}
    </>
  );
}

function BankRow({ name, iban, holder, address, status, flag, alt }: {
  name: string; iban: string; holder: string; address: string;
  status: 'approved' | 'under_review'; flag: string; alt?: boolean;
}) {
  const isReview = status === 'under_review';
  return (
    <div className={`content-stretch flex items-center justify-between overflow-clip px-[20px] py-[10px] relative shrink-0 w-full transition-colors duration-150 ${alt ? 'bg-[var(--cp-bg-2)]' : 'bg-[var(--cp-bg-1)]'}`}>
      <div className="content-stretch flex items-center relative flex-1 min-w-0" style={{ opacity: isReview ? 0.5 : 1 }}>
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[288px]">
          <div className="relative shrink-0 size-[36px] flex items-center justify-center">
            <div className="relative shrink-0 size-[36px] rounded-full overflow-hidden flex items-center justify-center" style={{ background: '#f0f0f0' }}>
              <img src={`https://flagcdn.com/w160/${flag}.png`} alt={name} className="w-full h-full object-cover" style={{ transform: 'scale(1.15)' }} />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative min-w-0 flex-1 overflow-hidden">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap overflow-hidden text-ellipsis w-full">{name}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14.5px] text-[var(--cp-text-tertiary)] whitespace-nowrap overflow-hidden text-ellipsis w-full">{iban}</p>
          </div>
        </div>
        <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
        <div className="content-stretch flex h-[56px] items-start min-w-[200px] px-[20px] py-[10px] relative rounded-[5px] shrink-0">
          <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">Account Holder Name</p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap leading-none">{holder}</p>
          </div>
        </div>
        <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
        <div className="content-stretch flex flex-1 h-[56px] items-start min-w-0 overflow-hidden px-[20px] py-[10px] relative rounded-[5px]">
          <div className="content-stretch flex flex-1 flex-col h-full items-start justify-between min-w-0 relative">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">Recipient Address</p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full">{address}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[10px] pl-[20px] relative shrink-0">
        <div className="shrink-0" style={{ minWidth: 140 }}><BankStatusBadge status={status} /></div>
        <MoreBtn />
      </div>
    </div>
  );
}

// ─── Info icon (8px, used in settings row labels) ────────────────────────────

function InfoIconSm() {
  return (
    <div className="overflow-clip relative shrink-0 size-[8px]">
      <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <path clipRule="evenodd" d="M4,0C1.79086,0,0,1.79086,0,4C0,6.20914,1.79086,8,4,8C6.20914,8,8,6.20914,8,4C8,1.79086,6.20914,0,4,0ZM4.4,6C4.4,6.22091,4.22091,6.4,4,6.4C3.77909,6.4,3.6,6.22091,3.6,6L3.6,3.6C3.6,3.37909,3.77909,3.2,4,3.2C4.22091,3.2,4.4,3.37909,4.4,3.6L4.4,6ZM4,2.8C4.22091,2.8,4.4,2.62091,4.4,2.4C4.4,2.17909,4.22091,2,4,2C3.77909,2,3.6,2.17909,3.6,2.4C3.6,2.62091,3.77909,2.8,4,2.8Z" fill="#D3D6E1" fillRule="evenodd"/>
        </svg>
      </div>
    </div>
  );
}

// ─── Edit button (pen icon, used in Nightly to Bank mode) ────────────────────

function SettingsEditBtn() {
  return (
    <div className="group/edit relative shrink-0" style={{ overflow: 'visible' }}>
      <div className="absolute flex flex-col items-center pointer-events-none z-[200] opacity-0 group-hover/edit:opacity-100 transition-opacity"
        style={{ bottom: 'calc(100% + 4px)', left: '50%', transform: 'translateX(-50%)' }}>
        <div className="bg-black rounded-[5px] px-[10px] py-[10px] shrink-0 whitespace-nowrap">
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-none">Edit</p>
        </div>
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="shrink-0">
          <path d="M10 0H0L3.58579 3.58579C4.36684 4.36684 5.63316 4.36684 6.41421 3.58579L10 0Z" fill="black"/>
        </svg>
      </div>
      <button className="content-stretch flex h-full items-center justify-center px-[10px] py-[5px] relative shrink-0 cursor-pointer">
        <div className="relative shrink-0 size-[16px]">
          <div className="absolute inset-[12.29%_12.29%_3.96%_3.96%]">
            <svg className="absolute block inset-0 size-full" viewBox="0 0 13.4 13.4" fill="none" preserveAspectRatio="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.595549 0.595549C0.976874 0.214225 1.49406 0 2.03333 0H6.7C7.0866 0 7.4 0.313401 7.4 0.7C7.4 1.0866 7.0866 1.4 6.7 1.4H2.03333C1.86536 1.4 1.70427 1.46673 1.5855 1.5855C1.46673 1.70427 1.4 1.86536 1.4 2.03333V11.3667C1.4 11.5346 1.46673 11.6957 1.5855 11.8145C1.70427 11.9333 1.86536 12 2.03333 12H11.3667C11.5346 12 11.6957 11.9333 11.8145 11.8145C11.9333 11.6957 12 11.5346 12 11.3667V6.7C12 6.3134 12.3134 6 12.7 6C13.0866 6 13.4 6.3134 13.4 6.7V11.3667C13.4 11.9059 13.1858 12.4231 12.8045 12.8045C12.4231 13.1858 11.9059 13.4 11.3667 13.4H2.03333C1.49406 13.4 0.976873 13.1858 0.595549 12.8045C0.214226 12.4231 0 11.9059 0 11.3667V2.03333C0 1.49406 0.214225 0.976874 0.595549 0.595549Z" fill="#8492A6"/>
            </svg>
          </div>
          <div className="absolute inset-[3.45%_3.45%_28.96%_28.96%]">
            <svg className="absolute block inset-0 size-full" viewBox="0 0 10.8142 10.8142" fill="none" preserveAspectRatio="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.70002 1.4C8.51059 1.4 8.32893 1.47525 8.19499 1.60919L1.99876 7.80542L1.66207 9.15216L3.00881 8.81547L9.20504 2.61924C9.33898 2.4853 9.41423 2.30363 9.41423 2.11421C9.41423 1.92479 9.33898 1.74313 9.20504 1.60919C9.0711 1.47525 8.88944 1.4 8.70002 1.4ZM7.20504 0.619239C7.60153 0.222747 8.13929 0 8.70002 0C9.26074 0 9.7985 0.222747 10.195 0.619239C10.5915 1.01573 10.8142 1.55349 10.8142 2.11421C10.8142 2.67494 10.5915 3.2127 10.195 3.60919L3.86166 9.94252C3.77195 10.0322 3.65954 10.0959 3.53646 10.1266L0.86979 10.7933C0.631247 10.8529 0.378906 10.7831 0.20504 10.6092C0.0311738 10.4353 -0.0387205 10.183 0.0209151 9.94444L0.687582 7.27777C0.718352 7.15469 0.781996 7.04228 0.871707 6.95257L7.20504 0.619239Z" fill="#8492A6"/>
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

// ─── Settings row (exact from PaySettingsRow) ─────────────────────────────────

type SettingsMode = 'custody' | 'nightly';

function SettingsRow({ name, symbol, logo, payoutCoinLogo, payoutCurrency, mode = 'custody', bankName, bankIban }: {
  name: string; symbol: string; logo: React.ReactNode; payoutCoinLogo?: React.ReactNode;
  payoutCurrency?: string; mode?: SettingsMode; bankName?: string; bankIban?: string;
}) {
  const isNightly = mode === 'nightly';
  return (
    <div className="content-stretch flex gap-[10px] items-center pl-[20px] pr-[10px] py-[10px] relative size-full bg-[var(--cp-bg-1)]" style={{ overflow: 'visible' }}>
      <div aria-hidden="true" className="absolute border-[var(--cp-border-default)] border-solid border-t inset-0 pointer-events-none" />

      {/* Coin col */}
      <div className="content-stretch flex h-[56px] items-center relative shrink-0 w-[178px]">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          {logo}
          <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px]">{name}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px]">{symbol}</p>
          </div>
        </div>
      </div>

      {/* Settlement mode col */}
      <div className="flex-[1_0_0] min-w-[180px] relative shrink-0">
        <div className="bg-white group h-[56px] relative rounded-[5px]" style={{ overflow: 'visible' }}>
          <div className="flex flex-row justify-center min-w-[inherit] rounded-[inherit] size-full">
            <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
              <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
                {isNightly ? (
                  <>
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE (Nightly to Bank)</p>
                      <InfoIconSm />
                    </div>
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0 min-w-0 overflow-hidden">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] whitespace-nowrap">{bankName}</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] overflow-hidden text-ellipsis whitespace-nowrap">{bankIban}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
                      <InfoIconSm />
                    </div>
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] whitespace-nowrap">To Custody</p>
                    </div>
                  </>
                )}
              </div>
              <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" style={{ overflow: 'visible' }}>
                {isNightly && <SettingsEditBtn />}
                <DropdownChevron open={false} />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-solid inset-0 pointer-events-none rounded-[5px] transition-colors border-[var(--cp-border-default)] group-hover:border-[var(--cp-border-hover)]" />
        </div>
      </div>

      {/* Payout currency col */}
      <div className="group/payout h-[56px] relative rounded-[5px] shrink-0 w-[200px] min-w-[200px] cursor-pointer">
        <div className="content-stretch flex items-start justify-between h-full p-[10px] relative">
          <div className="flex flex-col h-full items-start justify-between">
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">PAYOUT CURRENCY</p>
              <InfoIconSm />
            </div>
            {payoutCurrency ? (
              <div className="flex gap-[5px] items-center">
                {payoutCoinLogo && <div className="relative shrink-0 size-[14px]">{payoutCoinLogo}</div>}
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] whitespace-nowrap">{payoutCurrency}</p>
              </div>
            ) : (
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-quaternary)] text-[14.5px] whitespace-nowrap">Select currency</p>
            )}
          </div>
          <DropdownChevron open={false} />
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] group-hover/payout:border-[var(--cp-border-hover)] border-solid inset-0 pointer-events-none rounded-[5px] transition-colors" />
      </div>

      {/* Discount col */}
      <div className="bg-white cursor-pointer group h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[200px]">
        <div className="content-stretch flex items-center justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">DISCOUNT</p>
              <InfoIconSm />
            </div>
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-quaternary)] text-[14.5px] whitespace-nowrap">Optional</p>
            </div>
          </div>
          <DropdownChevron open={false} />
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] group-hover:border-[var(--cp-border-hover)] border-solid inset-0 pointer-events-none rounded-[5px] transition-colors" />
      </div>

      {/* Radio button */}
      <div className="flex h-[56px] items-center justify-center relative shrink-0">
        <div className="relative shrink-0 size-[16px]">
          <svg viewBox="0 0 16 16" fill="none" className="block size-full">
            <circle cx="8" cy="8" r="7.2" stroke="#E5E9F2" strokeWidth="1.6" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Dead code below kept for future use ─────────────────────────────────────

function BtnPrimary({ label, disabled }: { label: string; disabled?: boolean }) {
  return (
    <button disabled={disabled}
      className={`flex items-center justify-center h-[46px] px-[24px] rounded-[5px] transition-colors flex-1
        ${disabled ? 'bg-[var(--cp-bg-2)] cursor-not-allowed' : 'bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] cursor-pointer'}`}>
      <p className={`font-['Inter:Medium',sans-serif] font-medium text-[14.5px] whitespace-nowrap ${disabled ? 'text-[var(--cp-text-tertiary)]' : 'text-white'}`}>{label}</p>
    </button>
  );
}
function BtnSecondary({ label }: { label: string }) {
  return (
    <button className="flex items-center justify-center h-[46px] px-[24px] rounded-[5px] bg-white border border-[var(--cp-border-default)] hover:bg-[var(--cp-bg-2)] transition-colors cursor-pointer flex-1">
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-secondary)] whitespace-nowrap">{label}</p>
    </button>
  );
}
function BtnDestructive({ label }: { label: string }) {
  return (
    <button className="flex items-center justify-center gap-[8px] h-[46px] px-[24px] rounded-[5px] bg-white border border-[var(--cp-error-field)] hover:bg-red-50 transition-colors cursor-pointer flex-1">
      <svg width="13" height="14" viewBox="0 0 12 13" fill="none" className="text-[var(--cp-error-field)] shrink-0">
        <path d="M1 3h10M4 3V2h4v1M5 6v4M7 6v4M2 3l.7 8.1A1 1 0 0 0 3.7 12h4.6a1 1 0 0 0 1-.9L10 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-error-field)] whitespace-nowrap">{label}</p>
    </button>
  );
}

function BtnPair({ left, right, rightVariant = 'primary' }: { left: string; right: string; rightVariant?: 'primary' | 'destructive' }) {
  return (
    <div className="flex gap-[10px] w-[400px]">
      <BtnSecondary label={left} />
      {rightVariant === 'destructive' ? <BtnDestructive label={right} /> : <BtnPrimary label={right} />}
    </div>
  );
}

// ─── Inputs (exact Field component from AddNewBankModal) ──────────────────────

function FieldInput({ label, placeholder, helper, error, hasInfo, inactive }: {
  label: string; placeholder?: string; helper?: string; error?: string; hasInfo?: boolean; inactive?: boolean;
}) {
  const [val, setVal] = useState('');
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [touched, setTouched] = useState(false);

  const showError = !!error && touched && !focused && !inactive;
  const showHelper = focused && !!helper && !showError;
  const borderColor = inactive ? 'var(--cp-border-default)'
    : showError ? 'var(--cp-error-field)'
    : focused ? 'var(--cp-brand-primary)'
    : hovered ? 'var(--cp-border-hover)'
    : 'var(--cp-border-default)';
  const borderRadius = (showHelper || showError) ? '5px 5px 0 0' : '5px';

  return (
    <div className="relative" style={{ overflow: 'visible', width: 280, opacity: inactive ? 0.6 : 1 }}
      onMouseEnter={() => !inactive && setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className="bg-white h-[56px] flex items-start justify-between p-[10px]"
        style={{ border: `1px solid ${borderColor}`, transition: 'border-color 0.1s', borderRadius, pointerEvents: inactive ? 'none' : undefined }}>
        <div className="flex flex-col items-start justify-between self-stretch flex-1 min-w-0">
          <div className="flex gap-[5px] items-center">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase leading-none">{label}</p>
            {hasInfo && (
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4ZM4.42006 5.7772H3.57917V3.33274H4.42006V5.7772ZM3.99474 2.96119C3.70628 2.96119 3.48138 2.74608 3.48138 2.46742C3.48138 2.18875 3.70628 1.96875 3.99474 1.96875C4.28317 1.96875 4.51295 2.18875 4.51295 2.46742C4.51295 2.74119 4.28317 2.96119 3.99474 2.96119Z" fill="#D3D6E1"/>
              </svg>
            )}
          </div>
          <input type="text" value={val} onChange={e => setVal(e.target.value)} placeholder={placeholder}
            onFocus={() => setFocused(true)} onBlur={() => { setFocused(false); setTouched(true); }}
            className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] bg-transparent border-none outline-none w-full leading-none placeholder:text-[var(--cp-text-quinary)]"
            style={{ color: 'var(--cp-text-primary)', caretColor: 'var(--cp-brand-primary)' }} />
        </div>
      </div>
      {showHelper && (
        <div className="absolute left-0 right-0 px-[10px] py-[6px] rounded-b-[5px] z-10"
          style={{ top: '100%', background: 'var(--cp-brand-primary)', border: '1px solid var(--cp-brand-primary)', borderTop: 'none' }}>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-[1.2]">{helper}</p>
        </div>
      )}
      {showError && (
        <div className="absolute left-0 right-0 px-[10px] py-[6px] rounded-b-[5px] z-10"
          style={{ top: '100%', background: 'var(--cp-error-field)', border: '1px solid var(--cp-error-field)', borderTop: 'none' }}>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-[1.2]">{error}</p>
        </div>
      )}
    </div>
  );
}

function TwoFaInput() {
  const [val, setVal] = useState('');
  return (
    <div className="relative" style={{ width: 280, overflow: 'visible' }}>
      <div className="bg-white min-h-[83px] flex items-start justify-between p-[10px] rounded-[5px]"
        style={{ border: `1px solid var(--cp-border-default)` }}>
        <div className="flex flex-col items-start justify-between self-stretch gap-[8px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase leading-none">Confirmation Code</p>
          <input type="text" inputMode="numeric" maxLength={6} value={val} onChange={e => setVal(e.target.value.replace(/\D/, ''))}
            placeholder="——————"
            className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] bg-transparent border-none outline-none w-full leading-none placeholder:text-[var(--cp-text-quaternary)]"
            style={{ color: 'var(--cp-text-primary)', caretColor: 'var(--cp-brand-primary)', letterSpacing: '-0.6px' }} />
        </div>
      </div>
    </div>
  );
}

// ─── Exact chevron (from SweepBankAccountDropdown / BankCountryField) ────────

function DropdownChevron({ open }: { open: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px] self-stretch">
      <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
      <div className={`flex items-center justify-center relative shrink-0 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}>
        <div className="overflow-clip relative shrink-0 size-[12px]">
          <div className="absolute inset-[34.38%_21.88%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.74999 3.74999">
              <path clipRule="evenodd" d="M0.292893,0.292893C0.455612,0.130168,0.719387,0.130168,0.882107,0.292893L3.375,2.78579L5.86789,0.292893C6.03061,0.130168,6.29439,0.130168,6.45711,0.292893C6.61983,0.455612,6.61983,0.719387,6.45711,0.882107L3.66961,3.66961C3.50688,3.83233,3.24312,3.83233,3.08039,3.66961L0.292893,0.882107C0.130168,0.719387,0.130168,0.455612,0.292893,0.292893Z" fill="var(--cp-text-quinary)" fillRule="evenodd"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Bank account selector (exact from SweepBankAccountDropdown) ──────────────

function BankSelectorDropdown() {
  const [open, setOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const banks = [
    { id: '0', label: 'Barclays',  iban: 'GB29NWBK60161331926819', status: 'approved'     },
    { id: '1', label: 'Wise',      iban: 'GB97TRWI23080120507810', status: 'under_review'  },
  ] as const;
  const sel = banks[selectedIdx];

  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);

  return (
    <div ref={ref} className="relative" style={{ width: 360, overflow: 'visible' }}>
      {/* Trigger */}
      <div className="bg-white h-[56px] relative rounded-[5px] cursor-pointer group" onClick={() => setOpen(o => !o)}>
        <div className="content-stretch flex h-full items-start justify-between p-[10px] relative rounded-[inherit] w-full">
          <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 flex-1 min-w-0">
            <div className="flex gap-[5px] items-center shrink-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase leading-none whitespace-nowrap">
                SWEEP bank account
              </p>
              {/* info icon */}
              <div className="overflow-clip relative shrink-0 size-[8px]">
                <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path clipRule="evenodd" d="M4,0C1.79086,0,0,1.79086,0,4C0,6.20914,1.79086,8,4,8C6.20914,8,8,6.20914,8,4C8,1.79086,6.20914,0,4,0ZM4.4,6C4.4,6.22091,4.22091,6.4,4,6.4C3.77909,6.4,3.6,6.22091,3.6,6L3.6,3.6C3.6,3.37909,3.77909,3.2,4,3.2C4.22091,3.2,4.4,3.37909,4.4,3.6L4.4,6ZM4,2.8C4.22091,2.8,4.4,2.62091,4.4,2.4C4.4,2.17909,4.22091,2,4,2C3.77909,2,3.6,2.17909,3.6,2.4C3.6,2.62091,3.77909,2.8,4,2.8Z" fill="#D3D6E1" fillRule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex gap-[5px] items-center min-w-0 overflow-hidden w-full">
              <p className={`font-['Inter:Medium',sans-serif] font-medium text-[14.5px] whitespace-nowrap shrink-0 max-w-[50%] ${sel.status === 'under_review' ? 'text-[var(--cp-text-primary)] opacity-60' : 'text-[var(--cp-text-primary)]'}`}>
                {sel.label}
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap shrink-0">
                {sel.iban}
              </p>
            </div>
          </div>
          {sel.status === 'under_review' && (
            <div className="flex items-center gap-[4px] shrink-0 mr-[8px] self-center">
              <span className="bg-orange-100 text-orange-600 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[9px] uppercase px-[5px] py-[2px] rounded-[3px] whitespace-nowrap">
                Under Review
              </span>
            </div>
          )}
          <DropdownChevron open={open} />
        </div>
        <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[5px] transition-colors ${open ? 'border-[var(--cp-border-hover)]' : 'border-[var(--cp-border-default)] group-hover:border-[var(--cp-border-hover)]'}`} />
      </div>

      {/* Panel */}
      {open && (
        <div className="absolute bg-white left-0 mt-[5px] rounded-[5px] shadow-lg top-[56px] w-full z-50" onClick={e => e.stopPropagation()}>
          <div aria-hidden="true" className="absolute border border-[var(--cp-border-hover)] border-solid inset-0 pointer-events-none rounded-[5px]" />
          <div className="content-stretch flex flex-col gap-[20px] items-start p-[10px] relative">
            {/* Bank items */}
            <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
              {banks.map((bank, i) => {
                const isSelected = i === selectedIdx;
                return (
                  <div key={bank.id} onClick={() => { setSelectedIdx(i); setOpen(false); }}
                    className={`relative rounded-[5px] shrink-0 w-full transition-colors cursor-pointer ${isSelected ? 'bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)]' : 'bg-white hover:bg-[var(--cp-bg-1)]'}`}>
                    {!isSelected && <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />}
                    <div className="content-stretch flex items-center justify-between leading-[normal] p-[10px] relative size-full text-[11px]">
                      <div className="flex flex-col items-start">
                        <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full ${isSelected ? 'text-white' : 'text-[var(--cp-text-primary)]'}`}>{bank.label}</p>
                        <p className={`font-['Inter:Medium',sans-serif] font-medium relative shrink-0 w-full ${isSelected ? 'text-white/80' : 'text-[var(--cp-text-secondary)]'}`}>{bank.iban}</p>
                      </div>
                      {bank.status === 'under_review' && (
                        <span className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[9px] uppercase px-[5px] py-[2px] rounded-[3px] whitespace-nowrap shrink-0 ${isSelected ? 'bg-white/20 text-white' : 'bg-orange-100 text-orange-600'}`}>
                          Under Review
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Footer actions */}
            <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
              {['Add New Bank', 'Manage Bank Accounts'].map(label => (
                <button key={label} type="button"
                  className="bg-white border border-[var(--cp-border-default)] border-solid cursor-pointer flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0 w-full hover:bg-[var(--cp-bg-1)] transition-colors text-left">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-brand-primary)]">{label}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Country selector (exact from BankCountryField in AddNewBankModal) ────────

function CountrySelector() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [value, setValue] = useState('United Kingdom');
  const [search, setSearch] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = COUNTRIES.find(c => c.name === value) ?? COUNTRIES[0];
  const filtered = COUNTRIES.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    const h = (e: MouseEvent) => { if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) { setOpen(false); setSearch(''); } };
    if (open) document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);

  useEffect(() => { if (open) setTimeout(() => searchRef.current?.focus(), 50); }, [open]);

  const borderColor = hovered || open ? 'var(--cp-border-hover)' : 'var(--cp-border-default)';

  return (
    <div ref={wrapperRef} className="relative shrink-0" style={{ width: 280, overflow: 'visible' }}>
      {/* Trigger */}
      <div className="bg-white relative h-[56px] flex items-start justify-between p-[10px] w-full cursor-pointer"
        style={{ border: `1px solid ${borderColor}`, borderRadius: '5px', transition: 'border-color 0.1s' }}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(o => !o)}>
        <div className="flex flex-col items-start justify-between self-stretch flex-1 min-w-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">Bank Country</p>
          <div className="flex gap-[5px] items-center shrink-0">
            <span className="text-[14px] leading-none shrink-0">{selected.flag}</span>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-none whitespace-nowrap">{selected.name}</p>
          </div>
        </div>
        <DropdownChevron open={open} />
      </div>

      {/* Panel */}
      {open && (
        <div className="absolute left-0 right-0 bg-white z-50 rounded-[5px]"
          style={{ top: 60, boxShadow: '0 4px 16px rgba(0,0,0,0.12)', border: '1px solid var(--cp-border-hover)' }}
          onClick={e => e.stopPropagation()}>
          <div className="flex flex-col gap-[20px] p-[10px]">
            {/* Search */}
            <div className="relative rounded-[5px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
              <div className="flex flex-col items-start p-[10px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase leading-none">Search</p>
                <input ref={searchRef} type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Type country name"
                  className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-secondary)] bg-transparent border-none outline-none w-full leading-none placeholder:text-[var(--cp-text-quinary)] mt-[3px]"
                  style={{ caretColor: 'var(--cp-brand-primary)' }} />
              </div>
            </div>
            {/* List */}
            <div className="flex flex-col gap-[5px] overflow-y-auto" style={{ maxHeight: 220 }}>
              {filtered.map(country => {
                const isSelected = country.name === value;
                return (
                  <div key={country.code} onClick={() => { setValue(country.name); setOpen(false); setSearch(''); }}
                    className={`relative rounded-[5px] shrink-0 w-full cursor-pointer transition-colors ${isSelected ? 'bg-[var(--cp-brand-primary)]' : 'bg-white hover:bg-[var(--cp-bg-1)]'}`}>
                    {!isSelected && <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />}
                    <div className="flex items-center justify-between px-[10px] py-[13px]">
                      <div className="flex items-center gap-[7px]">
                        <span className="text-[14px] leading-none shrink-0">{country.flag}</span>
                        <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] leading-none ${isSelected ? 'text-white' : 'text-[var(--cp-text-primary)]'}`}>{country.name}</p>
                      </div>
                      <p className={`font-['Inter:Medium',sans-serif] font-medium text-[11px] leading-none shrink-0 ${isSelected ? 'text-white/80' : 'text-[var(--cp-text-secondary)]'}`}>{country.code}</p>
                    </div>
                  </div>
                );
              })}
              {filtered.length === 0 && <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] p-[10px]">No results</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InventoryPage() {
  return (
    <div className="min-h-screen bg-[var(--cp-bg-1)] px-[60px] py-[48px]">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-[64px]">

        {/* Header */}
        <div className="flex flex-col gap-[6px]">
          <p className="font-['Inter',sans-serif] font-bold text-[24px] text-[var(--cp-text-primary)]">Component Inventory</p>
          <p className="font-['Inter',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-secondary)]">Visual reference of all UI building blocks used across the CoinPayments Dashboard.</p>
        </div>

        {/* ── DROPDOWNS ──────────────────────────────────────────────────── */}
        <Section title="Dropdowns">
          <div className="flex flex-wrap gap-[32px] items-start">
            <Group label="Bank account selector">
              <BankSelectorDropdown />
            </Group>
            <Group label="Payout currency selector">
              <div style={{ width: 280 }}>
                <PayoutCurrencyDropdown value="USD" onChange={() => {}} />
              </div>
            </Group>
            <Group label="Country selector">
              <CountrySelector />
            </Group>
          </div>
        </Section>

        {/* ── ROWS ───────────────────────────────────────────────────────── */}
        <Section title="Rows">
          <Group label="Wallet row — collapsed">
            <div className="flex flex-col w-full">
              <WalletRowCollapsed logo={<UsdtLogo36 />} name="Tether USD" symbol="USDT.ERC20" alt />
              <WalletRowCollapsed logo={<UsdcLogo36 />} name="USD Coin" symbol="USDC.ERC20" />
              <WalletRowCollapsed logo={<BtcLogo36 />} name="Bitcoin" symbol="BTC" alt />
            </div>
          </Group>
          <Group label="Wallet row — expanded">
            <WalletRowExpanded logo={<UsdtLogo36 />} name="Tether USD" symbol="USDT.ERC20" />
          </Group>
          <Group label="Transaction row">
            <div className="flex flex-col w-full">
              <TxRow date="JUN 24" time="09:14" type="bank-payout" label="Bank Payout" status="pending"
                coin="usdc" currencyIcon="usd" currencyName="United States Dollar"
                destination="To: Barclays (GB29NWBK60161331926819)"
                amount="-$487.20 USD" amountSub="from 500 USDC.ERC20" alt />
              <TxRow date="JUN 3" time="14:38" type="bank-payout" label="Bank Payout" status="completed"
                coin="usdt" currencyIcon="usd" currencyName="United States Dollar"
                destination="To: Wise (GB97TRWI23080120507810)"
                amount="-$1,250.00 USD" amountSub="from 1,286.50 USDT" />
              <TxRow date="APR 28" time="11:31" type="received" label="Received" status="completed"
                coin="btc" currencyIcon="btc" currencyName="Bitcoin"
                destination="To: internal address"
                amount="+0.000000 BTC" amountSub="BTC" alt />
            </div>
          </Group>
          <Group label="Bank Account row">
            <div className="flex flex-col w-full">
              <BankRow name="Barclays" iban="GB29NWBK60161331926819" holder="John Smith"
                address="1 Churchill Place, London, E14 5HP, United Kingdom"
                status="approved" flag="gb" alt />
              <BankRow name="Wise" iban="GB97TRWI23080120507810" holder="John Smith"
                address="6 Cannon Street, London, EC4M 5XB, United Kingdom"
                status="under_review" flag="gb" />
            </div>
          </Group>
          <Group label="Settings row (coin payout config)">
            <div className="flex flex-col w-full">
              <SettingsRow logo={<UsdtLogo36 />} name="Tether USD" symbol="USDT.ERC20"
                mode="nightly" bankName="Wise" bankIban="GB97TRWI23080120507810" />
              <SettingsRow logo={<UsdcLogo36 />} name="USD Coin" symbol="USDC.ERC20"
                mode="custody" />
              <SettingsRow logo={<BtcLogo36 />} name="Bitcoin" symbol="BTC"
                mode="custody" payoutCurrency="Bitcoin"
                payoutCoinLogo={<div className="absolute inset-0 overflow-clip"><SvgBtcLogoTx className="absolute block inset-0 size-full" /></div>} />
            </div>
          </Group>
        </Section>

      </div>
    </div>
  );
}

