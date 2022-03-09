import { updateVisible } from '../../../redux/assideSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/rooks'
import Icon from '../../Icons/IconButton'
import { FiX } from 'react-icons/fi'
import Header from '../../Header'
import { Wrapper, Content } from './styled'

type showProps = {
  id: string
}
const Show = ({ id }: showProps) => {
  const dispatch = useAppDispatch()

  const handlerCloseAside = () => dispatch(updateVisible(false))

  const listtask = useAppSelector((state) => state.task.value)

  const task = listtask.filter((dataTask) => {
    return dataTask.id == id
  })

  const { titleTask, descriptionTask } = task[0]

  return (
    <Wrapper>
      <Icon onClick={handlerCloseAside} label="fechar">
        <FiX size={32} />
      </Icon>
      <Header title={false} subtitle="Tarefa: " />
      <Content>
        <h2>{titleTask}</h2>
        <p>{descriptionTask}</p>
      </Content>
    </Wrapper>
  )
}

export default Show
