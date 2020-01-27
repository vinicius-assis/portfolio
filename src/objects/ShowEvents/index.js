import React from 'react'
import styled from 'styled-components'

const Show = styled.input.attrs(props => ({
  id: 'show',
  type: props.input,
  value: 'show'
}))``

const Label = styled.label.attrs({
  for: 'show'
})`
  font-size: var(--size-small);
  font-weight: bold;
  cursor: pointer;
  ::selection {
    background-color: var(--color-first);
    color: var(--color-zero);
  }
`

const Input = ({ type }) => (
  <>
    <Show input={type} />
    <Label>Mostrar eventos</Label>
  </>
)

export default Input
