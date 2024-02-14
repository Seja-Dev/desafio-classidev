import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
    }

    body {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
    }
`

function App ({ Component, pageProps }) {
  return (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}

export default App