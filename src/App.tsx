import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

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
    <>
      <Header onOpenNewTransictionModal={handleOpenNewTransictionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransictionModal}>
        <h2>olá</h2>
      </Modal>
      <GlobalStyle/>
    </>
  );
}