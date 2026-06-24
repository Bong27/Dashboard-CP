import { createContext, useContext, useState, ReactNode } from 'react';

export type TxStatus = 'completed' | 'pending' | 'failed';
export type TxType = 'bank-payout' | 'received' | 'sent' | 'converted';
export type CoinType = 'usdt' | 'usdc' | 'btc' | 'eth';

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
};

const INITIAL_TRANSACTIONS: Transaction[] = [
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
};

const TransactionContext = createContext<TransactionContextValue | null>(null);

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);

  const addTransaction = (tx: Omit<Transaction, 'id'>) => {
    const id = `tx_${Date.now()}`;
    setTransactions(prev => [{ ...tx, id }, ...prev]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const ctx = useContext(TransactionContext);
  if (!ctx) throw new Error('useTransactions must be used within TransactionProvider');
  return ctx;
}
