import * as Toggle from '@radix-ui/react-toggle'
import styled from 'styled-components'

export const Wrapper = styled(Toggle.Root)`
  color: ${(props) => (props.pressed ? '#FD7302' : '#FFF')};
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  border: none;
  outline: none;
  background: none;
`
