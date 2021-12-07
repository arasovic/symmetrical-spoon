import { Product, ProductData } from '../../types/product'

export interface ProductState {
  loading: boolean
  allProducts: Product[]
  isFetched: boolean
  isPending?: boolean
  error?: boolean
  selectedProductLabel: string
  selectedProductData: ProductData[]
}

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL'

export const SELECT_PRODUCT = 'SELECT_PRODUCT'

export interface FetchRequest {
  type: typeof FETCH_PRODUCTS
  loading: boolean
  isPending: boolean
}

export interface FetchSuccess {
  type: typeof FETCH_PRODUCTS_SUCCESS
  loading: boolean
  isFetched: boolean
  allProducts: Product[]
}

export interface FetchFail {
  type: typeof FETCH_PRODUCTS_FAIL
  loading: boolean
  isFetched: boolean
  allProducts: Product[]
}

export interface SelectProduct {
  type: typeof SELECT_PRODUCT
  selectedProductData: ProductData[]
  selectedProductLabel: string
}

export type ProductActionTypes =
  | FetchRequest
  | FetchFail
  | FetchSuccess
  | SelectProduct
