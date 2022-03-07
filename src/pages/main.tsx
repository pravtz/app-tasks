import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import ActionButton from '../components/ActionButton'
import {
  SeparadorAccessibility,
  GroupAction,
  WrapperButton
} from '../styles/mainPage'
import Button from '../components/Button'
import ListTasksArea from '../components/ListTasksArea'
import { useAppDispatch } from '../redux/rooks'
import { updateVisible, updateScreenEdition } from '../redux/assideSlice'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()

  const handlerOpenAsideToAddTask = () => {
    dispatch(updateVisible(true))
    dispatch(updateScreenEdition(true))
  }

  return (
    <Layout>
      <Header subtitle={'Crie suas tarefas de forma simples e fácil!'} />
      <WrapperButton>
        <Button onClick={handlerOpenAsideToAddTask}>Add tarefa</Button>
      </WrapperButton>
      <GroupAction>
        <ActionButton label="Concluídas" />
        <SeparadorAccessibility decorative orientation="vertical" />
        <ActionButton label="Pendentes" />
        <SeparadorAccessibility decorative orientation="vertical" />
        <ActionButton label="Todas" />
      </GroupAction>
      <ListTasksArea />
    </Layout>
  )
}
export default Home
