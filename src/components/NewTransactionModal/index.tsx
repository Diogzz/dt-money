import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/fechar.svg'
import incomingImg from '../../assets/entradas.svg'
import outcomingImg from '../../assets/saidas.svg'
import { useState } from 'react';

interface NewTransitionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransitionModalProps) {  

  const [type, setType] = useState('deposit')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-close-modal"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor={'green'}
          >
            <img src={incomingImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
          type="button"
          onClick={() => {setType('withdraw')}}
          isActive={type === 'withdraw'}
          activeColor={'red'}
        >
            <img src={outcomingImg} alt="Entrada" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>
  )
}