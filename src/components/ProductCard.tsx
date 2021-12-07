import React from 'react'
import { Card, Grid, Header, Image, Label, Segment } from 'semantic-ui-react'
import imgBitmap from '@assets/bitmap/Bitmap@2x.png'
import imgBurger from '@assets/burger/Burger@2x.png'
import imgAdd from '@assets/add/36px@2x.png'
import { ProductData } from '../types/product'

const ProductCard: React.FC<ProductData> = ({
  price,
  firstPrice,
  discountLabel,
  label,
  details,
  id
}): JSX.Element => {
  const addToBasket = () => {
    console.log('added')
  }
  return (
    <>
      <Card className='product-card'>
        <Header textAlign='center' className='product-card-header'>
          {label}
        </Header>
        <Segment>
          <Image src={imgBitmap} size='tiny' centered />
        </Segment>
        <Card.Meta
          textAlign='center'
          style={{ marginBottom: 10, lineHeight: 3 }}
        >
          {details?.map(detail => (
            <Label basic className='product-card-details-image'>
              <Image src={imgBurger} alt='details' inline spaced='right' />
              <span style={{ padding: 3, margin: 2 }}>{detail}</span>
            </Label>
          ))}
        </Card.Meta>
        <Card.Content>
          <Grid columns={2}>
            <Grid.Column width={12}>
              <div>
                {firstPrice ? (
                  <div className='product-card-pre-discount-text'>
                    {`${firstPrice} TL`}
                  </div>
                ) : (
                  <div>&nbsp;</div>
                )}
              </div>
              <div className='product-card-price-text'>
                {`${price} TL`}
                {discountLabel ? (
                  <Label
                    color='red'
                    content={discountLabel}
                    className='product-card-discount-rate'
                  />
                ) : (
                  <div />
                )}
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image
                floated='right'
                src={imgAdd}
                onClick={() => addToBasket()}
                className='product-card-add-basket-button'
              />
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    </>
  )
}

export default ProductCard
