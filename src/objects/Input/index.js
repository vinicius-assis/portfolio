import React from 'react'
import styled from 'styled-components'

const Show = styled.input.attrs(props => ({
  id: props.id,
  type: props.input,
  value: props.value
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

const Input = ({ type, content, id, value }) => (
  <>
    <Show input={type} id={id} value={value} />
    <Label>{content}</Label>
  </>
)

export default Input
