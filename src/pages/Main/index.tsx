import React from 'react'

import Basic from '@layouts/Basic'
import { Breadcrumb, Grid, Button, Card } from 'semantic-ui-react'
import { StyledMainContainer, StyledMainGrid } from '@styles/StyledComponents'
import ProductCard from '@components/ProductCard'

const Main: React.FC = () => {
  return (
    <Basic>
      <StyledMainContainer>
        <Breadcrumb className='nav-breadcrumb'>
          <Breadcrumb.Section active>Products</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link>selected value</Breadcrumb.Section>
        </Breadcrumb>
        <StyledMainGrid stackable>
          <Grid.Row columns={2}>
            <Grid.Column width={3}>
              <Button.Group
                vertical
                fluid
                color='red'
                className='products-button-group'
              >
                <Button className='products-button'>Feed</Button>
                <Button className='products-button'>Feed</Button>
                <Button className='products-button'>Feed</Button>
                <Button className='products-button'>Feed</Button>
                <Button className='products-button'>Feed</Button>
              </Button.Group>
            </Grid.Column>
            <Grid.Column width={13}>
              <Card.Group itemsPerRow={2} centered>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </StyledMainGrid>
      </StyledMainContainer>
    </Basic>
  )
}

export default Main
