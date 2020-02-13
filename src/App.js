import React, { useState } from 'react'

import GlobalStyle from './style/generic/general'
import HeaderGame from './components/HeaderGame'
import LayerDark from './objects/LayerDark'
import GameWrapper from './components/GameWrapper'

const App = () => {
  const [activeAbout, setActiveAbout] = useState(false)

  const handleClick = () => activeAbout ? setActiveAbout(false) : setActiveAbout(true)

  return (
    <>
      <GlobalStyle />
      <HeaderGame onClick={handleClick} />

      <GameWrapper />

      <LayerDark
        onClick={handleClick}
        active={activeAbout}
      />
    </>
  )
}

export default App
