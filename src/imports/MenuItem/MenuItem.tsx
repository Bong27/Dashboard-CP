import svgPaths from "./svg-chigdfd7tv";

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon / wallet">
        <div className="absolute inset-[5%_-0.9%_0_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1806 19">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.pbf04600} fill="var(--fill-0, #1C60DD)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3b018100} fill="var(--fill-0, #1C60DD)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Frame1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-brand-primary)] text-[14.5px] whitespace-nowrap">Wallet</p>
    </div>
  );
}

export default function MenuItem() {
  return (
    <div className="bg-[var(--cp-bg-1)] content-stretch flex flex-col items-start p-[10px] relative rounded-[100px] size-full" data-name="Menu item">
      <Frame />
    </div>
  );
}