import React from 'react'
import styled from 'styled-components'

const MenuWrapper = styled.a.attrs({ title: 'Menu' })`
  display: block;
  width: 25px;
  text-indent: -9999px;
  cursor: pointer;

  ::before,
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-radius: var(--spacing-radius-small);
    background-color: var(--color-fourth);
  }

  ::before {
    margin-bottom: 5px;
  }
`

const Center = styled.span`
  content: '';
  display: block;
  width: 100%;
  height: 4px;
  border-radius: var(--spacing-radius-small);
  background-color: var(--color-fourth);
  margin-bottom: 5px;
`

const MenuGame = ({ onClick }) => (
  <>
    <MenuWrapper onClick={onClick}>
      <Center />
    </MenuWrapper>
  </>
)

export default MenuGame
