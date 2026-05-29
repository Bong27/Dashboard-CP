// ─────────────────────────────────────────────────────────────────────────────
// CP-Dashboard Icon Components
// Paths and viewBoxes sourced directly from Figma export in Wallet.tsx
// DO NOT hand-edit paths — update from Wallet.tsx / svg-tfchl2zu4w.ts only
// ─────────────────────────────────────────────────────────────────────────────
import svgPaths from '../../imports/Wallet-2/svg-tfchl2zu4w';

interface IconProps { color?: string; }
const DEFAULT  = 'var(--cp-text-primary)';
const BRAND    = 'var(--cp-brand-primary)';

export function IconWallet({ color = DEFAULT }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[5%_-0.9%_0_0]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1806 19">
          <path clipRule="evenodd" d={svgPaths.pbf04600} fill={color} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p3b018100} fill={color} fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export function IconTransactions({ color = DEFAULT }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="-translate-x-1/2 absolute aspect-[16.764892578125/15.999999046325684] bottom-[10%] left-[calc(50%-0.12px)] top-[10%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7649 16">
          <path clipRule="evenodd" d={svgPaths.p2f87c900} fill={color} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p329d3b00} fill={color} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p2e748900} fill={color} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p2daa61c0} fill={color} fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export function IconSettings({ color = DEFAULT }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p1d640c00} fill={color} />
        <path d={svgPaths.p103b100}  fill={color} />
        <path d={svgPaths.p1c8eb00}  fill={color} />
        <path d={svgPaths.p29d62370} fill={color} />
      </svg>
    </div>
  );
}

export function IconIntegrations({ color = DEFAULT }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[3.96%_1.18%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5277 18.4166">
          <path clipRule="evenodd" d={svgPaths.p1322e200} fill={color} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p20c5c200} fill={color} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p32c7f000} fill={color} fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export function IconInvoicing({ color = DEFAULT }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[8.13%_16.46%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4167 16.75">
          <path d={svgPaths.p3089f53e}  fill={color} />
          <path clipRule="evenodd" d={svgPaths.p20de25f0} fill={color} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p11a4ee80} fill={color} fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p10cf0100} fill={color} fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export function IconPOS({ color = DEFAULT }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[8.33%_12.5%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
          <path d={svgPaths.p231af140} fill={color} />
          <path d={svgPaths.p8479d00}  fill={color} />
          <path d={svgPaths.p18d5fb30} fill={color} />
          <path d={svgPaths.p1c3d800}  fill={color} />
          <path d={svgPaths.p26450f00} fill={color} />
          <path d={svgPaths.p7eb4d00}  fill={color} />
          <path d={svgPaths.p313a9100} fill={color} />
          <path d={svgPaths.p3bceaa00} fill={color} />
        </svg>
      </div>
    </div>
  );
}

export function IconSupport({ color = DEFAULT }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[8.13%_8.13%_8.12%_8.13%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.75 16.75">
          <path clipRule="evenodd" d={svgPaths.p162d78f0} fill={color} fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export function IconMore({ color = DEFAULT }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[34.38%_21.88%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 6.24998">
          <path clipRule="evenodd" d={svgPaths.p1f48b500} fill={color} fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export function IconPlus({ color = BRAND }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path d={svgPaths.p35009400} fill={color} />
        <path d={svgPaths.p18d7280}  fill={color} />
        <path d={svgPaths.p2aa04180} fill={color} />
      </svg>
    </div>
  );
}
