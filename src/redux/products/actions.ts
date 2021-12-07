import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { RootState } from '@redux/reducers/root'

import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
  ProductActionTypes,
  SELECT_PRODUCT
} from '@redux/products/types'
import { Product } from '../../types/product'

export const fetchProducts = (): ProductActionTypes => {
  return { type: FETCH_PRODUCTS, isPending: true, loading: true }
}

export const fetchSuccessProducts = (
  product: Product[]
): ProductActionTypes => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    loading: false,
    isFetched: true,
    allProducts: product
  }
}

export const fetchFailProducts = (): ProductActionTypes => {
  return {
    type: FETCH_PRODUCTS_FAIL,
    allProducts: [],
    isFetched: false,
    loading: false
  }
}

export const selectProdLabel = (product: Product): ProductActionTypes => {
  return {
    type: SELECT_PRODUCT,
    selectedProductLabel: product.label,
    selectedProductData: product.data
  }
}

export const getAllProducts: ActionCreator<
  ThunkAction<Promise<any>, RootState, null, Action>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchProducts())
      const response = await axios.get('/data.json')
      dispatch(fetchSuccessProducts(response.data.products))
      dispatch(selectProdLabel(response.data.products[0]))
    } catch (err) {
      dispatch(fetchFailProducts())
    }
  }
}
