import React from 'react'
import styled from 'styled-components'
import { render } from '@testing-library/react'

const Center = styled.span`
  content: '';
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #707070;
  margin-bottom: 5px;
`

const Menu = styled.a.attrs({ title: 'Menu' })`
  display: block;
  width: 25px;
  text-indent: -9999px;

  ::before,
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: #707070;
  }

  ::before {
    margin-bottom: 5px;
  }
`

export { Center, Menu }
