import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import GlobalStyled from '../styles/global'
import defaultTheme from '../styles/theme/default'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
