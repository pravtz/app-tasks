import { useEffect, useState } from 'react'
import ActionButton from '../ActionButton'
import Icon from '../Icons/IconButton'
import Toggle from '../Icons/IconToggle'
import { ButtonsToActions, Check, Content, NameTask, Wrapper } from './styled'
import { FiCheckSquare, FiSquare, FiEdit, FiTrash2 } from 'react-icons/fi'
import { useAppDispatch } from '../../redux/rooks'
import { checkTask } from '../../redux/taskSlice'
import { screen } from '../../redux/assideSlice'

type taskprops = {
  id: number
  titleTask: string
  isPending: boolean
}

const Task = ({ id, titleTask, isPending }: taskprops) => {
  const [pending, setPending] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setPending(isPending)
  }, [id])

  //console.log(`atualizando..${id}`)

  const handlerTooglePending = () => {
    setPending(!pending)
    dispatch(checkTask({ id: id, isPending: pending }))
  }
  const handlerDelete = () => {
    console.log(`deletando..${id}`)
    dispatch(
      screen({
        idEdition: id,
        screenAside: 'delete',
        asideIsVisible: true
      })
    )
  }
  const handlerUpdate = () => {
    dispatch(
      screen({
        idEdition: id,
        screenAside: 'update',
        asideIsVisible: true
      })
    )
  }
  const handlerShow = () => {
    dispatch(
      screen({
        idEdition: id,
        screenAside: 'show',
        asideIsVisible: true
      })
    )
  }

  return (
    <Wrapper>
      <Content>
        <div>
          <Check>
            <Toggle pressed={pending} onPressedChange={handlerTooglePending}>
              {pending ? <FiSquare size={22} /> : <FiCheckSquare size={22} />}
            </Toggle>
          </Check>
          <NameTask>
            <ActionButton onClick={handlerShow} label={titleTask} />
          </NameTask>
        </div>
        <ButtonsToActions>
          <Icon onClick={handlerUpdate} label="Editar">
            <FiEdit size={22} />
          </Icon>
          <Icon onClick={handlerDelete} label="Excluir">
            <FiTrash2 size={22} />
          </Icon>
        </ButtonsToActions>
      </Content>
    </Wrapper>
  )
}

export default Task
