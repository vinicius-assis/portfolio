import React from 'react'


import styled from 'styled-components'
import ResultModal from '../../objects/ResultModal'

const ResultWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000057;
  top: 0;
  z-index: 2;
`

const ResultLayer = () => (
  <ResultWrapper>
    <ResultModal>
      <h2>Testando!</h2>
    </ResultModal>
  </ResultWrapper>
)

export default ResultLayer
