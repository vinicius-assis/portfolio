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
    line-height: 1.8;
  }

  & > .socials {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
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
    <dd className="socials">
      <IconSocial action="https://www.github.com/vinicius-assis" social={Github} alt="Logo da Github" />
      <IconSocial action="https://www.linkedin.com/in/vin%C3%ADcius-de-oliveira-assis-655781ba/" social={Linkedin} alt="Logo da Linkedin" />
      <IconSocial action="https://www.facebook.com/vinicius.assiis" social={Facebook} alt="Logo da Facebook" />
      <IconSocial action="https://twitter.com/VinciusDev" social={Twitter} alt="Logo da Twitter" />
      <IconSocial action="https://www.instagram.com/viniax/" social={Instagram} alt="Logo da Instagram" />
    </dd>
  </ProfileWrapper>
)


export default ProfileUser
