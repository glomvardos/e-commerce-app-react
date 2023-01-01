import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: #393E46;
    --primary: #222831;
    --secondary: #00ADB5;
    --primary-text: #EEEEEE;
  }
  :where(html, body, #root) {
    height: 100%;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
`
export default GlobalStyles
