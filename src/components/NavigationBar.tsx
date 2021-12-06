import React, { useState } from 'react'
import {
  Button,
  Container,
  Grid,
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

const NavbarLogoItem: React.FC = () => {
  return (
    <Menu.Item as='a' header>
      <StyledNavImageBitMap src={imgBitmap} ui={false} />
    </Menu.Item>
  )
}

const NavbarOtherItems: React.FC = () => {
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
          position='bottom center'
          wide='very'
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
              0.00 TL
            </Button>
          }
          on='click'
          hideOnScroll
        >
          basket content
        </Popup>
      </Menu.Item>
    </>
  )
}

const NavigationBar: React.FC = () => {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false)

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
            <Grid.Column
              only='tablet mobile'
              verticalAlign='middle'
              mobile={8}
              tablet={8}
              className='navbar-sidebar-button'
            >
              <StyledSidebarButton
                color='red'
                onClick={() => setIsVisibleSidebar(true)}
              >
                <Icon name='bars' fitted />
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
