import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.colorBackgroundUp} 0%,
    ${(props) => props.theme.colors.colorBackgroundDown} 100%
  );
`
type AsideRightProps = {
  isVisible: boolean
}

export const BackgroundImage = styled.div`
  position: absolute;
  right: 0;
  z-index: 0;
  color: green;
  transform: rotate(-10deg);
`
export const Content = styled.main`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
`
export const ContentWrapper = styled.div`
  position: relative;
  padding: 1.2em;
  width: 100vw;
  height: 100vh;
  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    width: 767px;
    margin: auto;

  `}
  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    width: 1169px;
    margin: auto;
  `}
  ${media.greaterThan('huge')`
    /* screen width is greater than 1440px (huge) */
    width: 1439px;
    margin: auto;
  `}
`
export const AsideRight = styled.div<AsideRightProps>`
  opacity: 0.93;
  width: 50vw;
  height: 100vh;
  right: ${(props) => (props.isVisible ? '0' : '-50%')};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.colorBackgroundUp} 0%,
    ${(props) => props.theme.colors.colorBackgroundDown} 100%
  );
  position: absolute;
  z-index: 20;
`
export const AsideWrapper = styled.div``
