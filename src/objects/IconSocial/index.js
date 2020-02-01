import React from 'react'
import styled from 'styled-components'

const Icon = styled.img.attrs(props => ({
  src: props.src,
  alt: props.altText
}))`
  margin-top: 3.5em;
  cursor: pointer;
`

const IconSocial = ({ action, social, alt }) => (
  <a target="_blank" rel="noopener noreferrer" href={action}>
    <Icon src={social} altText={alt} />
  </a>
)

export default IconSocial
