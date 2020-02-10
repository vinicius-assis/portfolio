import styled from 'styled-components'

const AboutLink = styled.a`
  font-size: var(--size-small);
  font-weight: bold;
  margin-left: auto;
  margin-right: var(--spacing-small);
  text-transform: uppercase;
  cursor: pointer;
  ${props => (props.light ? 'color: var(--color-zero);' : '')}

  @media (min-width: 740px) {
    font-size: var(--size-medium);
  }
`

export default AboutLink
