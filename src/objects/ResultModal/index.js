import React from 'react'

import styled from 'styled-components'
import ResultButton from '../ResultButton'

const ModalWrapper = styled.section`
  width: 400px;
  height: 300px;
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
`

const ResultModal = () => (
  <ModalWrapper>
    <ModalText>O vencedor foi X</ModalText>
    <ResultButton>Restart</ResultButton>
    <ResultButton>Quit</ResultButton>
  </ModalWrapper>
)

export default ResultModal
