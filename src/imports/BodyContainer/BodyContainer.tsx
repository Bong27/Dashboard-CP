import svgPaths from "./svg-ibamans6aq";
import { SearchInput } from '../../app/components/SearchInput';

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5a6679] text-[18px] tracking-[-0.2px] whitespace-nowrap">Underpayment Limits</p>
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

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[#5a6679] text-[13px] w-full">
      <p className="relative shrink-0 w-full">Set a maximum underpayment threshold to improve payment success rates when buyers send less than the full amount. You can define this threshold as a percentage and/or a fiat value—the lower of the two will apply.</p>
      <p className="relative shrink-0 w-full">Note: if a buyer sends a partial payment, the funds will be held until the payment window closes. If the total received meets your threshold, the underpayment will be accepted; otherwise, the funds will be refunded to the buyer.</p>
    </div>
  );
}

function PageTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[20px] relative shrink-0 w-full" data-name="page title">
      <div aria-hidden="true" className="absolute border-[#e5e9f2] border-b border-solid inset-0 pointer-events-none" />
      <Frame1 />
      <Frame />
    </div>
  );
}

function LabelWrap() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">underpayment value</p>
    </div>
  );
}

function InputText() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#d3d6e1] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap />
      <InputText />
    </div>
  );
}

function LayerX24() {
  return (
    <div className="absolute contents inset-0" data-name="Layer_x0020_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9973 24">
        <g id="_1421344023328">
          <path d={svgPaths.p1091ad00} fill="var(--fill-0, #F7931A)" id="Vector" />
          <path d={svgPaths.p795f680} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BitcoinBtcLogo() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX24 />
    </div>
  );
}

function Currency() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pl-[10px] pr-[20px] py-[5px] relative shrink-0" data-name="currency">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] text-center whitespace-nowrap">USD</p>
      <div className="relative shrink-0 size-[24px]" data-name="bitcoin">
        <BitcoinBtcLogo />
      </div>
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
      <Currency />
      <Selector />
    </div>
  );
}

function LabelWrap1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">underpayment percentage</p>
    </div>
  );
}

function InputText1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#d3d6e1] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap1 />
      <InputText1 />
    </div>
  );
}

function Controls1() {
  return <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0 w-[21px]" data-name="controls" />;
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
        <div className="flex flex-row items-center justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between min-w-[inherit] p-[10px] relative size-full">
            <Content1 />
            <Controls />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]" data-name="Input Master">
        <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
            <Content2 />
            <Controls1 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5a6679] text-[18px] tracking-[-0.2px] whitespace-nowrap">Accepted Cryptocurrencies</p>
    </div>
  );
}

function Inputs() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0" data-name="inputs">
      <SearchInput />
      <div className="relative rounded-[5px] shrink-0 w-[209px]" data-name="Dropdown">
        <div className="content-stretch flex items-center justify-between overflow-clip p-[10px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#183049] text-[13px] whitespace-nowrap">Any Currency Type</p>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon / toggle-down">
            <div className="absolute inset-[34.38%_21.88%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 5.62498">
                <path clipRule="evenodd" d={svgPaths.p3f5aa180} fill="var(--fill-0, #A2A5AC)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="relative rounded-[5px] shrink-0 w-[209px]" data-name="Dropdown">
        <div className="content-stretch flex items-center justify-between overflow-clip p-[10px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#183049] text-[13px] whitespace-nowrap">Any Coin Status</p>
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon / toggle-down">
            <div className="absolute inset-[34.38%_21.88%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.125 5.62498">
                <path clipRule="evenodd" d={svgPaths.p3f5aa180} fill="var(--fill-0, #A2A5AC)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0" data-name="left">
      <div className="bg-[#eff1f8] content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[5px] shrink-0" data-name="Buttons">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5a6679] text-[13px] text-center whitespace-nowrap">Save Changes</p>
      </div>
      <Inputs />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[20px] relative shrink-0" data-name="right">
      <div className="bg-[#eff1f8] content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[10px] relative rounded-[100px] shrink-0 w-[100px]" data-name="rounded">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="icon / bulk">
          <div className="-translate-y-1/2 absolute aspect-[16.604299545288086/16.750019073486328] left-[10%] right-[6.98%] top-[calc(50%+0.3px)]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2834 13.4">
              <g id="Vector">
                <path clipRule="evenodd" d={svgPaths.p213b4300} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p3b10e480} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p13881f80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p1ef2e280} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p7300380} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p1cbb1f80} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p3f875600} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p8680d40} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.pbebd300} fill="var(--fill-0, #8492A6)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[13px] text-center whitespace-nowrap">Bulk Edit</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="Radio-button">
        <div className="absolute inset-[4.55%]" data-name="Border">
          <div className="absolute inset-[-5.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1455 16.1455">
              <circle cx="8.07273" cy="8.07273" fill="var(--fill-0, white)" id="Border" r="7.27273" stroke="var(--stroke-0, #E5E9F2)" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopControls() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="top controls">
      <Left />
      <Right />
    </div>
  );
}

function PageBody() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="page body">
      <Frame3 />
      <Frame2 />
      <TopControls />
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

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#183049] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8492a6] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo1 />
      </div>
      <Name />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[178px]" data-name="left">
      <Coin />
    </div>
  );
}

function LabelWrap2() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
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

function InputText2() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">To Custody</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap2 />
      <InputText2 />
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

function Controls2() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector1 />
    </div>
  );
}

function LabelWrap3() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">PAYOUT CURRENCY</p>
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

function LayerX1() {
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

function BitcoinBtcLogo2() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX1 />
    </div>
  );
}

function InputText3() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <div className="relative shrink-0 size-[14px]" data-name="bitcoin">
        <BitcoinBtcLogo2 />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Bitcoin</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap3 />
      <InputText3 />
    </div>
  );
}

function LineDivider2() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider2 />
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

function Controls3() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector2 />
    </div>
  );
}

function LabelWrap4() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">DISCOUNT</p>
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

function InputText4() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#d3d6e1] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap4 />
      <InputText4 />
    </div>
  );
}

function LineDivider3() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider3 />
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

function Controls4() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector3 />
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

function Name1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#183049] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8492a6] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo3 />
      </div>
      <Name1 />
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[178px]" data-name="left">
      <Coin1 />
    </div>
  );
}

function LabelWrap5() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
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

function InputText5() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">To Custody</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap5 />
      <InputText5 />
    </div>
  );
}

function LineDivider4() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider4 />
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

function Controls5() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector4 />
    </div>
  );
}

function LabelWrap6() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">PAYOUT CURRENCY</p>
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

function LayerX3() {
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

function BitcoinBtcLogo4() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX3 />
    </div>
  );
}

function InputText6() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <div className="relative shrink-0 size-[14px]" data-name="bitcoin">
        <BitcoinBtcLogo4 />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Bitcoin</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap6 />
      <InputText6 />
    </div>
  );
}

function LineDivider5() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider5 />
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

function Controls6() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector5 />
    </div>
  );
}

function LabelWrap7() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">DISCOUNT</p>
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

function InputText7() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#d3d6e1] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap7 />
      <InputText7 />
    </div>
  );
}

function LineDivider6() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider6 />
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

function Controls7() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector6 />
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

function Name2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#183049] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8492a6] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo5 />
      </div>
      <Name2 />
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[178px]" data-name="left">
      <Coin2 />
    </div>
  );
}

function LabelWrap8() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
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

function InputText8() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">To Custody</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap8 />
      <InputText8 />
    </div>
  );
}

function LineDivider7() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider7 />
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

function Controls8() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector7 />
    </div>
  );
}

function LabelWrap9() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">PAYOUT CURRENCY</p>
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

function LayerX5() {
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

function BitcoinBtcLogo6() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX5 />
    </div>
  );
}

function InputText9() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <div className="relative shrink-0 size-[14px]" data-name="bitcoin">
        <BitcoinBtcLogo6 />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Bitcoin</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap9 />
      <InputText9 />
    </div>
  );
}

function LineDivider8() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider8 />
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

function Controls9() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector8 />
    </div>
  );
}

function LabelWrap10() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">DISCOUNT</p>
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

function InputText10() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#d3d6e1] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap10 />
      <InputText10 />
    </div>
  );
}

function LineDivider9() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider9 />
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

function Controls10() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector9 />
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

function BitcoinBtcLogo7() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX6 />
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#183049] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8492a6] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo7 />
      </div>
      <Name3 />
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[178px]" data-name="left">
      <Coin3 />
    </div>
  );
}

function LabelWrap11() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
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

function InputText11() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">To Custody</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap11 />
      <InputText11 />
    </div>
  );
}

function LineDivider10() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider10 />
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

function Controls11() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector10 />
    </div>
  );
}

function LabelWrap12() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">PAYOUT CURRENCY</p>
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

function LayerX7() {
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

function BitcoinBtcLogo8() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX7 />
    </div>
  );
}

function InputText12() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <div className="relative shrink-0 size-[14px]" data-name="bitcoin">
        <BitcoinBtcLogo8 />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Bitcoin</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap12 />
      <InputText12 />
    </div>
  );
}

function LineDivider11() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider11 />
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

function Controls12() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector11 />
    </div>
  );
}

function LabelWrap13() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">DISCOUNT</p>
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

function InputText13() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#d3d6e1] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap13 />
      <InputText13 />
    </div>
  );
}

function LineDivider12() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider12 />
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

function Controls13() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector12 />
    </div>
  );
}

function LayerX8() {
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

function BitcoinBtcLogo9() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX8 />
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#183049] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8492a6] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo9 />
      </div>
      <Name4 />
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[178px]" data-name="left">
      <Coin4 />
    </div>
  );
}

function LabelWrap14() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
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

function InputText14() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">To Custody</p>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap14 />
      <InputText14 />
    </div>
  );
}

function LineDivider13() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider13 />
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

function Controls14() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector13 />
    </div>
  );
}

function LabelWrap15() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">PAYOUT CURRENCY</p>
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

function LayerX9() {
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

function BitcoinBtcLogo10() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX9 />
    </div>
  );
}

function InputText15() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <div className="relative shrink-0 size-[14px]" data-name="bitcoin">
        <BitcoinBtcLogo10 />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Bitcoin</p>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap15 />
      <InputText15 />
    </div>
  );
}

function LineDivider14() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider14 />
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

function Controls15() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector14 />
    </div>
  );
}

function LabelWrap16() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">DISCOUNT</p>
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

function InputText16() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#d3d6e1] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap16 />
      <InputText16 />
    </div>
  );
}

function LineDivider15() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider15 />
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

function Controls16() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector15 />
    </div>
  );
}

function LayerX10() {
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

function BitcoinBtcLogo11() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX10 />
    </div>
  );
}

function Name5() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#183049] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8492a6] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo11 />
      </div>
      <Name5 />
    </div>
  );
}

function Left6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[178px]" data-name="left">
      <Coin5 />
    </div>
  );
}

function LabelWrap17() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
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

function InputText17() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">To Custody</p>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap17 />
      <InputText17 />
    </div>
  );
}

function LineDivider16() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider16 />
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

function Controls17() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector16 />
    </div>
  );
}

function LabelWrap18() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">PAYOUT CURRENCY</p>
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

function LayerX11() {
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

function BitcoinBtcLogo12() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX11 />
    </div>
  );
}

function InputText18() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <div className="relative shrink-0 size-[14px]" data-name="bitcoin">
        <BitcoinBtcLogo12 />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Bitcoin</p>
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap18 />
      <InputText18 />
    </div>
  );
}

function LineDivider17() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider17 />
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

function Controls18() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector17 />
    </div>
  );
}

function LabelWrap19() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">DISCOUNT</p>
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

function InputText19() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#d3d6e1] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap19 />
      <InputText19 />
    </div>
  );
}

function LineDivider18() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider18 />
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

function Controls19() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector18 />
    </div>
  );
}

function LayerX12() {
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

function BitcoinBtcLogo13() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX12 />
    </div>
  );
}

function Name6() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#183049] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8492a6] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo13 />
      </div>
      <Name6 />
    </div>
  );
}

function Left7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[178px]" data-name="left">
      <Coin6 />
    </div>
  );
}

function LabelWrap20() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
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

function InputText20() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">To Custody</p>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap20 />
      <InputText20 />
    </div>
  );
}

function LineDivider19() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider19 />
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

function Controls20() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector19 />
    </div>
  );
}

function LabelWrap21() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">PAYOUT CURRENCY</p>
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

function LayerX13() {
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

function BitcoinBtcLogo14() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX13 />
    </div>
  );
}

function InputText21() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <div className="relative shrink-0 size-[14px]" data-name="bitcoin">
        <BitcoinBtcLogo14 />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Bitcoin</p>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap21 />
      <InputText21 />
    </div>
  );
}

function LineDivider20() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider20 />
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

function Controls21() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector20 />
    </div>
  );
}

function LabelWrap22() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">DISCOUNT</p>
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

function InputText22() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#d3d6e1] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap22 />
      <InputText22 />
    </div>
  );
}

function LineDivider21() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider21 />
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

function Controls22() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector21 />
    </div>
  );
}

function LayerX14() {
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

function BitcoinBtcLogo15() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX14 />
    </div>
  );
}

function Name7() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#183049] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8492a6] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo15 />
      </div>
      <Name7 />
    </div>
  );
}

function Left8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[178px]" data-name="left">
      <Coin7 />
    </div>
  );
}

function LabelWrap23() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
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

function InputText23() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">To Custody</p>
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap23 />
      <InputText23 />
    </div>
  );
}

function LineDivider22() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider22 />
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

function Controls23() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector22 />
    </div>
  );
}

function LabelWrap24() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">PAYOUT CURRENCY</p>
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

function LayerX15() {
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

function BitcoinBtcLogo16() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX15 />
    </div>
  );
}

function InputText24() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <div className="relative shrink-0 size-[14px]" data-name="bitcoin">
        <BitcoinBtcLogo16 />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Bitcoin</p>
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap24 />
      <InputText24 />
    </div>
  );
}

function LineDivider23() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider23 />
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

function Controls24() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector23 />
    </div>
  );
}

function LabelWrap25() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">DISCOUNT</p>
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

function InputText25() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#d3d6e1] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap25 />
      <InputText25 />
    </div>
  );
}

function LineDivider24() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider24 />
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

function Controls25() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector24 />
    </div>
  );
}

function LayerX16() {
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

function BitcoinBtcLogo17() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX16 />
    </div>
  );
}

function Name8() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#183049] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8492a6] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo17 />
      </div>
      <Name8 />
    </div>
  );
}

function Left9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[178px]" data-name="left">
      <Coin8 />
    </div>
  );
}

function LabelWrap26() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
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

function InputText26() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">To Custody</p>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap26 />
      <InputText26 />
    </div>
  );
}

function LineDivider25() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider25 />
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

function Controls26() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector25 />
    </div>
  );
}

function LabelWrap27() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">PAYOUT CURRENCY</p>
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

function LayerX17() {
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

function BitcoinBtcLogo18() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX17 />
    </div>
  );
}

function InputText27() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <div className="relative shrink-0 size-[14px]" data-name="bitcoin">
        <BitcoinBtcLogo18 />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Bitcoin</p>
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap27 />
      <InputText27 />
    </div>
  );
}

function LineDivider26() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider26 />
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

function Controls27() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector26 />
    </div>
  );
}

function LabelWrap28() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">DISCOUNT</p>
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

function InputText28() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#d3d6e1] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap28 />
      <InputText28 />
    </div>
  );
}

function LineDivider27() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector27() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider27 />
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

function Controls28() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector27 />
    </div>
  );
}

function LayerX18() {
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

function BitcoinBtcLogo19() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX18 />
    </div>
  );
}

function Name9() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#183049] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8492a6] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo19 />
      </div>
      <Name9 />
    </div>
  );
}

function Left10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[178px]" data-name="left">
      <Coin9 />
    </div>
  );
}

function LabelWrap29() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
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

function InputText29() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">To Custody</p>
    </div>
  );
}

function Content30() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap29 />
      <InputText29 />
    </div>
  );
}

function LineDivider28() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider28 />
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

function Controls29() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector28 />
    </div>
  );
}

function LabelWrap30() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">PAYOUT CURRENCY</p>
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

function LayerX19() {
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

function BitcoinBtcLogo20() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX19 />
    </div>
  );
}

function InputText30() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <div className="relative shrink-0 size-[14px]" data-name="bitcoin">
        <BitcoinBtcLogo20 />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Bitcoin</p>
    </div>
  );
}

function Content31() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap30 />
      <InputText30 />
    </div>
  );
}

function LineDivider29() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider29 />
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

function Controls30() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector29 />
    </div>
  );
}

function LabelWrap31() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">DISCOUNT</p>
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

function InputText31() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#d3d6e1] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content32() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap31 />
      <InputText31 />
    </div>
  );
}

function LineDivider30() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider30 />
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

function Controls31() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector30 />
    </div>
  );
}

function LayerX20() {
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

function BitcoinBtcLogo21() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX20 />
    </div>
  );
}

function Name10() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#183049] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8492a6] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo21 />
      </div>
      <Name10 />
    </div>
  );
}

function Left11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[178px]" data-name="left">
      <Coin10 />
    </div>
  );
}

function LabelWrap32() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
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

function InputText32() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">To Custody</p>
    </div>
  );
}

function Content33() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap32 />
      <InputText32 />
    </div>
  );
}

function LineDivider31() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector31() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider31 />
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

function Controls32() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector31 />
    </div>
  );
}

function LabelWrap33() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">PAYOUT CURRENCY</p>
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

function LayerX21() {
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

function BitcoinBtcLogo22() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX21 />
    </div>
  );
}

function InputText33() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <div className="relative shrink-0 size-[14px]" data-name="bitcoin">
        <BitcoinBtcLogo22 />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Bitcoin</p>
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap33 />
      <InputText33 />
    </div>
  );
}

function LineDivider32() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector32() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider32 />
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

function Controls33() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector32 />
    </div>
  );
}

function LabelWrap34() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">DISCOUNT</p>
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

function InputText34() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#d3d6e1] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content35() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap34 />
      <InputText34 />
    </div>
  );
}

function LineDivider33() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector33() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider33 />
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

function Controls34() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector33 />
    </div>
  );
}

function LayerX22() {
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

function BitcoinBtcLogo23() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX22 />
    </div>
  );
}

function Name11() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#183049] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8492a6] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo23 />
      </div>
      <Name11 />
    </div>
  );
}

function Left12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[178px]" data-name="left">
      <Coin11 />
    </div>
  );
}

function LabelWrap35() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE</p>
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

function InputText35() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">To Custody</p>
    </div>
  );
}

function Content36() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap35 />
      <InputText35 />
    </div>
  );
}

function LineDivider34() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector34() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider34 />
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

function Controls35() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector34 />
    </div>
  );
}

function LabelWrap36() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">PAYOUT CURRENCY</p>
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

function LayerX23() {
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

function BitcoinBtcLogo24() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX23 />
    </div>
  );
}

function InputText36() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <div className="relative shrink-0 size-[14px]" data-name="bitcoin">
        <BitcoinBtcLogo24 />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#183049] text-[14.5px] whitespace-nowrap">Bitcoin</p>
    </div>
  );
}

function Content37() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap36 />
      <InputText36 />
    </div>
  );
}

function LineDivider35() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider35 />
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

function Controls36() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector35 />
    </div>
  );
}

function LabelWrap37() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8492a6] text-[11px] uppercase whitespace-nowrap">DISCOUNT</p>
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

function InputText37() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#d3d6e1] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content38() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap37 />
      <InputText37 />
    </div>
  );
}

function LineDivider36() {
  return <div className="bg-[#e5e9f2] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
}

function Selector36() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]" data-name="selector">
      <LineDivider36 />
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

function Controls37() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector36 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="list">
      <div className="bg-[#f7f8fc] h-[76px] relative shrink-0 w-full" data-name="PaySettingsRow">
        <div aria-hidden="true" className="absolute border-[#e5e9f2] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
            <Left1 />
            <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
              <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
                  <Content3 />
                  <Controls2 />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <div className="content-stretch flex h-[56px] items-start justify-between min-w-[200px] overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-[200px]">
              <Content4 />
              <Controls3 />
            </div>
            <div className="bg-white h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[200px]">
              <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
                <Content5 />
                <Controls4 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Radio-button">
              <div className="absolute inset-[4.55%]" data-name="Border">
                <div className="absolute inset-[-5.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1455 16.1455">
                    <circle cx="8.07273" cy="8.07273" fill="var(--fill-0, white)" id="Border" r="7.27273" stroke="var(--stroke-0, #E5E9F2)" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f8fc] h-[76px] relative shrink-0 w-full" data-name="PaySettingsRow">
        <div aria-hidden="true" className="absolute border-[#e5e9f2] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
            <Left2 />
            <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
              <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
                  <Content6 />
                  <Controls5 />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <div className="content-stretch flex h-[56px] items-start justify-between min-w-[200px] overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-[200px]">
              <Content7 />
              <Controls6 />
            </div>
            <div className="bg-white h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[200px]">
              <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
                <Content8 />
                <Controls7 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Radio-button">
              <div className="absolute inset-[4.55%]" data-name="Border">
                <div className="absolute inset-[-5.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1455 16.1455">
                    <circle cx="8.07273" cy="8.07273" fill="var(--fill-0, white)" id="Border" r="7.27273" stroke="var(--stroke-0, #E5E9F2)" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f8fc] h-[76px] relative shrink-0 w-full" data-name="PaySettingsRow">
        <div aria-hidden="true" className="absolute border-[#e5e9f2] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
            <Left3 />
            <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
              <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
                  <Content9 />
                  <Controls8 />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <div className="content-stretch flex h-[56px] items-start justify-between min-w-[200px] overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-[200px]">
              <Content10 />
              <Controls9 />
            </div>
            <div className="bg-white h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[200px]">
              <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
                <Content11 />
                <Controls10 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Radio-button">
              <div className="absolute inset-[4.55%]" data-name="Border">
                <div className="absolute inset-[-5.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1455 16.1455">
                    <circle cx="8.07273" cy="8.07273" fill="var(--fill-0, white)" id="Border" r="7.27273" stroke="var(--stroke-0, #E5E9F2)" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f8fc] h-[76px] relative shrink-0 w-full" data-name="PaySettingsRow">
        <div aria-hidden="true" className="absolute border-[#e5e9f2] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
            <Left4 />
            <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
              <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
                  <Content12 />
                  <Controls11 />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <div className="content-stretch flex h-[56px] items-start justify-between min-w-[200px] overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-[200px]">
              <Content13 />
              <Controls12 />
            </div>
            <div className="bg-white h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[200px]">
              <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
                <Content14 />
                <Controls13 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Radio-button">
              <div className="absolute inset-[4.55%]" data-name="Border">
                <div className="absolute inset-[-5.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1455 16.1455">
                    <circle cx="8.07273" cy="8.07273" fill="var(--fill-0, white)" id="Border" r="7.27273" stroke="var(--stroke-0, #E5E9F2)" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f8fc] h-[76px] relative shrink-0 w-full" data-name="PaySettingsRow">
        <div aria-hidden="true" className="absolute border-[#e5e9f2] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
            <Left5 />
            <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
              <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
                  <Content15 />
                  <Controls14 />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <div className="content-stretch flex h-[56px] items-start justify-between min-w-[200px] overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-[200px]">
              <Content16 />
              <Controls15 />
            </div>
            <div className="bg-white h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[200px]">
              <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
                <Content17 />
                <Controls16 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Radio-button">
              <div className="absolute inset-[4.55%]" data-name="Border">
                <div className="absolute inset-[-5.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1455 16.1455">
                    <circle cx="8.07273" cy="8.07273" fill="var(--fill-0, white)" id="Border" r="7.27273" stroke="var(--stroke-0, #E5E9F2)" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f8fc] h-[76px] relative shrink-0 w-full" data-name="PaySettingsRow">
        <div aria-hidden="true" className="absolute border-[#e5e9f2] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
            <Left6 />
            <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
              <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
                  <Content18 />
                  <Controls17 />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <div className="content-stretch flex h-[56px] items-start justify-between min-w-[200px] overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-[200px]">
              <Content19 />
              <Controls18 />
            </div>
            <div className="bg-white h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[200px]">
              <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
                <Content20 />
                <Controls19 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Radio-button">
              <div className="absolute inset-[4.55%]" data-name="Border">
                <div className="absolute inset-[-5.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1455 16.1455">
                    <circle cx="8.07273" cy="8.07273" fill="var(--fill-0, white)" id="Border" r="7.27273" stroke="var(--stroke-0, #E5E9F2)" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f8fc] h-[76px] relative shrink-0 w-full" data-name="PaySettingsRow">
        <div aria-hidden="true" className="absolute border-[#e5e9f2] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
            <Left7 />
            <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
              <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
                  <Content21 />
                  <Controls20 />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <div className="content-stretch flex h-[56px] items-start justify-between min-w-[200px] overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-[200px]">
              <Content22 />
              <Controls21 />
            </div>
            <div className="bg-white h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[200px]">
              <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
                <Content23 />
                <Controls22 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Radio-button">
              <div className="absolute inset-[4.55%]" data-name="Border">
                <div className="absolute inset-[-5.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1455 16.1455">
                    <circle cx="8.07273" cy="8.07273" fill="var(--fill-0, white)" id="Border" r="7.27273" stroke="var(--stroke-0, #E5E9F2)" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f8fc] h-[76px] relative shrink-0 w-full" data-name="PaySettingsRow">
        <div aria-hidden="true" className="absolute border-[#e5e9f2] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
            <Left8 />
            <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
              <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
                  <Content24 />
                  <Controls23 />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <div className="content-stretch flex h-[56px] items-start justify-between min-w-[200px] overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-[200px]">
              <Content25 />
              <Controls24 />
            </div>
            <div className="bg-white h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[200px]">
              <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
                <Content26 />
                <Controls25 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Radio-button">
              <div className="absolute inset-[4.55%]" data-name="Border">
                <div className="absolute inset-[-5.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1455 16.1455">
                    <circle cx="8.07273" cy="8.07273" fill="var(--fill-0, white)" id="Border" r="7.27273" stroke="var(--stroke-0, #E5E9F2)" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f8fc] h-[76px] relative shrink-0 w-full" data-name="PaySettingsRow">
        <div aria-hidden="true" className="absolute border-[#e5e9f2] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
            <Left9 />
            <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
              <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
                  <Content27 />
                  <Controls26 />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <div className="content-stretch flex h-[56px] items-start justify-between min-w-[200px] overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-[200px]">
              <Content28 />
              <Controls27 />
            </div>
            <div className="bg-white h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[200px]">
              <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
                <Content29 />
                <Controls28 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Radio-button">
              <div className="absolute inset-[4.55%]" data-name="Border">
                <div className="absolute inset-[-5.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1455 16.1455">
                    <circle cx="8.07273" cy="8.07273" fill="var(--fill-0, white)" id="Border" r="7.27273" stroke="var(--stroke-0, #E5E9F2)" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f8fc] h-[76px] relative shrink-0 w-full" data-name="PaySettingsRow">
        <div aria-hidden="true" className="absolute border-[#e5e9f2] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
            <Left10 />
            <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
              <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
                  <Content30 />
                  <Controls29 />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <div className="content-stretch flex h-[56px] items-start justify-between min-w-[200px] overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-[200px]">
              <Content31 />
              <Controls30 />
            </div>
            <div className="bg-white h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[200px]">
              <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
                <Content32 />
                <Controls31 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Radio-button">
              <div className="absolute inset-[4.55%]" data-name="Border">
                <div className="absolute inset-[-5.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1455 16.1455">
                    <circle cx="8.07273" cy="8.07273" fill="var(--fill-0, white)" id="Border" r="7.27273" stroke="var(--stroke-0, #E5E9F2)" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f8fc] h-[76px] relative shrink-0 w-full" data-name="PaySettingsRow">
        <div aria-hidden="true" className="absolute border-[#e5e9f2] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
            <Left11 />
            <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
              <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
                  <Content33 />
                  <Controls32 />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <div className="content-stretch flex h-[56px] items-start justify-between min-w-[200px] overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-[200px]">
              <Content34 />
              <Controls33 />
            </div>
            <div className="bg-white h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[200px]">
              <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
                <Content35 />
                <Controls34 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Radio-button">
              <div className="absolute inset-[4.55%]" data-name="Border">
                <div className="absolute inset-[-5.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1455 16.1455">
                    <circle cx="8.07273" cy="8.07273" fill="var(--fill-0, white)" id="Border" r="7.27273" stroke="var(--stroke-0, #E5E9F2)" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f8fc] h-[76px] relative shrink-0 w-full" data-name="PaySettingsRow">
        <div aria-hidden="true" className="absolute border-[#e5e9f2] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[10px] relative size-full">
            <Left12 />
            <div className="bg-white flex-[1_0_0] h-[56px] min-w-[200px] relative rounded-[5px]">
              <div className="flex flex-row justify-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
                  <Content36 />
                  <Controls35 />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <div className="content-stretch flex h-[56px] items-start justify-between min-w-[200px] overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-[200px]">
              <Content37 />
              <Controls36 />
            </div>
            <div className="bg-white h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[200px]">
              <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
                <Content38 />
                <Controls37 />
              </div>
              <div aria-hidden="true" className="absolute border border-[#e5e9f2] border-solid inset-0 pointer-events-none rounded-[5px]" />
            </div>
            <button className="block cursor-pointer relative shrink-0 size-[16px]" data-name="Radio-button">
              <div className="absolute inset-[4.55%]" data-name="Border">
                <div className="absolute inset-[-5.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1455 16.1455">
                    <circle cx="8.07273" cy="8.07273" fill="var(--fill-0, white)" id="Border" r="7.27273" stroke="var(--stroke-0, #E5E9F2)" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="content">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[10px] relative size-full">
        <PageTitle />
        <PageBody />
        <List />
      </div>
    </div>
  );
}

function TabsScroll() {
  return (
    <div className="absolute content-stretch flex flex-col h-[855px] isolate items-start left-0 top-[59px] w-[1175px]" data-name="tabs scroll">
      <Content />
    </div>
  );
}

function TabsWrap() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-name="tabs-wrap">
      <div aria-hidden="true" className="absolute border-[#e5e9f2] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-center justify-center px-[8px] py-[12px] relative shrink-0" data-name="tab single">
        <div aria-hidden="true" className="absolute border-[#1c60dd] border-b-2 border-solid inset-0 pointer-events-none" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1c60dd] text-[12px] whitespace-nowrap">General</p>
      </div>
      <div className="content-stretch flex items-center justify-center px-[8px] py-[12px] relative shrink-0" data-name="tab single">
        <div aria-hidden="true" className="absolute border-0 border-[#666769] border-solid inset-0 pointer-events-none" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#666769] text-[12px] whitespace-nowrap">Email Notifications</p>
      </div>
    </div>
  );
}

function TabsBtn() {
  return (
    <div className="absolute bg-[#f7f8fc] content-stretch flex items-center left-0 p-[10px] top-0 w-[1175px]" data-name="Tabs btn">
      <TabsWrap />
    </div>
  );
}

function ScrollMask() {
  return (
    <div className="h-[933px] overflow-clip relative shrink-0 w-[1175px] z-[1]" data-name="Scroll-mask">
      <TabsScroll />
      <TabsBtn />
    </div>
  );
}

export default function BodyContainer() {
  return (
    <div className="bg-[#f7f8fc] content-stretch flex flex-col isolate items-start p-[20px] relative size-full" data-name="body-container">
      <ScrollMask />
    </div>
  );
}