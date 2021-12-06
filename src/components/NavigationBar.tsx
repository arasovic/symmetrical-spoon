import React from 'react'
import { Button, Container, Image, Menu, Popup } from 'semantic-ui-react'
import imgBitmap from '@assets/bitmap/Bitmap@2x.png'
import imgBasket from '@assets/basket/Basket.png'
import imgBell from '@assets/bell/bell.png'
import imgSettings from '@assets/settings/settings.png'
import imgNotification from '@assets/notification/Notification.png'
import { StyledNavImageBitMap, StyledNavInput } from '@styles/StyledComponents'

const NavigationBar: React.FC = () => {
  return (
    <>
      <Menu attached='top' borderless stackable>
        <Container>
          <Menu.Item as='a' header className='navbar-item'>
            <StyledNavImageBitMap src={imgBitmap} size='tiny' />
          </Menu.Item>
          <Menu.Item>
            <StyledNavInput icon='search' placeholder='Search...' />
          </Menu.Item>

          <Menu.Menu position='right'>
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
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  )
}

export default NavigationBar
