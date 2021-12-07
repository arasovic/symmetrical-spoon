import React, { useEffect, useMemo } from 'react'

import Basic from '@layouts/Basic'
import { Breadcrumb, Grid, Button, Card } from 'semantic-ui-react'
import { StyledMainContainer, StyledMainGrid } from '@styles/StyledComponents'
import ProductCard from '@components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import getProductState from '@redux/product/selector'
import { getAllProducts, selectProdLabel } from '@redux/product/actions'
import { Product } from 'types/product'

const Main: React.FC = () => {
  const productState = useSelector(getProductState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const cardRenderer = useMemo(() => {
    return (
      <>
        {productState?.selectedProductData.map(data => {
          return <ProductCard {...data} key={data.id} />
        })}
      </>
    )
  }, [productState.selectedProductData])

  const onSelectProduct = (prod: Product) => {
    dispatch(selectProdLabel(prod))
  }

  return (
    <Basic>
      <StyledMainContainer>
        <Breadcrumb className='nav-breadcrumb'>
          <Breadcrumb.Section active>Products</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section link>
            {productState.selectedProductLabel}
          </Breadcrumb.Section>
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
                {productState?.allProducts.map(prod => {
                  return (
                    <Button
                      className='products-button'
                      key={`${prod.label} ${Math.random().toString()}`} // for console error
                      onClick={() => onSelectProduct(prod)}
                    >
                      {prod.label}
                    </Button>
                  )
                })}
              </Button.Group>
            </Grid.Column>
            <Grid.Column width={13}>
              <Card.Group itemsPerRow={2} centered>
                {cardRenderer}
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </StyledMainGrid>
      </StyledMainContainer>
    </Basic>
  )
}

export default Main
