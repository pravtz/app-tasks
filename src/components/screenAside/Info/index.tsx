import {
  InfoNunberTaskContainer,
  Wrapper,
  WrapperInfoNumberTaskContainer
} from './styled'
import { FiX } from 'react-icons/fi'
import Icon from '../../Icons/IconButton'
import { useAppDispatch } from '../../../redux/rooks'
import { updateVisible, screenAndVisible } from '../../../redux/assideSlice'

const Info = () => {
  const dispatch = useAppDispatch()
  const handlerCloseAside = () => {
    dispatch(updateVisible(false))
    dispatch(
      screenAndVisible({
        asideIsVisible: false,
        screenAside: null
      })
    )
  }
  return (
    <Wrapper>
      <Icon onClick={handlerCloseAside} label="fechar">
        <FiX size={32} />
      </Icon>
      <WrapperInfoNumberTaskContainer>
        <InfoNunberTaskContainer />
      </WrapperInfoNumberTaskContainer>
    </Wrapper>
  )
}

export default Info
