import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --dark: #000;
    --light: #fff;
    --bg-color: #ffffff;
    --primary: #14213d;
    --secondary: #fca311;
    --border: #e5e5e5;
    --primary-text: #000000;
    --secondary-text: #ffffff;
    --error: #FF2E63;
    --active-nav-link: rgba(0, 0, 0, 0.4);
    
    --box-shadow:  rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    
    --border-radius: 0.75rem;
    
    --transition: all 0.2s ease-in-out;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :where(html, body, #root) {
    height: 100%;
  }
  
  body {
    font-family: 'Manrope', sans-serif;
    color: var(--primary-text);
  }
  
  a {
    text-decoration: none;
    color: var(--secondary-text)
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 40px var(--dark) inset !important;
    -webkit-text-fill-color: var(--secondary-text) !important;
  }
`
export default GlobalStyles
