import React from 'react'
import styled from 'styled-components'

import AvatarProfile from '../../objects/AvatarProfile'

const ProfileWrapper = styled.dl`
  color: var(--color-zero);
  margin-top: var(--spacing-very-big);

  & > .avatar {
    margin-bottom: var(--spacing-medium);
  }

  & > .title {
    font-size: var(--size-big);
    font-weight: bold;
    margin-bottom: var(--spacing-small);
  }
  & > .description {
    width: 80%;
    margin: 0 auto;
    font-size: var(--size-small);
  }
`

const ProfileUser = () => (
  <ProfileWrapper>
    <dd className="avatar">
      <AvatarProfile />
    </dd>
    <dt className="title">Vinícius Assis</dt>
    <dd className="description">
      Migrated from Administration
    to Development.
    Javascript lover and all your ecosystem.
      <br />
      Front-end Developer at Akredito
    </dd>
  </ProfileWrapper>
)


export default ProfileUser
