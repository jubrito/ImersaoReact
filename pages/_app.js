import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from "../db.json";

const GlobalStyle = createGlobalStyle`
  // Reset
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato, sans-serif';
    // Branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle /> {/* GlobalStyle dentro do theme para que o db json seja lido em todos os componentes*/}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
