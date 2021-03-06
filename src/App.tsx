import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal'
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './hooks/useTransactionsContext';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransictionModal() {
    setisNewTransactionModalOpen(true)
  }
  
  function handleCloseNewTransictionModal() {
    setisNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransictionModal={handleOpenNewTransictionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransictionModal}
      />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}