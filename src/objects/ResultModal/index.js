import React from 'react'

import styled from 'styled-components'
import ResultButton from '../ResultButton'

const ModalWrapper = styled.section`
  width: 200px;
  height: 200px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ResultModal = () => (
  <ModalWrapper>
    <ResultButton />
  </ModalWrapper>
)

export default ResultModal
