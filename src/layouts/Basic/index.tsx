import React from 'react'
import styled from 'styled-components'
import NavigationBar from '@components/NavigationBar'
import Footer from '@components/Footer'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f3f4f5;
`

const Basic: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <NavigationBar />
      {children}
      <Footer />
    </Wrapper>
  )
}

export default Basic
