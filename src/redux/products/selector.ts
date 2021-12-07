import { RootState } from '@redux/reducers/root'
import { ProductState } from '@redux/products/types'

const getProductState = (state: RootState): ProductState => state.product

export default getProductState
