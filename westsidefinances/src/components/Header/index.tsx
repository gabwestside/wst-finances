import Logo from '../../assets/planet.svg'

import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionNewModal: () => void;
}

export function Header({ onOpenNewTransactionNewModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img className="icon" src={Logo} alt="wstfncs" />
                <button type="button" onClick={onOpenNewTransactionNewModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}