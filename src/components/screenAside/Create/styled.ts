import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  margin: 20px;
`
export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`
export const Input = styled.input`
  padding: 2px;
  width: 30em;
  height: 44px;
  border: none;
  outline: none;
  border-radius: 9px;
  margin-bottom: 12px;

  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    width: 280px;
  height: 50px;

  `}
  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    font-size: ${(props) => props.theme.fontSizes.fontSizes2};
  `}
  ${media.greaterThan('huge')`
    /* screen width is greater than 1440px (huge) */
    width: 500px;
    height: 79px;
    font-size: ${(props) => props.theme.fontSizes.fontSizes2};
    border-radius: ${(props) => props.theme.radii.radiusDefault};
  `}
`
export const Content = styled.div`
  margin: auto;
`
export const TextAria = styled.textarea`
  padding: 5px;
  border: none;
  width: 30em;
  height: 20em;
  border-radius: 9px;
  outline: none;
  margin-bottom: 12px;
`
