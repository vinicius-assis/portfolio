import React from 'react'
import styled from 'styled-components'

import Logo from '../Logo'
import AboutLink from '../AboutLink'
import IconClose from '../IconClose'
import HeaderInternal from '../../components/HeaderInternal'
import ProfileUser from '../../components/ProfileUser'

const AboutWrapper = styled.article`
  background-color: var(--color-negative);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${props => props.active ? 'translateX(0%)' : 'translateX(100%)'};
  transition: transform 200ms linear;  
`

const About = () => (
  <AboutWrapper>
    <HeaderInternal>
      <Logo light />
      <AboutLink light> About </AboutLink>
      <IconClose />
    </HeaderInternal>
    <ProfileUser />
  </AboutWrapper>
)

export default About
