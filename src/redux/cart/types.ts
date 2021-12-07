import { ProductData } from '../../types/product'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const CLEAR_PRODUCT = 'CLEAR_PRODUCT'

export interface CartState {
  products: ProductData[]
  totalPrice: number
}

export interface AddProduct {
  type: typeof ADD_PRODUCT
  payload: ProductData
}

export interface RemoveProduct {
  type: typeof REMOVE_PRODUCT
  payload: ProductData
}

export interface ClearProduct {
  type: typeof CLEAR_PRODUCT
}

export type CartActionTypes = AddProduct | RemoveProduct | ClearProduct
