import Task from '../Task'
import {
  WrapperScrollArea,
  WrapperViewport,
  WapperScrollbar,
  WapperThumb,
  WapperCorner
} from './styled'

import { useAppDispatch, useAppSelector } from '../../redux/rooks'

const ListTasksArea = () => {
  const taskList = useAppSelector((state) => state.task.value)

  return (
    <WrapperScrollArea>
      <WrapperViewport>
        {/* this is list start */}
        {taskList.map((taskData) => {
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
  )
}
export default ListTasksArea
