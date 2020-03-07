import React from 'react'

import styled from 'styled-components'
import GameButton from '../GameButton'

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



const ResultModal = ({ winner, reset, hideWrapper }) => (
  <ModalWrapper>
    <ModalText>O vencedor foi <span>{winner}</span></ModalText>
    <GameButton theme={'var(--color-success)'} onClick={reset}>Restart</GameButton>
    <GameButton theme={'var(--color-first)'} onClick={hideWrapper} >Quit</GameButton>
  </ModalWrapper>
)

export default ResultModal
