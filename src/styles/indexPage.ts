import styled from 'styled-components'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import media from 'styled-media-query'

export const SeparadorAccessibility = styled(SeparatorPrimitive.Root)`
  background-color: ${(props) => props.theme.colors.colorBackgroundUp};
  height: ${(props) => props.theme.fontSizes.fontSizes2};
  width: 100%;
  height: 1px;
  margin: 10px 0;
`
export const WrapperContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const WrapperButton = styled.div`
  text-align: center;
  margin: 20px 0;

  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    text-align: left;
    margin: 10px 0;

  `}
`
