import { useCallback, useEffect, useState } from 'react'
import ActionButton from '../ActionButton'
import Icon from '../Icons/IconButton'
import Toggle from '../Icons/IconToggle'
import { ButtonsToActions, Check, Content, NameTask, Wrapper } from './styled'
import { FiCheckSquare, FiSquare, FiEdit, FiTrash2 } from 'react-icons/fi'
import { useAppDispatch } from '../../redux/rooks'
import { deleteTask, checkTask } from '../../redux/taskSlice'
import { updateVisible, updateScreenEdition } from '../../redux/assideSlice'

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

  console.log(`atualizando..${id}`)

  const handlerTooglePending = () => {
    setPending(!pending)
    //dispatch(checkTask({ id: id }))
  }
  const handlerDelete = () => {
    console.log(`deletando..${id}`)
    dispatch(deleteTask({ id: id }))
  }
  const handlerEditando = () => {
    dispatch(updateVisible(true))
    dispatch(updateScreenEdition(true))
  }
  const handlerOpenAside = () => {
    dispatch(updateVisible(true))
    dispatch(updateScreenEdition(false))
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
            <ActionButton onClick={handlerOpenAside} label={titleTask} />
          </NameTask>
        </div>
        <ButtonsToActions>
          <Icon onClick={handlerEditando} label="Editar">
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
