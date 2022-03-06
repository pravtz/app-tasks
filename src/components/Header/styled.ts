import styled from 'styled-components'
import media from 'styled-media-query'

type subtitleProps = {
  isVisible: boolean
}

export const Wrapper = styled.div`
  //this is test for breackpoint
  ${media.greaterThan('small')`
    /* screen width is greater than 768px (medium) */
    h1:after{
      content: ' - small';
      font-size: 14px;
    }
  `}
  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    h1:after{
      content: ' - medium';
      font-size: 14px;
    }
  `}
  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    h1:after{
      content: ' - large';
      font-size: 14px;
    }
  `}
  ${media.greaterThan('huge')`
    /* screen width is greater than 1440px (huge) */
    h1:after{
      content: ' - huge';
      font-size: 14px;
    }
  `}
`
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
