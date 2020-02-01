import styled from 'styled-components'

const IconSocial = styled.img.attrs(props => ({
  src: props.social,
  alt: props.alt
}))`
  margin-top: 3.5em;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1.4em;
  }
`

export default IconSocial
