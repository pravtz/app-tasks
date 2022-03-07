import { updateVisible } from '../../redux/assideSlice'
import { useAppDispatch } from '../../redux/rooks'
import Icon from '../Icons/IconButton'
import { FiX } from 'react-icons/fi'

const Wellcome = () => {
  const dispatch = useAppDispatch()

  const handlerCloseAside = () => dispatch(updateVisible(false))

  return (
    <div>
      <Icon onClick={handlerCloseAside} label="fechar">
        <FiX size={32} />
      </Icon>
      <h1>This will be the welcome screen</h1>
    </div>
  )
}

export default Wellcome
