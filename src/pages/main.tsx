import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { FiCheckSquare, FiSquare } from 'react-icons/fi'
import {
  SeparadorAccessibility,
  GroupAction,
  WrapperButton,
  ToggleFilter
} from '../styles/mainPage'
import Toggle from '../components/Icons/IconToggle'
import Button from '../components/Button'
import ListTasksArea from '../components/ListTasksArea'
import { useAppDispatch } from '../redux/rooks'
import { screen } from '../redux/assideSlice'
import { useState } from 'react'

const Home: NextPage = () => {
  const [isActiveFilterPending, setIsActiveFilterPending] = useState(true)
  const [isActiveFilterConcluid, setIsActiveFilterConcluid] = useState(false)
  const dispatch = useAppDispatch()

  const handlerOpenAsideToAddTask = () => {
    dispatch(
      screen({
        screenAside: 'create',
        asideIsVisible: true
      })
    )
  }
  const handleActiveFilterPending = () => {
    return setIsActiveFilterPending(!isActiveFilterPending)
  }
  const handleActiveFilterConcluid = () => {
    return setIsActiveFilterConcluid(!isActiveFilterConcluid)
  }

  return (
    <Layout>
      <Header subtitle={'Crie suas tarefas de forma simples e fácil!'} />
      <WrapperButton>
        <Button onClick={handlerOpenAsideToAddTask}>Add tarefa</Button>
      </WrapperButton>
      <GroupAction>
        <ToggleFilter
          pressed={isActiveFilterPending}
          onPressedChange={handleActiveFilterPending}
          label="Pendentes"
        >
          <FiSquare size={22} />
        </ToggleFilter>
        <SeparadorAccessibility decorative orientation="vertical" />
        <ToggleFilter
          pressed={isActiveFilterConcluid}
          onPressedChange={handleActiveFilterConcluid}
          label="Concluídos"
        >
          <FiCheckSquare size={22} />
        </ToggleFilter>
      </GroupAction>
      <ListTasksArea />
    </Layout>
  )
}
export default Home
