import styled from 'styled-components'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import media from 'styled-media-query'

export const GroupAction = styled.div`
  display: flex;
  padding: 5px 0;
  align-items: center;
`

export const SeparadorAccessibility = styled(SeparatorPrimitive.Root)`
  background-color: ${(props) => props.theme.colors.textLight};
  height: ${(props) => props.theme.fontSizes.fontSizes2};
  width: 1px;
  margin: 0 10px;
`
export const WrapperContent = styled.div``

export const WrapperButton = styled.div`
  text-align: center;
  margin: 20px 0;

  ${media.greaterThan('medium')`
    /* screen width is greater than 768px (medium) */
    text-align: left;
    margin: 10px 0;

  `}
`
