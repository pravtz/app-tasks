import styled from 'styled-components'
import media from 'styled-media-query'

export const ButtonMain = styled.button`
  width: 188px;
  height: 44px;
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.fontSizes.fontSizes1};
  border-radius: ${(props) => props.theme.radii.radiusDefault};
  background-color: ${(props) => props.theme.colors.buttonBackground};
  color: ${(props) => props.theme.colors.textLight};

  &:hover {
    color: ${(props) => props.theme.colors.textHighlight};
  }

  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    width: 212px;
  height: 50px;

  `}
  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    font-size: ${(props) => props.theme.fontSizes.fontSizes2};
  `}
  ${media.greaterThan('huge')`
    /* screen width is greater than 1440px (huge) */
    width: 331px;
    height: 79px;
    font-size: ${(props) => props.theme.fontSizes.fontSizes3};
    border-radius: ${(props) => props.theme.radii.radiusDefault};
  `}
`
