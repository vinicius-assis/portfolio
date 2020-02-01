import React from 'react'
import styled from 'styled-components'

import AvatarProfile from '../../objects/AvatarProfile'

const ProfileWrapper = styled.dl`
  color: var(--color-zero);
  & > dt {
    font-size: var(--size-big);
    font-weight: bold;
  }
`

const ProfileUser = () => (
  <ProfileWrapper>
    <dd>
      <AvatarProfile />
    </dd>
    <dt>Vinícius Assis</dt>
    <dd>Front-end Developer at Akredito</dd>
  </ProfileWrapper>
)


export default ProfileUser
