import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin-left: 12px;
  .icon-close {
    text-align: left;
    margin-left: 12px;
    margin-bottom: 24px;
  }
`

export const Content = styled.div`
  margin: 18px;

  h2 {
    color: ${(props) => props.theme.colors.textPrimary};
  }
  p {
    color: ${(props) => props.theme.colors.textLight};
    margin-top: 12px;
  }
`
