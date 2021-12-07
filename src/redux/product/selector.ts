import { RootState } from '@redux/reducers/root'
import { ProductState } from '@redux/product/types'

const getProductState = (state: RootState): ProductState => state.product

export default getProductState
