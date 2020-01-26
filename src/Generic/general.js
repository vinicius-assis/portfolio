import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 body {
  background-color: #eee;
  color: #707070;
  font-family: "Montserrat";
  font-size: 10px;
 }
`
export default GlobalStyle
