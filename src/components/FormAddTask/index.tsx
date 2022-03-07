import { updateVisible } from '../../redux/assideSlice'
import { addTask } from '../../redux/taskSlice'
import { useAppDispatch } from '../../redux/rooks'
import Icon from '../Icons/IconButton'
import { FiX } from 'react-icons/fi'
import { Input, Wrapper, WrapperForm, Content } from './styled'
import Button from '../Button'
import Header from '../Header'
import { useState } from 'react'

const FormAddTask = () => {
  const [nameTask, setNameTask] = useState('')

  const dispatch = useAppDispatch()

  const handlerCloseAside = () => dispatch(updateVisible(false))

  const handlerAddTask = () => {
    dispatch(
      addTask({
        id: Math.random().toString(36).substr(2),
        titleTask: nameTask,
        isPending: true
      })
    )
    handlerCloseAside()
  }

  return (
    <Wrapper>
      <Icon onClick={handlerCloseAside} label="fechar">
        <FiX size={32} />
      </Icon>
      <Content>
        <Header title={false} subtitle="Adicione sua tarefa" />
        <WrapperForm>
          <Input
            placeholder="Digite sua tarefa!"
            onChange={(event) => {
              setNameTask(event.target.value)
            }}
          />
          <Button onClick={handlerAddTask}>Salvar Tarefa</Button>
        </WrapperForm>
      </Content>
    </Wrapper>
  )
}
export default FormAddTask
