import * as Toggle from '@radix-ui/react-toggle'
import styled from 'styled-components'

export const Wrapper = styled(Toggle.Root)`
  color: ${(props) => (props.pressed ? '#FFF' : '#FD7302')};
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  border: none;
  outline: none;
  background: none;
`
