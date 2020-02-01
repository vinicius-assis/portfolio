import React from 'react'
import styled from 'styled-components'

import Logo from '../../objects/Logo'
import AboutLink from '../../objects/AboutLink'
import Menu from '../../objects/Menu'

const Wrapper = styled.nav`
  display: flex;
  width: 90vw;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 85px;
  padding: 2em 0;
`

const Header = ({ onClick }) => (
  <Wrapper>
    <Logo />
    <AboutLink onClick={onClick} >About</AboutLink>
    <Menu onClick={onClick} />
  </Wrapper>
)

export default Header
