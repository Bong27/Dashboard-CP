// ─────────────────────────────────────────────────────────────────────────────
// BankPayoutModal — fully interactive
// Source: Figma node 2075:92521 (Bank Details Mask)
//
// States:
//   empty       — Amount = 0, Estimated Payout = $0, Confirm disabled
//   loading     — skeleton shimmer on the other field while computing
//   filled      — both fields populated, fees updated, Confirm active
//   countdown   — 10s timer on Confirm, auto-refresh when done
//
// Fee logic (from Figma fee summary):
//   Exchange Rate:    1 USDT = $0.99 USD
//   Conversion fee:  0.5% of USDT amount
//   Network fee:     $2.49 flat
//   Estimated Payout = amount × 0.99 − conversionFee − networkFee
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect, useRef, useCallback } from 'react';
import { SelectField } from './SelectField';
import svgPaths from '../../imports/Wallet-2/svg-tfchl2zu4w';

// ─── Constants ────────────────────────────────────────────────────────────────
const EXCHANGE_RATE   = 0.99;   // 1 USDT = $0.99 USD
const CONVERSION_FEE  = 0.005;  // 0.5%
const NETWORK_FEE_USD = 2.49;
const COUNTDOWN_SEC   = 10;
const LOADING_MS      = 800;    // skeleton duration

// ─── Helpers ──────────────────────────────────────────────────────────────────
function calcPayout(usdt: number): number {
  const gross = usdt * EXCHANGE_RATE;
  const conv  = gross * CONVERSION_FEE;
  return Math.max(0, gross - conv - NETWORK_FEE_USD);
}
function calcUsdt(usd: number): number {
  // reverse: usdt * 0.99 * 0.995 - 2.49 = usd
  // usdt = (usd + 2.49) / (0.99 * 0.995)
  return (usd + NETWORK_FEE_USD) / (EXCHANGE_RATE * (1 - CONVERSION_FEE));
}
function fmt(n: number, decimals = 2): string {
  return n.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function InfoIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <circle cx="8" cy="8" r="7.5" fill="#8492A6" />
      <path d="M8 7V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="5" r="0.75" fill="white" />
    </svg>
  );
}

function UsdtBadge({ size = 24 }: { size?: number }) {
  return (
    <div className="rounded-[999px] bg-[#50af95] flex items-center justify-center shrink-0"
         style={{ width: size, height: size }}>
      <span className="text-white font-bold leading-none select-none" style={{ fontSize: size * 0.42 }}>₮</span>
    </div>
  );
}

function UsdBadge({ size = 24 }: { size?: number }) {
  return (
    <div className="rounded-[99999px] border-2 border-[var(--cp-brand-primary)] flex items-center justify-center shrink-0"
         style={{ width: size, height: size }}>
      <span className="text-[var(--cp-brand-primary)] font-bold leading-none select-none" style={{ fontSize: size * 0.42 }}>$</span>
    </div>
  );
}

// Shimmer skeleton bar
function Skeleton({ width = '80px', height = 13 }: { width?: string; height?: number }) {
  return (
    <div className="rounded-[3px] overflow-hidden shrink-0" style={{ width, height }}>
      <div className="size-full relative bg-[#e5e9f2]">
        <div className="absolute inset-0 animate-pulse" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)' }} />
      </div>
    </div>
  );
}

// Countdown ring
function CountdownRing({ seconds, total }: { seconds: number; total: number }) {
  const r = 9;
  const circ = 2 * Math.PI * r;
  const progress = seconds / total;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0">
      <circle cx="12" cy="12" r={r} fill="none" stroke="#e5e9f2" strokeWidth="2.5" />
      <circle cx="12" cy="12" r={r} fill="none" stroke="var(--cp-brand-primary)" strokeWidth="2.5"
        strokeDasharray={circ} strokeDashoffset={circ * (1 - progress)}
        strokeLinecap="round" transform="rotate(-90 12 12)" style={{ transition: 'stroke-dashoffset 1s linear' }} />
      <text x="12" y="16" textAnchor="middle" fontSize="8" fill="var(--cp-text-primary)"
        fontFamily="Inter" fontWeight="600">{seconds}</text>
    </svg>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

type State = 'empty' | 'loading-payout' | 'loading-amount' | 'filled' | 'countdown' | 'refreshing';

export default function BankPayoutModal({ onClose }: { onClose: () => void }) {
  const [usdtAmount, setUsdtAmount]     = useState('');
  const [usdAmount, setUsdAmount]       = useState('');
  const [note, setNote]                 = useState('');
  const [state, setState]               = useState<State>('empty');
  const [countdown, setCountdown]       = useState(COUNTDOWN_SEC);
  const [convFee, setConvFee]           = useState(0);
  const loadTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Clear timers ────────────────────────────────────────────────────────────
  const clearTimers = useCallback(() => {
    if (loadTimer.current)  clearTimeout(loadTimer.current);
    if (countTimer.current) clearInterval(countTimer.current);
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  // ── Start countdown ──────────────────────────────────────────────────────────
  const startCountdown = useCallback(() => {
    setCountdown(COUNTDOWN_SEC);
    setState('countdown');
    countTimer.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countTimer.current!);
          // Refresh — briefly show 'refreshing' then reset to filled
          setState('refreshing');
          setTimeout(() => setState('filled'), 1000);
          return COUNTDOWN_SEC;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  // ── Handle USDT input ────────────────────────────────────────────────────────
  const onUsdtChange = (val: string) => {
    clearTimers();
    setUsdtAmount(val);
    setUsdAmount('');
    const num = parseFloat(val);
    if (!val || isNaN(num) || num <= 0) { setState('empty'); return; }
    setState('loading-payout');
    loadTimer.current = setTimeout(() => {
      const payout = calcPayout(num);
      const conv   = num * EXCHANGE_RATE * CONVERSION_FEE;
      setUsdAmount(fmt(payout));
      setConvFee(conv);
      setState('filled');
    }, LOADING_MS);
  };

  // ── Handle USD input ─────────────────────────────────────────────────────────
  const onUsdChange = (val: string) => {
    clearTimers();
    setUsdAmount(val);
    setUsdtAmount('');
    const num = parseFloat(val);
    if (!val || isNaN(num) || num <= 0) { setState('empty'); return; }
    setState('loading-amount');
    loadTimer.current = setTimeout(() => {
      const usdt = calcUsdt(num);
      const conv = usdt * EXCHANGE_RATE * CONVERSION_FEE;
      setUsdtAmount(fmt(usdt, 6));
      setConvFee(conv);
      setState('filled');
    }, LOADING_MS);
  };

  const isFilled     = state === 'filled' || state === 'countdown' || state === 'refreshing';
  const isLoading    = state === 'loading-payout' || state === 'loading-amount' || state === 'refreshing';
  const canConfirm   = state === 'filled';
  const inCountdown  = state === 'countdown';

  // Derived fee values
  const usdtNum = parseFloat(usdtAmount) || 0;
  const convFeeDisplay  = isFilled ? fmt(convFee) : '0.50';
  const totalFeeDisplay = isFilled ? fmt(convFee + NETWORK_FEE_USD) : '2.99';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
         style={{ background: 'rgba(0,0,0,0.55)' }} onClick={onClose}>
      <div className="relative flex flex-col" style={{ width: 400 }} onClick={e => e.stopPropagation()}>

        {/* Dismiss */}
        <button className="absolute right-0 top-[-30px] flex items-center justify-center p-[4px] cursor-pointer" onClick={onClose}>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">Dismiss</p>
        </button>

        {/* Card */}
        <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full">

          {/* Title */}
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] whitespace-nowrap">BANK TRANSFER</p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)]">
              Choose the amount to send and the currency your bank will receive.
            </p>
          </div>

          {/* Form */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">

            {/* Amount (USDT) */}
            <SelectField label="AMOUNT"
              selector={
                <div className="content-stretch flex gap-[10px] items-center pl-[10px] pr-[20px] py-[5px] relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)]">USDT</p>
                  <UsdtBadge size={24} />
                </div>
              }>
              <input
                type="text" inputMode="decimal"
                value={usdtAmount}
                onChange={e => onUsdtChange(e.target.value)}
                placeholder="0"
                className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] tracking-[-0.6px] bg-transparent border-none outline-none w-full min-w-0 block"
                style={{ color: usdtAmount ? 'var(--cp-text-primary)' : 'var(--cp-text-quaternary)' }}
              />
            </SelectField>

            {/* Estimated Payout (USD) */}
            <SelectField label="ESTIMATED PAYOUT" labelInfo
              selector={
                <div className="content-stretch flex gap-[10px] items-center pl-[10px] pr-[20px] py-[5px] relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)]">USD</p>
                  <UsdBadge size={24} />
                </div>
              }>
              <div style={{height:29, display:'flex', alignItems:'center', width:'100%', minWidth:0}}>
                {state === 'loading-payout' ? (
                  <Skeleton width="100px" height={29} />
                ) : (
                  <input
                    type="text" inputMode="decimal"
                    value={usdAmount}
                    onChange={e => onUsdChange(e.target.value)}
                    placeholder="$0"
                    className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] tracking-[-0.6px] bg-transparent border-none outline-none w-full min-w-0 block"
                    style={{ color: usdAmount ? 'var(--cp-text-primary)' : 'var(--cp-text-quaternary)' }}
                  />
                )}
              </div>
            </SelectField>

            {/* Bank Account */}
            <SelectField label="BANK ACCOUNT" height={56}
              selector={
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]">
                  <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
                  <div className="overflow-clip relative shrink-0 size-[12px]">
                    <div className="absolute inset-[34.38%_21.88%]">
                      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 8 6">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.18306 0.18306C0.42714-0.06102 0.82286-0.06102 1.06694 0.18306L4 3.11612L6.93306 0.18306C7.17714-0.06102 7.57286-0.06102 7.81694 0.18306C8.06102 0.42714 8.06102 0.82286 7.81694 1.06694L4.44194 4.44194C4.19786 4.68602 3.80214 4.68602 3.55806 4.44194L0.18306 1.06694C-0.06102 0.82286-0.06102 0.42714 0.18306 0.18306Z" fill="var(--cp-text-quinary)"/>
                      </svg>
                    </div>
                  </div>
                </div>
              }>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">Wise</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-tertiary)] overflow-hidden text-ellipsis whitespace-nowrap">
                GB97TRWI23080120507810
              </p>
            </SelectField>

            {/* Add Note */}
            <SelectField label="ADD NOTE" height={56}>
              <input
                type="text"
                value={note}
                onChange={e => setNote(e.target.value)}
                placeholder="Optional description or reference"
                className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] bg-transparent border-none outline-none w-full min-w-0 block"
                style={{ color: note ? 'var(--cp-text-primary)' : 'var(--cp-text-quaternary)' }}
              />
            </SelectField>
          </div>

          {/* Fee Summary */}
          <div className="bg-[var(--cp-bg-1)] content-stretch flex flex-col gap-[10px] items-start p-[10px] relative rounded-[5px] shrink-0 w-full">

            {/* Currency switcher */}
            <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
              <div className="content-stretch flex gap-[5px] items-center justify-center relative shrink-0">
                <div className="content-stretch flex gap-[5px] items-center justify-center p-[10px] relative rounded-[5px] shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-black whitespace-nowrap">USDT</p>
                  <UsdtBadge size={14} />
                </div>
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
                <div className="bg-[var(--cp-bg-2)] content-stretch flex gap-[5px] items-center justify-center p-[10px] relative rounded-[5px] shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-black whitespace-nowrap">USD</p>
                  <UsdBadge size={14} />
                </div>
              </div>
            </div>

            {/* Exchange Rate */}
            <div className="content-stretch flex items-center justify-between py-[10px] relative shrink-0 w-full border-b border-[var(--cp-border-default)] border-solid" style={{height:33}}>
              <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-secondary)] whitespace-nowrap">Exchange Rate</p>
                <InfoIcon />
              </div>
              {isLoading ? <Skeleton width="70px" /> : (
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] text-right whitespace-nowrap">
                  <span className="font-bold">≈</span>$0.99 USD
                </p>
              )}
            </div>

            {/* Fees section */}
            <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-secondary)] w-full">Fees</p>

              {/* Conversion fee */}
              <div className="content-stretch flex items-center justify-between py-[10px] relative shrink-0 w-full border-b border-[var(--cp-border-default)] border-solid" style={{height:33}}>
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] whitespace-nowrap">Conversion fee (0.5%)</p>
                  <InfoIcon />
                </div>
                {isLoading ? <Skeleton width="70px" /> : (
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] text-right whitespace-nowrap">
                    <span className="font-bold">≈</span>${convFeeDisplay} USD
                  </p>
                )}
              </div>

              {/* Network fee */}
              <div className="content-stretch flex items-center justify-between py-[10px] relative shrink-0 w-full" style={{height:33}}>
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] whitespace-nowrap">Network fee</p>
                  <InfoIcon />
                </div>
                {isLoading ? <Skeleton width="70px" /> : (
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] text-right whitespace-nowrap">
                    <span className="font-bold">≈</span>$2.49 USD
                  </p>
                )}
              </div>
            </div>

            {/* Total fees */}
            <div className="bg-[var(--cp-bg-3)] content-stretch flex items-center justify-between p-[10px] relative rounded-[5px] shrink-0 w-full">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-primary)] whitespace-nowrap">Total fees</p>
              {isLoading ? <Skeleton width="70px" /> : (
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-primary)] text-right whitespace-nowrap">
                  <span className="font-['Inter:Bold',sans-serif] font-bold">≈</span>${totalFeeDisplay} USD
                </p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={onClose}>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">Cancel</p>
            </button>

            <button
              disabled={!canConfirm && !inCountdown}
              onClick={canConfirm ? startCountdown : undefined}
              className="content-stretch flex flex-1 h-[46px] items-center justify-center gap-[8px] overflow-clip px-[10px] relative rounded-[5px] transition-colors"
              style={{
                background: (canConfirm || inCountdown) ? 'var(--cp-brand-primary)' : 'var(--cp-bg-2)',
                cursor: canConfirm ? 'pointer' : inCountdown ? 'default' : 'not-allowed',
              }}>
              {inCountdown ? (
                <>
                  <CountdownRing seconds={countdown} total={COUNTDOWN_SEC} />
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white text-center whitespace-nowrap">
                    Confirming…
                  </p>
                </>
              ) : isLoading ? (
                <div className="w-[80px] h-[16px] rounded-[4px] bg-[rgba(255,255,255,0.3)] animate-pulse" />
              ) : (
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-center whitespace-nowrap"
                   style={{ color: canConfirm ? 'white' : 'var(--cp-text-secondary)' }}>
                  Confirm
                </p>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
