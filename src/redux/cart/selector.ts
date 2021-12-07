import { RootState } from '@redux/reducers/root'
import { CartState } from '@redux/cart/types'

const getCartState = (state: RootState): CartState => state.cart

export default getCartState
