import { useState } from 'react';

// ─── Coin badge helpers ───────────────────────────────────────────────────────

function UsdtBadge({ size }: { size: number }) {
  const inner = size * 0.72;
  return (
    <div className="rounded-[999px] bg-[#50af95] flex items-center justify-center shrink-0"
         style={{ width: size, height: size }}>
      <svg viewBox="0 0 14.67 12.76" fill="none" style={{ width: inner, height: inner }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M2.685 0.063L0.011 5.68a.08.08 0 0 0 .023.073l7.222 6.921a.1.1 0 0 0 .14 0l7.222-6.921a.08.08 0 0 0 .023-.073L11.981.063A.09.09 0 0 0 11.882 0H2.785a.09.09 0 0 0-.1.063z" fill="#50AF95"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.261 6.257c-.052.004-.32.02-.917.02-.476 0-.813-.015-.932-.02-1.837-.08-3.208-.4-3.208-.783s1.371-.703 3.208-.785v1.25c.12.008.464.028.939.028.57 0 .856-.024.908-.029V4.69c1.833.082 3.201.402 3.201.784s-1.368.703-3.2.784zM8.261 4.561V3.443h2.558V1.738H3.855v1.705h2.557v1.118C4.333 4.656 2.77 5.068 2.77 5.561s1.563.904 3.642 1v3.582h1.849V6.561c2.074-.095 3.635-.507 3.635-1 0-.494-1.56-.905-3.635-1z" fill="white"/>
      </svg>
    </div>
  );
}

function UsdcBadge({ size }: { size: number }) {
  return (
    <div className="rounded-[999px] bg-[#2775CA] flex items-center justify-center shrink-0"
         style={{ width: size, height: size }}>
      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white leading-none select-none"
            style={{ fontSize: size * 0.42 }}>$</span>
    </div>
  );
}

function UsdBadge({ size }: { size: number }) {
  return (
    <div className="rounded-[999px] flex items-center justify-center shrink-0"
         style={{ width: size, height: size, border: '1px solid var(--cp-brand-primary)' }}>
      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[var(--cp-brand-primary)] leading-none select-none"
            style={{ fontSize: size * 0.38 }}>$</span>
    </div>
  );
}

function GbpBadge({ size }: { size: number }) {
  return (
    <div className="rounded-[999px] flex items-center justify-center shrink-0"
         style={{ width: size, height: size, border: '1px solid var(--cp-brand-primary)' }}>
      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[var(--cp-brand-primary)] leading-none select-none"
            style={{ fontSize: size * 0.38 }}>£</span>
    </div>
  );
}

function EurBadge({ size }: { size: number }) {
  return (
    <div className="rounded-[999px] flex items-center justify-center shrink-0"
         style={{ width: size, height: size, border: '1px solid var(--cp-brand-primary)' }}>
      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[var(--cp-brand-primary)] leading-none select-none"
            style={{ fontSize: size * 0.38 }}>€</span>
    </div>
  );
}

export type SwitcherCoin = 'usdt' | 'usdc' | 'usd' | 'gbp' | 'eur';

function CoinBadge({ coin, size }: { coin: SwitcherCoin; size: number }) {
  if (coin === 'usdt') return <UsdtBadge size={size} />;
  if (coin === 'usdc') return <UsdcBadge size={size} />;
  if (coin === 'gbp') return <GbpBadge size={size} />;
  if (coin === 'eur') return <EurBadge size={size} />;
  return <UsdBadge size={size} />;
}

// ─── Swap arrows SVG ─────────────────────────────────────────────────────────

function SwapArrows({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  if (size === 'lg') {
    return (
      <div className="overflow-clip relative shrink-0" style={{ width: '12.47px', height: '11.74px' }}>
        <div className="absolute inset-[9.27%_17.99%]">
          <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 10.8835 13.0339">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.8447 0.318097C8.0022 0.160637 8.2575 0.160637 8.4149 0.318097L10.5654 2.46856C10.7229 2.62602 10.7229 2.88132 10.5654 3.03878L8.4149 5.18924C8.2575 5.34671 8.0022 5.34671 7.8447 5.18924C7.6872 5.03178 7.6872 4.77648 7.8447 4.61902L9.7101 2.75367L7.8447 0.888327C7.6872 0.730857 7.6872 0.475557 7.8447 0.318097Z" fill="var(--cp-text-tertiary)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.75368 2.35517H10.2803C10.6134 2.35517 10.8835 2.62523 10.8835 2.95838C10.8835 3.29152 10.6134 3.56159 10.2803 3.56159H2.75368C2.29028 3.56159 1.84586 3.34091 1.51818 3.66859C1.19051 3.99626 1.00643 4.44068 1.00643 4.90408V5.97931C1.00643 6.202 0.825897 6.38252 0.603217 6.38252C0.380527 6.38252 0.200007 6.202 0.200007 5.97931V4.90408C0.200007 4.2268 0.469048 3.58217 0.948028 3.10319C1.42701 2.62421 2.07164 2.35517 2.75368 2.35517Z" fill="var(--cp-text-tertiary)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.03879 7.84468C2.88132 7.68722 2.62603 7.68722 2.46856 7.84468L0.318097 9.99513C0.160637 10.1526 0.160637 10.4079 0.318097 10.5654L2.46856 12.7158C2.62603 12.8733 2.88132 12.8733 3.03879 12.7158C3.19625 12.5584 3.19625 12.3031 3.03879 12.1456L1.17344 10.2803L3.03879 8.4149C3.19625 8.25744 3.19625 8.00214 3.03879 7.84468Z" fill="var(--cp-text-tertiary)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.6835 7.05459C10.6835 6.8319 10.503 6.65138 10.2803 6.65138C9.8575 6.65138 9.677 6.8319 9.677 7.05459V8.12982C9.677 8.7401 9.514 9.13365 9.2239 9.42382C8.9337 9.71399 8.5401 9.877 8.1298 9.877H0.603217C0.380527 9.877 0.200007 10.0576 0.200007 10.2803C0.200007 10.503 0.380527 10.6835 0.603217 10.6835H8.1298C8.8071 10.6835 9.4566 10.4145 9.9355 9.93558C10.4144 9.45658 10.6835 8.80708 10.6835 8.12982V7.05459Z" fill="var(--cp-text-tertiary)"/>
          </svg>
        </div>
      </div>
    );
  }
  // sm — simpler ⇌ icon used in TxRow
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" className="shrink-0">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.5 0.5L13 3.5L9.5 6.5V4.5H1V2.5H9.5V0.5Z" fill="var(--cp-text-tertiary)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.5 11.5L1 8.5L4.5 5.5V7.5H13V9.5H4.5V11.5Z" fill="var(--cp-text-tertiary)"/>
    </svg>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export type CurrencySwitcherSelection = 'from' | 'to';

type Props = {
  fromCoin: SwitcherCoin;
  fromLabel: string;
  toCoin: SwitcherCoin;
  toLabel: string;
  selected: CurrencySwitcherSelection;
  onSelect: (s: CurrencySwitcherSelection) => void;
  size?: 'sm' | 'lg';
};

export function CurrencySwitcher({ fromCoin, fromLabel, toCoin, toLabel, selected, onSelect, size = 'lg' }: Props) {
  const [hoveredSide, setHoveredSide] = useState<'from' | 'to' | null>(null);
  const badgeSize = size === 'lg' ? 14 : 14;
  const py = size === 'lg' ? '6px' : '10px';

  const pill = (side: 'from' | 'to', coin: SwitcherCoin, label: string) => {
    const isSelected = selected === side;
    const isHovered = hoveredSide === side && !isSelected;
    return (
      <div
        className="flex items-center gap-[5px] rounded-[5px] shrink-0 cursor-pointer transition-colors"
        style={{
          padding: `${py} 10px`,
          background: isSelected ? 'var(--cp-bg-2)' : isHovered ? 'var(--cp-bg-1)' : 'transparent',
        }}
        onClick={() => onSelect(side)}
        onMouseEnter={() => setHoveredSide(side)}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-primary)] whitespace-nowrap leading-[normal] not-italic">{label}</p>
        <CoinBadge coin={coin} size={badgeSize} />
      </div>
    );
  };

  return (
    <div className="flex items-center gap-[5px] shrink-0">
      {pill('from', fromCoin, fromLabel)}
      <SwapArrows size={size} />
      {pill('to', toCoin, toLabel)}
    </div>
  );
}
