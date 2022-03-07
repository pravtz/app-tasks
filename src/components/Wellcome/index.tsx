import { updateVisible } from '../../redux/assideSlice'
import { useAppDispatch } from '../../redux/rooks'
import Icon from '../Icons/IconButton'
import { FiX } from 'react-icons/fi'
import Header from '../Header'

const Wellcome = () => {
  const dispatch = useAppDispatch()

  const handlerCloseAside = () => dispatch(updateVisible(false))

  return (
    <div>
      <Icon onClick={handlerCloseAside} label="fechar">
        <FiX size={32} />
      </Icon>
      <Header title={false} subtitle="Nome da Tarefa" />
    </div>
  )
}

export default Wellcome
