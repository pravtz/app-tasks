import Task from '../Task'
import {
  WrapperScrollArea,
  WrapperViewport,
  WapperScrollbar,
  WapperThumb,
  WapperCorner,
  GroupAction,
  ToggleFilter,
  SeparadorAccessibility
} from './styled'
import { FiCheckSquare, FiSquare } from 'react-icons/fi'
import { useAppDispatch, useAppSelector } from '../../redux/rooks'
import { useMemo, useState } from 'react'

type resultTask = {
  id: string
  titleTask: string
  isPending: boolean
  descriptionTask: string
}

const ListTasksArea = () => {
  const [isActiveFilterPending, setIsActiveFilterPending] = useState(true)
  const [isActiveFilterConcluid, setIsActiveFilterConcluid] = useState(false)

  const taskList: resultTask[] = useAppSelector((state) => state.task.value)
  let resultTaslList: resultTask[] = []

  if (isActiveFilterPending === true && isActiveFilterConcluid === true) {
    resultTaslList = taskList
  }
  if (isActiveFilterPending && isActiveFilterConcluid === false) {
    resultTaslList = taskList.filter((taskPending) => {
      return taskPending.isPending === true
    })
  }
  if (isActiveFilterConcluid && isActiveFilterPending === false) {
    resultTaslList = taskList.filter((taskPending) => {
      return taskPending.isPending === false
    })
  }

  const handleActiveFilterPending = () => {
    return setIsActiveFilterPending(!isActiveFilterPending)
  }
  const handleActiveFilterConcluid = () => {
    return setIsActiveFilterConcluid(!isActiveFilterConcluid)
  }
  console.log(`isActiveFilterPending = ${isActiveFilterPending}`)
  console.log(`isActiveFilterConcluid = ${isActiveFilterConcluid}`)

  return (
    <>
      <GroupAction>
        <ToggleFilter
          pressed={isActiveFilterPending}
          onPressedChange={handleActiveFilterPending}
          label="Pendentes"
        >
          <FiSquare size={22} />
        </ToggleFilter>
        <SeparadorAccessibility decorative orientation="vertical" />
        <ToggleFilter
          pressed={isActiveFilterConcluid}
          onPressedChange={handleActiveFilterConcluid}
          label="Concluídos"
        >
          <FiCheckSquare size={22} />
        </ToggleFilter>
      </GroupAction>
      <WrapperScrollArea>
        <WrapperViewport>
          {/* this is list start */}
          {resultTaslList.map((taskData) => {
            return (
              <Task
                key={taskData.id}
                id={taskData.id}
                isPending={taskData.isPending}
                titleTask={taskData.titleTask}
              />
            )
          })}

          {/* this is list end */}
        </WrapperViewport>
        <WapperScrollbar orientation="vertical">
          <WapperThumb />
        </WapperScrollbar>
        <WapperCorner />
      </WrapperScrollArea>
    </>
  )
}
export default ListTasksArea
