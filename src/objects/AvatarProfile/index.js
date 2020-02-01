import styled from 'styled-components'
import ProfileImage from '../../img/profile-3.png'

const AvatarProfile = styled.img.attrs({
  src: ProfileImage,
  alt: 'Avatar do Vinícius'
})`
  width: 130px;
  height: 130px;
  border-radius: 50%;
`

export default AvatarProfile
