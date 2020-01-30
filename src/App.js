import React from 'react'

import GlobalStyle from './style/generic/general'
import Header from './components/Header'
import About from './objects/About'
import Board from './objects/Board'
import Input from './objects/Input'
import AboutLink from './objects/AboutLink'
import IconClose from './objects/IconClose'

const App = () => (
  <>
    <GlobalStyle />
    <Header />

    <Board />

    <Input type="checkbox" content="Mostrar eventos" id="show" value="show" />
    <About>
      <AboutLink light>About</AboutLink>
      <IconClose />
    </About>
  </>
)

export default App
