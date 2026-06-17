import { useState } from 'react';
import svgPaths from "./svg-tfchl2zu4w";
import imgCircle from "./7e6eebe580b2dba6f0a0b9b74d6ab1a4021a315d.png";
import { WalletRowExpanded } from '../../app/components/WalletRowExpanded';
import SettingsPage from '../../app/pages/SettingsPage';

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

function LogoWrap() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] py-[10px] relative shrink-0 w-[205px]" data-name="logo-wrap">
      <Logo />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[225px]">
      <LogoWrap />
    </div>
  );
}

function LineDivider() {
  return <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function LineDivider1() {
  return <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function TitleArea({ currentPage }: { currentPage: string }) {
  const title = currentPage === 'settings' ? 'Settings' : 'Balances';
  const icon = currentPage === 'settings' ? (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon / settings">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Vector">
          <path d={svgPaths.p1d640c00} fill="var(--fill-0, #1C60DD)" />
          <path d={svgPaths.p103b100} fill="var(--fill-0, #1C60DD)" />
          <path d={svgPaths.p1c8eb00} fill="var(--fill-0, #1C60DD)" />
          <path d={svgPaths.p29d62370} fill="var(--fill-0, #1C60DD)" />
        </g>
      </svg>
    </div>
  ) : (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="icon / wallet">
      <div className="absolute inset-[5%_-0.9%_0_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.2167 22.8">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p104ea440} fill="var(--fill-0, #1C60DD)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3438aa00} fill="var(--fill-0, #1C60DD)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );

  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="title-area">
      <LineDivider />
      {icon}
      <LineDivider1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[18px] tracking-[-0.2px] whitespace-nowrap">{title}</p>
    </div>
  );
}

function Circle() {
  return (
    <div className="bg-white overflow-clip relative rounded-[100px] shrink-0 size-[18px]" data-name="circle">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-1/2 not-italic text-[var(--cp-text-primary)] text-[11px] text-center top-[calc(50%-7px)] whitespace-nowrap">$</p>
    </div>
  );
}

function Divider() {
  return <div className="bg-[var(--cp-border-default)] h-[10px] relative shrink-0 w-px" data-name="divider" />;
}

function Circle1() {
  return (
    <div className="overflow-clip relative rounded-[100px] shrink-0 size-[18px]" data-name="circle">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
        <div className="absolute bg-white inset-0 rounded-[100px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgCircle} />
      </div>
    </div>
  );
}

function Divider1() {
  return <div className="bg-[var(--cp-border-default)] h-[10px] relative shrink-0 w-px" data-name="divider" />;
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <div className="bg-[var(--cp-bg-1)] content-stretch flex gap-[5px] items-center p-[5px] relative rounded-[100px] shrink-0" data-name="selector">
        <div aria-hidden="true" className="absolute border border-[var(--cp-bg-1)] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <Circle />
        <p className="font-['Fira_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[10px] text-center whitespace-nowrap">USD</p>
      </div>
      <Divider />
      <div className="bg-[var(--cp-bg-1)] content-stretch flex gap-[5px] items-center p-[5px] relative rounded-[100px] shrink-0" data-name="selector">
        <div aria-hidden="true" className="absolute border border-[var(--cp-bg-1)] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <Circle1 />
        <p className="font-['Fira_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[10px] text-center whitespace-nowrap">EN</p>
      </div>
      <Divider1 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[var(--cp-text-quaternary)] overflow-clip relative rounded-[100px] shrink-0 size-[28px]">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic text-[13px] text-center text-white top-[calc(50%-8px)] whitespace-nowrap">C</p>
    </div>
  );
}

function Frame24({ currentPage }: { currentPage: string }) {
  return (
    <div className="flex-[1_0_0] h-[71px] min-w-px relative">
      <div aria-hidden="true" className="absolute border-[var(--cp-border-default)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[40px] py-[10px] relative size-full">
          <TitleArea currentPage={currentPage} />
          <div className="bg-[var(--cp-bg-1)] content-stretch flex gap-[10px] items-center overflow-clip pl-[5px] relative rounded-[100px] shrink-0" data-name="account-controls">
            <Frame29 />
            <div className="bg-white content-stretch flex gap-[10px] h-[40px] items-center pl-[15px] pr-[5px] relative rounded-[100px] shrink-0" data-name="account-menu">
              <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
              <div className="overflow-clip relative shrink-0 size-[15px]" data-name="icon / menu">
                <div className="absolute inset-[18.75%_6.25%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.125 9.375">
                    <path d={svgPaths.pa6db700} fill="var(--fill-0, #D3D6E1)" id="Vector" />
                  </svg>
                </div>
              </div>
              <Frame28 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15({ isActive }: { isActive: boolean }) {
  const iconColor = isActive ? '#1C60DD' : '#183049';
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon / wallet">
        <div className="absolute inset-[5%_-0.9%_0_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1806 19">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.pbf04600} fill={iconColor} fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3b018100} fill={iconColor} fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame7({ isActive }: { isActive: boolean }) {
  const textColor = isActive ? 'text-[var(--cp-brand-primary)]' : 'text-[var(--cp-text-primary)]';
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame15 isActive={isActive} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 ${textColor} text-[14.5px] whitespace-nowrap`}>Wallet</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon / transactions">
        <div className="-translate-x-1/2 absolute aspect-[16.764892578125/15.999999046325684] bottom-[10%] left-[calc(50%-0.12px)] top-[10%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7649 16">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p2f87c900} fill="var(--fill-0, #183049)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p329d3b00} fill="var(--fill-0, #183049)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2e748900} fill="var(--fill-0, #183049)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2daa61c0} fill="var(--fill-0, #183049)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame16 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] whitespace-nowrap">Transactions</p>
    </div>
  );
}

function Line() {
  return (
    <div className="bg-[var(--cp-border-default)] h-px relative shrink-0 w-[205px]" data-name="line">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Divider2() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="divider">
      <Line />
    </div>
  );
}

function Frame17({ isActive }: { isActive: boolean }) {
  const iconColor = isActive ? '#1C60DD' : '#183049';
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon / settings">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Vector">
            <path d={svgPaths.p1d640c00} fill={iconColor} />
            <path d={svgPaths.p103b100} fill={iconColor} />
            <path d={svgPaths.p1c8eb00} fill={iconColor} />
            <path d={svgPaths.p29d62370} fill={iconColor} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame9({ isActive }: { isActive: boolean }) {
  const textColor = isActive ? 'text-[var(--cp-brand-primary)]' : 'text-[var(--cp-text-primary)]';
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame17 isActive={isActive} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 ${textColor} text-[14.5px] whitespace-nowrap`}>Settings</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon / integrations">
        <div className="absolute inset-[3.96%_1.18%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5277 18.4166">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p1322e200} fill="var(--fill-0, #183049)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p20c5c200} fill="var(--fill-0, #183049)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p32c7f000} fill="var(--fill-0, #183049)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame18 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] whitespace-nowrap">Integrations</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon / invoicing">
        <div className="absolute inset-[8.13%_16.46%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4167 16.75">
            <g id="Vector">
              <path d={svgPaths.p3089f53e} fill="var(--fill-0, #183049)" />
              <path clipRule="evenodd" d={svgPaths.p20de25f0} fill="var(--fill-0, #183049)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p11a4ee80} fill="var(--fill-0, #183049)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p10cf0100} fill="var(--fill-0, #183049)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame19 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] whitespace-nowrap">Invoicing</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon / POS">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
            <g id="Vector">
              <path d={svgPaths.p231af140} fill="var(--fill-0, #183049)" />
              <path d={svgPaths.p8479d00} fill="var(--fill-0, #183049)" />
              <path d={svgPaths.p18d5fb30} fill="var(--fill-0, #183049)" />
              <path d={svgPaths.p1c3d800} fill="var(--fill-0, #183049)" />
              <path d={svgPaths.p26450f00} fill="var(--fill-0, #183049)" />
              <path d={svgPaths.p7eb4d00} fill="var(--fill-0, #183049)" />
              <path d={svgPaths.p313a9100} fill="var(--fill-0, #183049)" />
              <path d={svgPaths.p3bceaa00} fill="var(--fill-0, #183049)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame20 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] whitespace-nowrap">POS</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon / support">
        <div className="absolute inset-[8.13%_8.13%_8.12%_8.13%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.75 16.75">
            <path clipRule="evenodd" d={svgPaths.p162d78f0} fill="var(--fill-0, #183049)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame21 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] whitespace-nowrap">Support</p>
    </div>
  );
}

function Line1() {
  return (
    <div className="bg-[var(--cp-border-default)] h-px relative shrink-0 w-[205px]" data-name="line">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Divider3() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="divider">
      <Line1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon / toggle-down">
        <div className="absolute inset-[34.38%_21.88%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 6.24998">
            <path clipRule="evenodd" d={svgPaths.p1f48b500} fill="var(--fill-0, #183049)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame23 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] text-left whitespace-nowrap">More</p>
    </div>
  );
}

function MenuList({ currentPage, onNavigate }: { currentPage: string; onNavigate: (page: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="menu-list">
      <div onClick={() => onNavigate('wallet')} className={`content-stretch flex flex-col items-start p-[10px] relative rounded-[100px] shrink-0 w-[205px] cursor-pointer transition-colors ${currentPage === 'wallet' ? 'bg-[var(--cp-bg-1)]' : 'hover:bg-[var(--cp-bg-1)]'}`} data-name="Menu item">
        <Frame7 isActive={currentPage === 'wallet'} />
      </div>
      <div className="content-stretch flex flex-col items-start p-[10px] relative rounded-[100px] shrink-0 w-[205px] cursor-pointer hover:bg-[var(--cp-bg-1)] transition-colors" data-name="Menu item">
        <Frame8 />
      </div>
      <Divider2 />
      <div onClick={() => onNavigate('settings')} className={`content-stretch flex flex-col items-start p-[10px] relative rounded-[100px] shrink-0 w-[205px] cursor-pointer transition-colors ${currentPage === 'settings' ? 'bg-[var(--cp-bg-1)]' : 'hover:bg-[var(--cp-bg-1)]'}`} data-name="Menu item">
        <Frame9 isActive={currentPage === 'settings'} />
      </div>
      <div className="content-stretch flex flex-col items-start p-[10px] relative rounded-[100px] shrink-0 w-[205px] cursor-pointer hover:bg-[var(--cp-bg-1)] transition-colors" data-name="Menu item">
        <Frame10 />
      </div>
      <div className="content-stretch flex flex-col items-start p-[10px] relative rounded-[100px] shrink-0 w-[205px] cursor-pointer hover:bg-[var(--cp-bg-1)] transition-colors" data-name="Menu item">
        <Frame11 />
      </div>
      <div className="content-stretch flex flex-col items-start p-[10px] relative rounded-[100px] shrink-0 w-[205px] cursor-pointer hover:bg-[var(--cp-bg-1)] transition-colors" data-name="Menu item">
        <Frame12 />
      </div>
      <div className="content-stretch flex flex-col items-start p-[10px] relative rounded-[100px] shrink-0 w-[205px] cursor-pointer hover:bg-[var(--cp-bg-1)] transition-colors" data-name="Menu item">
        <Frame13 />
      </div>
      <Divider3 />
      <button className="content-stretch cursor-pointer flex flex-col items-start p-[10px] relative rounded-[100px] shrink-0 w-[205px] hover:bg-[var(--cp-bg-1)] transition-colors" data-name="Menu item">
        <Frame14 />
      </button>
    </div>
  );
}

function SidenavTop({ currentPage, onNavigate }: { currentPage: string; onNavigate: (page: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[205px]" data-name="sidenav-top">
      <MenuList currentPage={currentPage} onNavigate={onNavigate} />
    </div>
  );
}

function SidenavFooter() {
  return (
    <div className="relative shrink-0 w-full" data-name="sidenav-footer">
      <div className="content-stretch flex flex-col items-start p-[5px] relative size-full">
        <button className="bg-white cursor-pointer h-[42px] relative rounded-[100px] shrink-0 w-[195px]" data-name="CTA-menu">
          <div className="content-stretch flex gap-[5px] items-center justify-center overflow-clip px-[10px] relative rounded-[inherit] size-full">
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon / add-plus">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <g id="Vector">
                  <path d={svgPaths.p35009400} fill="var(--fill-0, #1C60DD)" />
                  <path d={svgPaths.p18d7280} fill="var(--fill-0, #1C60DD)" />
                  <path d={svgPaths.p2aa04180} fill="var(--fill-0, #1C60DD)" />
                </g>
              </svg>
            </div>
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] text-center whitespace-nowrap">New Transaction</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
        </button>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_2_1750)" id="search">
          <path clipRule="evenodd" d={svgPaths.p34a3fe00} fill="var(--fill-0, #A8B7CA)" fillRule="evenodd" id="Vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p1aa08900} fill="var(--fill-0, #A8B7CA)" fillRule="evenodd" id="Vector (Stroke)_2" />
        </g>
        <defs>
          <clipPath id="clip0_2_1750">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Inputs() {
  return (
    <div className="content-stretch flex gap-[20px] h-full items-center relative shrink-0" data-name="inputs">
      <div className="bg-white h-[38px] relative rounded-[5px] shrink-0 w-[298px]" data-name="Search">
        <div className="content-stretch flex items-center justify-between overflow-clip p-[10px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-quinary)] text-[13px] whitespace-nowrap">Search</p>
          <Search />
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="relative rounded-[5px] shrink-0 w-[209px]" data-name="Dropdown">
        <div className="content-stretch flex items-center justify-between overflow-clip p-[10px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[13px] whitespace-nowrap">Show all coins</p>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon / toggle-down">
            <div className="absolute inset-[34.38%_21.88%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 5.62498">
                <path clipRule="evenodd" d={svgPaths.p3f5aa180} fill="var(--fill-0, #A2A5AC)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold items-end leading-[normal] not-italic relative shrink-0 w-[118px] whitespace-nowrap">
      <p className="relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase">ESTIMATED BALANCE</p>
      <p className="relative shrink-0 text-[var(--cp-text-primary)] text-[18px] tracking-[-0.2px]">$0.00 USD</p>
    </div>
  );
}

function Frame25() {
  return <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />;
}

function Content1() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">View wallet balances by date</p>
    </div>
  );
}

function Div() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Balance() {
  return (
    <div className="content-stretch flex gap-[16px] h-full items-center relative shrink-0" data-name="balance">
      <Frame27 />
      <Frame25 />
      <div className="bg-white relative rounded-[100px] shrink-0 size-[24px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / calendar">
            <div className="absolute inset-[3.12%_0.05%_0.05%_4.5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8177 10.3289">
                <path clipRule="evenodd" d={svgPaths.p26277800} fill="var(--fill-0, #8492A6)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content1 />
            <Div />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function TopControls() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="top controls">
      <Inputs />
      <Balance />
    </div>
  );
}

function SwitchBalances() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="switch-balances">
      <button className="block cursor-pointer h-[20px] relative shrink-0 w-[32px]" data-name="Switch">
        <div className="absolute bg-[var(--cp-brand-primary)] inset-0 rounded-[50px]" />
        <div className="absolute inset-[7.69%_4.76%_7.7%_42.86%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7619 16.9231">
            <ellipse cx="8.38095" cy="8.46154" fill="var(--fill-0, white)" id="Ellipse 174" rx="8.38095" ry="8.46154" />
          </svg>
        </div>
      </button>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-secondary)] text-[13px] whitespace-nowrap">Auto-Accept Incorrect Deposits into Primary Balances</p>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="icon / info solid">
        <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path clipRule="evenodd" d={svgPaths.p2df82080} fill="var(--fill-0, #D3D6E1)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LayerX6() {
  return (
    <div className="absolute contents inset-0" data-name="Layer_x0020_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9959 36">
        <g id="_1421344023328">
          <path d={svgPaths.p3bb04e00} fill="var(--fill-0, #F7931A)" id="Vector" />
          <path d={svgPaths.p3f7e8e00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BitcoinBtcLogo() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX6 />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo />
      </div>
      <Name />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[105px]">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">0.000000 BTC</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Value() {
  return (
    <div className="content-stretch flex items-center px-[20px] relative shrink-0" data-name="value">
      <Frame />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[390px]" data-name="left">
      <Coin />
      <Value />
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Convert</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Receive</p>
    </div>
  );
}

function Div2() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Send</p>
    </div>
  );
}

function Div3() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="controls">
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / convert">
            <div className="absolute inset-[9.27%_17.99%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8835 13.0339">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p28e65480} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p23d2c80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p8311e00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3f77e80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p22c70000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3e540080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pc43c680} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p19eb8700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content2 />
            <Div1 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / receive">
            <div className="absolute inset-[11.82%_13.6%_11.83%_13.6%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3758 12.2171">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2cad1000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pcd29c00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3eb1dc00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p36f81900} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p39b6700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content3 />
            <Div2 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / send">
            <div className="absolute inset-[18.75%_24.1%_22.48%_20.59%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.40295 9.40295">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p9eec080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1255df80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p2c049700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1bc13700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content4 />
            <Div3 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function ControlsExpanded() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="controls">
      <div className="bg-white h-[36px] relative rounded-[100px] shrink-0">
        <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[13px] text-center whitespace-nowrap">Convert</p>
          <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon / convert">
            <div className="absolute inset-[9.27%_17.99%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.96288 11.4047">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p28e65480} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p23d2c80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p8311e00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3f77e80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p22c70000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3e540080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pc43c680} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p19eb8700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white h-[36px] relative rounded-[100px] shrink-0">
        <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[13px] text-center whitespace-nowrap">Receive</p>
          <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon / receive">
            <div className="absolute inset-[11.82%_13.6%_11.83%_13.6%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1918 10.6899">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2cad1000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pcd29c00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3eb1dc00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p36f81900} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p39b6700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white h-[36px] relative rounded-[100px] shrink-0">
        <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[20px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[13px] text-center whitespace-nowrap">Send</p>
          <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icon / send">
            <div className="absolute inset-[18.75%_24.1%_22.48%_20.59%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.74361 8.22758">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p9eec080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1255df80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p2c049700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1bc13700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="wrap">
      <Left />
      <Controls />
    </div>
  );
}

function WrapExpanded() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-full" data-name="wrap">
      <div className="content-stretch flex gap-[150px] items-center relative shrink-0" data-name="left">
        <Coin />
      </div>
      <ControlsExpanded />
    </div>
  );
}

function LayerX() {
  return (
    <div className="absolute contents inset-0" data-name="Layer_x0020_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9959 36">
        <g id="_1421344023328">
          <path d={svgPaths.p3bb04e00} fill="var(--fill-0, #F7931A)" id="Vector" />
          <path d={svgPaths.p3f7e8e00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BitcoinBtcLogo1() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX />
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo1 />
      </div>
      <Name1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[105px]">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">0.000000 BTC</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Value1() {
  return (
    <div className="content-stretch flex items-center px-[20px] relative shrink-0" data-name="value">
      <Frame1 />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[390px]" data-name="left">
      <Coin1 />
      <Value1 />
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Convert</p>
    </div>
  );
}

function Div4() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Content6() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Receive</p>
    </div>
  );
}

function Div5() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Content7() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Send</p>
    </div>
  );
}

function Div6() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Controls1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="controls">
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / convert">
            <div className="absolute inset-[9.27%_17.99%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8835 13.0339">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p28e65480} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p23d2c80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p8311e00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3f77e80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p22c70000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3e540080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pc43c680} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p19eb8700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content5 />
            <Div4 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / receive">
            <div className="absolute inset-[11.82%_13.6%_11.83%_13.6%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3758 12.2171">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2cad1000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pcd29c00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3eb1dc00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p36f81900} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p39b6700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content6 />
            <Div5 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / send">
            <div className="absolute inset-[18.75%_24.1%_22.48%_20.59%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.40295 9.40295">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p9eec080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1255df80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p2c049700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1bc13700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content7 />
            <Div6 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function Wrap1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="wrap">
      <Left1 />
      <Controls1 />
    </div>
  );
}

function LayerX1() {
  return (
    <div className="absolute contents inset-0" data-name="Layer_x0020_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9959 36">
        <g id="_1421344023328">
          <path d={svgPaths.p3bb04e00} fill="var(--fill-0, #F7931A)" id="Vector" />
          <path d={svgPaths.p3f7e8e00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BitcoinBtcLogo2() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX1 />
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo2 />
      </div>
      <Name2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[105px]">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">0.000000 BTC</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Value2() {
  return (
    <div className="content-stretch flex items-center px-[20px] relative shrink-0" data-name="value">
      <Frame2 />
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[390px]" data-name="left">
      <Coin2 />
      <Value2 />
    </div>
  );
}

function Content8() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Convert</p>
    </div>
  );
}

function Div7() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Content9() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Receive</p>
    </div>
  );
}

function Div8() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Content10() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Send</p>
    </div>
  );
}

function Div9() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Controls2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="controls">
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / convert">
            <div className="absolute inset-[9.27%_17.99%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8835 13.0339">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p28e65480} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p23d2c80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p8311e00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3f77e80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p22c70000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3e540080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pc43c680} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p19eb8700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content8 />
            <Div7 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / receive">
            <div className="absolute inset-[11.82%_13.6%_11.83%_13.6%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3758 12.2171">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2cad1000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pcd29c00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3eb1dc00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p36f81900} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p39b6700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content9 />
            <Div8 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / send">
            <div className="absolute inset-[18.75%_24.1%_22.48%_20.59%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.40295 9.40295">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p9eec080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1255df80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p2c049700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1bc13700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content10 />
            <Div9 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function Wrap2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="wrap">
      <Left2 />
      <Controls2 />
    </div>
  );
}

function LayerX2() {
  return (
    <div className="absolute contents inset-0" data-name="Layer_x0020_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9959 36">
        <g id="_1421344023328">
          <path d={svgPaths.p3bb04e00} fill="var(--fill-0, #F7931A)" id="Vector" />
          <path d={svgPaths.p3f7e8e00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BitcoinBtcLogo3() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX2 />
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo3 />
      </div>
      <Name3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[105px]">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">0.000000 BTC</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Value3() {
  return (
    <div className="content-stretch flex items-center px-[20px] relative shrink-0" data-name="value">
      <Frame3 />
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[390px]" data-name="left">
      <Coin3 />
      <Value3 />
    </div>
  );
}

function Content11() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Convert</p>
    </div>
  );
}

function Div10() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Content12() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Receive</p>
    </div>
  );
}

function Div11() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Content13() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Send</p>
    </div>
  );
}

function Div12() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Controls3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="controls">
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / convert">
            <div className="absolute inset-[9.27%_17.99%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8835 13.0339">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p28e65480} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p23d2c80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p8311e00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3f77e80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p22c70000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3e540080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pc43c680} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p19eb8700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content11 />
            <Div10 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / receive">
            <div className="absolute inset-[11.82%_13.6%_11.83%_13.6%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3758 12.2171">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2cad1000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pcd29c00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3eb1dc00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p36f81900} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p39b6700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content12 />
            <Div11 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / send">
            <div className="absolute inset-[18.75%_24.1%_22.48%_20.59%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.40295 9.40295">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p9eec080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1255df80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p2c049700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1bc13700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content13 />
            <Div12 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function Wrap3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="wrap">
      <Left3 />
      <Controls3 />
    </div>
  );
}

function LayerX3() {
  return (
    <div className="absolute contents inset-0" data-name="Layer_x0020_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9959 36">
        <g id="_1421344023328">
          <path d={svgPaths.p3bb04e00} fill="var(--fill-0, #F7931A)" id="Vector" />
          <path d={svgPaths.p3f7e8e00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BitcoinBtcLogo4() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX3 />
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo4 />
      </div>
      <Name4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[105px]">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">0.000000 BTC</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Value4() {
  return (
    <div className="content-stretch flex items-center px-[20px] relative shrink-0" data-name="value">
      <Frame4 />
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[390px]" data-name="left">
      <Coin4 />
      <Value4 />
    </div>
  );
}

function Content14() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Convert</p>
    </div>
  );
}

function Div13() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Content15() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Receive</p>
    </div>
  );
}

function Div14() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Content16() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Send</p>
    </div>
  );
}

function Div15() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Controls4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="controls">
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / convert">
            <div className="absolute inset-[9.27%_17.99%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8835 13.0339">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p28e65480} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p23d2c80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p8311e00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3f77e80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p22c70000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3e540080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pc43c680} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p19eb8700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content14 />
            <Div13 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / receive">
            <div className="absolute inset-[11.82%_13.6%_11.83%_13.6%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3758 12.2171">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2cad1000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pcd29c00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3eb1dc00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p36f81900} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p39b6700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content15 />
            <Div14 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / send">
            <div className="absolute inset-[18.75%_24.1%_22.48%_20.59%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.40295 9.40295">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p9eec080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1255df80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p2c049700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1bc13700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content16 />
            <Div15 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function Wrap4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="wrap">
      <Left4 />
      <Controls4 />
    </div>
  );
}

function LayerX4() {
  return (
    <div className="absolute contents inset-0" data-name="Layer_x0020_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9959 36">
        <g id="_1421344023328">
          <path d={svgPaths.p3bb04e00} fill="var(--fill-0, #F7931A)" id="Vector" />
          <path d={svgPaths.p3f7e8e00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BitcoinBtcLogo5() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX4 />
    </div>
  );
}

function Name5() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo5 />
      </div>
      <Name5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[105px]">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">0.000000 BTC</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Value5() {
  return (
    <div className="content-stretch flex items-center px-[20px] relative shrink-0" data-name="value">
      <Frame5 />
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[390px]" data-name="left">
      <Coin5 />
      <Value5 />
    </div>
  );
}

function Content17() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Convert</p>
    </div>
  );
}

function Div16() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Content18() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Receive</p>
    </div>
  );
}

function Div17() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Content19() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Send</p>
    </div>
  );
}

function Div18() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Controls5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="controls">
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / convert">
            <div className="absolute inset-[9.27%_17.99%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8835 13.0339">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p28e65480} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p23d2c80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p8311e00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3f77e80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p22c70000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3e540080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pc43c680} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p19eb8700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content17 />
            <Div16 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / receive">
            <div className="absolute inset-[11.82%_13.6%_11.83%_13.6%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3758 12.2171">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2cad1000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pcd29c00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3eb1dc00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p36f81900} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p39b6700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content18 />
            <Div17 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / send">
            <div className="absolute inset-[18.75%_24.1%_22.48%_20.59%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.40295 9.40295">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p9eec080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1255df80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p2c049700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1bc13700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content19 />
            <Div18 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function Wrap5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="wrap">
      <Left5 />
      <Controls5 />
    </div>
  );
}

function LayerX5() {
  return (
    <div className="absolute contents inset-0" data-name="Layer_x0020_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.9959 36">
        <g id="_1421344023328">
          <path d={svgPaths.p3bb04e00} fill="var(--fill-0, #F7931A)" id="Vector" />
          <path d={svgPaths.p3f7e8e00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BitcoinBtcLogo6() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX5 />
    </div>
  );
}

function Name6() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo6 />
      </div>
      <Name6 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[105px]">
      <p className="font-['Inter',sans-serif] font-bold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">0.000000 BTC</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Value6() {
  return (
    <div className="content-stretch flex items-center px-[20px] relative shrink-0" data-name="value">
      <Frame6 />
    </div>
  );
}

function Left6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[390px]" data-name="left">
      <Coin6 />
      <Value6 />
    </div>
  );
}

function Content20() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Convert</p>
    </div>
  );
}

function Div19() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Content21() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Receive</p>
    </div>
  );
}

function Div20() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Content22() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">Send</p>
    </div>
  );
}

function Div21() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="div">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
        <g id="div">
          <path d={svgPaths.p2a2b1f00} fill="var(--fill-0, black)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function Controls6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="controls">
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / convert">
            <div className="absolute inset-[9.27%_17.99%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8835 13.0339">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p28e65480} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p23d2c80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p8311e00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3f77e80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p22c70000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3e540080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pc43c680} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p19eb8700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content20 />
            <Div19 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / receive">
            <div className="absolute inset-[11.82%_13.6%_11.83%_13.6%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3758 12.2171">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p2cad1000} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pcd29c00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p3eb1dc00} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p36f81900} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p39b6700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content21 />
            <Div20 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
      <div className="bg-white relative rounded-[100px] shrink-0 size-[36px]" data-name="Circle-icon">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute bottom-[27.78%] left-[27.78%] overflow-clip right-1/4 top-[27.78%]" data-name="icon / send">
            <div className="absolute inset-[18.75%_24.1%_22.48%_20.59%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.40295 9.40295">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p9eec080} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1255df80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p2c049700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1bc13700} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[-14px] top-[-43px]" data-name="Tooltip (master)">
            <Content22 />
            <Div21 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </div>
    </div>
  );
}

function Wrap6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="wrap">
      <Left6 />
      <Controls6 />
    </div>
  );
}

function List() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const rows = [
    { wrap: Wrap, bg: 'bg-[var(--cp-bg-2)]' },
    { wrap: Wrap1, bg: 'bg-[var(--cp-bg-1)]' },
    { wrap: Wrap2, bg: 'bg-[var(--cp-bg-2)]' },
    { wrap: Wrap3, bg: 'bg-[var(--cp-bg-1)]' },
    { wrap: Wrap4, bg: 'bg-[var(--cp-bg-2)]' },
    { wrap: Wrap5, bg: 'bg-[var(--cp-bg-1)]' },
    { wrap: Wrap6, bg: 'bg-[var(--cp-bg-2)]' },
  ];

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="list">
      {rows.map((row, index) => {
        const WrapComponent = row.wrap;
        const isExpanded = expandedRow === index;

        return (
          <div
            key={index}
            className={`${isExpanded ? 'bg-white' : row.bg} ${isExpanded ? 'min-h-[76px]' : 'h-[76px]'} relative rounded-[5px] shrink-0 w-full transition-all duration-300 ${isExpanded ? 'mb-[10px]' : ''} ${!isExpanded ? 'cursor-pointer hover:bg-[var(--cp-border-default)]' : ''}`}
            data-name="WalletRow"
          >
            <div className={`flex flex-col ${isExpanded ? '' : 'size-full'}`}>
              <div
                className={`flex flex-row items-center ${isExpanded ? 'border-b border-[var(--cp-border-default)]' : 'size-full'} cursor-pointer`}
                onClick={() => toggleRow(index)}
              >
                <div className={`content-stretch flex items-center ${isExpanded ? 'justify-between' : 'justify-center'} p-[20px] relative ${isExpanded ? 'w-full' : 'size-full'}`}>
                  {isExpanded ? <WrapExpanded /> : <WrapComponent />}
                </div>
              </div>
              {isExpanded && (
                <div className="px-[20px] pb-[20px]" onClick={(e) => e.stopPropagation()}>
                  <WalletRowExpanded coinName="Bitcoin" coinSymbol="BTC" />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-0 p-[10px] top-0 w-full" data-name="content">
      <TopControls />
      <SwitchBalances />
      <List />
    </div>
  );
}

function Scroll() {
  return (
    <div className="h-full relative shrink-0 w-full" data-name="Scroll">
      <Content />
    </div>
  );
}

function BodyContainer() {
  return (
    <div className="bg-[var(--cp-bg-1)] flex-[1_0_0] h-full min-w-px relative" data-name="body-container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
          <Scroll />
        </div>
      </div>
    </div>
  );
}

function Frame26({ currentPage, onNavigate }: { currentPage: string; onNavigate: (page: string) => void }) {
  return (
    <div className="content-stretch flex items-start relative w-full h-[calc(100vh-70px)]">
      <div className="bg-white fixed h-[calc(100vh-70px)] left-0 shrink-0 w-[225px] z-40" data-name="SideNav">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-between pb-[20px] px-[10px] relative size-full">
            <SidenavTop currentPage={currentPage} onNavigate={onNavigate} />
            <SidenavFooter />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[var(--cp-border-default)] border-r-[0.5px] border-solid inset-[0_-0.25px_0_0] pointer-events-none" />
      </div>
      <div className="flex-1 h-full overflow-y-auto ml-[225px]">
        {currentPage === 'settings' ? <SettingsPage /> : <BodyContainer />}
      </div>
    </div>
  );
}

export default function Wallet() {
  const [currentPage, setCurrentPage] = useState('wallet');

  return (
    <div className="bg-[var(--cp-bg-1)] content-stretch flex flex-col items-start relative size-full" data-name="Wallet">
      <div className="bg-white content-stretch fixed flex h-[70px] items-center justify-between overflow-clip shrink-0 top-0 w-full z-50" data-name="top navbar (current)">
        <Frame22 />
        <Frame24 currentPage={currentPage} />
      </div>
      <div className="pt-[70px] w-full h-full">
        <Frame26 currentPage={currentPage} onNavigate={setCurrentPage} />
      </div>
    </div>
  );
}