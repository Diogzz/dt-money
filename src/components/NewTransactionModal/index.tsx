import { FormEvent, useState } from 'react';
import Modal from 'react-modal';


import closeImg from '../../assets/fechar.svg'
import incomingImg from '../../assets/entradas.svg'
import outcomingImg from '../../assets/saidas.svg'

import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { useTransactions } from '../../hooks/useTransactionsContext';

interface NewTransitionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransitionModalProps) {  
  const { createTransaction } = useTransactions();
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    })

    onRequestClose();

    setTitle('');
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input 
          placeholder="Título" 
          value={title} 
          onChange={event => setTitle(event.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Valor"  
          value={amount} 
          onChange={event => setAmount(Number(event.target.value))}/>

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

        <input 
          placeholder="Categoria" 
          value={category} 
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}