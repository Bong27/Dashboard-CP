import { Outlet, Link, useLocation } from 'react-router';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Balances',
  '/transactions': 'Transactions',
  '/settings': 'Settings',
  '/integrations': 'Integrations',
  '/invoicing': 'Invoicing',
  '/pos': 'POS',
  '/support': 'Support',
};
import svgPaths from '../../imports/Wallet-2/svg-tfchl2zu4w';
import imgCircle from '../../imports/Wallet-2/7e6eebe580b2dba6f0a0b9b74d6ab1a4021a315d.png';

function Logo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[166.8px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166.8 24">
        <g clipPath="url(#clip0_1_2215)" id="Logo">
          <path clipRule="evenodd" d={svgPaths.p2c0ec700} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" opacity="0.5" />
          <path clipRule="evenodd" d={svgPaths.p527e600} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" opacity="0.7" />
          <path clipRule="evenodd" d={svgPaths.p1ae0ac00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_3" opacity="0.9" />
          <path clipRule="evenodd" d={svgPaths.pd0246f0} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_4" opacity="0.5" />
          <path clipRule="evenodd" d={svgPaths.p38f33980} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_5" opacity="0.7" />
          <path clipRule="evenodd" d={svgPaths.p3ba682f2} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_6" opacity="0.5" />
          <path clipRule="evenodd" d={svgPaths.p1ad61a00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_7" opacity="0.9" />
          <path clipRule="evenodd" d={svgPaths.p3ba05b00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_8" opacity="0.7" />
          <path clipRule="evenodd" d={svgPaths.pf488500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p1d63780} fill="var(--fill-0, #C0C9D7)" fillRule="evenodd" id="Vector_10" />
          <path d={svgPaths.p2fffa090} fill="var(--fill-0, black)" id="Vector_11" />
          <path d={svgPaths.p2d428580} fill="var(--fill-0, black)" id="Vector_12" />
          <path d={svgPaths.p7236e00} fill="url(#paint0_linear_1_2215)" id="Vector_13" opacity="0.3" />
          <path d={svgPaths.p13e14280} fill="var(--fill-0, black)" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p3d4c71f0} fill="var(--fill-0, #B0B5BE)" fillRule="evenodd" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.p375d7fc0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_16" />
          <path d={svgPaths.p15babd00} fill="var(--fill-0, black)" id="Vector_17" />
          <path d={svgPaths.p394a7600} fill="var(--fill-0, black)" id="Vector_18" />
          <path d={svgPaths.p8d23e00} fill="var(--fill-0, black)" id="Vector_19" />
          <path d={svgPaths.p10363e00} fill="var(--fill-0, black)" id="Vector_20" />
          <path d={svgPaths.p1db84d70} fill="var(--fill-0, black)" id="Vector_21" />
          <path d={svgPaths.p91acd80} fill="var(--fill-0, black)" id="Vector_22" />
          <path d={svgPaths.p1d03ca70} fill="var(--fill-0, black)" id="Vector_23" />
          <path d={svgPaths.p3c083440} fill="var(--fill-0, black)" id="Vector_24" />
          <path d={svgPaths.p1f08fa00} fill="var(--fill-0, black)" id="Vector_25" />
          <path d={svgPaths.p37bbfd20} fill="var(--fill-0, black)" id="Vector_26" />
          <path d={svgPaths.p193e4b80} fill="var(--fill-0, black)" id="Vector_27" />
          <path d={svgPaths.p29499400} fill="var(--fill-0, black)" id="Vector_28" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2215" x1="4.35076" x2="0.193954" y1="12.2816" y2="17.0692">
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_1_2215">
            <rect fill="white" height="24" width="166.8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to || (to === '/' && location.pathname === '/wallet');

  return (
    <Link
      to={to}
      className={`bg-white content-stretch flex gap-[5px] h-[44px] items-center px-[10px] relative rounded-[6px] shrink-0 w-full ${
        isActive ? 'text-[#1c60dd]' : 'text-[#183049]'
      }`}
    >
      <div aria-hidden="true" className="absolute border border-white border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
        {icon}
      </div>
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.5px] whitespace-nowrap ${isActive ? 'text-[#1c60dd]' : 'text-[#183049]'}`}>
        {label}
      </p>
    </Link>
  );
}

export default function DashboardLayout() {
  const location = useLocation();
  const pageTitle = PAGE_TITLES[location.pathname] ?? 'Dashboard';

  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col items-start relative size-full">
      {/* Top Navbar */}
      <div className="bg-white content-stretch flex h-[70px] items-center justify-between overflow-clip relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[225px]">
          <div className="content-stretch flex flex-col items-start px-[20px] py-[10px] relative shrink-0 w-[205px]">
            <Logo />
          </div>
        </div>

        <div className="flex-[1_0_0] h-[71px] min-w-px relative">
          <div aria-hidden="true" className="absolute border-[#e5e9f2] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pr-[40px] py-[10px] relative size-full">
              {/* Title Area */}
              <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
                <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" />
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <div className="absolute inset-[5%_-0.9%_0_0]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.2167 22.8">
                      <g>
                        <path clipRule="evenodd" d={svgPaths.p104ea440} fill="var(--fill-0, #1C60DD)" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgPaths.p3438aa00} fill="var(--fill-0, #1C60DD)" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" />
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#183049] text-[18px] tracking-[-0.2px] whitespace-nowrap">{pageTitle}</p>
              </div>

              {/* Account Controls */}
              <div className="bg-[#f7f8fc] content-stretch flex gap-[10px] items-center overflow-clip pl-[5px] relative rounded-[100px] shrink-0">
                <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                  <div className="bg-[#f7f8fc] content-stretch flex gap-[5px] items-center p-[5px] relative rounded-[100px] shrink-0">
                    <div aria-hidden="true" className="absolute border border-[#f7f8fc] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[18px]">
                      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-1/2 not-italic text-[#183049] text-[11px] text-center top-[calc(50%-7px)] whitespace-nowrap">$</p>
                    </div>
                    <p className="font-['Fira_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#183049] text-[10px] text-center whitespace-nowrap">USD</p>
                  </div>
                  <div className="bg-[#e5e9f2] h-[10px] relative shrink-0 w-px" />
                  <div className="bg-[#f7f8fc] content-stretch flex gap-[5px] items-center p-[5px] relative rounded-[100px] shrink-0">
                    <div aria-hidden="true" className="absolute border border-[#f7f8fc] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    <div className="overflow-clip relative rounded-[100px] shrink-0 size-[18px]">
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
                        <div className="absolute bg-white inset-0 rounded-[100px]" />
                        <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgCircle} />
                      </div>
                    </div>
                    <p className="font-['Fira_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#183049] text-[10px] text-center whitespace-nowrap">EN</p>
                  </div>
                  <div className="bg-[#e5e9f2] h-[10px] relative shrink-0 w-px" />
                </div>
                <div className="bg-white content-stretch flex gap-[10px] h-[40px] items-center pl-[15px] pr-[5px] relative rounded-[100px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[100px]" />
                  <div className="overflow-clip relative shrink-0 size-[15px]">
                    <div className="absolute inset-[18.75%_6.25%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.125 9.375">
                        <path d={svgPaths.pa6db700} fill="var(--fill-0, #D3D6E1)" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-[#d3d6e1] overflow-clip relative rounded-[100px] shrink-0 size-[28px]">
                    <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic text-[13px] text-center text-white top-[calc(50%-8px)] whitespace-nowrap">C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full">
        {/* Sidebar */}
        <div className="bg-white h-full relative shrink-0">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-between pb-[20px] px-[10px] relative size-full">
              {/* Sidebar Top */}
              <div className="content-stretch flex flex-col gap-[8px] items-start pt-[20px] relative shrink-0 w-full">
                <NavItem
                  to="/"
                  label="Wallet"
                  icon={
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <div className="absolute inset-[5%_-0.9%_0_0]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1806 19">
                          <g>
                            <path clipRule="evenodd" d={svgPaths.pbf04600} fill="currentColor" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p3b018100} fill="currentColor" fillRule="evenodd" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  }
                />

                <NavItem
                  to="/transactions"
                  label="Transactions"
                  icon={
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <div className="-translate-x-1/2 absolute aspect-[16.764892578125/15.999999046325684] bottom-[10%] left-[calc(50%-0.12px)] top-[10%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7649 16">
                          <g>
                            <path clipRule="evenodd" d={svgPaths.p2f87c900} fill="currentColor" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p329d3b00} fill="currentColor" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p2e748900} fill="currentColor" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p2daa61c0} fill="currentColor" fillRule="evenodd" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  }
                />

                <div className="bg-[#e5e9f2] h-px relative shrink-0 w-[205px]" />

                <NavItem
                  to="/settings"
                  label="Settings"
                  icon={
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g>
                          <path d={svgPaths.p1d640c00} fill="currentColor" />
                          <path d={svgPaths.p103b100} fill="currentColor" />
                          <path d={svgPaths.p1c8eb00} fill="currentColor" />
                          <path d={svgPaths.p29d62370} fill="currentColor" />
                        </g>
                      </svg>
                    </div>
                  }
                />

                <NavItem
                  to="/integrations"
                  label="Integrations"
                  icon={
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <div className="absolute inset-[3.96%_1.18%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5277 18.4166">
                          <g>
                            <path clipRule="evenodd" d={svgPaths.p1322e200} fill="currentColor" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p20c5c200} fill="currentColor" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p32c7f000} fill="currentColor" fillRule="evenodd" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  }
                />

                <NavItem
                  to="/invoicing"
                  label="Invoicing"
                  icon={
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <div className="absolute inset-[5%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <g>
                            <path clipRule="evenodd" d={svgPaths.p1d18f10} fill="currentColor" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p1c8f100} fill="currentColor" fillRule="evenodd" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  }
                />

                <NavItem
                  to="/pos"
                  label="POS"
                  icon={
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <div className="absolute inset-[10%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path d={svgPaths.p1bb3a00} fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  }
                />

                <div className="bg-[#e5e9f2] h-px relative shrink-0 w-[205px]" />

                <NavItem
                  to="/support"
                  label="Support"
                  icon={
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <div className="absolute inset-[5%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <g>
                            <path clipRule="evenodd" d={svgPaths.p2aee1200} fill="currentColor" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p2be3cc80} fill="currentColor" fillRule="evenodd" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  }
                />
              </div>

              {/* Sidebar Footer */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <button className="bg-white content-stretch flex gap-[5px] h-[44px] items-center px-[10px] relative rounded-[6px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-white border-solid inset-0 pointer-events-none rounded-[6px]" />
                  <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <div className="absolute inset-[16.25%_11.25%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 13.5">
                          <path d={svgPaths.p2f80700} fill="var(--fill-0, #183049)" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">More</p>
                </button>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#e5e9f2] border-r-[0.5px] border-solid inset-[0_-0.25px_0_0] pointer-events-none" />
        </div>

        {/* Page Content */}
        <div className="bg-white flex-[1_0_0] h-full min-w-px relative">
          <div className="overflow-clip rounded-[inherit] size-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
