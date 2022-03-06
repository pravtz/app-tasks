import Task from '../Task'
import {
  WrapperScrollArea,
  WrapperViewport,
  WapperScrollbar,
  WapperThumb,
  WapperCorner
} from './styled'

const ListTasksArea = () => {
  return (
    <WrapperScrollArea>
      <WrapperViewport>
        {/* this is list start */}
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
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
