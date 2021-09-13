import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './style';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }:NewTransactionModalProps) {
    const [type, setType] = useState('deposit');

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
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar Modal" />
            </button>

          <Container>

            <h2>Cadastrar Informação</h2>

            <input
                placeholder="Titulo"
                type="text"
            />

            <input
                placeholder="Valor"
                type="number"
            />

            <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    onClick={() => { setType('deposit'); }}
                    isActive={type === 'deposit'}
                    activeColor="green"
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox
                    type="button"
                    onClick={() => { setType('withdraw'); }}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                >
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>


            <input
                placeholder="Categoria"
            />
            
            <button type="submit">
                Cadastrar
            </button>

          </Container>
        </Modal>
    );
}