import styled from 'styled-components'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import media from 'styled-media-query'
import Toggle from '../components/Icons/IconToggle'
import IconButton from '../components/Icons/IconButton'

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
export const ToggleFilter = styled(Toggle)`
  font-size: ${(props) => props.theme.fontSizes.fontSizes2};
`
export const LogoutButton = styled(IconButton)``
export const WrapperLogoutButton = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.textPrimary};
  &:hover {
    color: ${(props) => props.theme.colors.textHighlight};
  }
`
export const InformationButton = styled(IconButton)`
  margin-right: 18px;
  color: ${(props) => props.theme.colors.textPrimary};
`

export const WrapperTool = styled.div`
  width: 100%;
  text-align: right;
`
