import { createGlobalStyle } from 'styled-components'

import './font.css'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    //box-sizing: border-box;
    //margin: 0;
    //padding: 0;
    
  }

  :root {
    
  }

  body {
    
  }
  
  :not(.icon){ // semantic icons need default font
    font-family: 'HelveticaNeue', serif !important;
  }
  
  .navbarItem{
    @media only screen and (max-width: 767px) {
      display: flex !important;
      justify-content: center !important;
    }
  }
  
  .shadow{
    -moz-box-shadow: 0 0 11px -2px #666; !important;
    -webkit-box-shadow: 0 0 11px -2px #666; !important;
    box-shadow: 0 0 11px -2px #666; !important;
    border-radius: 19px 19px; !important;
    padding: 10px !important;
  }
  
`

export default GlobalStyles
