import {
  ADD_PRODUCT,
  CartActionTypes,
  CartState,
  CLEAR_PRODUCT,
  REMOVE_PRODUCT
} from '@redux/cart/types'

const initialState: CartState = {
  products: [],
  totalPrice: 0
}

const cartReducer = (
  state: CartState = initialState,
  action: CartActionTypes
): CartState => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        totalPrice: +(state.totalPrice + action.payload.price).toFixed(2)
      }
    case REMOVE_PRODUCT: {
      let del = false
      return {
        products: state.products.filter(val => {
          if (val.id === action.payload.id && !del) {
            del = true
            return false
          }
          return true
        }),
        totalPrice: +(state.totalPrice - action.payload.price).toFixed(2)
      }
    }
    case CLEAR_PRODUCT:
      return initialState
    default:
      return state
  }
}

export default cartReducer
