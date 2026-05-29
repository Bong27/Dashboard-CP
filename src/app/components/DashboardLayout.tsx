import { Outlet, Link, useLocation } from 'react-router';
import svgPaths from '../../imports/Wallet-2/svg-tfchl2zu4w';
import imgCircle from '../../imports/Wallet-2/7e6eebe580b2dba6f0a0b9b74d6ab1a4021a315d.png';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Balances',
  '/transactions': 'Transactions',
  '/settings': 'Settings',
  '/integrations': 'Integrations',
  '/invoicing': 'Invoicing',
  '/pos': 'POS',
  '/support': 'Support',
};

// ─── Logo ─────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[166.8px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166.8 24">
        <g clipPath="url(#clip0_1_2215)" id="Logo">
          <path clipRule="evenodd" d={svgPaths.p2c0ec700} fill="var(--fill-0, black)" fillRule="evenodd" opacity="0.5" />
          <path clipRule="evenodd" d={svgPaths.p527e600} fill="var(--fill-0, black)" fillRule="evenodd" opacity="0.7" />
          <path clipRule="evenodd" d={svgPaths.p1ae0ac00} fill="var(--fill-0, black)" fillRule="evenodd" opacity="0.9" />
          <path clipRule="evenodd" d={svgPaths.pd0246f0} fill="var(--fill-0, black)" fillRule="evenodd" opacity="0.5" />
          <path clipRule="evenodd" d={svgPaths.p38f33980} fill="var(--fill-0, black)" fillRule="evenodd" opacity="0.7" />
          <path clipRule="evenodd" d={svgPaths.p3ba682f2} fill="var(--fill-0, black)" fillRule="evenodd" opacity="0.5" />
          <path clipRule="evenodd" d={svgPaths.p1ad61a00} fill="var(--fill-0, black)" fillRule="evenodd" opacity="0.9" />
          <path clipRule="evenodd" d={svgPaths.p3ba05b00} fill="var(--fill-0, black)" fillRule="evenodd" opacity="0.7" />
          <path clipRule="evenodd" d={svgPaths.pf488500} fill="var(--fill-0, white)" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1d63780} fill="var(--fill-0, #C0C9D7)" fillRule="evenodd" />
          <path d={svgPaths.p2fffa090} fill="var(--fill-0, black)" />
          <path d={svgPaths.p2d428580} fill="var(--fill-0, black)" />
          <path d={svgPaths.p7236e00} fill="url(#paint0_linear_1_2215)" opacity="0.3" />
          <path d={svgPaths.p13e14280} fill="var(--fill-0, black)" />
          <path clipRule="evenodd" d={svgPaths.p3d4c71f0} fill="var(--fill-0, #B0B5BE)" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p375d7fc0} fill="var(--fill-0, white)" fillRule="evenodd" />
          <path d={svgPaths.p15babd00} fill="var(--fill-0, black)" />
          <path d={svgPaths.p394a7600} fill="var(--fill-0, black)" />
          <path d={svgPaths.p8d23e00} fill="var(--fill-0, black)" />
          <path d={svgPaths.p10363e00} fill="var(--fill-0, black)" />
          <path d={svgPaths.p1db84d70} fill="var(--fill-0, black)" />
          <path d={svgPaths.p91acd80} fill="var(--fill-0, black)" />
          <path d={svgPaths.p1d03ca70} fill="var(--fill-0, black)" />
          <path d={svgPaths.p3c083440} fill="var(--fill-0, black)" />
          <path d={svgPaths.p1f08fa00} fill="var(--fill-0, black)" />
          <path d={svgPaths.p37bbfd20} fill="var(--fill-0, black)" />
          <path d={svgPaths.p193e4b80} fill="var(--fill-0, black)" />
          <path d={svgPaths.p29499400} fill="var(--fill-0, black)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2215" x1="4.35076" x2="0.193954" y1="12.2816" y2="17.0692">
            <stop /><stop offset="1" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_1_2215"><rect fill="white" height="24" width="166.8" /></clipPath>
        </defs>
      </svg>
    </div>
  );
}

// ─── Nav item icons ───────────────────────────────────────────────────────────

function WalletIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? '#1C60DD' : '#183049';
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <div className="absolute inset-[5%_-0.9%_0_0]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1806 19">
            <path clipRule="evenodd" d={svgPaths.pbf04600} fill={color} fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3b018100} fill={color} fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TransactionsIcon() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <div className="-translate-x-1/2 absolute aspect-[16.764892578125/15.999999046325684] bottom-[10%] left-[calc(50%-0.12px)] top-[10%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7649 16">
            <path clipRule="evenodd" d={svgPaths.p2f87c900} fill="var(--fill-0, #183049)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p329d3b00} fill="var(--fill-0, #183049)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2e748900} fill="var(--fill-0, #183049)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2daa61c0} fill="var(--fill-0, #183049)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SettingsIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? '#1C60DD' : '#183049';
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p1d640c00} fill={color} />
          <path d={svgPaths.p103b100} fill={color} />
          <path d={svgPaths.p1c8eb00} fill={color} />
          <path d={svgPaths.p29d62370} fill={color} />
        </svg>
      </div>
    </div>
  );
}

function IntegrationsIcon() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <div className="absolute inset-[3.96%_1.18%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5277 18.4166">
            <path clipRule="evenodd" d={svgPaths.p1322e200} fill="var(--fill-0, #183049)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p20c5c200} fill="var(--fill-0, #183049)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p32c7f000} fill="var(--fill-0, #183049)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InvoicingIcon() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <div className="absolute inset-[8.13%_16.46%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4167 16.75">
            <path d={svgPaths.p3089f53e} fill="var(--fill-0, #183049)" />
            <path clipRule="evenodd" d={svgPaths.p20de25f0} fill="var(--fill-0, #183049)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p11a4ee80} fill="var(--fill-0, #183049)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p10cf0100} fill="var(--fill-0, #183049)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function POSIcon() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <div className="absolute inset-[8.33%_12.5%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
            <path d={svgPaths.p231af140} fill="var(--fill-0, #183049)" />
            <path d={svgPaths.p8479d00} fill="var(--fill-0, #183049)" />
            <path d={svgPaths.p18d5fb30} fill="var(--fill-0, #183049)" />
            <path d={svgPaths.p1c3d800} fill="var(--fill-0, #183049)" />
            <path d={svgPaths.p26450f00} fill="var(--fill-0, #183049)" />
            <path d={svgPaths.p7eb4d00} fill="var(--fill-0, #183049)" />
            <path d={svgPaths.p313a9100} fill="var(--fill-0, #183049)" />
            <path d={svgPaths.p3bceaa00} fill="var(--fill-0, #183049)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SupportIcon() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <div className="absolute inset-[8.13%_8.13%_8.12%_8.13%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.75 16.75">
            <path clipRule="evenodd" d={svgPaths.p162d78f0} fill="var(--fill-0, #183049)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MoreIcon() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <div className="absolute inset-[34.38%_21.88%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 6.24998">
            <path clipRule="evenodd" d={svgPaths.p1f48b500} fill="var(--fill-0, #183049)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PlusIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path d={svgPaths.p35009400} fill="var(--fill-0, #1C60DD)" />
        <path d={svgPaths.p18d7280} fill="var(--fill-0, #1C60DD)" />
        <path d={svgPaths.p2aa04180} fill="var(--fill-0, #1C60DD)" />
      </svg>
    </div>
  );
}

// ─── NavItem — pill shape, matches source exactly ────────────────────────────

function NavItem({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to || (to === '/' && location.pathname === '/wallet');

  return (
    <Link
      to={to}
      className={`content-stretch flex flex-col items-start p-[10px] relative rounded-[100px] shrink-0 w-[205px] cursor-pointer transition-colors ${
        isActive ? 'bg-[var(--cp-bg-1)]' : 'hover:bg-[var(--cp-bg-1)]'
      }`}
    >
      <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
        {icon}
        <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.5px] whitespace-nowrap ${
          isActive ? 'text-[var(--cp-brand-primary)]' : 'text-[var(--cp-text-primary)]'
        }`}>
          {label}
        </p>
      </div>
    </Link>
  );
}

// ─── Divider — matches source with py-[8px] wrapper ──────────────────────────

function Divider() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full">
      <div className="bg-[var(--cp-border-default)] h-px relative shrink-0 w-[205px]">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="relative size-full" />
        </div>
      </div>
    </div>
  );
}

// ─── Sidebar footer: New Transaction CTA ─────────────────────────────────────

function SidenavFooter() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[5px] relative size-full">
        <button className="bg-white cursor-pointer h-[42px] relative rounded-[100px] shrink-0 w-[195px]">
          <div className="content-stretch flex gap-[5px] items-center justify-center overflow-clip px-[10px] relative rounded-[inherit] size-full">
            <PlusIcon />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] text-center whitespace-nowrap">New Transaction</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
        </button>
      </div>
    </div>
  );
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function DashboardLayout() {
  const location = useLocation();
  const pageTitle = PAGE_TITLES[location.pathname] ?? 'Dashboard';

  return (
    <div className="bg-[var(--cp-bg-1)] content-stretch flex flex-col items-start relative size-full">

      {/* Top Navbar */}
      <div className="bg-white content-stretch flex h-[70px] items-center justify-between overflow-clip fixed top-0 left-0 right-0 z-50 w-full">
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[225px]">
          <div className="content-stretch flex flex-col items-start px-[20px] py-[10px] relative shrink-0 w-[205px]">
            <Logo />
          </div>
        </div>

        <div className="flex-[1_0_0] h-[71px] min-w-px relative">
          <div aria-hidden="true" className="absolute border-[var(--cp-border-default)] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pr-[40px] py-[10px] relative size-full">

              {/* Title Area */}
              <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
                <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <div className="absolute inset-[5%_-0.9%_0_0]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.2167 22.8">
                      <path clipRule="evenodd" d={svgPaths.p104ea440} fill="var(--fill-0, #1C60DD)" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p3438aa00} fill="var(--fill-0, #1C60DD)" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[18px] tracking-[-0.2px] whitespace-nowrap">{pageTitle}</p>
              </div>

              {/* Account Controls */}
              <div className="bg-[var(--cp-bg-1)] content-stretch flex gap-[10px] items-center overflow-clip pl-[5px] relative rounded-[100px] shrink-0">
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                  <div className="bg-[var(--cp-bg-1)] content-stretch flex gap-[5px] items-center p-[5px] relative rounded-[100px] shrink-0">
                    <div aria-hidden="true" className="absolute border border-[var(--cp-bg-1)] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[18px]">
                      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-1/2 not-italic text-[var(--cp-text-primary)] text-[11px] text-center top-[calc(50%-7px)] whitespace-nowrap">$</p>
                    </div>
                    <p className="font-['Fira_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[10px] text-center whitespace-nowrap">USD</p>
                  </div>
                  <div className="bg-[var(--cp-border-default)] h-[10px] relative shrink-0 w-px" />
                  <div className="bg-[var(--cp-bg-1)] content-stretch flex gap-[5px] items-center p-[5px] relative rounded-[100px] shrink-0">
                    <div aria-hidden="true" className="absolute border border-[var(--cp-bg-1)] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    <div className="overflow-clip relative rounded-[100px] shrink-0 size-[18px]">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
                        <div className="absolute bg-white inset-0 rounded-[100px]" />
                        <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgCircle} />
                      </div>
                    </div>
                    <p className="font-['Fira_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[10px] text-center whitespace-nowrap">EN</p>
                  </div>
                  <div className="bg-[var(--cp-border-default)] h-[10px] relative shrink-0 w-px" />
                </div>
                <div className="bg-white content-stretch flex gap-[10px] h-[40px] items-center pl-[15px] pr-[5px] relative rounded-[100px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  <div className="overflow-clip relative shrink-0 size-[15px]">
                    <div className="absolute inset-[18.75%_6.25%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.125 9.375">
                        <path d={svgPaths.pa6db700} fill="var(--fill-0, #D3D6E1)" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-[var(--cp-text-quaternary)] overflow-clip relative rounded-[100px] shrink-0 size-[28px]">
                    <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic text-[13px] text-center text-white top-[calc(50%-8px)] whitespace-nowrap">C</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="content-stretch flex items-start relative w-full h-[calc(100vh-70px)] mt-[70px]">

        {/* Sidebar — fixed, matches source exactly */}
        <div className="bg-white fixed h-[calc(100vh-70px)] left-0 shrink-0 w-[225px] z-40">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-between pb-[20px] px-[10px] relative size-full">

              {/* Nav items */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <NavItem to="/" label="Wallet" icon={<WalletIcon isActive={location.pathname === '/' || location.pathname === '/wallet'} />} />
                <NavItem to="/transactions" label="Transactions" icon={<TransactionsIcon />} />
                <Divider />
                <NavItem to="/settings" label="Settings" icon={<SettingsIcon isActive={location.pathname === '/settings'} />} />
                <NavItem to="/integrations" label="Integrations" icon={<IntegrationsIcon />} />
                <NavItem to="/invoicing" label="Invoicing" icon={<InvoicingIcon />} />
                <NavItem to="/pos" label="POS" icon={<POSIcon />} />
                <NavItem to="/support" label="Support" icon={<SupportIcon />} />
                <Divider />
                <button className="content-stretch cursor-pointer flex flex-col items-start p-[10px] relative rounded-[100px] shrink-0 w-[205px] hover:bg-[var(--cp-bg-1)] transition-colors">
                  <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                    <MoreIcon />
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] text-left whitespace-nowrap">More</p>
                  </div>
                </button>
              </div>

              {/* New Transaction CTA */}
              <SidenavFooter />

            </div>
          </div>
          {/* Right border */}
          <div aria-hidden="true" className="absolute border-[var(--cp-border-default)] border-r-[0.5px] border-solid inset-[0_-0.25px_0_0] pointer-events-none" />
        </div>

        {/* Page content — offset to clear fixed sidebar */}
        <div className="flex-1 h-full overflow-y-auto ml-[225px]">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
