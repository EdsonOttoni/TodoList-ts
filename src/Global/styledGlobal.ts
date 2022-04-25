import { createGlobalStyle } from 'styled-components'

const BACKGROUND_COLOR = '#17181F'
const COLOR = '#797A81'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #__next {
    width: 100%;
    height: 100%;
    text-size-adjust: 100%;
  }
  body {
    background-color: ${BACKGROUND_COLOR};
    color:  ${COLOR};
    text-rendering: optimizeLegibility;
  }
  html, body, input, textarea, button {
    font-size: 14px;
    font-weight: 400;
    font-family: sans-serif;
  }
  input, textarea {
    color: #c1c1c1;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`