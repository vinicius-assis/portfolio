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
  max-width: 330px;
  max-height: 330px;

  @media (min-width: 740px) {
    margin-right: 40px;
  }
`

const BoardGame = ({ callback }) => (
  <Wrapper>
    <Field callback={callback} />
  </Wrapper>
)

export default BoardGame
