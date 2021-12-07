import {
  ADD_PRODUCT,
  CartActionTypes,
  CLEAR_PRODUCT,
  REMOVE_PRODUCT
} from '@redux/cart/types'
import { ProductData } from '../../types/product'

export function addProduct(products: ProductData): CartActionTypes {
  return {
    type: ADD_PRODUCT,
    payload: products
  }
}

export function removeProduct(products: ProductData): CartActionTypes {
  return {
    type: REMOVE_PRODUCT,
    payload: products
  }
}
export function clearProduct(): CartActionTypes {
  return {
    type: CLEAR_PRODUCT
  }
}
