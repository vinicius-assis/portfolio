import styled from 'styled-components'

const Center = styled.span`
  content: '';
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: var(--color-fourth);
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
    background-color: var(--color-fourth);
  }

  ::before {
    margin-bottom: 5px;
  }
`

export { Center, Menu }
