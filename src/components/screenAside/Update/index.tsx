import { updateVisible } from '../../../redux/assideSlice'
import { updateTask } from '../../../redux/taskSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/rooks'
import Icon from '../../Icons/IconButton'
import { FiX } from 'react-icons/fi'
import { Input, Wrapper, WrapperForm, Content, TextAria } from './styled'
import Button from '../../Button'
import Header from '../../Header'
import { useCallback, useRef } from 'react'

type createProps = {
  id?: string
}

const Create = ({ id }: createProps) => {
  const inputTitle = useRef<HTMLInputElement>(null)
  const inputDescription = useRef<HTMLTextAreaElement>(null)

  const listTask = useAppSelector((state) => state.task.value)
  const task = listTask.filter((dataTask) => {
    return dataTask.id == id
  })
  const { titleTask, descriptionTask } = task[0]

  const dispatch = useAppDispatch()

  const handlerCloseAside = () => dispatch(updateVisible(false))

  const handlerUpdateTask = useCallback(() => {
    dispatch(
      updateTask({
        id: id,
        titleTask: inputTitle.current?.value,
        descriptionTask: inputDescription.current?.value
      })
    )

    handlerCloseAside()
  }, [])

  return (
    <Wrapper>
      <Icon onClick={handlerCloseAside} label="fechar">
        <FiX size={32} />
      </Icon>
      <Content>
        <Header title={false} subtitle="Atualize sua tarefa" />
        <WrapperForm>
          <Input ref={inputTitle} defaultValue={titleTask} autoFocus />
          <TextAria ref={inputDescription} defaultValue={descriptionTask} />
          <Button onClick={handlerUpdateTask}>Atualizar Tarefa</Button>
        </WrapperForm>
      </Content>
    </Wrapper>
  )
}
export default Create
