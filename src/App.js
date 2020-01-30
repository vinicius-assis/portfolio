import React from 'react'

import GlobalStyle from './style/generic/general'
import Header from './components/Header'
import About from './objects/About'
import Board from './objects/Board'
import Input from './objects/Input'

const App = () => (
  <>
    <GlobalStyle />
    <Header />

    <Board />

    <Input type="checkbox" content="Mostrar eventos" id="show" value="show" />
    <About />
  </>
)

export default App
