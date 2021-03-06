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

  // we need override --semantic ui css-- so there are !important everywhere

  :not(.icon) { // semantic icons need default font
    font-family: 'HelveticaNeue', serif !important;
  }

  .navbar-item {
    @media only screen and (max-width: 991px) {
      display: flex !important;
      justify-content: center !important;
      flex-direction: column !important;
    }
  }

  .shadow {
    -moz-box-shadow: 0 0 11px -2px #666;
  !important;
    -webkit-box-shadow: 0 0 11px -2px #666;
  !important;
    box-shadow: 0 0 11px -2px #666;
  !important;
    border-radius: 19px 19px;
  !important;
    padding: 10px !important;
  }

  .nav-breadcrumb {
    margin-top: 15px !important;
  }

  .products-button-group .products-button:not(:last-child) {
    margin-bottom: 5px !important;
  }

  .product-card-header {
    margin-top: 1rem !important;
    margin-bottom: 0 !important;
  }

  .product-card {
    padding: 5px !important;
  }

  .ui.label.product-card-details-image > img {
    height: 1.5em !important;
  }

  .ui.label.product-card-details-image > span {
    color: #918b8b !important;
  }

  .product-card-pre-discount-text {
    text-decoration: line-through !important;
    text-decoration-color: gray !important;
    color: #8d8484 !important;
  }

  .product-card-price-text {
    color: red !important;
    font-weight: bold !important;
    font-size: 1.4rem;
  }

  .product-card-discount-rate {
    margin-left: .5rem !important;
  }

  .product-card-add-basket-button {
    margin-left: auto !important;
    cursor: pointer !important;
    width: 3.2rem !important;
    min-width: 2rem !important;
  }

  .product-card-add-basket-button:hover {
    filter: grayscale(15%) !important;
  }

  .footer-social-buttons {
    width: 5.5em !important;
  }

  .footer-links > a {
    padding: 2px 0 3px 0;
  }

  .bold {
    font-weight: bold !important;
  }

  hr {
    margin: -10px 0 10px 0;
    width: 100%;
    height: 2px;
    background-color: rgba(34, 36, 38, .15);
    border: 0;
  }

  hr:after {
    content: '';
    display: block;
    border-bottom: 2px solid #db2828;
    max-width: 35%;
  }

  a {
    display: block;
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: black;
  }

  .footer-arrow {
    width: 15px !important;
    margin-left: 3px !important;
  }

  .footer-image {
    width: 60px !important;
  }

`

export default GlobalStyles
