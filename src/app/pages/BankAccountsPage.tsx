// ─────────────────────────────────────────────────────────────────────────────
// BankAccountsPage
// Source: Figma node 1594:237451 "Bank Payouts (address book)"
// Accessible from: BankDetailsModal > "Manage Bank Accounts" button
// Not in sidebar nav — no active state on any nav item
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';
import { BANK_DETAILS } from '../components/BankDetailsModal';

// ─── Static mock data ─────────────────────────────────────────────────────────
type BankAccount = {
  id: string;
  label: string;
  iban: string;
  holderName: string;
  address: string;
  status: 'Approved' | 'Pending' | 'Rejected';
};

const MOCK_ACCOUNTS: BankAccount[] = Object.entries(BANK_DETAILS).map(([, d], i) => ({
  id: String(i + 1),
  label: d.label,
  iban: d.iban.replace(/\s/g, ''),
  holderName: d.holder,
  address: `${d.address}, ${d.city}, ${d.postalCode}, United Kingdom`,
  status: 'Approved' as const,
}));

// ─── UK flag ──────────────────────────────────────────────────────────────────
function UKFlag() {
  return (
    <span className="text-[28px] leading-none shrink-0" style={{ lineHeight: '36px' }}>🇬🇧</span>
  );
}

// ─── Three-dot button ─────────────────────────────────────────────────────────
function MoreButton() {
  return (
    <button className="bg-white border border-[var(--cp-border-default)] border-solid overflow-clip relative rounded-[100px] shrink-0 size-[36px] flex items-center justify-center hover:bg-[var(--cp-bg-1)] transition-colors cursor-pointer">
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
        <circle cx="8.5" cy="8" r="1.5" fill="#8492A6" />
        <circle cx="3.5" cy="8" r="1.5" fill="#8492A6" />
        <circle cx="13.5" cy="8" r="1.5" fill="#8492A6" />
      </svg>
    </button>
  );
}

// ─── Status badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: BankAccount['status'] }) {
  const colors: Record<BankAccount['status'], string> = {
    Approved: 'var(--cp-success)',
    Pending:  'var(--cp-warning)',
    Rejected: 'var(--cp-error)',
  };
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="relative rounded-[100px] shrink-0 size-[8px]" style={{ background: colors[status] }} />
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">{status}</p>
    </div>
  );
}

// ─── Bank row ─────────────────────────────────────────────────────────────────
function BankRow({ account }: { account: BankAccount }) {
  return (
    <div className="bg-[var(--cp-bg-2)] content-stretch flex items-center justify-between overflow-clip px-[20px] py-[10px] relative rounded-[5px] shrink-0 w-full">

      {/* Left: flag + name + data columns */}
      <div className="content-stretch flex items-center relative flex-1 min-w-0 gap-0">

        {/* Bank identity */}
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[288px]">
          <div className="relative shrink-0 size-[36px] flex items-center justify-center">
            <UKFlag />
          </div>
          <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0">
            <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">{account.label}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">{account.iban}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px mx-0" />

        {/* Account Holder Name */}
        <div className="content-stretch flex h-[56px] items-start min-w-[200px] p-[10px] relative rounded-[5px] shrink-0">
          <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">
              Account Holder Name
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap leading-none">
              {account.holderName}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px mx-0" />

        {/* Recipient Address */}
        <div className="content-stretch flex flex-1 h-[56px] items-start min-w-[200px] overflow-clip p-[10px] relative rounded-[5px]">
          <div className="content-stretch flex flex-1 flex-col h-full items-start justify-between min-w-0 relative">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">
              Recipient Address
            </p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full">
              {account.address}
            </p>
          </div>
        </div>

      </div>

      {/* Right: status + more button */}
      <div className="content-stretch flex items-center justify-between pl-[20px] relative shrink-0 w-[180px]">
        <StatusBadge status={account.status} />
        <MoreButton />
      </div>

    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BankAccountsPage() {
  const [accounts] = useState<BankAccount[]>(MOCK_ACCOUNTS);

  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full">

      {/* Header row */}
      <div className="content-stretch flex gap-[10px] items-center py-[10px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-1 flex-col gap-[10px] items-start min-w-0 relative">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[var(--cp-text-secondary)] tracking-[-0.2px] whitespace-nowrap leading-none">
            Manage Bank Accounts
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-secondary)] leading-normal">
            Configure and manage your saved bank details for fiat settlements.{'\n'}
            These accounts are available as payout destinations across your automated and manual dashboard settings.
          </p>
        </div>
        <button className="bg-[var(--cp-brand-primary)] content-stretch cursor-pointer flex h-[36px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] shrink-0 hover:bg-[var(--cp-brand-active)] transition-colors">
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white text-center whitespace-nowrap">Add Bank Account</p>
        </button>
      </div>

      {/* Bank list */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full gap-[5px]">
        {accounts.map(account => (
          <BankRow key={account.id} account={account} />
        ))}
      </div>

    </div>
  );
}
