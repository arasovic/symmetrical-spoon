import { combineReducers } from 'redux'

import productReducer from '@redux/product/reducer'
import cartReducer from '@redux/cart/reducers'

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
