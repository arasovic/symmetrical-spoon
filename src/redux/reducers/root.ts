import { combineReducers } from 'redux'

import productReducer from '@redux/products/reducer'

const rootReducer = combineReducers({
  product: productReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
