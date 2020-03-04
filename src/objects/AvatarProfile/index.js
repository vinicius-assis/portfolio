import styled from 'styled-components'
import ProfileImage from '../../img/avatar.png'

const AvatarProfile = styled.img.attrs({
  src: ProfileImage,
  alt: 'Avatar do Vinícius'
})`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-image: linear-gradient(to bottom, #f25a70, #e96374, #df6b77, #d5737b, #cb797f, #cc858a, #cd9194, #ce9d9f, #dbb3b4, #e7c9c9, #f3dfdf, #fff6f6);
`

export default AvatarProfile
