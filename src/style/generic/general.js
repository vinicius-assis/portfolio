import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  body {
  background-color: var(--color-second);
  color: var(--color-fourth);
  font-family: "Montserrat";
  font-size: 10px;
  overflow-x: hidden;
  }

  ul, ol {
  list-style: none;
  }

  #root {
  text-align: center;
  }
`
export default GlobalStyle
