import styled from 'styled-components'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import Toggle from '../Icons/IconToggle'

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
export const SeparadorAccessibility = styled(SeparatorPrimitive.Root)`
  background-color: ${(props) => props.theme.colors.textLight};
  height: ${(props) => props.theme.fontSizes.fontSizes2};
  width: 1px;
  margin: 0 10px;
`
export const ToggleFilter = styled(Toggle)`
  font-size: ${(props) => props.theme.fontSizes.fontSizes2};
`
export const GroupAction = styled.div`
  display: flex;
  padding: 5px 0;
  align-items: center;
`
