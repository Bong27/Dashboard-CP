// ─────────────────────────────────────────────────────────────────────────────
// BankAccountsPage — Figma node 1594:237451 / 2016:47623
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useBanks, BankEntry } from '../context/BankContext';
import AddNewBankModal from '../components/AddNewBankModal';
import EditBankModal from '../components/EditBankModal';
import DeleteBankModal from '../components/DeleteBankModal';
import { truncateIban } from '../utils';

// ─── Primary ribbon — exact Figma geometry ────────────────────────────────────
function PrimaryRibbon() {
  return (
    <div className="absolute flex items-center justify-center pointer-events-none"
      style={{ left: -21, top: -18.69, width: 65.761, height: 65.761 }}>
      <div style={{ transform: 'rotate(-45deg)' }}>
        <div className="bg-[var(--cp-brand-primary)]"
          style={{ height: 10, width: 83 }} />
      </div>
    </div>
  );
}

// ─── UK flag ──────────────────────────────────────────────────────────────────
function UKFlag() {
  return (
    <div className="relative shrink-0 size-[36px] rounded-full overflow-hidden flex items-center justify-center bg-white border border-[var(--cp-border-default)]">
      <span className="text-[28px] leading-none" style={{ lineHeight: 1 }}>🇬🇧</span>
    </div>
  );
}

// ─── Status badge ─────────────────────────────────────────────────────────────
function InfoTooltip() {
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      // Position tooltip to the left of the icon, vertically centred
      setCoords({ top: r.top + r.height / 2, left: r.left - 8 });
    }
    setHovered(true);
  };

  return (
    <div className="relative shrink-0" style={{ overflow: 'visible' }}>
      <div
        ref={ref}
        className="flex items-center justify-center rounded-full cursor-default shrink-0 size-[14px]"
        style={{ background: 'var(--cp-bg-2)', border: '1px solid var(--cp-border-default)' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[8px] text-[var(--cp-text-tertiary)] leading-none select-none">i</span>
      </div>
      {hovered && createPortal(
        <div
          className="pointer-events-none z-[1000]"
          style={{ position: 'fixed', top: coords.top, right: window.innerWidth - coords.left, transform: 'translateY(-50%)' }}
        >
          <div className="flex items-center">
            <div className="bg-[var(--cp-text-primary)] rounded-[5px] px-[8px] py-[6px] whitespace-nowrap">
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-none">
                Most approvals occur within 24 hours
              </p>
            </div>
            <svg width="5" height="10" viewBox="0 0 5 10" fill="none" className="shrink-0">
              <path d="M0 0V10L3.58579 6.41421C4.36684 5.63316 4.36684 4.36684 3.58579 3.58579L0 0Z" fill="var(--cp-text-primary)" />
            </svg>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: BankEntry['status'] }) {
  const isReview = status === 'under_review';
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="relative rounded-[100px] shrink-0 size-[8px]"
        style={{ background: isReview ? 'var(--cp-warning, #f59e0b)' : 'var(--cp-success)' }} />
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">
        {isReview ? 'Under Review' : 'Approved'}
      </p>
      {isReview && <InfoTooltip />}
    </div>
  );
}

// ─── Context menu ─────────────────────────────────────────────────────────────
function ContextMenu({ isPrimary, isReview, onSetPrimary, onDelete, onEdit, onClose }: {
  isPrimary: boolean;
  isReview: boolean;
  onSetPrimary: () => void;
  onDelete: () => void;
  onEdit: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  const itemBase = "w-full px-[14px] py-[10px] text-left font-['Inter:Medium',sans-serif] font-medium text-[13px] transition-colors cursor-pointer border-t border-[var(--cp-border-default)] first:border-t-0";

  return (
    <div ref={ref} className="bg-white border border-[var(--cp-border-default)] rounded-[8px] shadow-lg overflow-hidden w-[180px]">
      {/* Set as Primary */}
      <button
        className={`${itemBase} ${isReview || isPrimary ? 'text-[var(--cp-text-tertiary)] opacity-40 cursor-not-allowed' : 'text-[var(--cp-text-secondary)] hover:bg-[var(--cp-bg-1)]'}`}
        onClick={() => { if (!isReview && !isPrimary) { onSetPrimary(); onClose(); } }}
        disabled={isReview || isPrimary}
      >
        Set as Primary
      </button>
      {/* Edit */}
      <button
        className={`${itemBase} ${isReview ? 'text-[var(--cp-text-tertiary)] opacity-40 cursor-not-allowed' : 'text-[var(--cp-text-secondary)] hover:bg-[var(--cp-bg-1)]'}`}
        onClick={() => { if (!isReview) { onEdit(); onClose(); } }}
        disabled={isReview}
      >
        Edit
      </button>
      {/* Delete */}
      <button
        className={`${itemBase} text-red-500 hover:bg-red-50 cursor-pointer`}
        onClick={() => { onDelete(); onClose(); }}
      >
        Delete
      </button>
    </div>
  );
}

// ─── More button + menu ───────────────────────────────────────────────────────
function MoreButton({ isPrimary, isReview, onSetPrimary, onDelete, onEdit }: { isPrimary: boolean; isReview: boolean; onSetPrimary: () => void; onDelete: () => void; onEdit: () => void }) {
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

  return (
    <div className="relative shrink-0">
      <button
        ref={btnRef}
        className="bg-white border border-[var(--cp-border-default)] border-solid overflow-clip relative rounded-[100px] shrink-0 size-[36px] flex items-center justify-center hover:bg-[var(--cp-bg-1)] transition-colors cursor-pointer"
        onClick={handleOpen}
      >
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
          <circle cx="8.5" cy="8" r="1.5" fill="#8492A6" />
          <circle cx="3.5" cy="8" r="1.5" fill="#8492A6" />
          <circle cx="13.5" cy="8" r="1.5" fill="#8492A6" />
        </svg>
      </button>
      {open && createPortal(
        <div
          className="fixed z-[500]"
          style={{ top: coords.top, right: coords.right, transform: 'translateY(-50%)' }}
        >
          <ContextMenu
            isPrimary={isPrimary}
            isReview={isReview}
            onSetPrimary={onSetPrimary}
            onDelete={onDelete}
            onEdit={onEdit}
            onClose={() => setOpen(false)}
          />
        </div>,
        document.body
      )}
    </div>
  );
}

// ─── Bank row ─────────────────────────────────────────────────────────────────
function BankRow({ account, index, isPrimary, onSetPrimary, onDelete, onEdit }: {
  account: BankEntry;
  index: number;
  isPrimary: boolean;
  onSetPrimary: () => void;
  onDelete: () => void;
  onEdit: () => void;
}) {
  const bg = index % 2 === 0 ? 'var(--cp-bg-2)' : 'var(--cp-bg-1)';
  const isReview = account.status === 'under_review';
  const address = `${account.address}, ${account.city}, ${account.postalCode}, ${account.country}`;
  return (
    <div
      className="content-stretch flex items-center justify-between overflow-clip px-[20px] py-[10px] relative shrink-0 w-full"
      style={{ background: bg }}
    >
      {isPrimary && <PrimaryRibbon />}
      {/* Left — 50% opacity when under review */}
      <div className="content-stretch flex items-center relative flex-1 min-w-0" style={{ opacity: isReview ? 0.5 : 1 }}>
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[288px]">
          <div className="relative shrink-0 size-[36px] flex items-center justify-center"><UKFlag /></div>
          <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">{account.label}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">{account.iban.replace(/\s/g, '')}</p>
          </div>
        </div>
        <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
        <div className="content-stretch flex h-[56px] items-start min-w-[200px] px-[20px] py-[10px] relative rounded-[5px] shrink-0">
          <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">Account Holder Name</p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap leading-none">{account.holder}</p>
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
        <div className="shrink-0" style={{ minWidth: 140 }}>
          <StatusBadge status={account.status} />
        </div>
        <MoreButton isPrimary={isPrimary} isReview={isReview} onSetPrimary={onSetPrimary} onDelete={onDelete} onEdit={onEdit} />
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BankAccountsPage() {
  const { banks, primaryId, setPrimaryId, removeBank } = useBanks();
  const [showAddNew, setShowAddNew] = useState(false);
  const [editingBank, setEditingBank] = useState<BankEntry | null>(null);
  const [deletingBank, setDeletingBank] = useState<BankEntry | null>(null);
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative w-full">

      {/* Header */}
      <div className="content-stretch flex gap-[10px] items-center py-[10px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-1 flex-col gap-[10px] items-start min-w-0 relative">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-[var(--cp-text-secondary)] tracking-[-0.2px] whitespace-nowrap leading-none">
            Manage Bank Accounts
          </p>
          <div className="flex flex-col items-start">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-secondary)] leading-[1.2]">
              Configure and manage your saved bank details for fiat settlements.
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-secondary)] leading-[1.2]">
              These accounts are available as payout destinations across your automated and manual dashboard settings.
            </p>
          </div>
        </div>
        <button
          className="bg-[var(--cp-brand-primary)] content-stretch cursor-pointer flex h-[36px] items-center justify-center overflow-clip px-[10px] relative rounded-[5px] shrink-0 hover:bg-[var(--cp-brand-active)] transition-colors"
          onClick={() => setShowAddNew(true)}
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-white text-center whitespace-nowrap">Add Bank Account</p>
        </button>
      </div>

      {deletingBank && createPortal(
        <DeleteBankModal
          bankLabel={deletingBank.label}
          onConfirm={() => removeBank(deletingBank.id)}
          onClose={() => setDeletingBank(null)}
        />,
        document.body
      )}
      {showAddNew && createPortal(
        <AddNewBankModal onClose={() => setShowAddNew(false)} />,
        document.body
      )}

      {editingBank && createPortal(
        <EditBankModal
          key={editingBank.id}
          onClose={() => setEditingBank(null)}
          onSave={() => setEditingBank(null)}
          editMode={editingBank.id === 'barclays' ? 'cautious' : editingBank.id === 'hsbc' ? 'locked' : 'standard'}
          bankId={editingBank.id}
          label={editingBank.label}
          holderName={editingBank.holder}
          accountNumber={editingBank.accountNumber}
          bic={editingBank.bic}
          address={editingBank.address}
          city={editingBank.city}
          postalCode={editingBank.postalCode}
          bankCountry={editingBank.country}
        />,
        document.body
      )}

      {/* List */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full overflow-hidden rounded-[5px]">
        {[...banks]
          .sort((a, b) => (a.id === primaryId ? -1 : b.id === primaryId ? 1 : 0))
          .map((bank, i) => (
          <BankRow
            key={bank.id}
            account={bank}
            index={i}
            isPrimary={bank.id === primaryId}
            onSetPrimary={() => setPrimaryId(bank.id)}
            onDelete={() => setDeletingBank(bank)}
            onEdit={() => setEditingBank(bank)}
          />
        ))}
      </div>

    </div>
  );
}

