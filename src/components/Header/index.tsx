import logoImg from '../../assets/logo.svg'
import { Container } from './styles'
import { Content } from './styles'

interface HeaderProps {
  onOpenNewTransictionModal: () => void;
}

export function Header({ onOpenNewTransictionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="DTMoney" />
        <button type="button" onClick={onOpenNewTransictionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}