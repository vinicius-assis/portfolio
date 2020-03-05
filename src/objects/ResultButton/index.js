import styled from 'styled-components'

const ResultButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${ props => props.theme};
  color: var(--color-zero);
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  margin: auto 1em;
  cursor: pointer;
  transition: all .1s linear;
  box-shadow: 1px 2px 2px var(--color-third);

  &:hover {
    opacity: 0.8;
  }
`

export default ResultButton
