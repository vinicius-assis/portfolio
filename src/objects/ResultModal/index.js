import React from 'react'

import styled from 'styled-components'
import ResultButton from '../ResultButton'

const ModalWrapper = styled.section`
  width: 400px;
  height: 250px;
  background-color: var(--color-second);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 4px;
  transform: translateY(-50%);
`

const ModalText = styled.p`
  width:100%;
  color: var(--color-negative);
  font-size: var(--size-medium);
  font-weight: bold;
  margin: 2em auto;

  & > span {
    color: var(--color-success);
    border:1px solid var(--color-success);
    border-radius: 4px;
    padding: 0.25em .5em;
  }
`



const ResultModal = ({ winner, action }) => (
  <ModalWrapper>
    <ModalText>O vencedor foi <span>{winner}</span></ModalText>
    <ResultButton theme={'var(--color-success)'} onClick={action}>Restart</ResultButton>
    <ResultButton theme={'var(--color-first)'} >Quit</ResultButton>
  </ModalWrapper>
)

export default ResultModal
