import React, { useState } from 'react'

import GlobalStyle from './style/generic/general'
import Header from './components/Header'
import Board from './objects/Board'
import Input from './objects/Input'
import About from './objects/About'

const App = () => {
  const [activeAbout, setActiveAbout] = useState(false)

  const handleClick = () => {
    if (activeAbout) {
      setActiveAbout(false)
      console.log('False')
    } else {
      setActiveAbout(true)
      console.log('True')
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header onClick={handleClick} />

      <Board />

      <Input type="checkbox" content="Mostrar eventos" id="show" value="show" />
      <About onClick={handleClick} active={activeAbout} />
    </>
  )
}

export default App
