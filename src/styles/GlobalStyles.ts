import { createGlobalStyle } from 'styled-components'

import './font.css'
// we need override semantic ui css so everywhere !important
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
  
  .navbar-item{
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
  
  .nav-breadcrumb{
    margin-top: 15px !important;
  }
  
  .products-button-group .products-button:not(:last-child){
    margin-bottom: 5px !important;
  }
  
  .product-card-header{
    margin-top: 1rem !important;
    margin-bottom: 0 !important;
  }
  
  .product-card{
    padding: 5px !important;
  }

  .ui.label.product-card-details-image>img{
    height: 1.5em !important;
  }
  
  .product-card-pre-discount-text{
    text-decoration: line-through !important;
  }
  
  .product-card-price-text{
    color: red !important;
    font-weight: bold !important;
    font-size: 1.4rem;
  }
  
  .product-card-discount-rate{
    margin-left: .5rem !important;
  }
  
  .product-card-add-basket-button{
    margin-left: auto !important;
    cursor: pointer !important;
    width: 3.2rem !important;
  }
  
`

export default GlobalStyles
