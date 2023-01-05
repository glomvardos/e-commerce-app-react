import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: #ffffff;
    --primary: #14213d;
    --secondary: #fca311;
    --border: #e5e5e5;
    --primary-text: #000000;
    --secondary-text: #ffffff;
    --error: #FF2E63;
    
    --box-shadow:  rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    
    --transition: all 0.2s ease-in-out;
  }
  :where(html, body, #root) {
    height: 100%;
  }
  
  body {
    font-family: 'Manrope', sans-serif;
    color: var(--primary-text);
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
`
export default GlobalStyles
