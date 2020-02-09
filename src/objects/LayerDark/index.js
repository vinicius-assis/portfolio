import React from 'react'
import styled from 'styled-components'

import Logo from '../LogoGame'
import AboutLink from '../AboutLink'
import IconClose from '../IconClose'
import HeaderInternal from '../../components/HeaderInternal'
import ProfileUser from '../../components/ProfileUser'

const AboutWrapper = styled.article`
  background-color: var(--color-negative);
  width: 100vw;
  height: 100vh;
  position: absolute;
  padding-right: 5%;
  padding-left: 5%;
  top: 0;
  left: 0;
  transform: ${props => props.active ? 'translateX(0%)' : 'translateX(100%)'};
  transition: transform 800ms cubic-bezier(.65,-0.17,.38,1.54);  
`

const LayerDark = ({ active, onClick }) => (
  <AboutWrapper active={active}>
    <HeaderInternal>
      <Logo light />
      <AboutLink light onClick={onClick}> About </AboutLink>
      <IconClose onClick={onClick} />
    </HeaderInternal>
    <ProfileUser />
  </AboutWrapper>
)

export default LayerDark
