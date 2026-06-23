// ─────────────────────────────────────────────────────────────────────────────
// AccountDropdown
// Source: Figma node 1591:237246
// ─────────────────────────────────────────────────────────────────────────────
import { useNavigate } from 'react-router';
import { IconProfile, IconSettings, IconBankPayout, IconSun, IconLogout } from './Icons';

type Props = { onClose: () => void; onNotificationClick?: () => void; };

// ─── Dot indicator ────────────────────────────────────────────────────────────
function Dot() {
  return <div className="bg-[var(--cp-brand-primary)] relative rounded-[100px] shrink-0 size-[6px]" />;
}

// ─── Menu row ─────────────────────────────────────────────────────────────────
function MenuRow({
  label,
  icon,
  onClick,
  border = true,
}: {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  border?: boolean;
}) {
  return (
    <div
      className={`content-stretch flex items-center justify-between py-[5px] relative shrink-0 w-full cursor-pointer ${border ? 'border-b border-[var(--cp-border-default)] border-solid' : ''}`}
      onClick={onClick}
    >
      <div className="group content-stretch flex flex-1 items-center justify-between min-w-0 pl-[10px] pr-[5px] py-[5px] relative rounded-[100px] hover:bg-[var(--cp-bg-1)] transition-colors">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-secondary)] group-hover:text-[var(--cp-brand-primary)] whitespace-nowrap leading-none transition-colors">
          {label}
        </p>
        <div className="bg-[var(--cp-text-quaternary)] group-hover:bg-[var(--cp-brand-primary)] overflow-clip relative rounded-[100px] shrink-0 size-[28px] flex items-center justify-center transition-colors">
          {icon}
        </div>
      </div>
    </div>
  );
}

// ─── Dropdown ────────────────────────────────────────────────────────────────
export default function AccountDropdown({ onClose, onNotificationClick }: Props) {
  const navigate = useNavigate();

  const go = (path: string) => { onClose(); navigate(path); };

  return (
    <div
      className="bg-white border border-[var(--cp-border-default)] border-solid content-stretch flex flex-col items-start overflow-clip pb-[5px] px-[5px] relative rounded-[20px] w-[311px]"
      style={{ boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)' }}
    >
      {/* Header: email + avatar */}
      <div className="content-stretch flex items-center justify-between pb-[10px] pl-[10px] pt-[5px] relative shrink-0 w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap leading-none">
          useremail@gmail.com
        </p>
        <div className="bg-[var(--cp-text-tertiary)] overflow-clip relative rounded-[100px] shrink-0 size-[28px] flex items-center justify-center">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-white text-center leading-none">C</p>
        </div>
      </div>

      {/* Profiles + Notifications sections */}
      <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full mb-[5px]">

        {/* Profiles */}
        <div className="border border-[var(--cp-border-default)] border-solid content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap leading-none">Profiles</p>
          <div className="bg-[var(--cp-bg-0,#f2f5f7)] content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-full">
            <Dot />
            <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-primary)] leading-none">useremail@gmail.com</p>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-secondary)] leading-none mt-[3px]">You</p>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="border border-[var(--cp-border-default)] border-solid content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap leading-none">Notifications</p>
          <button
            className="bg-[var(--cp-bg-0,#f2f5f7)] content-stretch cursor-pointer flex gap-[10px] items-center overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-full hover:bg-[var(--cp-bg-1)] transition-colors text-left"
            onClick={onNotificationClick}
          >
            <Dot />
            <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-left whitespace-nowrap">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-primary)] leading-none">Your bank account has been approved</p>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-[var(--cp-text-secondary)] leading-none mt-[3px]">17:45 Mar 20</p>
            </div>
          </button>
          <div className="content-stretch flex items-center justify-center py-[5px] relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[13px] text-[var(--cp-text-quinary)] whitespace-nowrap leading-none">View All Notifications (0 Unread)</p>
          </div>
        </div>
      </div>

      {/* Menu items */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <MenuRow label="Business Profile"  icon={<IconProfile color="white" />}     onClick={onClose} />
        <MenuRow label="Account Settings"  icon={<IconSettings color="white" />}    onClick={onClose} />
        <MenuRow label="Bank Accounts"     icon={<IconBankPayout color="white" />}  onClick={() => go('/bank-accounts')} />
        <MenuRow label="Toggle Light Mode" icon={<IconSun color="white" />}         onClick={onClose} />
        <MenuRow label="Logout"            icon={<IconLogout color="white" />}      onClick={onClose} border={false} />
      </div>
    </div>
  );
}
