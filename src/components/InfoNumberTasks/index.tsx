import { useEffect, useState } from 'react'
import {
  Wrapper,
  Content,
  MensageWrapper,
  IconPendent,
  IconCompleted
} from './styled'
import { FiCheckSquare, FiSquare } from 'react-icons/fi'
import { useAppSelector } from '../../redux/rooks'

export const countPendingTasks = (): number => {
  const tasks = useAppSelector((state) => state.task.value)
  const tasksPending = tasks.filter((task) => {
    return task.isPending === true
  })
  return tasksPending.length
}

export const countCompletedTasks = (): number => {
  const tasks = useAppSelector((state) => state.task.value)
  const tasksCompleted = tasks.filter((task) => {
    return task.isPending === false
  })
  return tasksCompleted.length
}

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
