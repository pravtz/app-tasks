import styled from 'styled-components'

export const Wrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.colorBackgroundUp};
  border-bottom: 1px solid ${(props) => props.theme.colors.colorBackgroundUp};
  padding: 10px;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
`
export const Check = styled.div`
  margin-right: 10px;
`
export const NameTask = styled.div``
export const ButtonsToActions = styled.div``
