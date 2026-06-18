import { useState } from 'react';

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconAllTransactions({ active }: { active: boolean }) {
  const color = active ? 'white' : 'var(--cp-text-tertiary)';
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM0.5 8a7.5 7.5 0 1 1 15 0A7.5 7.5 0 0 1 0.5 8Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v2.793l1.854 1.853a.5.5 0 0 1-.708.708l-2-2A.5.5 0 0 1 7.5 8V5a.5.5 0 0 1 .5-.5Z" fill={color}/>
    </svg>
  );
}

function IconReceive({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 12.3758 12.2171" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.18791 10.3001C5.92045 10.3001 5.70364 10.0833 5.70364 9.81578V0.68428C5.70364 0.41682 5.92045 0.2 6.18791 0.2C6.45536 0.2 6.67218 0.41682 6.67218 0.68428V9.81578C6.67218 10.0833 6.45536 10.3001 6.18791 10.3001Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.0961 4.9076C11.2852 5.09672 11.2852 5.40334 11.0961 5.59246L6.53034 10.1582C6.34122 10.3474 6.0346 10.3474 5.84548 10.1582L1.27972 5.59246C1.0906 5.40334 1.0906 5.09672 1.27972 4.9076C1.46884 4.71848 1.77546 4.71848 1.96458 4.9076L6.18791 9.13088L10.4112 4.9076C10.6004 4.71848 10.907 4.71848 11.0961 4.9076Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 11.7262C0 11.4551 0.21978 11.2353 0.49089 11.2353H11.885C12.1561 11.2353 12.3758 11.4551 12.3758 11.7262C12.3758 11.9973 12.1561 12.2171 11.885 12.2171H0.49089C0.21978 12.2171 0 11.9973 0 11.7262Z" fill={color}/>
    </svg>
  );
}

function IconSend({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 9.40295 9.40295" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.0493 0.35367C9.2542 0.55856 9.2542 0.89076 9.0493 1.09565L1.09572 9.0492C0.89083 9.2541 0.55864 9.2541 0.35375 9.0492C0.14886 8.8443 0.14886 8.5122 0.35375 8.3073L8.3073 0.35367C8.5122 0.14878 8.8444 0.14878 9.0493 0.35367Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.15816 0.72466C1.15816 0.4349 1.39305 0.2 1.68282 0.2H8.6783C8.968 0.2 9.2029 0.4349 9.2029 0.72466V7.7201C9.2029 8.0099 8.968 8.2448 8.6783 8.2448C8.3885 8.2448 8.1536 8.0099 8.1536 7.7201V1.24932H1.68282C1.39305 1.24932 1.15816 1.01442 1.15816 0.72466Z" fill={color}/>
    </svg>
  );
}

function IconConversions({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 10.8835 13.0339" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.8447 0.318097C8.0022 0.160637 8.2575 0.160637 8.4149 0.318097L10.5654 2.46856C10.7229 2.62602 10.7229 2.88132 10.5654 3.03878L8.4149 5.18924C8.2575 5.34671 8.0022 5.34671 7.8447 5.18924C7.6872 5.03178 7.6872 4.77648 7.8447 4.61902L9.7101 2.75367L7.8447 0.888327C7.6872 0.730857 7.6872 0.475557 7.8447 0.318097Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.75368 3.15683C2.29028 3.15683 1.84586 3.34091 1.51818 3.66859C1.19051 3.99626 1.00643 4.44068 1.00643 4.90408V5.97931C1.00643 6.202 0.825897 6.38252 0.603217 6.38252C0.380527 6.38252 0.200007 6.202 0.200007 5.97931V4.90408C0.200007 4.2268 0.469048 3.58217 0.948028 3.10319C1.42701 2.62421 2.07164 2.35517 2.75368 2.35517H10.2803C10.6134 2.35517 10.8835 2.62523 10.8835 2.95838C10.8835 3.29152 10.6134 3.56159 10.2803 3.56159H2.75368V3.15683Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.03879 7.84468C3.19625 8.00214 3.19625 8.25744 3.03879 8.4149L1.17344 10.2803L3.03879 12.1456C3.19625 12.3031 3.19625 12.5584 3.03879 12.7158C2.88132 12.8733 2.62603 12.8733 2.46856 12.7158L0.318097 10.5654C0.160637 10.4079 0.160637 10.1526 0.318097 9.99513L2.46856 7.84468C2.62603 7.68722 2.88132 7.68722 3.03879 7.84468Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.2803 6.65138C10.503 6.65138 10.6835 6.8319 10.6835 7.05459V8.12982C10.6835 8.80708 10.4144 9.45658 9.9355 9.93558C9.4566 10.4145 8.8071 10.6835 8.1298 10.6835H0.603217C0.380527 10.6835 0.200007 10.503 0.200007 10.2803C0.200007 10.0576 0.380527 9.877 0.603217 9.877H8.1298C8.5401 9.877 8.9337 9.71399 9.2239 9.42382C9.514 9.13365 9.677 8.7401 9.677 8.12982V7.05459C9.677 6.8319 9.8575 6.65138 10.2803 6.65138Z" fill={color}/>
    </svg>
  );
}

function IconInvoices({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg width="13" height="14" viewBox="0 0 13 15" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 1.5h10v12H1.5V1.5ZM0 1.5C0 0.671573 0.671573 0 1.5 0h10c0.82843 0 1.5 0.671573 1.5 1.5v12c0 0.82843-0.67157 1.5-1.5 1.5H1.5C0.671573 15 0 14.32843 0 13.5V1.5ZM3 4.5h7V6H3V4.5ZM3 7.5h7V9H3V7.5ZM3 10.5h4.5V12H3V10.5Z" fill={color}/>
    </svg>
  );
}

function IconPayments({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 0.895431 0.895431 0 2 0H12C13.1046 0 14 0.895431 14 2V10C14 11.1046 13.1046 12 12 12H2C0.895431 12 0 11.1046 0 10V2ZM2 1.5C1.72386 1.5 1.5 1.72386 1.5 2V3.5H12.5V2C12.5 1.72386 12.2761 1.5 12 1.5H2ZM12.5 5H1.5V10C1.5 10.2761 1.72386 10.5 2 10.5H12C12.2761 10.5 12.5 10.2761 12.5 10V5ZM3 7.5H5V8.5H3V7.5ZM6 7.5H8V8.5H6V7.5Z" fill={color}/>
    </svg>
  );
}

function IconBankPayout() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 0.5L15.5 4.5H0.5L8 0.5Z" fill="currentColor"/>
      <rect x="1.5" y="6" width="2" height="6" fill="currentColor"/>
      <rect x="5" y="6" width="2" height="6" fill="currentColor"/>
      <rect x="8.5" y="6" width="2" height="6" fill="currentColor"/>
      <rect x="12" y="6" width="2" height="6" fill="currentColor"/>
      <rect x="0.5" y="13" width="15" height="1.5" fill="currentColor"/>
      <rect x="0.5" y="15" width="15" height="1" rx="0.5" fill="currentColor"/>
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM0.5 6a5.5 5.5 0 1 1 11 0A5.5 5.5 0 0 1 0.5 6Z" fill="var(--cp-text-quaternary)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.646 9.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708Z" fill="var(--cp-text-quaternary)"/>
    </svg>
  );
}

function IconChevron() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.455612 0.130174 0.719387 0.130174 0.882107 0.292893L5 4.41078L9.11789 0.292893C9.28061 0.130174 9.54439 0.130174 9.70711 0.292893C9.86983 0.455612 9.86983 0.719387 9.70711 0.882107L5.29461 5.29461C5.13188 5.45733 4.86812 5.45733 4.70539 5.29461L0.292893 0.882107C0.130174 0.719387 0.130174 0.455612 0.292893 0.292893Z" fill="var(--cp-text-quaternary)"/>
    </svg>
  );
}

function IconExport() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 0.5a.5.5 0 0 1 .5.5v7.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L6.5 8.793V1a.5.5 0 0 1 .5-.5ZM1 10.5a.5.5 0 0 1 .5.5v1.5h11V11a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5Z" fill="var(--cp-brand-primary)"/>
    </svg>
  );
}

// ─── Mini coin logos ──────────────────────────────────────────────────────────

function UsdtMiniLogo() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute bg-[#50af95] inset-[1.22%_0_-1.22%_0] rounded-[999px] flex items-center justify-center">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path d="M13.5 7.5H10.5V5.5H5V8H7.5C7.5 10.4853 9.51472 12.5 12 12.5C14.4853 12.5 16.5 10.4853 16.5 8H19V5.5H13.5V7.5Z" fill="white"/>
          <path d="M12 13.5C9.51472 13.5 7.5 11.4853 7.5 9H5V11C5 13.5853 7.08579 15.671 9.5 15.9639V18.5H14.5V15.9639C16.9142 15.671 19 13.5853 19 11V9H16.5C16.5 11.4853 14.4853 13.5 12 13.5Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}

function BtcMiniLogo() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <div className="absolute inset-0 rounded-[999px] overflow-hidden">
        <svg className="absolute block inset-0 size-full" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="18" fill="#F7931A"/>
          <path d="M25.2 15.6c0.3-2.1-1.3-3.2-3.5-3.9l0.7-2.8-1.8-0.5-0.7 2.7-1.4-0.4 0.7-2.7-1.8-0.5-0.7 2.8-1.1-0.3-2.4-0.6-0.5 1.9s1.3 0.3 1.3 0.3c0.7 0.2 0.8 0.7 0.8 1l-0.8 3.2c0 0 0.1 0 0.2 0.1l-0.2-0.1-1.2 4.6c-0.1 0.2-0.3 0.6-0.9 0.5 0 0-1.3-0.3-1.3-0.3l-0.9 2.1 2.3 0.6 1.3 0.3-0.7 2.8 1.8 0.5 0.7-2.8 1.4 0.4-0.7 2.8 1.8 0.5 0.7-2.8c2.9 0.5 5.1 0.3 6-2.3 0.7-2.1-0.1-3.3-1.5-4.1 1.1-0.3 1.9-1 2.1-2.4Zm-3.7 5.2c-0.5 2.1-3.9 1-5 0.7l0.9-3.5c1.1 0.3 4.6 0.8 4.1 2.8Zm0.5-5.3c-0.5 1.9-3.3 0.9-4.3 0.7l0.8-3.2c1 0.3 3.9 0.7 3.5 2.5Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}

function UsdMiniLogo() {
  return (
    <div className="relative shrink-0 size-[14px] flex items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="7" fill="#1c60dd" opacity="0.15"/>
        <path d="M7.5 3.5V4.05C8.55 4.26 9.3 4.98 9.3 5.85C9.3 6.03 9.15 6.18 8.97 6.18C8.79 6.18 8.64 6.03 8.64 5.85C8.64 5.28 8.09 4.8 7.5 4.69V7.05C8.55 7.26 9.3 7.98 9.3 8.85C9.3 9.72 8.55 10.44 7.5 10.65V11.2C7.5 11.38 7.35 11.5 7.17 11.5C6.99 11.5 6.84 11.38 6.84 11.2V10.65C5.79 10.44 5.04 9.72 5.04 8.85C5.04 8.67 5.19 8.52 5.37 8.52C5.55 8.52 5.7 8.67 5.7 8.85C5.7 9.42 6.25 9.9 6.84 10.01V7.65C5.79 7.44 5.04 6.72 5.04 5.85C5.04 4.98 5.79 4.26 6.84 4.05V3.5C6.84 3.32 6.99 3.2 7.17 3.2C7.35 3.2 7.5 3.32 7.5 3.5ZM6.84 6.99V4.69C6.25 4.8 5.7 5.28 5.7 5.85C5.7 6.42 6.25 6.88 6.84 6.99ZM7.5 7.71V10.01C8.09 9.9 8.64 9.42 8.64 8.85C8.64 8.28 8.09 7.82 7.5 7.71Z" fill="#1c60dd"/>
      </svg>
    </div>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

type TxType = 'bank-payout' | 'received' | 'sent' | 'conversion';
type TxStatus = 'completed' | 'pending' | 'failed';

type Transaction = {
  id: string;
  date: string;
  time: string;
  type: TxType;
  label: string;
  status: TxStatus;
  currencyLogo: 'btc' | 'usdt' | 'usd';
  currencyName: string;
  destination: string;
  amount: string;
  amountSub: string;
};

const TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    date: 'JUN 3',
    time: '14:38',
    type: 'bank-payout',
    label: 'Bank Payout',
    status: 'completed',
    currencyLogo: 'usd',
    currencyName: 'United States Dollar',
    destination: 'To: Wise (GB97TRWI23080120507810)',
    amount: '-$1,250.00 USD',
    amountSub: 'from 1,286.50 USDT',
  },
  {
    id: '2',
    date: 'APR 28',
    time: '11:31',
    type: 'received',
    label: 'Received',
    status: 'completed',
    currencyLogo: 'btc',
    currencyName: 'Bitcoin',
    destination: 'To: internal address',
    amount: '+0.000000 BTC',
    amountSub: 'BTC',
  },
  {
    id: '3',
    date: 'APR 28',
    time: '11:31',
    type: 'received',
    label: 'Received',
    status: 'completed',
    currencyLogo: 'btc',
    currencyName: 'Bitcoin',
    destination: 'To: internal address',
    amount: '+0.000000 BTC',
    amountSub: 'BTC',
  },
  {
    id: '4',
    date: 'APR 28',
    time: '11:31',
    type: 'received',
    label: 'Received',
    status: 'completed',
    currencyLogo: 'btc',
    currencyName: 'Bitcoin',
    destination: 'To: internal address',
    amount: '+0.000000 BTC',
    amountSub: 'BTC',
  },
  {
    id: '5',
    date: 'APR 27',
    time: '09:14',
    type: 'sent',
    label: 'Sent',
    status: 'completed',
    currencyLogo: 'usdt',
    currencyName: 'Tether USD',
    destination: 'To: 0x1a2b3c...8d9e0f',
    amount: '-500.00 USDT',
    amountSub: 'USDT',
  },
  {
    id: '6',
    date: 'APR 26',
    time: '16:52',
    type: 'conversion',
    label: 'Conversion',
    status: 'completed',
    currencyLogo: 'btc',
    currencyName: 'Bitcoin',
    destination: 'BTC → USDT',
    amount: '+1,286.50 USDT',
    amountSub: 'from 0.01842 BTC',
  },
];

// ─── Tab bar ──────────────────────────────────────────────────────────────────

type Tab = { id: string; label: string; icon: (active: boolean) => React.ReactNode };

const TABS: Tab[] = [
  {
    id: 'all',
    label: 'All Transactions',
    icon: (active) => <IconAllTransactions active={active} />,
  },
  {
    id: 'received',
    label: 'Received',
    icon: (active) => <IconReceive color={active ? 'white' : 'var(--cp-text-tertiary)'} />,
  },
  {
    id: 'sent',
    label: 'Sent',
    icon: (active) => <IconSend color={active ? 'white' : 'var(--cp-text-tertiary)'} />,
  },
  {
    id: 'conversions',
    label: 'Conversions',
    icon: (active) => <IconConversions color={active ? 'white' : 'var(--cp-text-tertiary)'} />,
  },
  {
    id: 'invoices',
    label: 'Invoices',
    icon: (active) => <IconInvoices color={active ? 'white' : 'var(--cp-text-tertiary)'} />,
  },
  {
    id: 'payments',
    label: 'Payments',
    icon: (active) => <IconPayments color={active ? 'white' : 'var(--cp-text-tertiary)'} />,
  },
];

// ─── Transaction row icon circle ──────────────────────────────────────────────

function TxIcon({ type }: { type: TxType }) {
  const miniLogo = type === 'bank-payout'
    ? <UsdtMiniLogo />
    : type === 'conversion'
    ? <UsdtMiniLogo />
    : <UsdtMiniLogo />;

  return (
    <div className="relative shrink-0 size-[36px]">
      <div className="border border-[var(--cp-border-hover)] border-solid relative rounded-[100px] size-[36px] flex items-center justify-center text-[var(--cp-text-secondary)]">
        {type === 'bank-payout' && <IconBankPayout />}
        {type === 'received' && <IconReceive color="var(--cp-text-secondary)" />}
        {type === 'sent' && <IconSend color="var(--cp-text-secondary)" />}
        {type === 'conversion' && <IconConversions color="var(--cp-text-secondary)" />}
      </div>
      <div className="absolute right-[-1px] top-[-1px]">
        {miniLogo}
      </div>
    </div>
  );
}

// ─── Status dot ───────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: TxStatus }) {
  const dotColor = status === 'completed'
    ? 'bg-[#21b75d]'
    : status === 'pending'
    ? 'bg-orange-400'
    : 'bg-red-500';
  const label = status === 'completed' ? 'Completed' : status === 'pending' ? 'Pending' : 'Failed';
  return (
    <div className="flex items-center gap-[5px]">
      <div className={`${dotColor} rounded-[100px] shrink-0 size-[8px]`} />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

// ─── Currency logo (in the "currency" column) ─────────────────────────────────

function CurrencyLogo({ type }: { type: Transaction['currencyLogo'] }) {
  if (type === 'btc') return <BtcMiniLogo />;
  if (type === 'usdt') return <UsdtMiniLogo />;
  return <UsdMiniLogo />;
}

// ─── Transaction row ──────────────────────────────────────────────────────────

function TxRow({ tx, alt }: { tx: Transaction; alt: boolean }) {
  return (
    <div className={`flex items-center justify-between px-[20px] py-[16px] rounded-[5px] ${alt ? 'bg-[var(--cp-bg-2)]' : 'bg-[var(--cp-bg-1)]'}`}>
      {/* Left: date + type + status */}
      <div className="flex items-center gap-[20px] min-w-0 flex-1">
        {/* Date */}
        <div className="flex flex-col items-start shrink-0 w-[45px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[13px] text-[var(--cp-text-secondary)] whitespace-nowrap">{tx.date}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[13px] text-[var(--cp-text-secondary)] whitespace-nowrap">{tx.time}</p>
        </div>

        {/* Divider */}
        <div className="bg-[var(--cp-border-default)] h-[34px] w-px shrink-0" />

        {/* Icon + label + status */}
        <div className="flex items-center gap-[10px] shrink-0">
          <TxIcon type={tx.type} />
          <div className="flex flex-col items-start">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">{tx.label}</p>
            <StatusBadge status={tx.status} />
          </div>
        </div>

        {/* Divider */}
        <div className="bg-[var(--cp-border-default)] h-[34px] w-px shrink-0 ml-[20px]" />

        {/* Currency + destination */}
        <div className="flex flex-col items-start min-w-0">
          <div className="flex items-center gap-[5px]">
            <CurrencyLogo type={tx.currencyLogo} />
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">{tx.currencyName}</p>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap overflow-hidden text-ellipsis max-w-[320px]">{tx.destination}</p>
        </div>
      </div>

      {/* Right: amount */}
      <div className="flex flex-col items-end shrink-0 ml-[20px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">{tx.amount}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">{tx.amountSub}</p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TransactionsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [status, setStatus] = useState('any');
  const [currency, setCurrency] = useState('any');

  const filtered = TRANSACTIONS.filter((tx) => {
    if (activeTab === 'received' && tx.type !== 'received') return false;
    if (activeTab === 'sent' && tx.type !== 'sent') return false;
    if (activeTab === 'conversions' && tx.type !== 'conversion') return false;
    if (activeTab === 'invoices') return false;
    if (activeTab === 'payments') return false;
    if (search && !tx.label.toLowerCase().includes(search.toLowerCase()) && !tx.currencyName.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="flex flex-col gap-[10px] w-full">

      {/* Tab bar */}
      <div className="flex items-center gap-[5px] w-full overflow-x-auto pb-[2px]">
        {TABS.map((tab) => {
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-[6px] h-[36px] px-[12px] rounded-[100px] shrink-0 cursor-pointer transition-colors whitespace-nowrap ${
                active
                  ? 'bg-[var(--cp-brand-primary)] text-white'
                  : 'bg-white border border-[var(--cp-border-default)] text-[var(--cp-text-tertiary)] hover:border-[var(--cp-border-hover)] hover:bg-[var(--cp-bg-1)]'
              }`}
            >
              {tab.icon(active)}
              <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] leading-[normal] ${active ? 'text-white' : 'text-[var(--cp-text-secondary)]'}`}>
                {tab.label}
              </p>
            </button>
          );
        })}
      </div>

      {/* Filter bar */}
      <div className="bg-white rounded-[8px] border border-[var(--cp-border-default)] flex items-center gap-0 overflow-hidden">
        {/* Search */}
        <div className="flex items-center gap-[8px] px-[12px] h-[42px] flex-1 min-w-[140px] border-r border-[var(--cp-border-default)]">
          <IconSearch />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent outline-none font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-primary)] placeholder:text-[var(--cp-text-quaternary)]"
          />
        </div>

        {/* From date */}
        <div className="flex items-center gap-[6px] px-[12px] h-[42px] border-r border-[var(--cp-border-default)] shrink-0">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">From</p>
          <div className="flex items-center gap-[6px] cursor-pointer group">
            <p className={`font-['Inter:Medium',sans-serif] font-medium text-[13px] whitespace-nowrap ${fromDate ? 'text-[var(--cp-text-primary)]' : 'text-[var(--cp-text-quaternary)]'}`}>
              {fromDate || 'Select a Date'}
            </p>
            <IconChevron />
          </div>
        </div>

        {/* To date */}
        <div className="flex items-center gap-[6px] px-[12px] h-[42px] border-r border-[var(--cp-border-default)] shrink-0">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">To</p>
          <div className="flex items-center gap-[6px] cursor-pointer group">
            <p className={`font-['Inter:Medium',sans-serif] font-medium text-[13px] whitespace-nowrap ${toDate ? 'text-[var(--cp-text-primary)]' : 'text-[var(--cp-text-quaternary)]'}`}>
              {toDate || 'Select a Date'}
            </p>
            <IconChevron />
          </div>
        </div>

        {/* Any Status */}
        <div className="flex items-center gap-[6px] px-[12px] h-[42px] border-r border-[var(--cp-border-default)] cursor-pointer shrink-0">
          <p className={`font-['Inter:Medium',sans-serif] font-medium text-[13px] whitespace-nowrap ${status === 'any' ? 'text-[var(--cp-text-quaternary)]' : 'text-[var(--cp-text-primary)]'}`}>
            {status === 'any' ? 'Any Status' : status}
          </p>
          <IconChevron />
        </div>

        {/* Any Currency */}
        <div className="flex items-center gap-[6px] px-[12px] h-[42px] border-r border-[var(--cp-border-default)] cursor-pointer shrink-0">
          <p className={`font-['Inter:Medium',sans-serif] font-medium text-[13px] whitespace-nowrap ${currency === 'any' ? 'text-[var(--cp-text-quaternary)]' : 'text-[var(--cp-text-primary)]'}`}>
            {currency === 'any' ? 'Any Currency' : currency}
          </p>
          <IconChevron />
        </div>

        {/* Export */}
        <button className="flex items-center gap-[6px] px-[16px] h-[42px] shrink-0 cursor-pointer hover:bg-[var(--cp-bg-1)] transition-colors">
          <IconExport />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-brand-primary)] whitespace-nowrap">Export</p>
        </button>
      </div>

      {/* Transaction list */}
      <div className="flex flex-col gap-0 w-full">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-[8px] border border-[var(--cp-border-default)] flex items-center justify-center py-[60px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[var(--cp-text-tertiary)]">No transactions found</p>
          </div>
        ) : (
          filtered.map((tx, i) => (
            <TxRow key={tx.id} tx={tx} alt={i % 2 === 0} />
          ))
        )}
      </div>

    </div>
  );
}
