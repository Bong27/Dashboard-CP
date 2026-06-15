// ─────────────────────────────────────────────────────────────────────────────
// BankAccountsPage — Figma node 1594:237451 / 2016:47623
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useBanks, BankEntry } from '../context/BankContext';
import AddNewBankModal from '../components/AddNewBankModal';
import EditBankModal from '../components/EditBankModal';
import DeleteBankModal from '../components/DeleteBankModal';

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
  return <span className="text-[28px] leading-none shrink-0" style={{ lineHeight: '36px' }}>🇬🇧</span>;
}

// ─── Status badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: BankEntry['status'] }) {
  const isReview = status === 'under_review';
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="relative rounded-[100px] shrink-0 size-[8px]"
        style={{ background: isReview ? 'var(--cp-warning, #f59e0b)' : 'var(--cp-success)' }} />
      <p className="font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">
        {isReview ? 'Under Review' : 'Approved'}
      </p>
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

  return (
    <div ref={ref} className="bg-white border border-[var(--cp-border-default)] rounded-[8px] shadow-lg overflow-hidden w-[180px]">
      {!isReview && !isPrimary && (
        <button className="w-full px-[14px] py-[10px] text-left font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-primary)] hover:bg-[var(--cp-bg-1)] transition-colors"
          onClick={() => { onSetPrimary(); onClose(); }}>
          Set as Primary
        </button>
      )}
      {!isReview && (
        <button className={`w-full px-[14px] py-[10px] text-left font-['Inter:Medium',sans-serif] font-medium text-[13px] text-[var(--cp-text-secondary)] hover:bg-[var(--cp-bg-1)] transition-colors ${!isPrimary ? 'border-t border-[var(--cp-border-default)]' : ''}`}
          onClick={() => { onEdit(); onClose(); }}>
          Edit
        </button>
      )}
      <button className={`w-full px-[14px] py-[10px] text-left font-['Inter:Medium',sans-serif] font-medium text-[13px] text-red-500 hover:bg-red-50 transition-colors ${!isReview ? 'border-t border-[var(--cp-border-default)]' : ''}`}
        onClick={() => { onDelete(); onClose(); }}>
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
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">{account.label}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">{account.iban.replace(/\s/g, '')}</p>
          </div>
        </div>
        <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
        <div className="content-stretch flex h-[56px] items-start min-w-[200px] p-[10px] relative rounded-[5px] shrink-0">
          <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none">Account Holder Name</p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap leading-none">{account.holder}</p>
          </div>
        </div>
        <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
        <div className="content-stretch flex flex-1 h-[56px] items-start min-w-[200px] overflow-clip p-[10px] relative rounded-[5px]">
          <div className="content-stretch flex flex-1 flex-col h-full items-start justify-between min-w-0 relative">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[11px] text-[var(--cp-text-tertiary)] uppercase whitespace-nowrap leading-none shrink-0">Recipient Address</p>
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[14.5px] text-[var(--cp-text-primary)] leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full">{address}</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between pl-[20px] relative shrink-0 w-[180px]">
        <StatusBadge status={account.status} />
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
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-[var(--cp-text-secondary)] leading-normal">
            Configure and manage your saved bank details for fiat settlements.{'\n'}
            These accounts are available as payout destinations across your automated and manual dashboard settings.
          </p>
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

