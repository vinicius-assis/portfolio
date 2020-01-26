import React from 'react'
import styled from 'styled-components'

const Show = styled.input.attrs({
  id: 'show',
  type: 'checkbox',
  value: 'show'
})``

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

const Input = () => (
  <>
    <Show />
    <Label>Mostrar eventos</Label>
  </>
)

export default Input
