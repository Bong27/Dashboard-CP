import { ReactNode } from 'react';

/**
 * InputMaster Component - Reusable input field with multiple variants
 *
 * This component supports 6 main variations:
 * 1. No Dropdown - Basic label and value display
 * 2. With Dropdown - Adds dropdown arrow for selection
 * 3. With Icon - Small icon (14px) next to value text
 * 4. Currency Badge - Large icon (24px) and currency code on right
 * 5. Info Icon - Adds info icon to label
 * 6. Secondary Text - Shows additional text on right (e.g., account numbers)
 *
 * Features:
 * - Hover state with border color change
 * - Flexible layout with proper spacing
 * - Support for placeholder styling
 * - Custom right content for special cases
 *
 * @example
 * // Basic with dropdown
 * <InputMaster label="WALLET" value="Primary Balance" />
 *
 * @example
 * // With icon
 * <InputMaster label="CURRENCY" value="Bitcoin" icon={<BitcoinIcon />} />
 *
 * @example
 * // With currency badge
 * <InputMaster
 *   label="AMOUNT"
 *   value="Bitcoin"
 *   currencyBadge={{ code: 'BTC', icon: <BitcoinLargeIcon /> }}
 * />
 *
 * @example
 * // With secondary text
 * <InputMaster
 *   label="ACCOUNT"
 *   value="Bitcoin"
 *   showInfo
 *   secondaryText="xxxx5678 - Acme Corp"
 * />
 */
interface InputMasterProps {
  /** Label text (will be uppercase and gray) */
  label: string;
  /** Main value text */
  value: string;
  /** Small icon (14px) to display next to value */
  icon?: ReactNode;
  /** Show dropdown arrow on right (default: true) */
  showDropdown?: boolean;
  /** Show info icon next to label */
  showInfo?: boolean;
  /** Custom content to display on right side (advanced use) */
  rightContent?: ReactNode;
  /** Use placeholder text styling (gray color) */
  placeholder?: boolean;
  /** Additional CSS classes for sizing */
  className?: string;
  /** Secondary text to display on right (e.g., account numbers) */
  secondaryText?: string;
  /** Currency badge with code and large icon (24px) */
  currencyBadge?: {
    code: string;
    icon: ReactNode;
  };
}

export function InputMaster({
  label,
  value,
  icon,
  showDropdown = true,
  showInfo = false,
  rightContent,
  placeholder = false,
  className = '',
  secondaryText,
  currencyBadge,
}: InputMasterProps) {
  return (
    <div className={`bg-white relative rounded-[5px] cursor-pointer group ${className}`}>
      <div className="content-stretch flex items-start justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
        {/* Content */}
        <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
          {/* Label */}
          <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">
              {label}
            </p>
            {showInfo && (
              <div className="overflow-clip relative shrink-0 size-[8px]">
                <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path
                      clipRule="evenodd"
                      d="M4,0C1.79086,0,0,1.79086,0,4C0,6.20914,1.79086,8,4,8C6.20914,8,8,6.20914,8,4C8,1.79086,6.20914,0,4,0ZM4.4,6C4.4,6.22091,4.22091,6.4,4,6.4C3.77909,6.4,3.6,6.22091,3.6,6L3.6,3.6C3.6,3.37909,3.77909,3.2,4,3.2C4.22091,3.2,4.4,3.37909,4.4,3.6L4.4,6ZM4,2.8C4.22091,2.8,4.4,2.62091,4.4,2.4C4.4,2.17909,4.22091,2,4,2C3.77909,2,3.6,2.17909,3.6,2.4C3.6,2.62091,3.77909,2.8,4,2.8Z"
                      fill="var(--fill-0, #D3D6E1)"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Input Text */}
          <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
            {icon && <div className="relative shrink-0">{icon}</div>}
            <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14.5px] whitespace-nowrap ${placeholder ? 'text-[var(--cp-text-quinary)]' : 'text-[var(--cp-text-primary)]'}`}>
              {value}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className={`content-stretch flex h-full items-center relative ${secondaryText ? 'flex-[1_0_0] gap-[8px] min-w-px' : 'gap-[8px] shrink-0'}`}>
          {/* Secondary Text (for account numbers, etc.) */}
          {secondaryText && (
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-px not-italic overflow-hidden relative text-[var(--cp-text-tertiary)] text-[13px] text-ellipsis whitespace-nowrap">
              {secondaryText}
            </p>
          )}

          {/* Currency Badge */}
          {currencyBadge && (
            <div className="content-stretch flex gap-[10px] items-center pl-[10px] pr-[20px] py-[5px] relative shrink-0">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] text-center whitespace-nowrap">
                {currencyBadge.code}
              </p>
              <div className="relative shrink-0 size-[24px]">{currencyBadge.icon}</div>
            </div>
          )}

          {/* Custom Right Content */}
          {rightContent && rightContent}

          {/* Dropdown Arrow */}
          {showDropdown && (
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-[21px]">
              <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
              <div className="overflow-clip relative shrink-0 size-[12px]">
                <div className="absolute inset-[34.38%_21.88%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.74999 3.74999">
                    <path
                      clipRule="evenodd"
                      d="M0.292893,0.292893C0.455612,0.130168,0.719387,0.130168,0.882107,0.292893L3.375,2.78579L5.86789,0.292893C6.03061,0.130168,6.29439,0.130168,6.45711,0.292893C6.61983,0.455612,6.61983,0.719387,6.45711,0.882107L3.66961,3.66961C3.50688,3.83233,3.24312,3.83233,3.08039,3.66961L0.292893,0.882107C0.130168,0.719387,0.130168,0.455612,0.292893,0.292893Z"
                      fill="var(--fill-0, #A2A5AC)"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* No Controls (empty space for alignment) */}
          {!showDropdown && !rightContent && !currencyBadge && !secondaryText && (
            <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0 w-[21px]" />
          )}
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] group-hover:border-[var(--cp-border-hover)] border-solid inset-0 pointer-events-none rounded-[5px] transition-colors" />
    </div>
  );
}
