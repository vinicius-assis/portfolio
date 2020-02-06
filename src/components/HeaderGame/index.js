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

  @media (min-width: 740px) {
    width: 100%;
    background-color: var(--color-tenth);
    margin: 0 0 85px;
    padding-left: 10%;
    padding-right: 10%;
  }
`

const HeaderGame = ({ onClick }) => (
  <Wrapper>
    <LogoGame />
    <AboutLink onClick={onClick} >About</AboutLink>
    <MenuGame onClick={onClick} />
  </Wrapper>
)

export default HeaderGame
