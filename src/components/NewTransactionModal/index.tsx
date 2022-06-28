import Modal from 'react-modal';

interface NewTransitionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransitionModalProps) {  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}>
      <h2>olá</h2>
    </Modal>
  )
}