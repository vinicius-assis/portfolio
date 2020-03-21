import React, { useState } from 'react'

import GlobalStyle from './style/generic/general'
import HeaderGame from './components/HeaderGame'
import LayerDark from './objects/LayerDark'
import GameWrapper from './components/GameWrapper'
import ResultLayer from './components/ResultLayer'

const App = () => {
  const [activeAbout, setActiveAbout] = useState(false)
  const [requirements, setRequirements] = useState({})

  const handleClick = () => activeAbout ? setActiveAbout(false) : setActiveAbout(true)

  // Function to get requirements by gameWrapper
  const getRequirements = (first, second, third) => {
    setRequirements({
      disabled: first,
      winner: second,
      restartGame: third
    })
  }

  const resetResult = () => {
    requirements.restartGame()
  }

  return (
    <>
      <GlobalStyle />
      <HeaderGame onClick={handleClick} active={activeAbout} />

      <GameWrapper onClick={getRequirements} />

      <LayerDark
        onClick={handleClick}
        active={activeAbout}
      />

      <ResultLayer winner={requirements.winner} action={resetResult} disabled={requirements.disabled} />
    </>
  )
}

export default App
