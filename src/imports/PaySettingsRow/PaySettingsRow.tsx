import BankDetailsModal, { BANK_DETAILS } from '../../app/components/BankDetailsModal';
import EditBankModal from '../../app/components/EditBankModal';
import AddNewBankModal from '../../app/components/AddNewBankModal';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router';
import svgPaths from "./svg-dulsyl96to";

function LayerX1() {
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

function BitcoinBtcLogo() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX1 />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[49px]" data-name="name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] w-full">Bitcoin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] w-full">BTC</p>
    </div>
  );
}

function Coin() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="coin">
      <div className="relative shrink-0 size-[36px]" data-name="bitcoin">
        <BitcoinBtcLogo />
      </div>
      <Name />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex h-[56px] items-center relative shrink-0 w-[178px]" data-name="left">
      <Coin />
    </div>
  );
}

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
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
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

function LabelWrap1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">PAYOUT CURRENCY</p>
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

function BitcoinBtcLogo1() {
  return (
    <div className="absolute inset-[0_0.01%_0_0] overflow-clip" data-name="bitcoin-btc-logo 1">
      <LayerX />
    </div>
  );
}

function InputText1() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="input text">
      <div className="relative shrink-0 size-[14px]" data-name="bitcoin">
        <BitcoinBtcLogo1 />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] whitespace-nowrap">Bitcoin</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap1 />
      <InputText1 />
    </div>
  );
}

function LineDivider1() {
  return <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
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

function Controls1() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector1 />
    </div>
  );
}

function LabelWrap2() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="label-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">DISCOUNT</p>
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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-quaternary)] text-[14.5px] whitespace-nowrap">Optional</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="content">
      <LabelWrap2 />
      <InputText2 />
    </div>
  );
}

function LineDivider2() {
  return <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" data-name="line divider" />;
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

function Controls2() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="controls">
      <Selector2 />
    </div>
  );
}

type PaySettingsRowProps = {
  mode?: 'custody' | 'bank';
  bankName?: string;
  bankAccount?: string;
  coinLogo?: React.ReactNode;
  coinName?: string;
  coinSymbol?: string;
};


function EditButton({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const frameColor = hovered ? '#1C60DD' : '#8492A6';
  const penColor   = hovered ? '#1C60DD' : '#8492A6';
  return (
    <div className="relative shrink-0" style={{overflow:'visible'}}>
      <button
        className="content-stretch flex h-full items-center justify-center px-[10px] py-[5px] relative shrink-0 cursor-pointer"
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative shrink-0 size-[16px]">
          {/* Frame — Figma inset 12.29%/12.29%/3.96%/3.96% */}
          <div className="absolute inset-[12.29%_12.29%_3.96%_3.96%]">
            <svg className="absolute block inset-0 size-full" viewBox="0 0 13.4 13.4" fill="none" preserveAspectRatio="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.595549 0.595549C0.976874 0.214225 1.49406 0 2.03333 0H6.7C7.0866 0 7.4 0.313401 7.4 0.7C7.4 1.0866 7.0866 1.4 6.7 1.4H2.03333C1.86536 1.4 1.70427 1.46673 1.5855 1.5855C1.46673 1.70427 1.4 1.86536 1.4 2.03333V11.3667C1.4 11.5346 1.46673 11.6957 1.5855 11.8145C1.70427 11.9333 1.86536 12 2.03333 12H11.3667C11.5346 12 11.6957 11.9333 11.8145 11.8145C11.9333 11.6957 12 11.5346 12 11.3667V6.7C12 6.3134 12.3134 6 12.7 6C13.0866 6 13.4 6.3134 13.4 6.7V11.3667C13.4 11.9059 13.1858 12.4231 12.8045 12.8045C12.4231 13.1858 11.9059 13.4 11.3667 13.4H2.03333C1.49406 13.4 0.976873 13.1858 0.595549 12.8045C0.214226 12.4231 0 11.9059 0 11.3667V2.03333C0 1.49406 0.214225 0.976874 0.595549 0.595549Z" fill={frameColor}/>
            </svg>
          </div>
          {/* Pen — Figma inset 3.45%/3.45%/28.96%/28.96% */}
          <div className="absolute inset-[3.45%_3.45%_28.96%_28.96%]">
            <svg className="absolute block inset-0 size-full" viewBox="0 0 10.8142 10.8142" fill="none" preserveAspectRatio="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.70002 1.4C8.51059 1.4 8.32893 1.47525 8.19499 1.60919L1.99876 7.80542L1.66207 9.15216L3.00881 8.81547L9.20504 2.61924C9.33898 2.4853 9.41423 2.30363 9.41423 2.11421C9.41423 1.92479 9.33898 1.74313 9.20504 1.60919C9.0711 1.47525 8.88944 1.4 8.70002 1.4ZM7.20504 0.619239C7.60153 0.222747 8.13929 0 8.70002 0C9.26074 0 9.7985 0.222747 10.195 0.619239C10.5915 1.01573 10.8142 1.55349 10.8142 2.11421C10.8142 2.67494 10.5915 3.2127 10.195 3.60919L3.86166 9.94252C3.77195 10.0322 3.65954 10.0959 3.53646 10.1266L0.86979 10.7933C0.631247 10.8529 0.378906 10.7831 0.20504 10.6092C0.0311738 10.4353 -0.0387205 10.183 0.0209151 9.94444L0.687582 7.27777C0.718352 7.15469 0.781996 7.04228 0.871707 6.95257L7.20504 0.619239Z" fill={penColor}/>
            </svg>
          </div>
        </div>
      </button>
      {hovered && (
        <div
          className="absolute flex flex-col items-center pointer-events-none z-50"
          style={{ bottom: 'calc(100% + 4px)', left: '50%', transform: 'translateX(-50%)' }}
        >
          <div className="bg-black rounded-[5px] px-[10px] py-[10px] shrink-0 whitespace-nowrap">
            <p className="font-['Inter:Medium',sans-serif] font-medium text-[11px] text-white leading-none">Edit</p>
          </div>
          <svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="shrink-0">
            <path d="M10 0H0L3.58579 3.58579C4.36684 4.36684 5.63316 4.36684 6.41421 3.58579L10 0Z" fill="black"/>
          </svg>
        </div>
      )}
    </div>
  );
}


export default function PaySettingsRow({
  mode = 'custody',
  bankName: bankNameProp = 'Wise',
  bankAccount: bankAccountProp = 'GB97TRWI23080120507810',
  coinLogo,
  coinName,
  coinSymbol,
}: PaySettingsRowProps = {}) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [showEditBank, setShowEditBank] = useState(false);
  const [showAddNewBank, setShowAddNewBank] = useState(false);
  const [editingBankName, setEditingBankName] = useState(bankNameProp);
  const [bankName, setBankName] = useState(bankNameProp);
  const [bankAccount, setBankAccount] = useState(bankAccountProp);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
    {showBankDetails && !showEditBank && !showAddNewBank && createPortal(
      <BankDetailsModal
        onClose={() => setShowBankDetails(false)}
        onUpdate={(name, account) => { setBankName(name); setBankAccount(account); }}
        onEditBank={(name) => { setEditingBankName(name); setShowEditBank(true); }}
        onAddNewBank={() => setShowAddNewBank(true)}
        onManageBankAccounts={() => navigate('/bank-accounts')}
        bankName={bankName}
        bankAccount={bankAccount}
        selectedBankName={editingBankName !== bankName ? editingBankName : undefined}
      />, document.body)}
    {showEditBank && createPortal(
      <EditBankModal
        key={editingBankName}
        onClose={() => setShowEditBank(false)}
        onBack={() => { setShowEditBank(false); setShowBankDetails(true); }}
        onSave={() => setShowEditBank(false)}
        label={BANK_DETAILS[editingBankName]?.label ?? editingBankName}
        holderName={BANK_DETAILS[editingBankName]?.holder ?? ''}
        accountNumber={BANK_DETAILS[editingBankName]?.accountNumber ?? ''}
        bic={BANK_DETAILS[editingBankName]?.bic ?? ''}
        address={BANK_DETAILS[editingBankName]?.address ?? ''}
        city={BANK_DETAILS[editingBankName]?.city ?? ''}
        postalCode={BANK_DETAILS[editingBankName]?.postalCode ?? ''}
        city=""
        postalCode=""
        bankCountry="United Kingdom"
      />, document.body)}
    {showAddNewBank && createPortal(
      <AddNewBankModal
        onClose={() => setShowAddNewBank(false)}
      />, document.body)}
    <div className={`bg-[var(--cp-bg-1)] content-stretch flex gap-[10px] items-center pl-[20px] py-[10px] relative size-full ${isDropdownOpen ? 'z-[100]' : ''}`} data-name="PaySettingsRow">
        <div aria-hidden="true" className="absolute border-[var(--cp-border-default)] border-solid border-t inset-0 pointer-events-none" />
        {coinLogo ? (
          <div className="content-stretch flex h-[56px] items-center relative shrink-0 w-[178px]">
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
              {coinLogo}
              <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px]">{coinName}</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px]">{coinSymbol}</p>
              </div>
            </div>
          </div>
        ) : (
          <Left />
        )}
        <div ref={dropdownRef} className="flex-[1_0_0] min-w-[200px] relative shrink-0 z-50">
        <div className="bg-white group h-[56px] relative rounded-[5px]" style={{overflow:'visible'}}>
          <div className="flex flex-row justify-center min-w-[inherit] rounded-[inherit] size-full">
            <div className="content-stretch flex items-start justify-between min-w-[inherit] p-[10px] relative size-full">
              <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
                {mode === 'bank' ? (
                  <>
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-tertiary)] text-[11px] uppercase whitespace-nowrap">SETTLEMENT MODE (Nightly to Bank)</p>
                      <div className="overflow-clip relative shrink-0 size-[8px]">
                        <div className="-translate-y-1/2 absolute aspect-[16/16] left-0 right-0 top-1/2">
                          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                            <path clipRule="evenodd" d={svgPaths.pe418400} fill="var(--fill-0, #D3D6E1)" fillRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[14.5px] whitespace-nowrap">{bankName}</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[var(--cp-text-tertiary)] text-[13px] overflow-hidden text-ellipsis whitespace-nowrap">{bankAccount}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <LabelWrap />
                    <InputText />
                  </>
                )}
              </div>
              <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" style={{overflow:'visible'}}>
                {mode === 'bank' && <EditButton onClick={() => setShowBankDetails(true)} />}
                <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="content-stretch flex items-center justify-between relative shrink-0 w-[21px] cursor-pointer">
                  <div className="bg-[var(--cp-border-default)] h-[34px] relative shrink-0 w-px" />
                  <div className={`flex items-center justify-center relative shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                    <div className="overflow-clip relative shrink-0 size-[12px]">
                      <div className="absolute inset-[34.38%_21.88%]">
                        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.74999 3.74999">
                          <path clipRule="evenodd" d={svgPaths.p1a1bd900} fill="var(--fill-0, #A2A5AC)" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[5px] transition-colors ${isDropdownOpen ? 'border-[var(--cp-border-hover)]' : 'border-[var(--cp-border-default)] group-hover:border-[var(--cp-border-hover)]'}`} />
        </div>

        {isDropdownOpen && (
          <div className="absolute bg-white left-0 mt-[5px] rounded-[5px] shadow-lg top-[56px] w-full z-50">
            <div aria-hidden="true" className="absolute border border-[var(--cp-border-hover)] border-solid inset-0 pointer-events-none rounded-[5px]" />
            <div className="content-stretch flex flex-col gap-[5px] items-start p-[10px] relative">
              <div className="bg-white relative rounded-[5px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
                <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[var(--cp-text-primary)] text-[11px] w-full">Disabled</p>
                </div>
              </div>
              <div className="bg-[var(--cp-brand-primary)] relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-[var(--cp-brand-active)] transition-colors">
                <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px] text-white">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 w-full">To Custody</p>
                  <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 w-full">Received payments are stored in your CoinPayments wallet for later withdrawal at your leisure. This option allows you to automatically convert payments into another currency as well.</p>
                </div>
              </div>
              <div className="bg-white relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-[var(--cp-bg-1)] transition-colors">
                <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
                <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] w-full">Nightly to Bank</p>
                  <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[var(--cp-text-secondary)] w-full">Received payments are batched and wired nightly to your USD bank account. A $100 minimum balance is required per wire.</p>
                </div>
              </div>
              <div className="bg-white relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-[var(--cp-bg-1)] transition-colors">
                <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
                <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] w-full">To Non-Custody</p>
                  <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[var(--cp-text-secondary)] w-full">Received payments are sent to the address or wallet ID you specify as soon as they are received and confirmed. This option allows you to automatically convert payments into another currency as well.</p>
                </div>
              </div>
              <div className="bg-white relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-[var(--cp-bg-1)] transition-colors">
                <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
                <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] w-full">Hourly To Non-Custody</p>
                  <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[var(--cp-text-secondary)] w-full">Received payments are grouped together and sent hourly. The main benefit of this option is it will save you coin network fees.</p>
                </div>
              </div>
              <div className="bg-white relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-[var(--cp-bg-1)] transition-colors">
                <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
                <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] w-full">Nightly To Non-Custody</p>
                  <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[var(--cp-text-secondary)] w-full">Received payments are grouped together and sent daily (at approx. midnight EST GMT-05:00). The main benefit of this option is it will save you coin network fees.</p>
                </div>
              </div>
              <div className="bg-white relative rounded-[5px] shrink-0 w-full cursor-pointer hover:bg-[var(--cp-bg-1)] transition-colors">
                <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] border-solid inset-0 pointer-events-none rounded-[5px]" />
                <div className="content-stretch flex flex-col items-start leading-[normal] not-italic p-[10px] relative size-full text-[11px]">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[var(--cp-text-primary)] w-full">Weekly To Non-Custody</p>
                  <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[var(--cp-text-secondary)] w-full">Received payments are grouped together and sent every Sunday (at approx. midnight EST GMT-05:00). The main benefit of this option is it will save you coin network fees.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="content-stretch cursor-pointer flex h-[56px] items-center justify-between min-w-[200px] overflow-clip p-[10px] relative rounded-[5px] shrink-0 w-[200px]">
        <Content1 />
        <Controls1 />
      </div>
      <div className="bg-white cursor-pointer group h-[56px] min-w-[200px] relative rounded-[5px] shrink-0 w-[200px]">
        <div className="content-stretch flex items-center justify-between min-w-[inherit] overflow-clip p-[10px] relative rounded-[inherit] size-full">
          <Content2 />
          <Controls2 />
        </div>
        <div aria-hidden="true" className="absolute border border-[var(--cp-border-default)] group-hover:border-[var(--cp-border-hover)] border-solid inset-0 pointer-events-none rounded-[5px] transition-colors" />
      </div>
      <div className="flex h-[56px] items-center justify-center relative shrink-0">
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
    </>
  );
}