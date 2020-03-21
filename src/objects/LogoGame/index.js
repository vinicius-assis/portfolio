import styled from 'styled-components'
import image from '../../img/logo.png'
import imageLight from '../../img/logo-light.png'

const LogoGame = styled.img.attrs(props => ({
  src: props.active ? imageLight : image,
  alt: "Logo CollabCode"
})
)`
  width: auto;
`

export default LogoGame
