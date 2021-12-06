import styled from 'styled-components'
import { Container, Grid, Image, Input } from 'semantic-ui-react'
// we need override semantic ui css so everywhere !important
export const StyledNavInput = styled(Input)`
  margin-left: 7rem !important;
  @media only screen and (max-width: 767px) {
    margin: 0 !important;
  }
`

export const StyledNavImageBitMap = styled(Image)`
  width: 4rem !important;
`

export const StyledMainContainer = styled(Container)`
  margin-top: 10px !important;
`

export const StyledMainGrid = styled(Grid)`
  margin-top: 10px !important;
`
