import React, { useState } from 'react'

import GlobalStyle from './style/generic/general'
import HeaderGame from './components/HeaderGame'
import BoardGame from './objects/BoardGame'
import InputGame from './objects/InputGame'
import LayerDark from './objects/LayerDark'
import MoveDisplay from './components/MoveDisplay'

const App = () => {
  const [activeAbout, setActiveAbout] = useState(false)
  const [show, setShow] = useState(false)

  const handleClick = () => activeAbout ? setActiveAbout(false) : setActiveAbout(true)
  const showDisplay = () => show ? setShow(false) : setShow(true)

  return (
    <>
      <GlobalStyle />
      <HeaderGame onClick={handleClick} />

      <BoardGame />

      <InputGame
        type="checkbox"
        content="Mostrar eventos"
        id="show"
        value="show"
        onClick={showDisplay}
      />

      <MoveDisplay show={show} />

      <LayerDark
        onClick={handleClick}
        active={activeAbout}
      />
    </>
  )
}

export default App
