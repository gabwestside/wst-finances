import { useState } from 'react';
import Logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState();

    //Sempre que uma função começa com handle, sabemos que o usuario irá clicar em algo!
    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <Container>
            <Content>
                <img src={Logo} alt="wstfncs" />
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}