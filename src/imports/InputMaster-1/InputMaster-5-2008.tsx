import svgPaths from "./svg-j2x88337ho";

function LabelWrap() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
    </div>
  );
}

function LayerX() {
  return (
    <div className="absolute contents inset-0" data-name="Layer_x0020_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9984 14">
        <g id="_1421344023328">
          <path d={svgPaths.p3d92ce00} fill="var(--fill-0, #F7931A)" id="Vector" />
          <path d={svgPaths.p1a548900} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BitcoinBtcLogo() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX />
    </div>
  );
}

function InputText() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <div className="relative shrink-0 size-[14px]" data-name="bitcoin">
        <BitcoinBtcLogo />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Bitcoin</p>
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

export default function InputMaster() {
  return (
    <div className="bg-white relative rounded-[5px] size-full" data-name="Input Master">
      <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <Content />
        <Controls />
      </div>
      <div aria-hidden="true" className="absolute border border-[#bec4d0] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}