import { updateVisible } from '../../../redux/assideSlice'
import { deleteTask } from '../../../redux/taskSlice'
import { useAppDispatch } from '../../../redux/rooks'
import Button from '../../Button'
import { FiX } from 'react-icons/fi'
import Icon from '../../Icons/IconButton'
import Header from '../../Header'
import { GroupButton, Wrapper, ButtonDelete } from './styled'

type deleteConfirmProps = {
  id: string
}

const DeleteConfirm = ({ id }: deleteConfirmProps) => {
  const dispatch = useAppDispatch()

  const handlerCloseAside = () => dispatch(updateVisible(false))

  const handlerDelete = () => {
    console.log(`deletando..${id}`)
    dispatch(deleteTask({ id: id }))
    handlerCloseAside()
  }

  return (
    <Wrapper>
      <Icon onClick={handlerCloseAside} label="fechar">
        <FiX size={32} />
      </Icon>
      <Header title="Confirme" subtitle="Deseja realmente deletar tarefa?" />
      <GroupButton>
        <ButtonDelete onClick={handlerCloseAside}>Não</ButtonDelete>
        <ButtonDelete onClick={handlerDelete}>Sim</ButtonDelete>
      </GroupButton>
    </Wrapper>
  )
}

export default DeleteConfirm
