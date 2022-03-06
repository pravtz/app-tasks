import { useState } from 'react'
import {
  Wrapper,
  Content,
  MensageWrapper,
  IconPendent,
  IconCompleted
} from './styled'
import { FiCheckSquare, FiSquare } from 'react-icons/fi'

const InfoNumberTasks = () => {
  const [pendingTasks, setPendingTasks] = useState(0)
  const [completedTasks, setCompletedTasks] = useState(1)

  const pluralizaçãoPendingTasks = pendingTasks > 1 ? 's' : ''
  const pluralizaçãocompletedTasks = completedTasks > 1 ? 's' : ''

  return (
    <Wrapper>
      <MensageWrapper>
        <h3>{!!pendingTasks || !!completedTasks ? 'Você tem:' : ''}</h3>
      </MensageWrapper>
      <Content isVisible={!!pendingTasks || !!completedTasks}>
        <p>
          <IconCompleted>
            <FiCheckSquare />
          </IconCompleted>
          &nbsp;<span>{completedTasks}</span>&nbsp; tarefa
          {pluralizaçãocompletedTasks} concluida{pluralizaçãocompletedTasks}
        </p>
        <p>
          <IconPendent>
            <FiSquare />
          </IconPendent>
          &nbsp;<span>{pendingTasks}</span>&nbsp; tarefa
          {pluralizaçãoPendingTasks} Pendente
          {pluralizaçãoPendingTasks}
        </p>
      </Content>
    </Wrapper>
  )
}
export default InfoNumberTasks
