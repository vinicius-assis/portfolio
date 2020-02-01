import React from 'react'
import styled from 'styled-components'

import AvatarProfile from '../../objects/AvatarProfile'
import IconSocial from '../../objects/IconSocial'

import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Facebook from '../../img/facebook.png'
import Twitter from '../../img/twitter.png'
import Instagram from '../../img/instagram.png'


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
    <dd>
      <IconSocial social={Github} alt="Logo da Github" />
      <IconSocial social={Linkedin} alt="Logo da Linkedin" />
      <IconSocial social={Facebook} alt="Logo da Facebook" />
      <IconSocial social={Twitter} alt="Logo da Twitter" />
      <IconSocial social={Instagram} alt="Logo da Instagram" />
    </dd>
  </ProfileWrapper>
)


export default ProfileUser
