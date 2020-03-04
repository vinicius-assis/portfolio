import React from 'react'
import styled from 'styled-components'

import LogoGame from '../../objects/LogoGame'
import AboutLink from '../../objects/AboutLink'
import MenuGame from '../../objects/MenuGame'
import IconClose from '../../objects/IconClose'

const Wrapper = styled.nav`
  display: flex;
  width: 90vw;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 85px;
  padding: 2em 0;
  position: relative;
  z-index: 1;

  @media (min-width: 740px) {
    width: 100%;
    background-color: ${props => props.active ? 'var(--color-negative)' : 'var(--color-tenth)'};
    margin: 0 0 85px;
    padding-left: 10%;
    padding-right: 10%;
    transition: all .4s linear;
  }
`

const HeaderGame = ({ onClick, active }) => (
  <Wrapper active={active}>
    <LogoGame active={active} />
    <AboutLink onClick={onClick} light={active} >About</AboutLink>
    {active ? <IconClose onClick={onClick} /> : <MenuGame onClick={onClick} />}
  </Wrapper>
)

export default HeaderGame
