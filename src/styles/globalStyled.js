import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  h1 {
    color: #9963BA;
  }
`

export default GlobalStyle;


// const GlobalStyle = createGlobalStyle`
//   body {
//     color: ${props => (props.whiteColor ? 'white' : 'black')};
//     font-family: ${props => props.theme.fontFamily};
//   }
// `

// color: #663399;