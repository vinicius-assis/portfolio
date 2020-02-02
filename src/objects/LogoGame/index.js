import React from 'react'
import image from '../../img/logo.png'
import imageLight from '../../img/logo-light.png'

const LogoGame = ({ light }) => (
  <img src={light ? imageLight : image} alt="Logo collabcode" />
)
export default LogoGame
