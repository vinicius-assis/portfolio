import styled from 'styled-components'

const AboutLink = styled.a`
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: auto;
  margin-right: var(--spacing-small);
  cursor: pointer;
  ${props => (props.light ? 'color: var(--color-zero)' : '')}
`

export default AboutLink
