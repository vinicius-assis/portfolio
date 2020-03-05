import React, { useState } from 'react'


import styled from 'styled-components'
import ResultModal from '../../objects/ResultModal'

const ResultWrapper = styled.div`
  width: 100vw;
  height: 110vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000057;
  top: -50%;
  z-index: 2;

  @media (max-width: 740px) {
    left: -62%;
  }
`

const ResultLayer = ({ winner, action }) => {
  const [hide, setHide] = useState(false)

  const hideWrapper = () => setHide(true)

  return (
    (!hide && <ResultWrapper>
      <ResultModal winner={winner} action={action} hideWrapper={hideWrapper} />
    </ResultWrapper>)
  )
}

export default ResultLayer
