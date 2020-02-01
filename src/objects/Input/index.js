import React from 'react'
import styled from 'styled-components'

const Show = styled.input.attrs(props => ({
  id: props.id,
  type: props.input,
  value: props.value
}))`
  display: none;

  &:checked + label::before {
    box-shadow: inset 2px 2px 0px var(--color-zero),
      inset -2px -2px 0px var(--color-zero);
    background-color: var(--color-first);
  }
`

const Label = styled.label.attrs({
  for: 'show'
})`
  display: inline-flex;
  align-items: center;
  margin-top: 4em;
  font-size: var(--size-small);
  font-weight: bold;
  cursor: pointer;
  ::selection {
    background-color: var(--color-first);
    color: var(--color-zero);
  }

  ::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: var(--spacing-radius);
    border: 3px solid var(--color-fourth);
    box-sizing: border-box;
    cursor: pointer;
    margin-right: 0.5em;
  }
`

const Input = ({ type, content, id, value }) => (
  <>
    <Show input={type} id={id} value={value} />
    <Label>{content}</Label>
  </>
)

export default Input
