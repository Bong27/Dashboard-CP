import { createContext, useContext, useState, ReactNode } from 'react';

export type TxStatus = 'completed' | 'pending' | 'failed';
export type TxType = 'bank-payout' | 'received' | 'sent' | 'converted';
export type CoinType = 'usdt' | 'usdc' | 'btc' | 'eth' | 'usd';

export type Transaction = {
  id: string;
  date: string;
  time: string;
  type: TxType;
  label: string;
  status: TxStatus;
  coin: CoinType;
  currency: CoinType;
  currencyName: string;
  destination: string;
  amount: string;
  amountSub: string;
  expandable?: boolean;
  settlementDestination?: string;
  settlementMode?: string;
  note?: string;
  sourceCoinName?: string;
  txAmountUsd?: string;
  txFeeUsd?: string;
  networkFeeUsd?: string;
  txTotalUsd?: string;
};

const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: '0',
    date: 'JUN 24',
    time: '09:14',
    type: 'bank-payout',
    label: 'Bank Payout',
    status: 'pending',
    coin: 'usdc',
    currency: 'usd',
    currencyName: 'United States Dollar',
    destination: 'To: Barclays (GB29NWBK60161331926819)',
    amount: '-$487.20 USD',
    amountSub: 'from 500 USDC.ERC20',
    expandable: true,
    sourceCoinName: 'USD Coin',
    settlementDestination: 'Barclays – GB29NWBK60161331926819',
    settlementMode: 'Manual bank payout (USDC)',
    txAmountUsd: '$500.00 USD',
    txFeeUsd: '$10.31 USD',
    networkFeeUsd: '$2.49 USD',
    txTotalUsd: '-$487.20 USD',
  },
  {
    id: '1',
    date: 'JUN 3',
    time: '14:38',
    type: 'bank-payout',
    label: 'Bank Payout',
    status: 'completed',
    coin: 'usdt',
    currency: 'usd',
    currencyName: 'United States Dollar',
    destination: 'To: Wise (GB97TRWI23080120507810)',
    amount: '-$1,250.00 USD',
    amountSub: 'from 1,286.50 USDT',
    expandable: true,
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

type TransactionContextValue = {
  transactions: Transaction[];
  addTransaction: (tx: Omit<Transaction, 'id'>) => void;
  removeTransaction: (id: string) => void;
};

const TransactionContext = createContext<TransactionContextValue | null>(null);

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);

  const addTransaction = (tx: Omit<Transaction, 'id'>) => {
    const id = `tx_${Date.now()}`;
    setTransactions(prev => [{ ...tx, id }, ...prev]);
  };

  const removeTransaction = (id: string) => {
    setTransactions(prev => prev.filter(tx => tx.id !== id));
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, removeTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const ctx = useContext(TransactionContext);
  if (!ctx) throw new Error('useTransactions must be used within TransactionProvider');
  return ctx;
}
