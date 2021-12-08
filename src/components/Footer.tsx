import React from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment
} from 'semantic-ui-react'
import imgIos from '@assets/ios/ios Bitmap@2x.png'
import imgAnd from '@assets/and/and Bitmap@2x.png'
import imgInst from '@assets/instagram/instagram@2x.png'
import imgFace from '@assets/facebook/facebook@2x.png'
import imgTwit from '@assets/twitter/twitter@2x.png'
import imgBitmap from '@assets/bitmap/Bitmap@2x.png'
import imgArrow from '@assets/arrow down/Arrow_simple_down@2x.png'

const Footer: React.FC = () => {
  return (
    <Segment
      vertical
      style={{ margin: '5em 0em 0em', padding: '3em 0em', background: 'white' }}
    >
      <Container>
        <Grid columns='equal' stackable>
          <Grid.Column>
            <Segment basic>
              <Grid centered>
                <Image src={imgIos} size='small' />
                <Image src={imgAnd} size='small' />
              </Grid>
            </Segment>
          </Grid.Column>
          <Grid.Column width={5} />
          <Grid.Column>
            <Segment basic>
              <Grid textAlign='right' centered>
                <Image
                  src={imgInst}
                  size='tiny'
                  className='footer-social-buttons'
                />
                <Image
                  src={imgFace}
                  size='tiny'
                  className='footer-social-buttons'
                />
                <Image
                  src={imgTwit}
                  size='tiny'
                  className='footer-social-buttons'
                />
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid>
        <Divider section />
        <Grid columns='equal' divided stackable>
          <Grid.Column width={3}>
            <Segment basic>
              <Image src={imgBitmap} size='tiny' className='footer-image' />
              <Divider clearing />
              <a href='mailto:Lipsum@lorem.com'>Lipsum@lorem.com</a>
            </Segment>
          </Grid.Column>
          <Grid.Column width={13}>
            <Segment basic>
              <Grid stackable>
                <Grid.Row columns={3} centered>
                  <Grid.Column>
                    <Header as='h4' className='footer-header'>
                      Lorem İpsum
                    </Header>
                    <hr />
                    <div className='footer-links'>
                      <a href='#a'>Lipsum</a>
                      <a href='#a'>Doloressini</a>
                      <a href='#a'>Amedissu</a>
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as='h4' className='footer-header'>
                      Doloressini
                    </Header>
                    <hr />
                    <div className='footer-links'>
                      <a href='#a'>
                        Lorem İpsum doloressini
                        <Image
                          src={imgArrow}
                          inline
                          size='mini'
                          className='footer-arrow'
                        />
                      </a>
                      <a href='#a'>
                        Lorem İpsum dolores
                        <Image
                          src={imgArrow}
                          inline
                          size='mini'
                          className='footer-arrow'
                        />
                      </a>
                      <a href='#a'>Lorem İpsum</a>
                      <a href='#a'>Lorem İpsum dolores</a>
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as='h4' className='footer-header'>
                      Ameddesso
                    </Header>
                    <hr />
                    <div className='footer-links'>
                      <a href='#a' className='bold'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </a>
                      <a href='#a'>
                        Doloressini
                        <Image
                          src={imgArrow}
                          inline
                          size='mini'
                          className='footer-arrow'
                        />
                      </a>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid>
        <Divider section />
        <Container textAlign='center' fluid text>
          <Grid centered>
            <Grid.Row centered columns={3} divided>
              <Grid.Column>
                <Image
                  src={imgBitmap}
                  centered
                  size='tiny'
                  className='footer-image'
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={imgBitmap}
                  centered
                  size='tiny'
                  className='footer-image'
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={imgBitmap}
                  centered
                  size='tiny'
                  className='footer-image'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Divider section />
        <Container text textAlign='center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Container>
      </Container>
    </Segment>
  )
}

export default Footer
