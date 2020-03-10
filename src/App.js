import React, { useState } from 'react'

import GlobalStyle from './style/generic/general'
import HeaderGame from './components/HeaderGame'
import LayerDark from './objects/LayerDark'
import GameWrapper from './components/GameWrapper'
import ResultLayer from './components/ResultLayer'

const App = () => {
  const [activeAbout, setActiveAbout] = useState(false)
  const [requiriments, setRequiriments] = useState({})

  const handleClick = () => activeAbout ? setActiveAbout(false) : setActiveAbout(true)

  const getRequiriments = (first, second, third) => {
    setRequiriments({
      disabled: first,
      winner: second,
      restartGame: third
    })
  }

  const resetResult = () => {
    requiriments.restartGame()
  }

  return (
    <>
      <GlobalStyle />
      <HeaderGame onClick={handleClick} active={activeAbout} />

      <GameWrapper onClick={getRequiriments} />

      <LayerDark
        onClick={handleClick}
        active={activeAbout}
      />

      <ResultLayer winner={requiriments.winner} action={resetResult} disabled={requiriments.disabled} />
    </>
  )
}

export default App
