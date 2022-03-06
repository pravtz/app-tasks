import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
a{
  cursor: pointer;
}
  html, body, #__next {
    height: 100%;
  }
  p, a, address{
    font-family: 'Roboto', sans-serif;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Roboto', sans-serif;
}
  /* html {
    font-size: 62.5%
  } */
:root{
  --spacing-betwen-box-align: 2.5rem; //40px
  --spacing-basic: 0.3125rem; //5px
  --font-size-title: 1.375rem; //22px
}
`
export default GlobalStyled
