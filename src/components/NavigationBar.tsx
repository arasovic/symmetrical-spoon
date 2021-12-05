import React from 'react'
import { Button, Container, Image, Input, Menu, Popup } from 'semantic-ui-react'
import imgBitmap from '@assets/bitmap/Bitmap@2x.png'
import imgBasket from '@assets/basket/Basket.png'
import imgBell from '@assets/bell/bell.png'
import imgSettings from '@assets/settings/settings.png'
import imgNotification from '@assets/notification/Notification.png'

import styled from 'styled-components'

const StyledInput = styled(Input)`
  margin-left: 7rem !important;
  @media only screen and (max-width: 767px) {
    margin: 0 !important;
  }
`

const StyledImageBitMap = styled(Image)`
  width: 4rem !important;
`

function NavigationBar() {
  return (
    <>
      <Menu fixed='top' borderless stackable pointing>
        <Container>
          <Menu.Item as='a' header className='navbarItem'>
            <StyledImageBitMap src={imgBitmap} size='tiny' />
          </Menu.Item>
          <Menu.Item>
            <StyledInput
              icon='search'
              placeholder='Lorem ipsum dolor sit amed'
              // className='navbarItem'
            />
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item as='a' className='navbarItem'>
              <Image src={imgNotification} className='shadow' label />
              <span style={{ paddingLeft: 4 }}>Lipsum</span>
            </Menu.Item>
            <Menu.Item as='a' className='navbarItem'>
              <Image src={imgSettings} className='shadow' label />
              <span style={{ paddingLeft: 4 }}>Lipsum</span>
            </Menu.Item>
            <Menu.Item as='a' className='navbarItem'>
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
