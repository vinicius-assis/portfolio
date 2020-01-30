import styled from 'styled-components'

const AboutLink = styled.a`
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: auto;
  margin-right: 10px;
  ${props => (props.light ? 'color: var(--color-zero)' : '')}
`

export default AboutLink
