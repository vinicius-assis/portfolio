import React, { useState } from 'react'

import GlobalStyle from './style/generic/general'
import HeaderGame from './components/HeaderGame'
import BoardGame from './objects/BoardGame'
import InputGame from './objects/InputGame'
import LayerDark from './objects/LayerDark'
import MoveDisplay from './components/MoveDisplay'
import GameWrapper from './components/GameWrapper'

const App = () => {
  const [activeAbout, setActiveAbout] = useState(false)
  const [show, setShow] = useState(false)
  const [history, setHistory] = useState(['Start'])

  const handleClick = () => activeAbout ? setActiveAbout(false) : setActiveAbout(true)
  const showDisplay = () => show ? setShow(false) : setShow(true)
  const addHistory = (player) => {
    setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`])
  }

  const changeHistory = () => console.log('CLicou!')

  return (
    <>
      <GlobalStyle />
      <HeaderGame onClick={handleClick} />

      <GameWrapper>
        <BoardGame callback={addHistory} show={show} />

        <InputGame
          type="checkbox"
          content="Mostrar eventos"
          id="show"
          value="show"
          onClick={showDisplay}
        />

        <MoveDisplay show={show} history={history} action={changeHistory} />

      </GameWrapper>

      <LayerDark
        onClick={handleClick}
        active={activeAbout}
      />
    </>
  )
}

export default App
