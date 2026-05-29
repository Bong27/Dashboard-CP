import svgPaths from "./svg-v0p1oj98gs";

function LabelWrap() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
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

function InputText() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] whitespace-nowrap">To Custody</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="content">
      <LabelWrap />
      <InputText />
    </div>
  );
}

function LineDivider() {
  return <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[12px]" data-name="icon / toggle-down">
            <div className="absolute inset-[34.38%_21.88%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.74999 3.74999">
                <path clipRule="evenodd" d={svgPaths.p1a1bd900} fill="var(--fill-0, #A2A5AC)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="controls">
      <Selector />
    </div>
  );
}

function TopWrap() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="top-wrap">
      <Content />
      <Controls />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <div className="bg-white relative rounded-[5px] shrink-0 w-full" data-name="disable">
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[11px] w-full">Disabled</p>
        </div>
      </div>
      <div className="bg-[var(--cp-brand-primary)] relative rounded-[5px] shrink-0 w-full" data-name="dropdown-content-list">
        <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px] text-white">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">To Custody</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 w-full">Received payments are stored in your CoinPayments wallet for later withdrawal at your leisure. This option allows you to automatically convert payments into another currency as well.</p>
        </div>
      </div>
      <div className="bg-white relative rounded-[5px] shrink-0 w-full" data-name="dropdown-content-list - bank">
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] w-full">Nightly to Bank</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[var(--cp-text-secondary)] w-full">Received payments are batched and wired nightly to your USD bank account. A $100 minimum balance is required per wire.</p>
        </div>
      </div>
      <div className="bg-white relative rounded-[5px] shrink-0 w-full" data-name="dropdown-content-list">
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] w-full">To Non-Custody</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[var(--cp-text-secondary)] w-full">Received payments are sent to the address or wallet ID you specify as soon as they are received and confirmed. This option allows you to automatically convert payments into another currency as well.</p>
        </div>
      </div>
      <div className="bg-white relative rounded-[5px] shrink-0 w-full" data-name="dropdown-content-list">
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] w-full">Hourly To Non-Custody</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[var(--cp-text-secondary)] w-full">{`Received payments are grouped together and sent hourly. The main benefit of this option is it will save you coin network fees. `}</p>
        </div>
      </div>
      <div className="bg-white relative rounded-[5px] shrink-0 w-full" data-name="dropdown-content-list">
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] w-full">Nightly To Non-Custody</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[var(--cp-text-secondary)] w-full">{`Received payments are grouped together and sent daily (at approx. midnight EST GMT-05:00). The main benefit of this option is it will save you coin network fees. `}</p>
        </div>
      </div>
      <div className="bg-white relative rounded-[5px] shrink-0 w-full" data-name="dropdown-content-list">
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
        <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] w-full">Weekly To Non-Custody</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[var(--cp-text-secondary)] w-full">{`Received payments are grouped together and sent every Sunday (at approx. midnight EST GMT-05:00). The main benefit of this option is it will save you coin network fees. `}</p>
        </div>
      </div>
    </div>
  );
}

export default function InputMasterDropdown() {
  return (
    <div className="bg-white relative rounded-[5px] size-full" data-name="Input Master/dropdown">
      <div className="content-stretch flex flex-col gap-[20px] items-start min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <TopWrap />
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-[var(--cp-border-hover)] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}