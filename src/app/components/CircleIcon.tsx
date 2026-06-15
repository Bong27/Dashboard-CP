// ─────────────────────────────────────────────────────────────────────────────
// CircleIcon — reusable action button
// Source: Figma node 153:1559 (Circle-icon, 36×36px)
//
// Icon slot: 16×16px fixed canvas, centred in the circle.
// Each child SVG sits at its exact authored Figma size inside that canvas,
// so all icons keep their natural visual weight regardless of aspect ratio.
// Color: CSS `color` on the circle propagates to children via currentColor.
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';

type CircleIconProps = {
  label: string;
  icon: React.ReactNode;
};

function Tooltip({ text }: { text: string }) {
  return (
    <div
      className="absolute content-stretch flex flex-col items-center pointer-events-none z-50"
      style={{ left: '50%', top: '-43px', transform: 'translateX(-50%)' }}
    >
      <div className="bg-black content-stretch flex flex-col items-start p-[10px] relative rounded-[5px] shrink-0">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">
          {text}
        </p>
      </div>
      <div className="h-[5px] relative shrink-0 w-[10px]">
        <svg className="absolute block inset-0 size-full" viewBox="0 0 10 5" fill="none">
          <path d="M10 0H0L3.58579 3.58579C4.36684 4.36684 5.63316 4.36684 6.41421 3.58579L10 0Z" fill="black" />
        </svg>
      </div>
    </div>
  );
}

export function CircleIcon({ label, icon }: CircleIconProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="border border-solid relative rounded-[100px] shrink-0 size-[36px] cursor-pointer transition-colors duration-150"
      style={{
        background:  hovered ? '#8492A6' : 'white',
        borderColor: hovered ? '#8492A6' : '#e5e9f2',
        overflow:    hovered ? 'visible' : 'clip',
        color:       hovered ? '#ffffff'  : '#8492A6',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/*
        Fixed 16×16px canvas, centred.
        The icon SVG inside uses its exact authored pixel dimensions —
        NOT 100% width/height — so visual weight is consistent across icons.
      */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-clip rounded-[100px]"
      >
        <div style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {icon}
        </div>
      </div>

      {hovered && <Tooltip text={label} />}
    </div>
  );
}
