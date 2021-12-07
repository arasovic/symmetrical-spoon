import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
  ProductActionTypes,
  ProductState,
  SELECT_PRODUCT
} from '@redux/products/types'

const initialState: ProductState = {
  allProducts: [],
  error: false,
  isPending: false,
  isFetched: false,
  loading: false,
  selectedProductData: [],
  selectedProductLabel: ''
}

const productReducer = (
  state: ProductState = initialState,
  action: ProductActionTypes
): ProductState => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isPending: action.isPending,
        loading: action.loading
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        allProducts: action.allProducts,
        isFetched: action.isFetched
      }
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        isFetched: action.isFetched,
        loading: action.loading,
        allProducts: action.allProducts
      }
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProductData: action.selectedProductData,
        selectedProductLabel: action.selectedProductLabel
      }
    default:
      return state
  }
}

export default productReducer
