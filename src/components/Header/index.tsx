import { Wrapper, Title, Subtitle } from './styled'

type headerProps = {
  title?: string | false
  subtitle?: string | false
}

const Header = ({
  title = 'Lista de tarefas',
  subtitle = 'Crie sua lista de tarefas e tenha uma vida mais organizada!'
}: headerProps) => {
  return (
    <Wrapper>
      <Title isVisible={!!title}>{title}</Title>
      <Subtitle isVisible={!!subtitle}>{subtitle}</Subtitle>
    </Wrapper>
  )
}

export default Header
