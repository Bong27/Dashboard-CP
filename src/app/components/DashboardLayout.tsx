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
            <path clipRule="evenodd" d={svgPaths.p2f87c900} fill="var(--cp-text-primary)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p329d3b00} fill="var(--cp-text-primary)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2e748900} fill="var(--cp-text-primary)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2daa61c0} fill="var(--cp-text-primary)" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SettingsIcon({ isActive }: { isActive: boolean }) {
  const color = isActive ? 'var(--cp-brand-primary)' : 'var(--cp-text-primary)';
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.18354 1.61732C8.54398 0.127561 10.456 0.127561 10.8165 1.61732C10.8838 1.89014 11.0181 2.14282 11.208 2.35287C11.3979 2.56292 11.6376 2.72381 11.9058 2.82126C12.174 2.91872 12.4624 2.94976 12.7464 2.91172C13.0304 2.87368 13.3012 2.76765 13.5356 2.60294C14.8126 1.70694 16.2931 3.18739 15.3971 4.46435C15.2327 4.69872 15.127 4.96942 15.089 5.25333C15.0511 5.53724 15.0821 5.82544 15.1793 6.09363C15.2765 6.36183 15.437 6.60158 15.6469 6.79153C15.8567 6.98148 16.1092 7.11591 16.3818 7.18332C17.8726 7.54376 17.8726 9.45624 16.3818 9.81668C16.1092 9.88409 15.8567 10.0185 15.6469 10.2085C15.437 10.3984 15.2765 10.6382 15.1793 10.9064C15.0821 11.1746 15.0511 11.4628 15.089 11.7467C15.127 12.0306 15.2327 12.3013 15.3971 12.5357C16.2931 13.8126 14.8126 15.2931 13.5356 14.3971C13.3013 14.2327 13.0306 14.127 12.7467 14.089C12.4628 14.0511 12.174 14.0821 11.9058 14.1793C11.6376 14.2765 11.3979 14.4369 11.208 14.627C11.0181 14.817 10.8838 15.0697 10.8165 15.3425C10.456 16.8322 8.54398 16.8322 8.18354 15.3425C8.11624 15.0699 7.98192 14.8172 7.79204 14.6072C7.60215 14.3972 7.36256 14.2362 7.09441 14.1385C6.82626 14.0408 6.53801 14.0094 6.25397 14.0471C5.96993 14.0847 5.699 14.1903 5.46439 14.3547C4.18742 15.2507 2.70697 13.7703 3.60297 12.4933C3.7674 12.259 3.87308 11.9882 3.91115 11.7042C3.94921 11.4202 3.91817 11.1319 3.82074 10.8637C3.7233 10.5955 3.56238 10.3558 3.35229 10.1658C3.14219 9.97584 2.8895 9.84148 2.61676 9.77415C1.12611 9.41375 1.12611 7.50128 2.61676 7.14085C2.8894 7.07355 3.14198 6.93926 3.35192 6.74937C3.56186 6.55949 3.72272 6.3199 3.82017 6.05176C3.91762 5.78362 3.9487 5.49536 3.9111 5.21133C3.87349 4.9273 3.76791 4.65637 3.60362 4.42176C2.70762 3.14479 4.18807 1.66434 5.46503 2.56034C5.69941 2.72477 5.97011 2.83045 6.25402 2.86852C6.53793 2.90658 6.82613 2.87554 7.09432 2.77811C7.36252 2.68068 7.60227 2.51976 7.79222 2.30967C7.98217 2.09958 8.11624 1.84691 8.18354 1.61732Z" fill={color}/>
          <circle cx="9.5" cy="9.5" r="2.5" fill="none" stroke={color} strokeWidth="1.5"/>
        </svg>
      </div>
    </div>
  );
}

function IntegrationsIcon() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.5 3C13.1193 3 12 4.11929 12 5.5C12 6.88071 13.1193 8 14.5 8C15.8807 8 17 6.88071 17 5.5C17 4.11929 15.8807 3 14.5 3ZM10.5 5.5C10.5 3.29086 12.2909 1.5 14.5 1.5C16.7091 1.5 18.5 3.29086 18.5 5.5C18.5 7.70914 16.7091 9.5 14.5 9.5C13.3752 9.5 12.3576 9.04398 11.616 8.30566L8.85754 9.68485C8.95128 9.94916 9 10.2188 9 10.5C9 10.7812 8.9511 11.0508 8.85754 11.3152L11.616 12.6943C12.3576 11.956 13.3752 11.5 14.5 11.5C16.7091 11.5 18.5 13.2909 18.5 15.5C18.5 17.7091 16.7091 19.5 14.5 19.5C12.2909 19.5 10.5 17.7091 10.5 15.5C10.5 15.2188 10.5311 14.9492 10.5898 14.6953L7.83179 13.3164C7.09016 14.0439 6.07629 14.5 4.95752 14.5C2.74838 14.5 0.957520 12.7091 0.957520 10.5C0.957520 8.29086 2.74838 6.5 4.95752 6.5C6.07629 6.5 7.09016 6.95605 7.83179 7.68359L10.5898 6.30469C10.5311 6.05078 10.5 5.78125 10.5 5.5ZM4.95752 8C3.57681 8 2.45752 9.11929 2.45752 10.5C2.45752 11.8807 3.57681 13 4.95752 13C6.33823 13 7.45752 11.8807 7.45752 10.5C7.45752 9.11929 6.33823 8 4.95752 8ZM14.5 13C13.1193 13 12 14.1193 12 15.5C12 16.8807 13.1193 18 14.5 18C15.8807 18 17 16.8807 17 15.5C17 14.1193 15.8807 13 14.5 13Z" fill="var(--cp-text-primary)"/>
        </svg>
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
            <path d={svgPaths.p3089f53e} fill="var(--cp-text-primary)" />
            <path clipRule="evenodd" d={svgPaths.p20de25f0} fill="var(--cp-text-primary)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p11a4ee80} fill="var(--cp-text-primary)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p10cf0100} fill="var(--cp-text-primary)" fillRule="evenodd" />
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
            <path d={svgPaths.p231af140} fill="var(--cp-text-primary)" />
            <path d={svgPaths.p8479d00} fill="var(--cp-text-primary)" />
            <path d={svgPaths.p18d5fb30} fill="var(--cp-text-primary)" />
            <path d={svgPaths.p1c3d800} fill="var(--cp-text-primary)" />
            <path d={svgPaths.p26450f00} fill="var(--cp-text-primary)" />
            <path d={svgPaths.p7eb4d00} fill="var(--cp-text-primary)" />
            <path d={svgPaths.p313a9100} fill="var(--cp-text-primary)" />
            <path d={svgPaths.p3bceaa00} fill="var(--cp-text-primary)" />
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
            <path clipRule="evenodd" d={svgPaths.p162d78f0} fill="var(--cp-text-primary)" fillRule="evenodd" />
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
            <path clipRule="evenodd" d={svgPaths.p1f48b500} fill="var(--cp-text-primary)" fillRule="evenodd" />
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
        <path d={svgPaths.p35009400} fill="var(--cp-brand-primary)" />
        <path d={svgPaths.p18d7280} fill="var(--cp-brand-primary)" />
        <path d={svgPaths.p2aa04180} fill="var(--cp-brand-primary)" />
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
                      <path clipRule="evenodd" d={svgPaths.p104ea440} fill="var(--cp-brand-primary)" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p3438aa00} fill="var(--cp-brand-primary)" fillRule="evenodd" />
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
