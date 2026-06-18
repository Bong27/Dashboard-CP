// Figma asset URLs (served by local Figma MCP asset server)
const imgReceiveIcon = 'http://localhost:3845/assets/7c5f682a4874454ebd1605ef4f2592373fd6a961.svg';
const imgUsdtLogo    = 'http://localhost:3845/assets/1fad04a93f6ecf40e5232a53275eb325d38070c0.svg';
const imgBtcLogo     = 'http://localhost:3845/assets/b4f0cd26d0d2e194e40d5ce7417cec6810d790d6.svg';

// ─── Types ────────────────────────────────────────────────────────────────────

type TxType = 'received' | 'sent' | 'bank-payout' | 'conversion';
type TxStatus = 'completed' | 'pending' | 'failed';
type CoinType = 'btc' | 'usdt';

type Transaction = {
  id: string;
  date: string;
  time: string;
  type: TxType;
  label: string;
  status: TxStatus;
  coin: CoinType;       // mini-logo on the tx icon circle
  currency: CoinType;   // currency column logo
  currencyName: string;
  destination: string;
  amount: string;
  amountSub: string;
};

const TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    date: 'JUN 3',
    time: '14:38',
    type: 'bank-payout',
    label: 'Bank Payout',
    status: 'completed',
    coin: 'usdt',
    currency: 'usdt',
    currencyName: 'United States Dollar',
    destination: 'To: Wise (GB97TRWI23080120507810)',
    amount: '-$1,250.00 USD',
    amountSub: 'from 1,286.50 USDT',
  },
  {
    id: '2',
    date: 'APR 28',
    time: '11:31',
    type: 'received',
    label: 'Received',
    status: 'completed',
    coin: 'usdt',
    currency: 'btc',
    currencyName: 'Bitcoin',
    destination: 'To: internal address',
    amount: '+0.000000 BTC',
    amountSub: 'BTC',
  },
  {
    id: '3',
    date: 'APR 28',
    time: '11:31',
    type: 'received',
    label: 'Received',
    status: 'completed',
    coin: 'usdt',
    currency: 'btc',
    currencyName: 'Bitcoin',
    destination: 'To: internal address',
    amount: '+0.000000 BTC',
    amountSub: 'BTC',
  },
  {
    id: '4',
    date: 'APR 28',
    time: '11:31',
    type: 'received',
    label: 'Received',
    status: 'completed',
    coin: 'usdt',
    currency: 'btc',
    currencyName: 'Bitcoin',
    destination: 'To: internal address',
    amount: '+0.000000 BTC',
    amountSub: 'BTC',
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconBankPayout() {
  return (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 0L14 3.5H0L7 0Z" fill="var(--cp-text-secondary)"/>
      <rect x="1" y="5" width="2" height="5" fill="var(--cp-text-secondary)"/>
      <rect x="4.5" y="5" width="2" height="5" fill="var(--cp-text-secondary)"/>
      <rect x="8" y="5" width="2" height="5" fill="var(--cp-text-secondary)"/>
      <rect x="11.5" y="5" width="2" height="5" fill="var(--cp-text-secondary)"/>
      <rect x="0" y="11" width="14" height="1.5" fill="var(--cp-text-secondary)"/>
    </svg>
  );
}

function IconConversion() {
  return (
    <svg width="11" height="13" viewBox="0 0 10.8835 13.0339" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.8447 0.318097C8.0022 0.160637 8.2575 0.160637 8.4149 0.318097L10.5654 2.46856C10.7229 2.62602 10.7229 2.88132 10.5654 3.03878L8.4149 5.18924C8.2575 5.34671 8.0022 5.34671 7.8447 5.18924C7.6872 5.03178 7.6872 4.77648 7.8447 4.61902L9.7101 2.75367L7.8447 0.888327C7.6872 0.730857 7.6872 0.475557 7.8447 0.318097Z" fill="var(--cp-text-secondary)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.75368 3.15683C2.29028 3.15683 1.84586 3.34091 1.51818 3.66859C1.19051 3.99626 1.00643 4.44068 1.00643 4.90408V5.97931C1.00643 6.202 0.825897 6.38252 0.603217 6.38252C0.380527 6.38252 0.200007 6.202 0.200007 5.97931V4.90408C0.200007 4.2268 0.469048 3.58217 0.948028 3.10319C1.42701 2.62421 2.07164 2.35517 2.75368 2.35517H10.2803C10.6134 2.35517 10.8835 2.62523 10.8835 2.95838C10.8835 3.29152 10.6134 3.56159 10.2803 3.56159H2.75368V3.15683Z" fill="var(--cp-text-secondary)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.03879 7.84468C3.19625 8.00214 3.19625 8.25744 3.03879 8.4149L1.17344 10.2803L3.03879 12.1456C3.19625 12.3031 3.19625 12.5584 3.03879 12.7158C2.88132 12.8733 2.62603 12.8733 2.46856 12.7158L0.318097 10.5654C0.160637 10.4079 0.160637 10.1526 0.318097 9.99513L2.46856 7.84468C2.62603 7.68722 2.88132 7.68722 3.03879 7.84468Z" fill="var(--cp-text-secondary)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.2803 6.65138C10.503 6.65138 10.6835 6.8319 10.6835 7.05459V8.12982C10.6835 8.80708 10.4144 9.45658 9.9355 9.93558C9.4566 10.4145 8.8071 10.6835 8.1298 10.6835H0.603217C0.380527 10.6835 0.200007 10.503 0.200007 10.2803C0.200007 10.0576 0.380527 9.877 0.603217 9.877H8.1298C8.5401 9.877 8.9337 9.71399 9.2239 9.42382C9.514 9.13365 9.677 8.7401 9.677 8.12982V7.05459C9.677 6.8319 9.8575 6.65138 10.2803 6.65138Z" fill="var(--cp-text-secondary)"/>
    </svg>
  );
}

// ─── Transaction icon circle ──────────────────────────────────────────────────
// 36px circle with border + centered tx-type icon + 16px mini coin logo top-right

function TxCircle({ type, coin }: { type: TxType; coin: CoinType }) {
  return (
    <div className="relative shrink-0 size-[36px]">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-[100px] border border-[var(--cp-border-hover)]" />

      {/* Centered icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        {type === 'received' && (
          <div className="overflow-clip size-[16px]">
            <img alt="" className="block size-full" src={imgReceiveIcon} />
          </div>
        )}
        {type === 'sent' && (
          <svg width="10" height="10" viewBox="0 0 9.40295 9.40295" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.0493 0.35367C9.2542 0.55856 9.2542 0.89076 9.0493 1.09565L1.09572 9.0492C0.89083 9.2541 0.55864 9.2541 0.35375 9.0492C0.14886 8.8443 0.14886 8.5122 0.35375 8.3073L8.3073 0.35367C8.5122 0.14878 8.8444 0.14878 9.0493 0.35367Z" fill="var(--cp-text-secondary)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.15816 0.72466C1.15816 0.4349 1.39305 0.2 1.68282 0.2H8.6783C8.968 0.2 9.2029 0.4349 9.2029 0.72466V7.7201C9.2029 8.0099 8.968 8.2448 8.6783 8.2448C8.3885 8.2448 8.1536 8.0099 8.1536 7.7201V1.24932H1.68282C1.39305 1.24932 1.15816 1.01442 1.15816 0.72466Z" fill="var(--cp-text-secondary)"/>
          </svg>
        )}
        {type === 'bank-payout' && <IconBankPayout />}
        {type === 'conversion' && <IconConversion />}
      </div>

      {/* Mini coin logo — top-right corner */}
      <div className="absolute right-[-1px] top-[-1px] flex items-center">
        <div className="relative size-[16px]">
          {coin === 'usdt' ? (
            <div className="absolute bg-[#50af95] inset-[1.22%_0_-1.22%_0] rounded-[999px] overflow-hidden">
              <div className="absolute inset-[9.9%_4.65%_-1.56%_3.69%] overflow-clip">
                <div className="absolute inset-[5.56%_0_7.45%_0]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUsdtLogo} />
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 overflow-clip rounded-[999px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBtcLogo} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Currency logo (14px, in the currency column) ────────────────────────────

function CurrencyIcon({ type }: { type: CoinType }) {
  if (type === 'btc') {
    return (
      <div className="relative shrink-0 size-[14px]">
        <div className="absolute inset-[0_0.01%_0_0] overflow-clip">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBtcLogo} />
        </div>
      </div>
    );
  }
  // USDT
  return (
    <div className="relative shrink-0 size-[14px]">
      <div className="absolute bg-[#50af95] inset-0 rounded-[999px] overflow-hidden">
        <div className="absolute inset-[9.9%_4.65%_-1.56%_3.69%] overflow-clip">
          <div className="absolute inset-[5.56%_0_7.45%_0]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUsdtLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Status ───────────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: TxStatus }) {
  const dotColor =
    status === 'completed' ? 'bg-[#21b75d]' :
    status === 'pending'   ? 'bg-orange-400' :
                             'bg-red-500';
  const label =
    status === 'completed' ? 'Completed' :
    status === 'pending'   ? 'Pending'   : 'Failed';

  return (
    <div className="flex items-center gap-[5px]">
      <div className={`${dotColor} rounded-[100px] shrink-0 size-[8px]`} />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

// ─── Transaction row ──────────────────────────────────────────────────────────

function TxRow({ tx, alt }: { tx: Transaction; alt: boolean }) {
  return (
    <div
      className={`flex items-center justify-between p-[20px] rounded-[5px] ${
        alt ? 'bg-[var(--cp-bg-2)]' : 'bg-[var(--cp-bg-1)]'
      } hover:bg-[var(--cp-bg-3)] transition-colors cursor-pointer`}
    >
      {/* ── Left: date + divider + tx icon + label/status ── */}
      <div className="flex items-center gap-[20px] shrink-0">

        {/* Date */}
        <div className="flex flex-col items-start w-[45px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[13px] text-[var(--cp-text-secondary)]">
            {tx.date}
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[13px] text-[var(--cp-text-secondary)]">
            {tx.time}
          </p>
        </div>

        {/* Divider */}
        <div className="bg-[var(--cp-border-default)] h-[34px] w-px shrink-0" />

        {/* Tx circle + label + status */}
        <div className="flex items-center gap-[10px]">
          <TxCircle type={tx.type} coin={tx.coin} />
          <div className="flex flex-col items-start">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">
              {tx.label}
            </p>
            <StatusBadge status={tx.status} />
          </div>
        </div>

      </div>

      {/* ── Middle: divider + currency logo + name + destination ── */}
      <div className="flex items-center gap-[20px] flex-1 mx-[20px] min-w-0">

        {/* Divider */}
        <div className="bg-[var(--cp-border-default)] h-[34px] w-px shrink-0" />

        {/* Currency info */}
        <div className="flex flex-col items-start min-w-0">
          <div className="flex items-center gap-[5px]">
            <CurrencyIcon type={tx.currency} />
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap">
              {tx.currencyName}
            </p>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap overflow-hidden text-ellipsis">
            {tx.destination}
          </p>
        </div>

      </div>

      {/* ── Right: amount ── */}
      <div className="flex flex-col items-end shrink-0">
        <p className="font-['Inter',sans-serif] font-bold leading-[normal] not-italic text-[14.5px] text-[var(--cp-text-primary)] whitespace-nowrap" style={{ letterSpacing: '-0.5px' }}>
          {tx.amount}
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic text-[13px] text-[var(--cp-text-tertiary)] whitespace-nowrap">
          {tx.amountSub}
        </p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TransactionsPage() {
  return (
    <div className="flex flex-col gap-0 w-full">
      {TRANSACTIONS.map((tx, i) => (
        <TxRow key={tx.id} tx={tx} alt={i % 2 !== 0} />
      ))}
    </div>
  );
}
