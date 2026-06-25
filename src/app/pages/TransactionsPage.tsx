import { useState } from 'react';
import { CurrencySwitcher, type CurrencySwitcherSelection, type SwitcherCoin } from '../components/CurrencySwitcher';
import { createPortal } from 'react-dom';
import { useTransactions } from '../context/TransactionContext';
import type { Transaction, TxStatus, TxType, CoinType } from '../context/TransactionContext';

// ─── Inline coin logos ─────────────────────────────────────────────────────────

function SvgUsdtLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14.6663 12.7585" fill="none" preserveAspectRatio="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.68524 0.0626632L0.0109944 5.67992C0.00081815 5.70082 -0.00240665 5.72442 0.00179163 5.74727C0.00598991 5.77013 0.017391 5.79105 0.0343277 5.80696L7.25683 12.7279C7.27734 12.7475 7.30467 12.7585 7.33309 12.7585C7.36152 12.7585 7.38884 12.7475 7.40936 12.7279L14.6319 5.80739C14.6488 5.79148 14.6602 5.77056 14.6644 5.74771C14.6686 5.72485 14.6654 5.70125 14.6552 5.68036L11.9809 0.0630953C11.9723 0.0442301 11.9584 0.028249 11.941 0.0170617C11.9235 0.00587452 11.9032 -4.5532e-05 11.8824 9.10716e-06H2.78462C2.76378 -0.000250221 2.74331 0.00552723 2.72567 0.0166445C2.70804 0.0277618 2.694 0.043744 2.68524 0.0626632Z" fill="#50AF95"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.26108 6.25676C8.20923 6.26065 7.94133 6.27663 7.34374 6.27663C6.86843 6.27663 6.53096 6.26238 6.41257 6.25676C4.57573 6.17596 3.20468 5.8562 3.20468 5.47337C3.20468 5.09053 4.57573 4.77121 6.41257 4.68911V5.9383C6.53269 5.94694 6.87664 5.96725 7.35195 5.96725C7.92232 5.96725 8.20793 5.94349 8.25935 5.93873V4.68997C10.0923 4.77164 11.4603 5.09139 11.4603 5.47337C11.4603 5.85534 10.0927 6.17509 8.25935 6.25633L8.26108 6.25676ZM8.26108 4.56078V3.44294H10.8191V1.73832H3.85456V3.44294H6.41214V4.56035C4.33332 4.65584 2.76999 5.06763 2.76999 5.56108C2.76999 6.05454 4.33332 6.46589 6.41214 6.56182V10.1439H8.26065V6.56052C10.3347 6.46503 11.8954 6.05367 11.8954 5.56065C11.8954 5.06763 10.336 4.65627 8.26065 4.56035L8.26108 4.56078Z" fill="white"/>
    </svg>
  );
}

function SvgBtcLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 13.9984 14" fill="none" preserveAspectRatio="none">
      <path d="M13.789 8.69333C12.8541 12.4434 9.05592 14.7256 5.30544 13.7904C1.55653 12.8555 -0.725671 9.05711 0.20964 5.30738C1.14413 1.55693 4.94231 -0.725436 8.69163 0.209464C12.4418 1.14436 14.7239 4.94319 13.7889 8.6934L13.789 8.69333H13.789Z" fill="#F7931A"/>
      <path d="M10.0859 6.00267C10.2252 5.07112 9.51601 4.57038 8.54621 4.23634L8.86082 2.97448L8.09269 2.78307L7.78642 4.01171C7.58448 3.96135 7.37711 3.91389 7.17099 3.86685L7.47948 2.6301L6.71182 2.4387L6.39704 3.70015C6.22993 3.6621 6.0658 3.6245 5.90656 3.58488L5.90745 3.58091L4.84818 3.31639L4.64385 4.13681C4.64385 4.13681 5.21374 4.26744 5.20173 4.27548C5.51278 4.35311 5.56903 4.55902 5.55969 4.72223L5.20132 6.15979C5.22274 6.16523 5.25052 6.1731 5.28118 6.18542C5.25555 6.17905 5.22828 6.17211 5.19998 6.16533L4.69767 8.17914C4.65965 8.27365 4.56317 8.41547 4.34569 8.36161C4.35339 8.37277 3.7874 8.22229 3.7874 8.22229L3.40604 9.10156L4.40564 9.35075C4.5916 9.39738 4.77383 9.44617 4.95329 9.49206L4.63543 10.7684L5.40267 10.9598L5.71746 9.69701C5.92706 9.75391 6.13047 9.80639 6.3296 9.85587L6.01588 11.1127L6.78405 11.3041L7.10188 10.0302C8.41171 10.2781 9.3966 10.1781 9.81115 8.99337C10.1452 8.03951 9.79452 7.48933 9.10543 7.13055C9.60733 7.0148 9.98538 6.68469 10.0862 6.00277L10.0859 6.0026L10.0859 6.00267ZM8.33089 8.46364C8.09351 9.4175 6.48751 8.90187 5.96682 8.77258L6.38862 7.08165C6.90928 7.21164 8.57899 7.46887 8.33093 8.46364H8.33089ZM8.56845 5.98885C8.3519 6.85648 7.01521 6.41568 6.5816 6.3076L6.96402 4.77403C7.39763 4.88212 8.79403 5.08385 8.56852 5.98885H8.56845Z" fill="white"/>
    </svg>
  );
}

// Types and seed data live in TransactionContext

// ─── Small icons ──────────────────────────────────────────────────────────────

function IconBankPayout() {
  return (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 0L14 3.5H0L7 0Z" fill="var(--cp-text-secondary)"/>
      <rect x="1" y="5" width="2" height="5" fill="var(--cp-text-secondary)"/>
      <rect x="4.5" y="5" width="2" height="5" fill="var(--cp-text-secondary)"/>
      <rect x="8" y="5" width="2" height="5" fill="var(--cp-text-secondary)"/>
      <rect x="11.5" y="5" width="2" height="5" fill="var(--cp-text-secondary)"/>
      <rect x="0" y="11" width="14" height="1.5" fill="var(--cp-text-secondary)"/>
    </svg>
  );
}

function IconConversionTx() {
  return (
    <svg width="11" height="13" viewBox="0 0 10.8835 13.0339" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.8447 0.318097C8.0022 0.160637 8.2575 0.160637 8.4149 0.318097L10.5654 2.46856C10.7229 2.62602 10.7229 2.88132 10.5654 3.03878L8.4149 5.18924C8.2575 5.34671 8.0022 5.34671 7.8447 5.18924C7.6872 5.03178 7.6872 4.77648 7.8447 4.61902L9.7101 2.75367L7.8447 0.888327C7.6872 0.730857 7.6872 0.475557 7.8447 0.318097Z" fill="var(--cp-text-secondary)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.75368 3.15683C2.29028 3.15683 1.84586 3.34091 1.51818 3.66859C1.19051 3.99626 1.00643 4.44068 1.00643 4.90408V5.97931C1.00643 6.202 0.825897 6.38252 0.603217 6.38252C0.380527 6.38252 0.200007 6.202 0.200007 5.97931V4.90408C0.200007 4.2268 0.469048 3.58217 0.948028 3.10319C1.42701 2.62421 2.07164 2.35517 2.75368 2.35517H10.2803C10.6134 2.35517 10.8835 2.62523 10.8835 2.95838C10.8835 3.29152 10.6134 3.56159 10.2803 3.56159H2.75368V3.15683Z" fill="var(--cp-text-secondary)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.03879 7.84468C3.19625 8.00214 3.19625 8.25744 3.03879 8.4149L1.17344 10.2803L3.03879 12.1456C3.19625 12.3031 3.19625 12.5584 3.03879 12.7158C2.88132 12.8733 2.62603 12.8733 2.46856 12.7158L0.318097 10.5654C0.160637 10.4079 0.160637 10.1526 0.318097 9.99513L2.46856 7.84468C2.62603 7.68722 2.88132 7.68722 3.03879 7.84468Z" fill="var(--cp-text-secondary)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.2803 6.65138C10.503 6.65138 10.6835 6.8319 10.6835 7.05459V8.12982C10.6835 8.80708 10.4144 9.45658 9.9355 9.93558C9.4566 10.4145 8.8071 10.6835 8.1298 10.6835H0.603217C0.380527 10.6835 0.200007 10.503 0.200007 10.2803C0.200007 10.0576 0.380527 9.877 0.603217 9.877H8.1298C8.5401 9.877 8.9337 9.71399 9.2239 9.42382C9.514 9.13365 9.677 8.7401 9.677 8.12982V7.05459C9.677 6.8319 9.8575 6.65138 10.2803 6.65138Z" fill="var(--cp-text-secondary)"/>
    </svg>
  );
}

function IconInfo() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 4C8 6.20914 6.20914 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4ZM4.42006 5.7772H3.57917V3.33274H4.42006V5.7772ZM3.99474 2.96119C3.70628 2.96119 3.48138 2.74608 3.48138 2.46742C3.48138 2.18875 3.70628 1.96875 3.99474 1.96875C4.28317 1.96875 4.51295 2.18875 4.51295 2.46742C4.51295 2.74119 4.28317 2.96119 3.99474 2.96119Z" fill="#D3D6E1"/>
    </svg>
  );
}

function IconConvertArrow() {
  return (
    <svg width="17" height="16" viewBox="0 0 10.8835 13.0339" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.8447 0.318097C8.0022 0.160637 8.2575 0.160637 8.4149 0.318097L10.5654 2.46856C10.7229 2.62602 10.7229 2.88132 10.5654 3.03878L8.4149 5.18924C8.2575 5.34671 8.0022 5.34671 7.8447 5.18924C7.6872 5.03178 7.6872 4.77648 7.8447 4.61902L9.7101 2.75367L7.8447 0.888327C7.6872 0.730857 7.6872 0.475557 7.8447 0.318097Z" fill="#5A6679"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.75368 3.15683C2.29028 3.15683 1.84586 3.34091 1.51818 3.66859C1.19051 3.99626 1.00643 4.44068 1.00643 4.90408V5.97931C1.00643 6.202 0.825897 6.38252 0.603217 6.38252C0.380527 6.38252 0.200007 6.202 0.200007 5.97931V4.90408C0.200007 4.2268 0.469048 3.58217 0.948028 3.10319C1.42701 2.62421 2.07164 2.35517 2.75368 2.35517H10.2803C10.6134 2.35517 10.8835 2.62523 10.8835 2.95838C10.8835 3.29152 10.6134 3.56159 10.2803 3.56159H2.75368V3.15683Z" fill="#5A6679"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.03879 7.84468C3.19625 8.00214 3.19625 8.25744 3.03879 8.4149L1.17344 10.2803L3.03879 12.1456C3.19625 12.3031 3.19625 12.5584 3.03879 12.7158C2.88132 12.8733 2.62603 12.8733 2.46856 12.7158L0.318097 10.5654C0.160637 10.4079 0.160637 10.1526 0.318097 9.99513L2.46856 7.84468C2.62603 7.68722 2.88132 7.68722 3.03879 7.84468Z" fill="#5A6679"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.2803 6.65138C10.503 6.65138 10.6835 6.8319 10.6835 7.05459V8.12982C10.6835 8.80708 10.4144 9.45658 9.9355 9.93558C9.4566 10.4145 8.8071 10.6835 8.1298 10.6835H0.603217C0.380527 10.6835 0.200007 10.503 0.200007 10.2803C0.200007 10.0576 0.380527 9.877 0.603217 9.877H8.1298C8.5401 9.877 8.9337 9.71399 9.2239 9.42382C9.514 9.13365 9.677 8.7401 9.677 8.12982V7.05459C9.677 6.8319 9.8575 6.65138 10.2803 6.65138Z" fill="#5A6679"/>
    </svg>
  );
}

function IconCopy() {
  return (
    <svg width="16" height="16" viewBox="0 0 17.2308 17.2308" fill="none">
      <path d="M13.5192 3.69231L13.5384 2.76923C13.5368 2.1985 13.3094 1.6516 12.9058 1.24803C12.5022 0.844454 11.9553 0.61701 11.3846 0.615387H3.07692C2.42468 0.617315 1.79969 0.877273 1.33848 1.33848C0.877273 1.79969 0.617314 2.42468 0.615387 3.07692V11.3846C0.61701 11.9553 0.844454 12.5022 1.24803 12.9058C1.6516 13.3094 2.19849 13.5368 2.76923 13.5385H3.69231M5.88463 3.69231H14.4231C15.6339 3.69231 16.6154 4.67384 16.6154 5.88462V14.4231C16.6154 15.6338 15.6339 16.6154 14.4231 16.6154H5.88463C4.67385 16.6154 3.69232 15.6338 3.69232 14.4231V5.88462C3.69232 4.67384 4.67385 3.69231 5.88463 3.69231Z" stroke="var(--cp-brand-primary)" strokeWidth="1.23077" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconConfirmations() {
  return (
    <svg width="13" height="13" viewBox="0 0 13.1362 13" fill="none">
      <path d="M6.32485 13L0 10.5138V3.27676L6.32485 6.21295V13ZM6.56811 5.78967L0.335703 2.89483L6.56811 0L12.8029 2.89483L6.56811 5.78967ZM13.1362 10.5138L6.81137 13V6.21295L13.1362 3.27676V10.5138Z" fill="var(--cp-brand-primary)"/>
    </svg>
  );
}

// ─── Radio button (blue filled circle with white checkmark) ───────────────────

function RadioChecked() {
  return (
    <div className="relative shrink-0 size-[16px]">
      {/* Blue filled circle */}
      <svg className="absolute inset-0 size-full" viewBox="0 0 16.1455 16.1455" fill="none">
        <circle cx="8.07273" cy="8.07273" r="7.27273" fill="#1C60DD" stroke="#1C60DD" strokeWidth="1.6"/>
      </svg>
      {/* White checkmark */}
      <div className="absolute bottom-[26.38%] left-[24.06%] right-[25.86%] top-1/4">
        <svg className="absolute inset-0 size-full" viewBox="0 0 8.01229 7.7788" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.13979 7.7788C3.36713 7.7788 3.56375 7.67435 3.71121 7.447L7.84025 0.976959C7.93241 0.841782 8.01229 0.675883 8.01229 0.528418C8.01229 0.202765 7.7235 0 7.42243 0C7.24424 0 7.06605 0.104455 6.93088 0.313364L3.10906 6.39017L1.07527 3.84025C0.915515 3.63748 0.749616 3.56375 0.552995 3.56375C0.25192 3.56375 0 3.80338 0 4.12903C0 4.28264 0.0614439 4.44854 0.165899 4.57757L2.53763 7.45315C2.72811 7.68664 2.91244 7.7788 3.13979 7.7788Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}

// ─── Transaction icon circle ──────────────────────────────────────────────────

function TxCircle({ type, coin }: { type: TxType; coin: CoinType }) {
  return (
    <div className="relative shrink-0 size-[36px]">
      <div className="absolute inset-0 rounded-[100px] border border-[var(--cp-border-hover)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        {type === 'received' && (
          <svg width="13" height="13" viewBox="0 0 12.3758 12.2171" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.18791 10.3001C5.92045 10.3001 5.70364 10.0833 5.70364 9.81578V0.68428C5.70364 0.41682 5.92045 0.2 6.18791 0.2C6.45536 0.2 6.67218 0.41682 6.67218 0.68428V9.81578C6.67218 10.0833 6.45536 10.3001 6.18791 10.3001Z" fill="var(--cp-text-secondary)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M11.0961 4.9076C11.2852 5.09672 11.2852 5.40334 11.0961 5.59246L6.53034 10.1582C6.34122 10.3474 6.0346 10.3474 5.84548 10.1582L1.27972 5.59246C1.0906 5.40334 1.0906 5.09672 1.27972 4.9076C1.46884 4.71848 1.77546 4.71848 1.96458 4.9076L6.18791 9.13088L10.4112 4.9076C10.6004 4.71848 10.907 4.71848 11.0961 4.9076Z" fill="var(--cp-text-secondary)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 11.7262C0 11.4551 0.21978 11.2353 0.49089 11.2353H11.885C12.1561 11.2353 12.3758 11.4551 12.3758 11.7262C12.3758 11.9973 12.1561 12.2171 11.885 12.2171H0.49089C0.21978 12.2171 0 11.9973 0 11.7262Z" fill="var(--cp-text-secondary)"/>
          </svg>
        )}
        {type === 'sent' && (
          <svg width="10" height="10" viewBox="0 0 9.40295 9.40295" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.0493 0.35367C9.2542 0.55856 9.2542 0.89076 9.0493 1.09565L1.09572 9.0492C0.89083 9.2541 0.55864 9.2541 0.35375 9.0492C0.14886 8.8443 0.14886 8.5122 0.35375 8.3073L8.3073 0.35367C8.5122 0.14878 8.8444 0.14878 9.0493 0.35367Z" fill="var(--cp-text-secondary)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.15816 0.72466C1.15816 0.4349 1.39305 0.2 1.68282 0.2H8.6783C8.968 0.2 9.2029 0.4349 9.2029 0.72466V7.7201C9.2029 8.0099 8.968 8.2448 8.6783 8.2448C8.3885 8.2448 8.1536 8.0099 8.1536 7.7201V1.24932H1.68282C1.39305 1.24932 1.15816 1.01442 1.15816 0.72466Z" fill="var(--cp-text-secondary)"/>
          </svg>
        )}
        {type === 'bank-payout' && <IconBankPayout />}
        {type === 'conversion' && <IconConversionTx />}
      </div>
      {/* Mini coin logo — top-right */}
      <div className="absolute right-[-1px] top-[-1px]">
        <div className="relative size-[16px]">
          {coin === 'usdt' ? (
            <div className="absolute bg-[#50af95] inset-[1.22%_0_-1.22%_0] rounded-[999px] overflow-hidden flex items-center justify-center">
              <SvgUsdtLogo className="w-[75%] h-[75%]" />
            </div>
          ) : coin === 'usdc' ? (
            <div className="absolute inset-0 rounded-[999px] bg-[#2775CA] flex items-center justify-center overflow-hidden">
              <span className="text-white font-bold leading-none select-none" style={{ fontSize: 7 }}>$</span>
            </div>
          ) : (
            <div className="absolute inset-0 overflow-clip rounded-[999px]">
              <SvgBtcLogo className="absolute block inset-0 size-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Currency icon (14px, currency column) ────────────────────────────────────

function CurrencyIcon({ type }: { type: CoinType }) {
  if (type === 'btc') {
    return (
      <div className="relative shrink-0 size-[14px] overflow-clip rounded-[999px]">
        <SvgBtcLogo className="absolute block inset-0 size-full" />
      </div>
    );
  }
  if (type === 'usd') {
    return (
      <div className="relative shrink-0 size-[14px] rounded-[999px] border border-[var(--cp-brand-primary)] flex items-center justify-center">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[var(--cp-brand-primary)] leading-none select-none" style={{ fontSize: 7 }}>$</span>
      </div>
    );
  }
  if (type === 'usdc') {
    return (
      <div className="relative shrink-0 size-[14px] rounded-[999px] bg-[#2775CA] flex items-center justify-center overflow-hidden">
        <span className="text-white font-bold leading-none select-none" style={{ fontSize: 8 }}>$</span>
      </div>
    );
  }
  return (
    <div className="relative shrink-0 size-[14px] bg-[#50af95] rounded-[999px] overflow-hidden flex items-center justify-center">
      <SvgUsdtLogo className="w-[75%] h-[75%]" />
    </div>
  );
}

// ─── USD currency icon (blue circle with $ sign) ──────────────────────────────

function UsdIcon({ size = 14 }: { size?: number }) {
  return (
    <div
      className="relative shrink-0 rounded-[100px] overflow-hidden flex items-center justify-center border border-[var(--cp-brand-primary)]"
      style={{ width: size, height: size }}
    >
      <svg width={size * 0.6} height={size * 0.8} viewBox="0 0 6 9" fill="none">
        <path d="M3.3 0V0.7C4.5 0.9 5.4 1.7 5.4 2.7C5.4 2.9 5.25 3 5.1 3C4.95 3 4.8 2.9 4.8 2.7C4.8 2.1 4.2 1.6 3.3 1.4V4C4.5 4.2 5.4 5 5.4 6C5.4 7 4.5 7.8 3.3 8V8.7C3.3 8.9 3.15 9 3 9C2.85 9 2.7 8.9 2.7 8.7V8C1.5 7.8 0.6 7 0.6 6C0.6 5.8 0.75 5.7 0.9 5.7C1.05 5.7 1.2 5.8 1.2 6C1.2 6.6 1.8 7.1 2.7 7.3V4.7C1.5 4.5 0.6 3.7 0.6 2.7C0.6 1.7 1.5 0.9 2.7 0.7V0C2.7 -0.2 2.85 -0.3 3 -0.3C3.15 -0.3 3.3 -0.2 3.3 0ZM2.7 4V1.4C2 1.5 1.4 2.1 1.4 2.7C1.4 3.3 2 3.8 2.7 4ZM3.3 4.7V7.3C4 7.1 4.6 6.5 4.6 6C4.6 5.4 4 4.9 3.3 4.7Z" fill="var(--cp-brand-primary)"/>
      </svg>
    </div>
  );
}

// ─── Status badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: TxStatus }) {
  const dotColor = status === 'completed' ? 'bg-[#21b75d]' : status === 'pending' ? 'bg-[#f59e0b]' : 'bg-red-500';
  const label = status === 'completed' ? 'Completed' : status === 'pending' ? 'Pending' : 'Failed';
  return (
    <div className="flex items-center gap-[5px]">
      <div className={`${dotColor} rounded-[100px] shrink-0 size-[8px]`} />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">{label}</p>
    </div>
  );
}

// ─── Row header (shared between collapsed and expanded) ───────────────────────

function TxRowHeader({ tx }: { tx: Transaction }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-[40px]">
        {/* Left: date + divider + tx circle + label */}
        <div className="flex items-center gap-[20px]">
          <div className="flex flex-col items-start w-[45px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[13px] text-[var(--cp-text-secondary)]">{tx.date}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[13px] text-[var(--cp-text-secondary)]">{tx.time}</p>
          </div>
          <div className="bg-[var(--cp-border-default)] h-[34px] w-px shrink-0" />
          <div className="flex items-center gap-[10px] w-[240px]">
            <TxCircle type={tx.type} coin={tx.coin} />
            <div className="flex flex-col items-start">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">{tx.label}</p>
              <StatusBadge status={tx.status} />
            </div>
          </div>
        </div>

        {/* Middle: divider + currency */}
        <div className="flex items-center gap-[20px]">
          <div className="bg-[var(--cp-border-default)] h-[34px] w-px shrink-0" />
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-[5px]">
              <CurrencyIcon type={tx.currency} />
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">{tx.currencyName}</p>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">{tx.destination}</p>
          </div>
        </div>
      </div>

      {/* Right: amount */}
      <div className="flex flex-col items-end shrink-0">
        <p className="font-['Inter',sans-serif] font-bold leading-[normal] not-italic text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap" style={{ letterSpacing: '-0.5px' }}>{tx.amount}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">{tx.amountSub}</p>
      </div>
    </div>
  );
}

// ─── Expanded data field ──────────────────────────────────────────────────────

function DataField({ label, value, valueClass, children }: { label: string; value?: string; valueClass?: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[5px] items-start">
      <div className="flex items-center gap-[5px]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[11px] text-[var(--cp-text-primary)] uppercase whitespace-nowrap">{label}</p>
        <IconInfo />
      </div>
      {children ?? (
        <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[14.5px] whitespace-nowrap ${valueClass ?? 'text-[var(--cp-text-secondary)]'}`}>{value}</p>
      )}
    </div>
  );
}

// ─── Timeline step ────────────────────────────────────────────────────────────

function TimelineStep({ label, time, extra }: { label: string; time: string; extra?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[12px] relative z-[1]">
      <RadioChecked />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[11px] text-[var(--cp-text-primary)] whitespace-nowrap">{label}</p>
      {extra}
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[11px] text-[var(--cp-text-quinary)] whitespace-nowrap">{time}</p>
    </div>
  );
}

// ─── Expanded panel ───────────────────────────────────────────────────────────

const EXCHANGE_RATE = 0.99;

function parseFeeValue(str: string | undefined, fallback: number): number {
  if (!str) return fallback;
  const n = parseFloat(str.replace(/[^0-9.]/g, ''));
  return isNaN(n) ? fallback : n;
}

function TxExpandedPanel({ tx, onCancelRequest }: { tx: Transaction; onCancelRequest: (id: string) => void }) {
  const [feeCurrency, setFeeCurrency] = useState<CurrencySwitcherSelection>('to');

  const fromCoin: SwitcherCoin = tx.coin === 'usdc' ? 'usdc' : 'usdt';
  const fromLabel = tx.coin === 'usdc' ? 'USDC' : 'USDT';
  const toCoin: SwitcherCoin = tx.currency === 'usd' ? 'usd' : tx.currency === 'gbp' ? 'gbp' : 'eur';
  const toLabel = tx.currency.toUpperCase();

  const txFeeUsd     = parseFeeValue(tx.txFeeUsd, 30.00);
  const networkFeeUsd = parseFeeValue(tx.networkFeeUsd, 6.50);
  const txAmountUsd  = parseFeeValue(tx.txAmountUsd, 1286.50);
  const txTotalUsd   = parseFeeValue(tx.txTotalUsd, -1250.00);

  const fmt = (n: number) => Math.abs(n).toFixed(2);
  const showFrom = feeCurrency === 'from';
  const sym = toLabel;

  const feeAmountDisplay   = showFrom ? `${fmt(txAmountUsd / EXCHANGE_RATE)} ${fromLabel}` : (tx.txAmountUsd ?? `$${fmt(txAmountUsd)} ${sym}`);
  const feeTxDisplay       = showFrom ? `${fmt(txFeeUsd / EXCHANGE_RATE)} ${fromLabel}` : (tx.txFeeUsd ?? `$${fmt(txFeeUsd)} ${sym}`);
  const feeNetworkDisplay  = showFrom ? `${fmt(networkFeeUsd / EXCHANGE_RATE)} ${fromLabel}` : (tx.networkFeeUsd ?? `$${fmt(networkFeeUsd)} ${sym}`);
  const feeTotalDisplay    = showFrom ? `-${fmt(Math.abs(txTotalUsd) / EXCHANGE_RATE)} ${fromLabel}` : (tx.txTotalUsd ?? `-$${fmt(Math.abs(txTotalUsd))} ${sym}`);

  return (
    <div className="pl-[80px] pt-[20px] w-full">
      <div className="flex gap-[20px] items-stretch pb-[20px] w-full">

        {/* Left column */}
        <div className="flex flex-col gap-[20px] items-start flex-1 min-w-0">

          {/* Timeline */}
          {tx.status === 'pending' ? (
            <div className="relative flex flex-col gap-[12px] items-start px-[20px] w-full">
              <div className="absolute bg-[var(--cp-text-secondary)] w-px" style={{ left: 28, top: 8, height: 36 }} />
              <TimelineStep label="Created" time="Jun 3 2026 14:38" />
              {/* Under-review step — amber clock */}
              <div className="flex items-center gap-[12px] relative z-10">
                <div className="flex items-center justify-center rounded-full shrink-0" style={{ width: 16, height: 16, background: '#f59e0b' }}>
                  {/* Clock icon */}
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <circle cx="4.5" cy="4.5" r="3.8" stroke="white" strokeWidth="1.1"/>
                    <path d="M4.5 2.5V4.5L5.8 5.5" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex items-center gap-[5px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none text-[11px] text-[var(--cp-text-primary)] whitespace-nowrap">Bank account under review</p>
                  <IconInfo />
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-none text-[11px] text-[var(--cp-text-quinary)] whitespace-nowrap">{tx.date.charAt(0) + tx.date.slice(1).toLowerCase()} 2026 {tx.time}</p>
              </div>
            </div>
          ) : (
            <div className="relative flex flex-col gap-[12px] items-start pb-[20px] px-[20px] w-full">
              <div className="absolute bg-[var(--cp-text-secondary)] w-px" style={{ left: 28, top: 12, height: 109 }} />
              <TimelineStep label="Created" time="Jun 3 2026 14:38" />
              <TimelineStep label="Funds Sent" time="Jun 3 2026 14:40" />
              <TimelineStep
                label="Funds Transferred"
                time="Jun 3 2026 14:45"
                extra={
                  <div className="flex items-center gap-[5px]">
                    <IconConfirmations />
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[11px] text-[var(--cp-brand-primary)] underline whitespace-nowrap cursor-pointer">Confirmations</p>
                  </div>
                }
              />
              <TimelineStep label="Funds Converted" time="Jun 4 2026 00:04" />
              <TimelineStep label="Payout Completed" time="Jun 4 2026 00:15" />
            </div>
          )}

          {/* Data fields */}
          <DataField label="Source Wallet" value={tx.sourceCoinName ?? "Tether USD"} />
          <DataField label="Target Wallet" value="0xAcF36260817d1c78C471406BdE482177a1935071" />
          <DataField label="Settlement Destination" value={tx.settlementDestination ?? "Wise – GB97TRWI23080120507810"} />
          <DataField label="Settlement Mode" value={tx.settlementMode ?? "Auto-Sweep (USDT)"} />
          {tx.note && <DataField label="Note" value={tx.note} />}
          <DataField label="Transaction ID">
            <div className="flex items-center gap-[10px]">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[14.5px] text-[var(--cp-brand-primary)] whitespace-nowrap overflow-hidden text-ellipsis max-w-[480px]">
                64ec88ca00bce68e27ba85a97576a8d789bf00d5a866299d28b1856358c2c5ec
              </p>
              <button className="shrink-0 cursor-pointer hover:opacity-70 transition-opacity" title="Copy">
                <IconCopy />
              </button>
            </div>
          </DataField>
          <DataField label="Support ID" value="5c3d4776-daa0-406b-b9e4-350e3dcbc051" />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-[20px] items-end shrink-0">

          {/* Currency switcher — stop propagation to prevent row collapse on click */}
          <div onClick={e => e.stopPropagation()}>
            <CurrencySwitcher
              fromCoin={fromCoin}
              fromLabel={fromLabel}
              toCoin={toCoin}
              toLabel={toLabel}
              selected={feeCurrency}
              onSelect={setFeeCurrency}
              size="sm"
            />
          </div>

          {/* Fee breakdown */}
          <div className="flex flex-col gap-[10px] items-end">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[13px] text-[var(--cp-text-secondary)] whitespace-nowrap">Amount: {feeAmountDisplay}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[13px] text-[var(--cp-text-secondary)] whitespace-nowrap">Transaction fee: {feeTxDisplay}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[13px] text-[var(--cp-text-secondary)] whitespace-nowrap">Network fee: {feeNetworkDisplay}</p>
          </div>

          {/* Total */}
          <p className="font-['Inter',sans-serif] font-bold leading-[normal] not-italic text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap" style={{ letterSpacing: '-0.5px' }}>
            Total: {feeTotalDisplay}
          </p>

          {/* Cancel — only for pending, pinned bottom of right column */}
          {tx.status === 'pending' && (
            <button
              className="flex items-center gap-[8px] h-[46px] px-[20px] bg-white border border-[var(--cp-error-field)] rounded-[5px] cursor-pointer hover:bg-red-50 transition-colors shrink-0 mt-auto"
              onClick={e => { e.stopPropagation(); onCancelRequest(tx.id); }}
            >
              <svg width="14" height="15" viewBox="0 0 12 13" fill="none" className="shrink-0 text-[var(--cp-error-field)]">
                <path d="M1 3h10M4 3V2h4v1M5 6v4M7 6v4M2 3l.7 8.1A1 1 0 0 0 3.7 12h4.6a1 1 0 0 0 1-.9L10 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-error-field)] whitespace-nowrap">Cancel Transaction</p>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

// ─── Transaction row ──────────────────────────────────────────────────────────

function TxRow({ tx, alt, expanded, onToggle, onCancelRequest }: { tx: Transaction; alt: boolean; expanded: boolean; onToggle: () => void; onCancelRequest: (id: string) => void }) {
  return (
    <div
      onClick={tx.expandable ? onToggle : undefined}
      className={`flex flex-col p-[20px] rounded-[5px] transition-colors ${
        expanded
          ? 'bg-white'
          : alt
          ? 'bg-[var(--cp-bg-2)] hover:bg-[var(--cp-bg-3)]'
          : 'bg-[var(--cp-bg-1)] hover:bg-[var(--cp-bg-3)]'
      } ${tx.expandable ? 'cursor-pointer' : ''}`}
    >
      <TxRowHeader tx={tx} />
      {expanded && tx.expandable && <TxExpandedPanel tx={tx} onCancelRequest={onCancelRequest} />}
    </div>
  );
}

// ─── 2FA inline (field + buttons, no overlay) ────────────────────────────────

function TwoFaInline({ onCancel, onSubmit }: { onCancel: () => void; onSubmit: () => void }) {
  const [code, setCode] = useState('');
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const canSubmit = code.replace(/\D/g, '').length >= 2;
  const borderColor = focused ? 'var(--cp-brand-primary)' : hovered ? 'var(--cp-border-hover)' : 'var(--cp-border-default)';

  return (
    <>
      <div
        className="bg-white relative rounded-[5px] shrink-0 w-full cursor-text"
        style={{ border: `1px solid ${borderColor}`, transition: 'border-color 0.1s' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex flex-col items-start justify-between p-[10px] relative" style={{ minHeight: 83 }}>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">
            CONFIRMATION CODE
          </p>
          <input
            type="text"
            inputMode="numeric"
            value={code}
            onChange={e => setCode(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoFocus
            className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-[var(--cp-text-primary)] bg-transparent border-none outline-none w-full min-w-0 mt-[10px]"
            style={{ letterSpacing: '-0.6px', caretColor: 'var(--cp-brand-primary)' }}
          />
        </div>
      </div>
      <div className="flex gap-[10px] items-center w-full">
        <button
          className="bg-white border border-[var(--cp-border-default)] border-solid flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
          onClick={onCancel}
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">Cancel</p>
        </button>
        <button
          disabled={!canSubmit}
          className={`flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] transition-colors ${canSubmit ? 'bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] cursor-pointer' : 'bg-[var(--cp-bg-2)] cursor-not-allowed'}`}
          onClick={() => { if (canSubmit) onSubmit(); }}
        >
          <p className={`font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-center whitespace-nowrap ${canSubmit ? 'text-white' : 'text-[var(--cp-text-secondary)]'}`}>Submit</p>
        </button>
      </div>
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TransactionsPage() {
  const { transactions, removeTransaction } = useTransactions();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [cancelConfirmId, setCancelConfirmId] = useState<string | null>(null);
  const [showCancelTwoFa, setShowCancelTwoFa] = useState(false);

  return (
    <div className="flex flex-col gap-0 w-full">
      {transactions.map((tx, i) => (
        <TxRow
          key={tx.id}
          tx={tx}
          alt={i % 2 === 0}
          expanded={expandedId === tx.id}
          onToggle={() => setExpandedId(expandedId === tx.id ? null : tx.id)}
          onCancelRequest={(id) => setCancelConfirmId(id)}
        />
      ))}

      {/* Cancel flow — confirmation then 2FA, single overlay */}
      {cancelConfirmId !== null && createPortal(
        <div
          className="fixed inset-0 z-[400] flex items-center justify-center"
          style={{ background: 'var(--cp-bg-overlay-scrim)' }}
          onClick={() => { setCancelConfirmId(null); setShowCancelTwoFa(false); }}
        >
          <div className="relative flex flex-col" style={{ width: 400 }} onClick={e => e.stopPropagation()}>
            <button
              className="absolute right-0 top-[-30px] flex items-center justify-center p-[4px] cursor-pointer"
              onClick={() => { setCancelConfirmId(null); setShowCancelTwoFa(false); }}
            >
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">Dismiss</p>
            </button>

            {!showCancelTwoFa ? (
              /* Step 1 — confirmation */
              <div className="bg-white flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full">
                <div className="flex flex-col gap-[20px] items-start w-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase leading-none">
                    cancel pending transaction
                  </p>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-[1.4]">
                    Are you sure you want to cancel this pending bank payout? The transaction will be stopped immediately, and the funds will remain safely in your custodial wallet. This action cannot be undone.
                  </p>
                </div>
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                  <button
                    className="bg-white border border-[var(--cp-border-default)] border-solid flex flex-1 h-[46px] items-center justify-center rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
                    onClick={() => setCancelConfirmId(null)}
                  >
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-secondary)]">Keep Waiting</p>
                  </button>
                  <button
                    className="bg-white border border-[var(--cp-error-field)] border-solid flex flex-1 h-[46px] items-center justify-center rounded-[5px] cursor-pointer hover:bg-red-50 transition-colors"
                    onClick={() => setShowCancelTwoFa(true)}
                  >
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-error-field)]">Cancel</p>
                  </button>
                </div>
              </div>
            ) : (
              /* Step 2 — 2FA */
              <div className="bg-white flex flex-col items-start p-[20px] rounded-[10px] w-full gap-[20px]">
                <div className="flex flex-col gap-[20px] items-start w-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap leading-none">
                    CONFIRMATION
                  </p>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-[1.4]">
                    Please enter your authenticator app 2FA code.
                  </p>
                </div>
                <TwoFaInline
                  onCancel={() => setShowCancelTwoFa(false)}
                  onSubmit={() => {
                    removeTransaction(cancelConfirmId);
                    setShowCancelTwoFa(false);
                    setCancelConfirmId(null);
                  }}
                />
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
