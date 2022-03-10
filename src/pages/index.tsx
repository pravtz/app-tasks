import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import Button from '../components/Button'
import {
  SeparadorAccessibility,
  WrapperButton,
  WrapperContent
} from '../styles/indexPage'
import InfoNumberTasks from '../components/InfoNumberTasks'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>App Tasks</title>
        <meta
          name="description"
          content="Ferramenta para gerenciar suas tarefas"
        />
      </Head>

      <Layout>
        <WrapperContent>
          <div>
            <Header title={'App Task'} />
            <WrapperButton>
              <Button onClick={() => router.push('/main')}>Entrar</Button>
            </WrapperButton>
          </div>
          <div>
            <SeparadorAccessibility decorative orientation="horizontal" />
            <InfoNumberTasks />
          </div>
        </WrapperContent>
      </Layout>
    </>
  )
}

export default Home
