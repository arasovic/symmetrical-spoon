import React from 'react'
import { Card, Grid, Header, Image, Label, Segment } from 'semantic-ui-react'
import imgBitmap from '@assets/bitmap/Bitmap@2x.png'
import imgBurger from '@assets/burger/Burger@2x.png'
import imgAdd from '@assets/add/36px@2x.png'

const ProductCard: React.FC = props => {
  const addToBasket = () => {
    console.log('added')
  }
  return (
    <>
      <Card className='product-card'>
        <Header textAlign='center' className='product-card-header'>
          selected header
        </Header>
        <Segment>
          <Image src={imgBitmap} size='tiny' centered />
        </Segment>
        <Card.Meta textAlign='center' style={{ marginBottom: 10 }}>
          <Label basic className='product-card-details-image'>
            <Image src={imgBurger} alt='details' inline spaced='right' />
            <span style={{ paddingLeft: 3 }}>detail text</span>
          </Label>
        </Card.Meta>
        <Card.Content>
          <Grid columns={2}>
            <Grid.Column width={12}>
              <div className='product-card-pre-discount-text'>14,99 TL</div>
              <div className='product-card-price-text'>
                9,99 TL
                <Label
                  color='red'
                  content='%5 indirim'
                  className='product-card-discount-rate'
                />
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
