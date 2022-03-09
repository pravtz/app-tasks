import { Wrapper } from './styled'
import { useAppSelector } from '../../redux/rooks'
import DeleteConfirm from '../screenAside/Delete'
import ErrorScreen from '../screenAside/ScreenError'
import Show from '../screenAside/Show'
import Create from '../screenAside/Create'
import Info from '../screenAside/Info'
import Update from '../screenAside/Update'

const AsideBar = () => {
  const { screenAside, idEdition } = useAppSelector(
    (state) => state.aside.valueAside
  )

  switch (screenAside) {
    case 'delete':
      return (
        <Wrapper>
          {idEdition ? <DeleteConfirm id={idEdition} /> : <ErrorScreen />}
        </Wrapper>
      )

    case 'create':
      return (
        <Wrapper>
          <Create />
        </Wrapper>
      )

    case 'update':
      return (
        <Wrapper>
          {idEdition ? <Update id={idEdition} /> : <ErrorScreen />}
        </Wrapper>
      )

    case 'information':
      return (
        <Wrapper>
          <Info />
        </Wrapper>
      )

    case 'show':
      return (
        <Wrapper>
          {idEdition ? <Show id={idEdition} /> : <ErrorScreen />}
        </Wrapper>
      )

    default:
      return (
        <Wrapper>
          <Info />
        </Wrapper>
      )
  }
}

export default AsideBar
