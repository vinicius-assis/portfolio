import React from 'react'
import styled from 'styled-components'

import AvatarProfile from '../../objects/AvatarProfile'

const ProfileWrapper = styled.dl``

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
