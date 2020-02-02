import React from 'react'
import styled from 'styled-components'

import LogoGame from '../../objects/LogoGame'
import AboutLink from '../../objects/AboutLink'
import MenuGame from '../../objects/MenuGame'

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
    <LogoGame />
    <AboutLink onClick={onClick} >About</AboutLink>
    <MenuGame onClick={onClick} />
  </Wrapper>
)

export default Header
