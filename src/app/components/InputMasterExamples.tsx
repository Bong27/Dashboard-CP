import { InputMaster } from './InputMaster';

// Example icons for demonstration
const BitcoinSmallIcon = () => (
  <div className="relative shrink-0 size-[14px]">
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip">
      <div className="absolute contents inset-0">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9984 14">
          <g>
            <path d="M7.00049,0C3.13452,0,0,3.13452,0,7.00049C0,10.8655,3.13452,14,7.00049,14C10.8655,14,14,10.8655,14,7.00049C13.9993,3.13452,10.8655,0,7.00049,0Z" fill="#F7931A" />
            <path d="M10.2095,5.83423C10.3743,4.76025,9.5752,4.17847,8.46753,3.81396L8.81641,2.45508L7.99121,2.25635L7.65015,3.58496C7.44092,3.53174,7.22656,3.48096,7.01367,3.43066L7.35718,2.09326L6.53247,1.89453L6.18359,3.2529C6.00781,3.21143,5.83545,3.17046,5.66895,3.12754L5.6699,3.12314L4.51025,2.83789L4.29883,3.72168C4.29883,3.72168,4.91211,3.86426,4.89941,3.87354C5.23682,3.95752,5.2959,4.18311,5.28564,4.36133L4.88916,5.93066C4.91406,5.93701,4.94727,5.94629,4.98438,5.96143C4.95264,5.95361,4.91895,5.94531,4.88428,5.93701L4.31494,8.10449C4.27002,8.21631,4.15234,8.38184,3.90088,8.32373C3.90967,8.33545,3.30078,8.17529,3.30078,8.17529L2.91016,9.12744L4.00195,9.39844C4.19629,9.44824,4.38623,9.50098,4.57324,9.55029L4.22095,10.9248L5.04517,11.1235L5.39404,9.76416C5.61084,9.82373,5.82178,9.87939,6.02832,9.93213L5.68066,11.2856L6.50586,11.4844L6.85815,10.1128C8.30518,10.3916,9.39648,10.2822,9.85889,8.96777C10.2324,7.90039,9.85303,7.28662,9.08057,6.87256C9.64941,6.74756,10.0801,6.38354,10.2095,5.83423ZM8.00781,8.37012C7.73438,9.4751,5.85889,9.00293,5.22949,8.84424L5.69922,6.93994C6.32861,7.09961,8.29443,7.22266,8.00781,8.37012ZM8.28174,5.82129C8.03125,6.84033,6.48193,6.43652,5.9585,6.30176L6.38525,4.55469C6.90869,4.68945,8.54346,4.76318,8.28174,5.82129Z" fill="white" />
          </g>
        </svg>
      </div>
    </div>
  </div>
);

const BitcoinLargeIcon = () => (
  <div className="relative shrink-0 size-[24px]">
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip">
      <div className="absolute contents inset-0">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9973 24">
          <g>
            <path d="M12.001,0C5.37346,0,0,5.37346,0,12.001C0,18.6265,5.37346,24,12.001,24C18.6265,24,24,18.6265,24,12.001C23.9987,5.37346,18.6265,0,12.001,0Z" fill="#F7931A" />
            <path d="M17.5023,9.99866C17.7844,8.1603,16.4145,7.16309,14.5155,6.53823L15.1424,4.20871L13.6992,3.86803L13.0865,6.1456C12.6873,6.04298,12.2741,5.94465,11.8634,5.84684L12.4807,3.55987L11.0384,3.21918L10.4114,5.5482C10.0848,5.47673,9.76362,5.40651,9.45295,5.33291L9.45448,5.32681L7.30615,4.8648L6.94085,6.37716C6.94085,6.37716,8.01791,6.61874,7.99884,6.63348C8.5773,6.78431,8.67993,7.17103,8.66254,7.47661C8.50029,8.38043,7.39282,12.3429,7.32165,12.6243C7.27552,12.7634,7.15516,12.9692,6.85801,12.8969C6.87229,12.9145,5.80066,12.6577,5.80066,12.6577L4.98303,14.2471L6.9752,14.6833C7.34963,14.7765,7.71612,14.8731,8.07698,14.9662L7.44223,17.328L8.88454,17.6687L9.51146,15.3733C9.92009,15.4854,10.3231,15.5908,10.7176,15.6912L10.0931,17.9751L11.5363,18.3159L12.1715,15.962C14.3802,16.3848,16.0823,16.1989,16.8986,14.1676C17.5411,12.5436,16.8897,11.6334,15.5665,11.067C16.5407,10.8236,17.2801,10.0851,17.5023,9.99866ZM13.727,13.4915C13.2588,15.3873,10.0401,14.5476,8.96491,14.2759L9.77051,11.0399C10.8457,11.313,14.2132,11.5244,13.727,13.4915ZM14.197,9.97515C13.7678,11.7263,11.1104,11.0319,10.2214,10.8016L10.9462,7.80946C11.8352,8.03977,14.6417,8.16545,14.197,9.97515Z" fill="white" />
          </g>
        </svg>
      </div>
    </div>
  </div>
);

/**
 * Examples of all InputMaster variations
 *
 * Usage:
 * 1. No Dropdown - Just label and value, no interaction
 * 2. With Dropdown - Standard dropdown arrow
 * 3. With Icon + Dropdown - Small icon next to value text
 * 4. Currency Badge - Shows currency code and large icon on right
 * 5. Info Icon + Secondary Text - Info icon in label, secondary text on right
 */

export function InputMasterExamples() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[25px] items-start p-[40px] relative w-full">
      <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#183049] text-[18px]">
        Input Master Component Variations
      </h2>

      {/* 1. No Dropdown */}
      <div className="w-full">
        <p className="font-['Inter:Medium',sans-serif] text-[#666769] text-[12px] mb-2">1. No Dropdown</p>
        <InputMaster
          label="SETTLEMENT MODE"
          value="Bitcoin"
          showDropdown={false}
          className="h-[56px] min-w-[200px] w-full"
        />
      </div>

      {/* 2. With Dropdown */}
      <div className="w-full">
        <p className="font-['Inter:Medium',sans-serif] text-[#666769] text-[12px] mb-2">2. With Dropdown</p>
        <InputMaster
          label="SETTLEMENT MODE"
          value="Bitcoin"
          showDropdown={true}
          className="h-[56px] min-w-[200px] w-full"
        />
      </div>

      {/* 3. With Icon + Dropdown */}
      <div className="w-full">
        <p className="font-['Inter:Medium',sans-serif] text-[#666769] text-[12px] mb-2">3. With Icon + Dropdown</p>
        <InputMaster
          label="SETTLEMENT MODE"
          value="Bitcoin"
          icon={<BitcoinSmallIcon />}
          showDropdown={true}
          className="h-[56px] min-w-[200px] w-full"
        />
      </div>

      {/* 4. Currency Badge */}
      <div className="w-full">
        <p className="font-['Inter:Medium',sans-serif] text-[#666769] text-[12px] mb-2">4. Currency Badge</p>
        <InputMaster
          label="SETTLEMENT MODE"
          value="Bitcoin"
          currencyBadge={{
            code: 'BTC',
            icon: <BitcoinLargeIcon />,
          }}
          showDropdown={true}
          className="h-[56px] min-w-[200px] w-full"
        />
      </div>

      {/* 5. Info Icon + Secondary Text */}
      <div className="w-full">
        <p className="font-['Inter:Medium',sans-serif] text-[#666769] text-[12px] mb-2">
          5. Info Icon + Secondary Text
        </p>
        <InputMaster
          label="SETTLEMENT MODE"
          value="Bitcoin"
          showInfo={true}
          secondaryText="xxxx5678 - Acme Corp"
          showDropdown={true}
          className="h-[56px] min-w-[200px] w-full"
        />
      </div>

      {/* 6. Placeholder Style */}
      <div className="w-full">
        <p className="font-['Inter:Medium',sans-serif] text-[#666769] text-[12px] mb-2">6. Placeholder Style</p>
        <InputMaster
          label="TRIGGER AMOUNT (USDT.TRC20)"
          value="Min-Max Payout: $100 - $1,000,000"
          placeholder={true}
          showDropdown={false}
          className="h-[56px] min-w-[200px] w-full"
        />
      </div>
    </div>
  );
}
