import React, { useState } from 'react'
import styled from 'styled-components'

import BoardGame from '../../objects/BoardGame'
import InputGame from '../../objects/InputGame'
import MoveDisplay from '../MoveDisplay'

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  position: relative;
  flex-direction: column;

  @media (min-width: 740px) {
    flex-direction: row;
  }
`

const GameWrapper = () => {
  const [history, setHistory] = useState(['Start'])
  const [show, setShow] = useState(false)

  const showDisplay = () => show ? setShow(false) : setShow(true)
  const addHistory = (player) => setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`])
  const changeHistory = (key) => setHistory(old => old.slice(0, ++key))

  return (
    <Wrapper>
      <BoardGame action={addHistory} show={show} />

      <InputGame
        type="checkbox"
        content="Mostrar eventos"
        id="show"
        value="show"
        action={showDisplay}
      />

      <MoveDisplay show={show} history={history} action={changeHistory} />
    </Wrapper>
  )
}

export default GameWrapper
