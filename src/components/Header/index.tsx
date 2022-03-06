import { Wrapper, Title, Subtitle } from './styled'

type headerProps = {
  subtitle?: string | false
}

const Header = ({
  subtitle = 'Crie sua lista de tarefas e tenha uma vida mais organizada!'
}: headerProps) => {
  return (
    <Wrapper>
      <Title>Lista de tarefas</Title>
      <Subtitle isVisible={!!subtitle}>{subtitle}</Subtitle>
    </Wrapper>
  )
}

export default Header
