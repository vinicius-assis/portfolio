import React from 'react'
import styled from 'styled-components'
import Field from '../../components/PlayerField'

const Wrapper = styled.article`
  display: inline-block;
  width: 90vw;
  height: 90vw;
  background-color: var(--color-zero);
  border-radius: var(--spacing-radius);
  box-shadow: 0 3px 6px 0 var(--color-light-negative);
  padding: 15px;
`

const Board = () => (
  <Wrapper>
    <Field />
  </Wrapper>
)

export default Board
