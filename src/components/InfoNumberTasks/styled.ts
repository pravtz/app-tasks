import styled from 'styled-components'
import media from 'styled-media-query'

type contentProps = {
  isVisible?: boolean
}

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`
export const MensageWrapper = styled.div`
  h3 {
    font-size: ${(props) => props.theme.fontSizes.fontSizes1};
    color: ${(props) => props.theme.colors.textLight};
  }
  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    font-size: ${(props) => props.theme.fontSizes.fontSizes2};

  `}
`
export const Content = styled.div<contentProps>`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  margin-left: 45px;
  margin-top: 18px;
  font-size: ${(props) => props.theme.fontSizes.fontSizes1};
  color: ${(props) => props.theme.colors.textLight};

  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    font-size: ${(props) => props.theme.fontSizes.fontSizes2};

  `}

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`
export const IconPendent = styled.span`
  color: ${(props) => props.theme.colors.textHighlight};
`
export const IconCompleted = styled.span`
  color: ${(props) => props.theme.colors.buttonBackground};
`
