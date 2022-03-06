import { useState } from 'react'
import ActionButton from '../ActionButton'
import Icon from '../Icons/IconButton'
import Toggle from '../Icons/IconToggle'
import { ButtonsToActions, Check, Content, NameTask, Wrapper } from './styled'
import { FiCheckSquare, FiSquare, FiEdit, FiTrash2 } from 'react-icons/fi'

const Task = () => {
  const [pending, setPending] = useState(true)

  const handlerTooglePending = () => {
    setPending(!pending)
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
            <ActionButton label="Nome da task" />
          </NameTask>
        </div>
        <ButtonsToActions>
          <Icon label="Editar">
            <FiEdit size={22} />
          </Icon>
          <Icon label="Excluir">
            <FiTrash2 size={22} />
          </Icon>
        </ButtonsToActions>
      </Content>
    </Wrapper>
  )
}

export default Task
