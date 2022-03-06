import styled from 'styled-components'

export const ButtonIcon = styled.button`
  background: none;
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.textLight};
  margin-right: 15px;

  &:hover {
    color: ${(props) => props.theme.colors.textHighlight};
  }
`
