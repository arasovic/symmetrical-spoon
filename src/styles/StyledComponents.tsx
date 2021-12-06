import styled from 'styled-components'
import { Button, Container, Grid, Image, Input } from 'semantic-ui-react'
// we need override semantic ui css so everywhere !important
export const StyledNavInput = styled(Input)`
  margin-left: 7rem !important;
  margin-top: 3px !important;
  @media only screen and (max-width: 991px) {
    margin: 0 !important;
  }
`

export const StyledNavImageBitMap = styled(Image)`
  width: 60px !important;
  height: auto !important;
  font-size: 0.85714286rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
`

export const StyledMainContainer = styled(Container)`
  margin-top: 10px !important;
`

export const StyledMainGrid = styled(Grid)`
  margin-top: 10px !important;
`

export const StyledSidebarButton = styled(Button)`
  position: fixed !important;
  right: 5ex !important;
  top: 15px !important;
`
