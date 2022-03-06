import styled from 'styled-components'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

export const WrapperScrollArea = styled(ScrollAreaPrimitive.Root)`
  width: 100%;
  height: 55%;
  margin-top: 20px;
`
export const WrapperViewport = styled(ScrollAreaPrimitive.Viewport)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const WapperScrollbar = styled(ScrollAreaPrimitive.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 5px;
  opacity: 0.3;
  background-color: ${(props) => props.theme.colors.scrollBar};
  transition: 'background' 160ms ease-out;
  &:hover {
    opacity: 1;
  }
  width: 10px;
  border-radius: 10px;
`
export const WapperThumb = styled(ScrollAreaPrimitive.Thumb)`
  flex: 1;
  position: relative;
  border-radius: 10px;
  border: 5px solid ${(props) => props.theme.colors.thumbScrollBar};
`
export const WapperCorner = styled(ScrollAreaPrimitive.Corner)`
  background-color: orange;
`
