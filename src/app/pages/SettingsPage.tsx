import { useState } from 'react';
import { InputMaster } from '../components/InputMaster';
import PaySettingsRow from '../../imports/PaySettingsRow/PaySettingsRow';
import Rounded from '../../imports/Rounded/Rounded';
import Buttons from '../../imports/Buttons/Buttons';
import { SearchInput } from '../components/SearchInput';

const BitcoinIcon = () => (
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

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'email'>('general');
  const [hasChanges, setHasChanges] = useState(false);

  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      {/* Tabs */}
      <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
        <button
          onClick={() => setActiveTab('general')}
          className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative shrink-0 group"
        >
          <div
            aria-hidden="true"
            className={`absolute border-b-2 border-solid inset-0 pointer-events-none transition-colors ${
              activeTab === 'general' ? 'border-[var(--cp-brand-primary)]' : 'border-transparent group-hover:border-[var(--cp-text-grey)]'
            }`}
          />
          <p
            className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] whitespace-nowrap transition-colors ${
              activeTab === 'general' ? 'text-[var(--cp-brand-primary)]' : 'text-[var(--cp-text-grey-disabled)] group-hover:text-[var(--cp-text-grey)]'
            }`}
          >
            General
          </p>
        </button>
        <button
          onClick={() => setActiveTab('email')}
          className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative shrink-0 group"
        >
          <div
            aria-hidden="true"
            className={`absolute border-b-2 border-solid inset-0 pointer-events-none transition-colors ${
              activeTab === 'email' ? 'border-[var(--cp-brand-primary)]' : 'border-transparent group-hover:border-[var(--cp-text-grey)]'
            }`}
          />
          <p
            className={`font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] whitespace-nowrap transition-colors ${
              activeTab === 'email' ? 'text-[var(--cp-brand-primary)]' : 'text-[var(--cp-text-grey-disabled)] group-hover:text-[var(--cp-text-grey)]'
            }`}
          >
            Email Notifications
          </p>
        </button>
      </div>

      {/* Content */}
      {activeTab === 'general' && (
        <div className="content-stretch flex flex-col gap-[20px] items-start py-[20px] relative shrink-0 w-full">
          {/* Underpayment Limits Section */}
          <div className="content-stretch flex flex-col gap-[10px] items-start pb-[20px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[var(--cp-border-default)] border-b border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-secondary)] text-[18px] tracking-[-0.2px] whitespace-nowrap">
                Underpayment Limits
              </p>
              <div className="overflow-clip relative shrink-0 size-[12px]">
                <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <path
                      clipRule="evenodd"
                      d="M6,0C2.68629,0,0,2.68629,0,6C0,9.31371,2.68629,12,6,12C9.31371,12,12,9.31371,12,6C12,2.68629,9.31371,0,6,0ZM6.6,9C6.6,9.33137,6.33137,9.6,6,9.6C5.66863,9.6,5.4,9.33137,5.4,9L5.4,5.4C5.4,5.06863,5.66863,4.8,6,4.8C6.33137,4.8,6.6,5.06863,6.6,5.4L6.6,9ZM6,4.2C6.33137,4.2,6.6,3.93137,6.6,3.6C6.6,3.26863,6.33137,3,6,3C5.66863,3,5.4,3.26863,5.4,3.6C5.4,3.93137,5.66863,4.2,6,4.2Z"
                      fill="var(--fill-0, #D3D6E1)"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-secondary)] text-[13px] w-full">
              <p className="relative shrink-0 w-full">
                Set a maximum underpayment threshold to improve payment success rates when buyers send less than the full amount. You can define this threshold as a percentage and/or a flat value—the lower of the two will apply.
              </p>
              <p className="relative shrink-0 w-full">
                Note: if a buyer sends a partial payment, the funds will be held until the payment window closes. If the total received meets your threshold, the underpayment will be accepted; otherwise, the funds will be refunded to the buyer.
              </p>
            </div>
          </div>

          {/* Input Fields */}
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
            <InputMaster
              label="underpayment value"
              value="Optional"
              placeholder={true}
              currencyBadge={{
                code: 'USD',
                icon: <BitcoinIcon />,
              }}
              className="flex-1 h-[56px] min-w-[200px]"
            />
            <InputMaster
              label="underpayment percentage"
              value="Optional"
              placeholder={true}
              showDropdown={false}
              className="flex-1 h-[56px] min-w-[200px]"
            />
          </div>

          {/* Accepted Cryptocurrencies Section */}
          <div className="content-stretch flex flex-col gap-[20px] items-start pt-[20px] relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-secondary)] text-[18px] tracking-[-0.2px] whitespace-nowrap">
              Accepted Cryptocurrencies
            </p>

            {/* Controls Row */}
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
              {hasChanges ? (
                <button
                  onClick={() => setHasChanges(false)}
                  className="bg-[var(--cp-brand-primary)] content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[5px] shrink-0 cursor-pointer hover:bg-[var(--cp-brand-active)] transition-colors"
                >
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
                    Save Changes
                  </p>
                </button>
              ) : (
                <div className="bg-[var(--cp-bg-2)] content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[5px] shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-secondary)] text-[13px] text-center whitespace-nowrap">Save Changes</p>
                </div>
              )}

              {/* Search */}
              <SearchInput />

              {/* Filters */}
              <div className="bg-white h-[38px] relative rounded-[5px] shrink-0 w-[180px]">
                <div className="content-stretch flex items-center justify-between overflow-clip p-[10px] relative rounded-[inherit] size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[13px] whitespace-nowrap">
                    Any Currency Type
                  </p>
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
                <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
              </div>

              <div className="bg-white h-[38px] relative rounded-[5px] shrink-0 w-[180px]">
                <div className="content-stretch flex items-center justify-between overflow-clip p-[10px] relative rounded-[inherit] size-full">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[13px] whitespace-nowrap">
                    Any Coin Status
                  </p>
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
                <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
              </div>

              {/* Spacer to push Bulk Edit to align with Discount column */}
              <div className="flex-1 min-w-0" />

              {/* Bulk Edit - aligned with Discount input (200px + 10px gap + 16px radio) */}
              <div className="h-[38px] shrink-0 w-[108px]">
                <Rounded />
              </div>

              {/* Radio Button */}
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

            {/* Cryptocurrency List */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              {/* Bank Payout rows — top of list, checked by default */}
              <div className="relative w-full min-h-[76px]">
                <PaySettingsRow
                  mode="bank"
                  bankId="wise"
                  coinLogo={
                    <div className="relative shrink-0 size-[36px] rounded-[999px] bg-[#50af95] flex items-center justify-center">
                      <span className="text-white font-bold leading-none select-none" style={{fontSize:14}}>₮</span>
                    </div>
                  }
                  coinName="Tether USD"
                  coinSymbol="USDT.ERC20"
                />
              </div>
              <div className="relative w-full min-h-[76px]">
                <PaySettingsRow
                  mode="bank"
                  bankId="wise"
                  coinLogo={
                    <div className="relative shrink-0 size-[36px] rounded-[999px] bg-[#2775CA] flex items-center justify-center">
                      <span className="text-white font-bold leading-none select-none" style={{fontSize:12}}>$</span>
                    </div>
                  }
                  coinName="USD Coin"
                  coinSymbol="USDC.ERC20"
                />
              </div>
              {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                <div key={index} className="relative w-full min-h-[76px]">
                  <PaySettingsRow />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'email' && (
        <div className="content-stretch flex flex-col items-start py-[20px] relative shrink-0 w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[var(--cp-text-secondary)] text-[14px]">
            Email notification settings will be displayed here.
          </p>
        </div>
      )}
    </div>
  );
}
