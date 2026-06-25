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
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { CurrencySwitcher, type CurrencySwitcherSelection, type SwitcherCoin } from './CurrencySwitcher';
import { SelectField } from './SelectField';
import { useBanks } from '../context/BankContext';
import { useTransactions } from '../context/TransactionContext';
import { useNavigate } from 'react-router';
import { truncateIban, truncateLabel } from '../utils';
import svgPaths from '../../imports/Wallet-2/svg-tfchl2zu4w';
import AddNewBankModal from './AddNewBankModal';
import BankUnderReviewWarningModal from './BankUnderReviewWarningModal';

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
      <svg viewBox="0 0 10 12" fill="none" style={{ width: size * 0.46, height: size * 0.46 }}>
        <text x="5" y="10" textAnchor="middle" fontSize="11" fontWeight="700" fill="white" fontFamily="Inter, sans-serif">₮</text>
      </svg>
    </div>
  );
}

function UsdBadge({ size = 24 }: { size?: number }) {
  return (
    <div className="rounded-[999px] flex items-center justify-center shrink-0"
         style={{ width: size, height: size, border: '1px solid var(--cp-brand-primary)' }}>
      <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[var(--cp-brand-primary)] leading-none select-none" style={{ fontSize: size * 0.38 }}>$</span>
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

function EmptyBankField({ onAddBank }: { onAddBank: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="bg-white flex h-[56px] items-center justify-between p-[10px] relative rounded-[5px] w-full shrink-0"
      style={{ border: `1px solid ${hovered ? 'var(--cp-border-hover)' : 'var(--cp-border-default)'}`, transition: 'border-color 0.1s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col h-full items-start justify-between shrink-0 flex-1 min-w-0">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">Bank Account</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-quinary)] whitespace-nowrap">No bank account</p>
      </div>
      <div className="flex items-center self-stretch shrink-0">
        <button
          className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-brand-primary)] whitespace-nowrap pr-[10px] self-center cursor-pointer hover:underline"
          onClick={onAddBank}
        >
          Add Bank
        </button>
      </div>
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

type State = 'empty' | 'loading-payout' | 'loading-amount' | 'filled' | 'countdown' | 'refreshing';

type CoinData = { name: string; symbol: string; logo?: 'btc' | 'usdt-erc20' | 'usdc-erc20' | 'usdt-trc20' };

function UsdcBadge({ size = 24 }: { size?: number }) {
  return (
    <div className="rounded-[999px] bg-[#2775CA] flex items-center justify-center shrink-0"
         style={{ width: size, height: size }}>
      <span className="text-white font-bold leading-none select-none" style={{ fontSize: size * 0.42 }}>$</span>
    </div>
  );
}

function CoinBadge({ coin, size = 24 }: { coin?: CoinData; size?: number }) {
  if (coin?.logo === 'usdc-erc20') return <UsdcBadge size={size} />;
  return <UsdtBadge size={size} />;
}

export default function BankPayoutModal({ onClose, coin }: { onClose: () => void; coin?: CoinData }) {
  const { banks, primaryId } = useBanks();
  const { addTransaction } = useTransactions();
  const navigate = useNavigate();
  const approvedBanks = banks.filter(b => b.status === 'approved');
  const [selectedBankId, setSelectedBankId] = useState(primaryId);
  const [modalStep, setModalStep] = useState<'payout' | 'under-review-warning' | '2fa' | 'complete' | 'add-bank'>('payout');
  const [twoFaCode, setTwoFaCode] = useState('');
  const [twoFaFocused, setTwoFaFocused] = useState(false);
  const [twoFaHovered, setTwoFaHovered] = useState(false);
  const [bankOpen, setBankOpen] = useState(false);
  const bankDropdownRef = useRef<HTMLDivElement>(null);
  const selectedBank = banks.find(b => b.id === selectedBankId) ?? banks[0];

  // Under Review badge takes ~90px — always truncate IBAN when badge is visible
  const showUnderReviewBadge = selectedBank?.status === 'under_review';

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (bankDropdownRef.current && !bankDropdownRef.current.contains(e.target as Node)) setBankOpen(false);
    };
    if (bankOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [bankOpen]);

  const [usdtAmount, setUsdtAmount]     = useState('');
  const [usdAmount, setUsdAmount]       = useState('');
  const [note, setNote]                 = useState('');
  const [state, setState]               = useState<State>('empty');
  const [countdown, setCountdown]       = useState(COUNTDOWN_SEC);
  const [convFee, setConvFee]           = useState(0);
  const [feeCurrency, setFeeCurrency]   = useState<CurrencySwitcherSelection>('to');
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
          // Expire — briefly show refreshing then restart with same values
          setState('refreshing');
          setTimeout(() => {
            setState('filled'); // will trigger useEffect → startCountdown again
          }, 800);
          return COUNTDOWN_SEC;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  // ── Auto-start countdown when quote is ready (only if a bank is selected) ────
  useEffect(() => {
    if (state === 'filled' && banks.length > 0) {
      startCountdown();
    }
  }, [state === 'filled']);
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

  const [amountFocused, setAmountFocused] = useState(false);
  const [payoutFocused, setPayoutFocused] = useState(false);

  const isFilled     = state === 'filled' || state === 'countdown' || state === 'refreshing';
  const isLoading    = state === 'loading-payout' || state === 'loading-amount' || state === 'refreshing';
  const hasBank      = banks.length > 0;
  const inCountdown  = state === 'countdown' && hasBank;

  // Derived fee values
  const usdtNum = parseFloat(usdtAmount) || 0;
  const convFeeDisplay  = isFilled ? fmt(convFee) : '0.50';
  const totalFeeDisplay = isFilled ? fmt(convFee + NETWORK_FEE_USD) : '2.99';

  // Redenominated fee values (USDT = USD / EXCHANGE_RATE)
  const convFeeFrom  = isFilled ? fmt(convFee / EXCHANGE_RATE) : fmt(0.50 / EXCHANGE_RATE);
  const netFeeFrom   = fmt(NETWORK_FEE_USD / EXCHANGE_RATE);
  const totalFeeFrom = isFilled ? fmt((convFee + NETWORK_FEE_USD) / EXCHANGE_RATE) : fmt(2.99 / EXCHANGE_RATE);

  const fromCoin = (coin?.logo === 'usdc-erc20' ? 'usdc' : 'usdt') as SwitcherCoin;
  const fromLabel = coin?.symbol.split('.')[0] ?? 'USDT';
  const toCoin: SwitcherCoin = 'usd';
  const payoutId = 'USD';

  const showFromFees = feeCurrency === 'from';
  const feeConvDisplay  = showFromFees ? `${convFeeFrom} ${fromLabel}` : `$${convFeeDisplay} ${payoutId}`;
  const feeNetDisplay   = showFromFees ? `${netFeeFrom} ${fromLabel}` : `$2.49 ${payoutId}`;
  const feeTotalDisplay = showFromFees ? `${totalFeeFrom} ${fromLabel}` : `$${totalFeeDisplay} ${payoutId}`;

  // ── Add Bank step (swap) ──────────────────────────────────────────────────────
  if (modalStep === 'add-bank') {
    return (
      <AddNewBankModal onClose={() => setModalStep('payout')} onBankAdded={(id) => { setSelectedBankId(id); setModalStep('payout'); }} />
    );
  }

  if (modalStep === 'under-review-warning') {
    return (
      <BankUnderReviewWarningModal
        onCancel={() => setModalStep('payout')}
        onProceed={() => setModalStep('2fa')}
      />
    );
  }

  // ── Complete toast ────────────────────────────────────────────────────────────
  if (modalStep === 'complete') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div
          className="flex flex-col gap-[20px] items-center justify-center rounded-[14px]"
          style={{ background: 'rgba(0,0,0,0.82)', width: 160, height: 160 }}
        >
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <path d="M10 27L21 38L42 17" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-white text-center whitespace-nowrap">Complete</p>
        </div>
      </div>
    );
  }

  // ── 2FA step ─────────────────────────────────────────────────────────────────
  if (modalStep === '2fa') {
    const canSubmit = twoFaCode.replace(/\D/g, '').length >= 2;
    const twoFaBorderColor = twoFaFocused
      ? 'var(--cp-brand-primary)'
      : twoFaHovered ? 'var(--cp-border-hover)' : 'var(--cp-border-default)';

    const handleSubmit = () => {
      if (!canSubmit) return;
      const isUnderReview = selectedBank?.status === 'under_review';
      const now = new Date();
      const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
      const iban = (selectedBank?.iban ?? '').replace(/\s/g, '');
      addTransaction({
        date: `${months[now.getMonth()]} ${now.getDate()}`,
        time: `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`,
        type: 'bank-payout',
        label: 'Bank Payout',
        status: isUnderReview ? 'pending' : 'completed',
        coin: coin?.logo === 'usdc-erc20' ? 'usdc' : 'usdt',
        currency: 'usd',
        currencyName: 'United States Dollar',
        destination: `To: ${selectedBank?.label ?? ''}${iban ? ` (${iban})` : ''}`,
        amount: `-${usdAmount} USD`,
        amountSub: `from ${usdtAmount} ${coin?.symbol ?? 'USDT'}`,
        expandable: true,
        settlementDestination: `${selectedBank?.label ?? ''}${iban ? ` – ${iban}` : ''}`,
        settlementMode: `Manual bank payout (${coin?.symbol ?? 'USDT'})`,
        note: note || undefined,
        sourceCoinName: coin?.name ?? 'Tether USD',
        txAmountUsd: `$${usdtAmount} USD`,
        txFeeUsd: `$${fmt(convFee)} USD`,
        networkFeeUsd: `$${fmt(NETWORK_FEE_USD)} USD`,
        txTotalUsd: `-${usdAmount} USD`,
      });
      setModalStep('complete');
      setTimeout(() => onClose(), 2000);
    };

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: 'var(--cp-bg-overlay-scrim)' }}
        onClick={() => setModalStep('payout')}
      >
        <div className="relative flex flex-col" style={{ width: 400 }} onClick={e => e.stopPropagation()}>
          <button
            className="absolute right-0 top-[-30px] flex items-center justify-center p-[4px] cursor-pointer"
            onClick={() => setModalStep('payout')}
          >
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">Dismiss</p>
          </button>

          <div className="bg-white flex flex-col items-start p-[20px] rounded-[10px] w-full gap-[20px]">
            <div className="flex flex-col gap-[20px] items-start w-full">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] uppercase whitespace-nowrap leading-none">
                CONFIRMATION
              </p>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-[1.4]">
                Please enter your authenticator app 2FA code.
              </p>
            </div>

            <div
              className="bg-white relative rounded-[5px] shrink-0 w-full cursor-text"
              style={{ border: `1px solid ${twoFaBorderColor}`, transition: 'border-color 0.1s', minHeight: 83 }}
              onMouseEnter={() => setTwoFaHovered(true)}
              onMouseLeave={() => setTwoFaHovered(false)}
            >
              <div className="flex flex-col items-start justify-between p-[10px]" style={{ minHeight: 83 }}>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">
                  CONFIRMATION CODE
                </p>
                <input
                  type="text"
                  inputMode="numeric"
                  value={twoFaCode}
                  onChange={e => setTwoFaCode(e.target.value)}
                  onFocus={() => setTwoFaFocused(true)}
                  onBlur={() => setTwoFaFocused(false)}
                  autoFocus
                  className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-[var(--cp-text-primary)] bg-transparent border-none outline-none w-full min-w-0 mt-[10px]"
                  style={{ letterSpacing: '-0.6px', caretColor: 'var(--cp-brand-primary)' }}
                />
              </div>
            </div>

            <div className="flex gap-[10px] items-center w-full">
              <button
                className="bg-white border border-[var(--cp-border-default)] border-solid flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
                onClick={() => setModalStep('payout')}
              >
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">Cancel</p>
              </button>
              <button
                disabled={!canSubmit}
                className={`flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] transition-colors ${canSubmit ? 'bg-[var(--cp-brand-primary)] hover:bg-[var(--cp-brand-active)] cursor-pointer' : 'bg-[var(--cp-bg-2)] cursor-not-allowed'}`}
                onClick={handleSubmit}
              >
                <p className={`font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-center whitespace-nowrap ${canSubmit ? 'text-white' : 'text-[var(--cp-text-secondary)]'}`}>Submit</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Payout step ───────────────────────────────────────────────────────────────
  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center"
         style={{ background: 'var(--cp-bg-overlay-scrim)' }} onClick={onClose}>
      <div className="relative flex flex-col" style={{ width: 400 }} onClick={e => e.stopPropagation()}>

        {/* Dismiss */}
        <button className="absolute right-0 top-[-30px] flex items-center justify-center p-[4px] cursor-pointer" onClick={onClose}>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-white">Dismiss</p>
        </button>

        {/* Card */}
        <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[10px] w-full" style={{ minHeight: 616 }}>

          {/* Title */}
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] whitespace-nowrap">BANK TRANSFER</p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)]">
              Choose the amount to send and the currency your bank will receive.
            </p>
          </div>

          {/* Form */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">

            {/* Amount (USDT) */}
            <div className="relative w-full shrink-0">
              <SelectField label="AMOUNT" focused={amountFocused}
                selector={
                  <div className="content-stretch flex gap-[5px] items-center relative self-stretch shrink-0">
                    <div className="content-stretch flex gap-[10px] items-center pl-[10px] pr-[20px] py-[5px] relative shrink-0">
                      <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)]">{coin?.symbol.split('.')[0] ?? 'USDT'}</p>
                      <CoinBadge coin={coin} size={24} />
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]">
                      <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
                      <div className="overflow-clip relative shrink-0 size-[12px]">
                        <div className="absolute inset-[34.38%_21.88%]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.74999 3.74999">
                            <path clipRule="evenodd" d="M0.292893,0.292893C0.455612,0.130168,0.719387,0.130168,0.882107,0.292893L3.375,2.78579L5.86789,0.292893C6.03061,0.130168,6.29439,0.130168,6.45711,0.292893C6.61983,0.455612,6.61983,0.719387,6.45711,0.882107L3.66961,3.66961C3.50688,3.83233,3.24312,3.83233,3.08039,3.66961L0.292893,0.882107C0.130168,0.719387,0.130168,0.455612,0.292893,0.292893Z" fill="var(--cp-text-quinary)" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                }>
                <input
                  type="text" inputMode="decimal"
                  value={usdtAmount}
                  onChange={e => onUsdtChange(e.target.value)}
                  onFocus={() => setAmountFocused(true)}
                  onBlur={() => setAmountFocused(false)}
                  placeholder="0"
                  className="font-['Inter',sans-serif] font-bold text-[24px] bg-transparent border-none outline-none w-full min-w-0 block"
                  style={{ letterSpacing: '-1px', color: usdtAmount ? 'var(--cp-text-primary)' : 'var(--cp-text-quaternary)' }}
                />
              </SelectField>
              {amountFocused && (
                <div
                  className="absolute left-0 right-0 px-[10px] py-[6px] rounded-b-[5px] z-10"
                  style={{ top: '100%', background: 'var(--cp-brand-primary)', border: '1px solid var(--cp-brand-primary)', borderTop: 'none' }}
                >
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-[1.2]">Available Balance: 235.87 USDT</p>
                </div>
              )}
            </div>

            {/* Estimated Payout (USD) */}
            <div className="relative w-full shrink-0">
              <SelectField label="ESTIMATED PAYOUT" labelInfo labelInfoTooltip="Payouts are calculated using the live market rate at the time of transfer. The final amount may vary due to exchange rate fluctuations." focused={payoutFocused}
                selector={
                  <div className="content-stretch flex gap-[5px] items-center relative self-stretch shrink-0">
                    <div className="content-stretch flex gap-[10px] items-center pl-[10px] pr-[20px] py-[5px] relative shrink-0">
                      <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)]">USD</p>
                      <UsdBadge size={24} />
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]">
                      <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
                      <div className="overflow-clip relative shrink-0 size-[12px]">
                        <div className="absolute inset-[34.38%_21.88%]">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.74999 3.74999">
                            <path clipRule="evenodd" d="M0.292893,0.292893C0.455612,0.130168,0.719387,0.130168,0.882107,0.292893L3.375,2.78579L5.86789,0.292893C6.03061,0.130168,6.29439,0.130168,6.45711,0.292893C6.61983,0.455612,6.61983,0.719387,6.45711,0.882107L3.66961,3.66961C3.50688,3.83233,3.24312,3.83233,3.08039,3.66961L0.292893,0.882107C0.130168,0.719387,0.130168,0.455612,0.292893,0.292893Z" fill="var(--cp-text-quinary)" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                }>
                {state === 'loading-payout' ? (
                  <Skeleton width="100px" height={29} />
                ) : (
                  <input
                    type="text" inputMode="decimal"
                    value={usdAmount}
                    onChange={e => onUsdChange(e.target.value)}
                    onFocus={() => setPayoutFocused(true)}
                    onBlur={() => setPayoutFocused(false)}
                    placeholder="$0"
                    className="font-['Inter',sans-serif] font-bold text-[24px] bg-transparent border-none outline-none w-full min-w-0 block"
                    style={{ letterSpacing: '-1px', color: usdAmount ? 'var(--cp-text-primary)' : 'var(--cp-text-quaternary)' }}
                  />
                )}
              </SelectField>
              {payoutFocused && (
                <div
                  className="absolute left-0 right-0 px-[10px] py-[6px] rounded-b-[5px] z-10"
                  style={{ top: '100%', background: 'var(--cp-brand-primary)', border: '1px solid var(--cp-brand-primary)', borderTop: 'none' }}
                >
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-[1.2]">Exchange Rate: 1 USDT = $ 0.99</p>
                </div>
              )}
            </div>

            {/* Bank Account */}
            {banks.length === 0 ? (
              <EmptyBankField onAddBank={() => setModalStep('add-bank')} />
            ) : (
            <div className="relative w-full shrink-0" ref={bankDropdownRef} style={{ overflow: 'visible' }}>
              <div
                className="bg-white cursor-pointer flex h-[56px] items-start justify-between p-[10px] relative rounded-[5px] w-full"
                style={{ border: '1px solid var(--cp-border-default)' }}
                onClick={() => setBankOpen(o => !o)}
              >
                <div className="flex flex-col h-full items-start justify-between shrink-0 flex-1 min-w-0">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">Bank Account</p>
                  <div className="flex gap-[5px] items-center min-w-0 overflow-hidden w-full">
                    <p className={`font-['Inter:Medium',sans-serif] font-medium text-[14.5px] whitespace-nowrap overflow-hidden text-ellipsis shrink-0 max-w-[50%] ${approvedBanks.length === 0 ? 'opacity-60 text-[var(--cp-text-primary)]' : 'text-[var(--cp-text-primary)]'}`}>
                      {truncateLabel(selectedBank?.label ?? banks[0]?.label ?? '---')}
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap shrink-0">
                      {(() => { const iban = (selectedBank?.iban ?? banks[0]?.iban ?? '').replace(/\s/g, ''); return showUnderReviewBadge ? truncateIban(iban, 5, 4) : iban; })()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center self-stretch shrink-0">
                  {showUnderReviewBadge && (
                    <span className="bg-orange-100 text-orange-600 font-['Inter:Semi_Bold',sans-serif] font-semibold text-[9px] uppercase px-[5px] py-[2px] rounded-[3px] whitespace-nowrap shrink-0 mr-[8px]">Under Review</span>
                  )}
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px] self-stretch">
                    <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
                    <div className={`overflow-clip relative shrink-0 size-[12px] transition-transform duration-150 ${bankOpen ? 'rotate-180' : ''}`}>
                      <div className="absolute inset-[34.38%_21.88%]">
                        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 6.74999 3.74999">
                          <path clipRule="evenodd" d="M0.292893,0.292893C0.455612,0.130168,0.719387,0.130168,0.882107,0.292893L3.375,2.78579L5.86789,0.292893C6.03061,0.130168,6.29439,0.130168,6.45711,0.292893C6.61983,0.455612,6.61983,0.719387,6.45711,0.882107L3.66961,3.66961C3.50688,3.83233,3.24312,3.83233,3.08039,3.66961L0.292893,0.882107C0.130168,0.719387,0.130168,0.455612,0.292893,0.292893Z" fill="var(--cp-text-quinary)" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {bankOpen && (
                <div className="absolute bg-white left-0 w-full z-50 rounded-[5px]"
                  style={{ top: 60, boxShadow: '0 4px 16px rgba(0,0,0,0.12)', border: '1px solid var(--cp-border-hover)' }}
                  onClick={e => e.stopPropagation()}>
                  <div className="flex flex-col gap-[20px] p-[10px]">
                    <div className="flex flex-col gap-[5px]">
                      {[
                        ...banks.filter(b => b.id === selectedBank?.id),
                        ...approvedBanks.filter(b => b.id !== selectedBank?.id),
                        ...banks.filter(b => b.status === 'under_review' && b.id !== selectedBank?.id),
                      ].map(bank => {
                        const isUnderReview = bank.status === 'under_review';
                        const isSelected = bank.id === selectedBank?.id;
                        return (
                          <div key={bank.id}
                            className={`relative rounded-[5px] shrink-0 w-full transition-colors ${isSelected ? 'bg-[var(--cp-brand-primary)] cursor-pointer' : 'bg-white hover:bg-[var(--cp-bg-1)] cursor-pointer'}`}
                            onClick={() => { setSelectedBankId(bank.id); setBankOpen(false); }}>
                            {!isSelected && <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />}
                            <div className="flex items-center justify-between p-[10px]">
                              <div className="flex flex-col items-start">
                                <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] ${isSelected ? 'text-white' : 'text-[var(--cp-text-primary)]'}`}>{bank.label}</p>
                                <p className={`font-['Inter:Medium',sans-serif] font-medium text-[11px] ${isSelected ? 'text-white/80' : 'text-[var(--cp-text-secondary)]'}`}>{bank.iban.replace(/\s/g, '')}</p>
                              </div>
                              {isUnderReview && <span className={`font-semibold text-[9px] uppercase px-[5px] py-[2px] rounded-[3px] whitespace-nowrap shrink-0 ${isSelected ? 'bg-white/20 text-white border border-white/30' : 'bg-orange-100 text-orange-600'}`}>Under Review</span>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      {[
                        { label: 'Add New Bank', action: () => { setBankOpen(false); setModalStep('add-bank'); } },
                        { label: 'Manage Bank Accounts', action: () => { setBankOpen(false); onClose(); navigate('/bank-accounts'); } },
                      ].map(({ label, action }) => (
                        <button key={label} className="bg-white border border-[var(--cp-border-default)] border-solid cursor-pointer flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0 w-full hover:bg-[var(--cp-bg-1)] transition-colors text-left" onClick={action}>
                          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-brand-primary)]">{label}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            )}

            {/* Add Note */}
            <SelectField label="ADD NOTE" height={56}>
              <input
                type="text"
                value={note}
                onChange={e => setNote(e.target.value)}
                placeholder="Optional description or reference"
                className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] bg-transparent border-none outline-none w-full min-w-0 block placeholder:text-[var(--cp-text-quinary)]"
                style={{ color: note ? 'var(--cp-text-primary)' : 'var(--cp-text-quinary)' }}
              />
            </SelectField>
          </div>

          {/* Fee Summary */}
          <div className="bg-[var(--cp-bg-1)] content-stretch flex flex-col gap-[10px] items-start p-[10px] relative rounded-[5px] shrink-0 w-full">

            {/* Exchange Rate row */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-secondary)] whitespace-nowrap">Estimated Exchange Rate</p>
                <InfoIcon />
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] whitespace-nowrap">1 USDT = $0.99</p>
            </div>

            {/* Currency switcher */}
            <CurrencySwitcher
              fromCoin={fromCoin}
              fromLabel={fromLabel}
              toCoin={toCoin}
              toLabel={payoutId}
              selected={feeCurrency}
              onSelect={setFeeCurrency}
              size="lg"
            />

            {/* Divider */}
            <div className="bg-[var(--cp-border-default)] h-px relative shrink-0 w-full" />

            {/* Fees section */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full gap-0">

              {/* Fees title */}
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-secondary)] pb-[4px]">Fees</p>

              {/* Conversion fee */}
              <div className="content-stretch flex items-center justify-between py-[8px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] whitespace-nowrap">Conversion fee (0.5%)</p>
                  <InfoIcon />
                </div>
                <div className="flex items-center justify-end" style={{ height: 13 }}>
                  {isLoading ? <Skeleton width="70px" /> : (
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] text-right whitespace-nowrap leading-none">
                      <span className="font-['Inter:Bold',sans-serif] font-bold">≈</span>{' '}{feeConvDisplay}
                    </p>
                  )}
                </div>
              </div>

              {/* Network fee */}
              <div className="content-stretch flex items-center justify-between py-[8px] relative shrink-0 w-full">
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] whitespace-nowrap">Network fee</p>
                  <InfoIcon />
                </div>
                <div className="flex items-center justify-end" style={{ height: 13 }}>
                  {isLoading ? <Skeleton width="70px" /> : (
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-tertiary)] text-right whitespace-nowrap leading-none">
                      <span className="font-['Inter:Bold',sans-serif] font-bold">≈</span>{' '}{feeNetDisplay}
                    </p>
                  )}
                </div>
              </div>

              {/* Total fees */}
              <div className="bg-[var(--cp-bg-3,#e5e9f2)] content-stretch flex items-center justify-between p-[10px] relative rounded-[5px] shrink-0 w-full mt-[4px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-primary)] whitespace-nowrap">Total fees</p>
                <div className="flex items-center justify-end" style={{ height: 13 }}>
                  {isLoading ? <Skeleton width="70px" /> : (
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-primary)] text-right whitespace-nowrap leading-none">
                      <span>≈</span>{' '}{feeTotalDisplay}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <button
              className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch flex flex-1 h-[46px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] cursor-pointer hover:bg-[var(--cp-bg-2)] transition-colors"
              onClick={onClose}>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-secondary)] text-center whitespace-nowrap">Cancel</p>
            </button>

            <button
              disabled={!inCountdown}
              onClick={inCountdown ? () => setModalStep(selectedBank?.status === 'under_review' ? 'under-review-warning' : '2fa') : undefined}
              className="content-stretch flex flex-1 h-[46px] items-center justify-center gap-[8px] overflow-clip px-[10px] relative rounded-[5px] transition-colors"
              style={{
                background: inCountdown ? 'var(--cp-brand-primary)' : 'var(--cp-bg-2)',
                cursor: inCountdown ? 'pointer' : 'not-allowed',
              }}>
              {inCountdown ? (
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-white text-center whitespace-nowrap">
                  Confirm ({countdown}s)
                </p>
              ) : isLoading ? (
                <div className="w-[80px] h-[16px] rounded-[4px] bg-[rgba(0,0,0,0.1)] animate-pulse" />
              ) : (
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-center whitespace-nowrap"
                   style={{ color: 'var(--cp-text-secondary)' }}>
                  Confirm
                </p>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>

    </>
  );
}
