import styled from 'styled-components'
import media from 'styled-media-query'

export const ActionButtonMain = styled.button`
  font-size: ${(props) => props.theme.fontSizes.fontSizes1};
  background: none;
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.textLight};

  &:hover {
    color: ${(props) => props.theme.colors.textHighlight};
  }

  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    font-size: ${(props) => props.theme.fontSizes.fontSizes2};

  `}
`
