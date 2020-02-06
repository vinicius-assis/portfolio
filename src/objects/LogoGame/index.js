import styled from 'styled-components'
import image from '../../img/logo.png'
import imageLight from '../../img/logo-light.png'

const LogoGame = styled.img.attrs(props => ({
  src: props.light ? imageLight : image,
  alt: "Logo CollabCode"
})
)`
  width: 131px;

  @media (min-width: 740px) {
    width: auto;
  }
`

export default LogoGame
