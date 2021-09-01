import { Container } from "./styles";

import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg'
import Total from '../../assets/total.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Income} alt="Entrandas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={Outcome} alt="Saidas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="bckgrnd">
                <header>
                    <p>Total</p>
                    <img src={Total} alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}