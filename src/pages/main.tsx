import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Header from '../components/Header'
import {
  WrapperButton,
  LogoutButton,
  WrapperLogoutButton
} from '../styles/mainPage'
import Button from '../components/Button'
import ListTasksArea from '../components/ListTasksArea'
import { useAppDispatch } from '../redux/rooks'
import { screen } from '../redux/assideSlice'
import { FiLogOut } from 'react-icons/fi'
import router from 'next/router'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()

  const handlerOpenAsideToAddTask = () => {
    dispatch(
      screen({
        screenAside: 'create',
        asideIsVisible: true
      })
    )
  }

  return (
    <Layout>
      <LogoutButton onClick={() => router.push('/')} label="Sair">
        <WrapperLogoutButton>
          <FiLogOut /> <span>Sair</span>
        </WrapperLogoutButton>
      </LogoutButton>
      <Header subtitle={'Crie suas tarefas de forma simples e fácil!'} />
      <WrapperButton>
        <Button onClick={handlerOpenAsideToAddTask}>Add tarefa</Button>
      </WrapperButton>
      <ListTasksArea />
    </Layout>
  )
}
export default Home
