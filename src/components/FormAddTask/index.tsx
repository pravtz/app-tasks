import { updateVisible } from '../../redux/assideSlice'
import { useAppDispatch } from '../../redux/rooks'
import Icon from '../Icons/IconButton'
import { FiX } from 'react-icons/fi'

const FormAddTask = () => {
  const dispatch = useAppDispatch()

  const handlerCloseAside = () => dispatch(updateVisible(false))

  return (
    <div>
      <Icon onClick={handlerCloseAside} label="fechar">
        <FiX size={32} />
      </Icon>

      <h2>This is form add task</h2>
    </div>
  )
}
export default FormAddTask
