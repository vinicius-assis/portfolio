import styled from 'styled-components'

const AboutLink = styled.a`
  font-size: var(--size-small);
  font-weight: bold;
  margin-left: auto;
  margin-right: var(--spacing-small);
  cursor: pointer;
  ${props => (props.light ? 'color: var(--color-zero)' : '')}
`

export default AboutLink
