import React, { useState } from 'react'


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
  left: 0;
  z-index: 2;
  transform: ${props => (props.winner && props.disabled && props.hide) ? 'translateX(0)' : 'translateX(-100%)'};
`

const ResultLayer = ({ winner, action, disabled }) => {
  const [hide, setHide] = useState(true)

  const hideResult = () => setHide(false)

  const handleReset = () => {
    action()
    setHide(false)
  }

  return (
    <ResultWrapper disabled={disabled} winner={winner} hide={hide}>
      <ResultModal winner={winner} reset={handleReset} hideWrapper={hideResult} />
    </ResultWrapper>
  )
}

export default ResultLayer
