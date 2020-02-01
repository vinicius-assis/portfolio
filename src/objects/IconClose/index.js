import React from 'react'
import styled from 'styled-components'

const Close = styled.a`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;

  & > span {
    display: inline-block;
    text-indent: -9999px;
  }

  &::before,
  &::after {
    content: '';
    width: 32px;
    height: 4px;
    background-color: var(--color-zero);
    border-radius: var(--spacing-radius-small);
    position: absolute;
    top: -1px;
  }
  &::before {
    left: 2px;
    transform: rotate(45deg);
    transform-origin: top left;
  }
  &::after {
    right: 2px;
    transform: rotate(-45deg);
    transform-origin: top right;
  }
`

const IconClose = () => (
  <Close>
    <span>Fechar</span>
  </Close>
)

export default IconClose
