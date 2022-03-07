import styled from 'styled-components'
import media from 'styled-media-query'

type subtitleProps = {
  isVisible: boolean
}

export const Wrapper = styled.div``
export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.fontSizes4};
  color: ${(props) => props.theme.colors.textPrimary};
  text-align: center;

  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    font-size: ${(props) => props.theme.fontSizes.fontSizes6};
    text-align: left;
  `}
  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    font-size: ${(props) => props.theme.fontSizes.fontSizes7};
  `}
`
export const Subtitle = styled.h2<subtitleProps>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  font-size: ${(props) => props.theme.fontSizes.fontSizes2};
  color: ${(props) => props.theme.colors.textLight};
  text-align: center;
  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    font-size: ${(props) => props.theme.fontSizes.fontSizes3};
    text-align: left;
  `}
`
