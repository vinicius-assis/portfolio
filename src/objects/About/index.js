import React from 'react'
import styled from 'styled-components'

import Logo from '../Logo'
import AboutLink from '../AboutLink'
import IconClose from '../IconClose'

const AboutWrapper = styled.article`
  background-color: var(--color-negative);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`

const About = () => (
  <AboutWrapper>
    <Logo light />
    <AboutLink light> About </AboutLink>
    <IconClose />
  </AboutWrapper>
)

export default About
