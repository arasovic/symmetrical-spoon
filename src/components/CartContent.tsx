import React from 'react'
import { Button, Grid } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { removeProduct } from '@redux/cart/actions'
import { ProductData } from '../types/product'

const CartContent: React.FC<ProductData> = (props): JSX.Element => {
  const dispatch = useDispatch()
  const { label, price } = props

  const removeFromBasket = (prod: ProductData) => {
    dispatch(removeProduct(prod))
  }

  return (
    <>
      <Grid>
        <Grid.Column width={7}>{label}</Grid.Column>
        <Grid.Column width={6}>{`${price} TL`}</Grid.Column>
        <Grid.Column width={3}>
          <Button
            size='tiny'
            compact
            color='red'
            content='x'
            onClick={() => removeFromBasket(props)}
          />
        </Grid.Column>
      </Grid>
    </>
  )
}

export default CartContent
