import svgPaths from '../../imports/BodyContainer/svg-ibamans6aq';

export function SearchInput() {
  return (
    <div className="bg-white h-[38px] relative rounded-[5px] shrink-0 w-[298px]">
      <div className="content-stretch flex items-center justify-between overflow-clip p-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-quinary)] text-[13px] whitespace-nowrap">
          Search
        </p>
        <div className="relative shrink-0 size-[15px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <g clipPath="url(#clip0_search_icon)">
              <path clipRule="evenodd" d={svgPaths.p34a3fe00} fill="var(--fill-0, #A8B7CA)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1aa08900} fill="var(--fill-0, #A8B7CA)" fillRule="evenodd" />
            </g>
            <defs>
              <clipPath id="clip0_search_icon">
                <rect fill="white" height="15" width="15" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
    </div>
  );
}
