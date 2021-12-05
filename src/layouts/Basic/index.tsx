import React from 'react'
import styled from 'styled-components'
import NavigationBar from '@components/NavigationBar'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Basic: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <NavigationBar />
      {children}
    </Wrapper>
  )
}

export default Basic
