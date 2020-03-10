import React, { useState, useEffect } from 'react'


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
  display: ${props => props.hide ? 'flex' : 'none'};
`

const ResultLayer = ({ winner, action, disabled }) => {
  const [hide, setHide] = useState(false)
  const [show, setShow] = useState(true)

  const hideResult = () => {
    setHide(false)
    setShow(true)
  }

  const handleReset = () => {
    action()
    setHide(false)
  }

  useEffect(() => {
    winner && show ? setHide(true) : setHide(false)
  }, [winner, show])

  return (
    <ResultWrapper hide={hide} disabled={disabled}>
      <ResultModal winner={winner} reset={handleReset} hideWrapper={hideResult} />
    </ResultWrapper>
  )
}

export default ResultLayer
