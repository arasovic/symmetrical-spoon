import React, { useState } from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Popup
} from 'semantic-ui-react'
import imgBitmap from '@assets/bitmap/Bitmap@2x.png'
import imgBasket from '@assets/basket/Basket.png'
import imgBell from '@assets/bell/bell.png'
import imgSettings from '@assets/settings/settings.png'
import imgNotification from '@assets/notification/Notification.png'
import {
  StyledNavImageBitMap,
  StyledNavInput,
  StyledSidebarButton
} from '@styles/StyledComponents'
import SidebarMenu from '@components/SidebarMenu'
import { useDispatch, useSelector } from 'react-redux'
import getCartState from '@redux/cart/selector'
import CartContent from '@components/CartContent'
import { clearProduct } from '@redux/cart/actions'

const NavbarLogoItem: React.FC = () => {
  return (
    <Menu.Item as='a' header>
      <StyledNavImageBitMap src={imgBitmap} ui={false} />
    </Menu.Item>
  )
}

const NavbarOtherItems: React.FC = () => {
  const cartState = useSelector(getCartState)
  const dispatch = useDispatch()

  return (
    <>
      <Menu.Item as='a' className='navbar-item'>
        <Image src={imgNotification} className='shadow' />
        <span style={{ paddingLeft: 4 }}>Notification</span>
      </Menu.Item>
      <Menu.Item as='a' className='navbar-item'>
        <Image src={imgSettings} className='shadow' />
        <span style={{ paddingLeft: 4 }}>Settings</span>
      </Menu.Item>
      <Menu.Item as='a' className='navbar-item'>
        <Image src={imgBell} className='shadow' />
      </Menu.Item>
      <Menu.Item>
        <Popup
          style={{ paddingRight: '2em' }}
          position='bottom center'
          open={cartState.products?.length === 0 ? false : undefined}
          on='click'
          trigger={
            <Button fluid color='red' circular compact>
              <Image
                verticalAlign='middle'
                src={imgBasket}
                inline
                spaced='right'
                alt='basket'
                style={{ marginRight: '1rem' }}
              />
              {`${
                cartState.totalPrice === 0 ? '0.00' : cartState.totalPrice
              } TL`}
            </Button>
          }
        >
          <Header textAlign='center'>Cart</Header>
          {cartState.products?.length > 0 && (
            <>
              {cartState.products.map(prod => {
                return (
                  // <ProductCard {...prod} /> it will be good but need conditional styling in <ProductCard/> component
                  <CartContent {...prod} />
                )
              })}
              <Grid>
                <Grid.Row columns='equal'>
                  <Grid.Column width={8}>
                    <Button
                      color='red'
                      floated='left'
                      onClick={() => dispatch(clearProduct())}
                    >
                      Clear
                    </Button>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Button color='green' disabled floated='right'>
                      Buy
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </>
          )}
        </Popup>
      </Menu.Item>
    </>
  )
}

const NavigationBar: React.FC = () => {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false)
  const cartState = useSelector(getCartState)

  return (
    <Menu attached='top' borderless>
      <Container>
        <Grid verticalAlign='top'>
          <Grid.Row columns='equal'>
            <Grid.Column only='computer' computer={3}>
              <NavbarLogoItem />
            </Grid.Column>
            <Grid.Column only='tablet mobile' mobile={8} tablet={8}>
              <NavbarLogoItem />
            </Grid.Column>
            <Grid.Column only='computer' computer={8}>
              <Menu.Item>
                <StyledNavInput icon='search' placeholder='Search...' fluid />
              </Menu.Item>
            </Grid.Column>
            <Grid.Column only='computer' computer={5}>
              <Menu.Menu position='right'>
                <NavbarOtherItems />
              </Menu.Menu>
            </Grid.Column>
            <Grid.Column only='tablet mobile' mobile={8} tablet={8}>
              <StyledSidebarButton
                color='blue'
                onClick={() => setIsVisibleSidebar(true)}
              >
                {cartState.products.length > 0 ? (
                  <>{`${cartState.totalPrice}TL`}</>
                ) : (
                  <>
                    <Icon name={isVisibleSidebar ? 'x' : 'bars'} fitted />
                  </>
                )}
              </StyledSidebarButton>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <SidebarMenu
          visible={isVisibleSidebar}
          onHide={() => setIsVisibleSidebar(false)}
        >
          <Menu.Item>
            <StyledNavInput icon='search' placeholder='Search...' />
          </Menu.Item>
          <NavbarOtherItems />
        </SidebarMenu>
      </Container>
    </Menu>
  )
}

export default NavigationBar
