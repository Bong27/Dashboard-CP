import { createBrowserRouter } from 'react-router';
import DashboardLayout from './components/DashboardLayout';
import WalletPage from './pages/WalletPage';
import TransactionsPage from './pages/TransactionsPage';
import SettingsPage from './pages/SettingsPage';
import IntegrationsPage from './pages/IntegrationsPage';
import InvoicingPage from './pages/InvoicingPage';
import POSPage from './pages/POSPage';
import SupportPage from './pages/SupportPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: DashboardLayout,
    children: [
      { index: true, Component: WalletPage },
      { path: 'transactions', Component: TransactionsPage },
      { path: 'settings', Component: SettingsPage },
      { path: 'integrations', Component: IntegrationsPage },
      { path: 'invoicing', Component: InvoicingPage },
      { path: 'pos', Component: POSPage },
      { path: 'support', Component: SupportPage },
    ],
  },
]);
