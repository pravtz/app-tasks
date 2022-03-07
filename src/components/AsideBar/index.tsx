import { Wrapper } from './styled'
import { useAppDispatch, useAppSelector } from '../../redux/rooks'
import FormAddTask from '../FormAddTask'
import Wellcome from '../Wellcome'
import { updateVisible } from '../../redux/assideSlice'

const AsideBar = () => {
  const isEditing = useAppSelector((state) => state.aside.valueAside.isEdition)

  return <Wrapper>{isEditing ? <FormAddTask /> : <Wellcome />}</Wrapper>
}

export default AsideBar
