import svgPaths from "./svg-4khy006nai";

function Tabs() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="tabs">
      <button className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative shrink-0" data-name="tab single">
        <div aria-hidden="true" className="absolute border-0 border-[#666769] border-solid inset-0 pointer-events-none" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#666769] text-[12px] text-left whitespace-nowrap">Wallets</p>
      </button>
      <button className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative shrink-0" data-name="tab single">
        <div aria-hidden="true" className="absolute border-0 border-[#666769] border-solid inset-0 pointer-events-none" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#666769] text-[12px] text-left whitespace-nowrap">Recent Transactions</p>
      </button>
      <div className="content-stretch flex items-center justify-center px-[8px] py-[12px] relative shrink-0" data-name="tab single">
        <div aria-hidden="true" className="absolute border-[#1c60dd] border-b-2 border-solid inset-0 pointer-events-none" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1c60dd] text-[12px] whitespace-nowrap">Auto-Sweep</p>
      </div>
      <button className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative shrink-0" data-name="tab single">
        <div aria-hidden="true" className="absolute border-0 border-[#666769] border-solid inset-0 pointer-events-none" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#666769] text-[12px] text-left whitespace-nowrap">Vaulting</p>
      </button>
    </div>
  );
}

function WarningBanner() {
  return (
    <div className="bg-[#ebf1fb] relative rounded-[5px] shrink-0 w-full" data-name="warning-banner">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[20px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon / info solid">
            <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path clipRule="evenodd" d={svgPaths.p22449600} fill="var(--fill-0, #5A6679)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#5a6679] text-[13px]">Auto-Sweep automatically withdraws your selected wallet to the address you specify once the balance reaches the trigger amount.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function LabelWrap() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">wallet</p>
    </div>
  );
}

function InputText() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Primary Balance</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap />
      <InputText />
    </div>
  );
}

function LineDivider() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider />
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="icon / toggle-down">
        <div className="absolute inset-[34.38%_21.88%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.74999 3.74999">
            <path clipRule="evenodd" d={svgPaths.p1a1bd900} fill="var(--fill-0, #A2A5AC)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector />
    </div>
  );
}

function LabelWrap1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SWEEP DESTINATION</p>
    </div>
  );
}

function InputText1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Bank Account</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap1 />
      <InputText1 />
    </div>
  );
}

function LineDivider1() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider1 />
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="icon / toggle-down">
        <div className="absolute inset-[34.38%_21.88%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.74999 3.74999">
            <path clipRule="evenodd" d={svgPaths.p1a1bd900} fill="var(--fill-0, #A2A5AC)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Controls1() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start pt-[10px] relative shrink-0 w-full">
      <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
        <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
            <Content />
            <Controls />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="bg-white h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[533px]">
        <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
          <Content1 />
          <Controls1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function LabelWrap2() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">trigger amount (usdt.trc20)</p>
    </div>
  );
}

function InputText2() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#a2a5ac] text-[14.5px] whitespace-nowrap">Min-Max Payout: $100 - $1,000,000</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
      <LabelWrap2 />
      <InputText2 />
    </div>
  );
}

function LineDivider2() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="selector">
      <LineDivider2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[5.56%_0_7.45%_0]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9993 19.1378">
        <g id="Group 9">
          <path clipRule="evenodd" d={svgPaths.p2317f580} fill="var(--fill-0, #50AF95)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2c5eba40} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#50af95] inset-0 rounded-[999px]">
      <div className="absolute inset-[9.9%_4.65%_-1.56%_3.69%] overflow-clip" data-name="Tether-usdt">
        <Group />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#50af95] h-[24px] left-0 right-0 rounded-[999px] top-0">
      <Frame1 />
    </div>
  );
}

function Tron() {
  return (
    <div className="absolute inset-[0_2.54%_0_2.42%]" data-name="tron">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75859 7.11121">
        <g id="tron">
          <path d={svgPaths.p9b70200} fill="var(--fill-0, #FF060A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TronTrxLogo() {
  return (
    <div className="absolute inset-[calc(16.67%-0.35px)] overflow-clip" data-name="tron-trx-logo 1">
      <Tron />
    </div>
  );
}

function FiatSelector() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pl-[5px] pr-[20px] py-[5px] relative shrink-0" data-name="fiat selector">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] text-center whitespace-nowrap">USDT.TRC20</p>
      <div className="relative shrink-0 size-[24px]" data-name="USDT.TRC20">
        <Frame />
        <div className="absolute bg-white border-[0.529px] border-solid border-white bottom-0 h-[10.667px] left-[55.56%] overflow-clip right-0 rounded-[792.727px]" data-name="Tron">
          <TronTrxLogo />
        </div>
      </div>
    </div>
  );
}

function Controls2() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector2 />
      <FiatSelector />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
      <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
          <Frame2 />
          <Controls2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}

function LabelWrap3() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SWEEP bank account</p>
      <div className="overflow-clip relative shrink-0 size-[8px]" data-name="icon / info solid">
        <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path clipRule="evenodd" d={svgPaths.pe418400} fill="var(--fill-0, #D3D6E1)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InputText3() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">xxxx5678 - Acme Corp</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap3 />
      <InputText3 />
    </div>
  );
}

function Controls3() {
  return <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0 w-[21px]" data-name="controls" />;
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Frame3 />
      <div className="bg-white h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[532px]">
        <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
          <Content2 />
          <Controls3 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f7f8fc] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[20px] relative size-full">
          <WarningBanner />
          <Frame5 />
          <Frame6 />
          <div className="bg-[#eff1f8] content-stretch flex h-[46px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[5px] shrink-0" data-name="Buttons">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5a6679] text-[13px] text-center whitespace-nowrap">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TabsSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Tabs section">
      <Tabs />
      <Frame4 />
    </div>
  );
}