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
  const [history, setHistory] = useState([])

  const handleClick = () => activeAbout ? setActiveAbout(false) : setActiveAbout(true)
  const showDisplay = () => show ? setShow(false) : setShow(true)
  const addHistory = (player) => {
    setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`])
  }

  const [nextPlayer, setNextPlayer] = useState('x')
  const [players, setPlayers] = useState([
    { id: 1, content: '' },
    { id: 2, content: '' },
    { id: 3, content: '' },
    { id: 4, content: '' },
    { id: 5, content: '' },
    { id: 6, content: '' },
    { id: 7, content: '' },
    { id: 8, content: '' },
    { id: 9, content: '' }])

  const markField = (id) => {
    setPlayers(old => old.map(player => player.id === id ? { id, content: nextPlayer } : player))
    addHistory(nextPlayer)
    setNextPlayer(old => old === 'x' ? 'o' : 'x')
  }

  return (
    <>
      <GlobalStyle />
      <HeaderGame onClick={handleClick} />

      <GameWrapper>
        <BoardGame onClick={markField} players={players} />

        <InputGame
          type="checkbox"
          content="Mostrar eventos"
          id="show"
          value="show"
          onClick={showDisplay}
        />

        <MoveDisplay show={show} history={history} />

      </GameWrapper>

      <LayerDark
        onClick={handleClick}
        active={activeAbout}
      />
    </>
  )
}

export default App
