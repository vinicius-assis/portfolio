import React from 'react'

import GlobalStyle from './generic/general'
import Header from './components/Header'
import Logo from './objects/Logo'
import About from './objects/Sobre'
import { Menu, Center } from './objects/Menu'
import Board from './objects/Board'
import Player from './objects/Player'

const App = () => (
  <>
    <GlobalStyle />

    <Header>
      <Logo />
      <About>About</About>
      <Menu>
        <Center />
      </Menu>
    </Header>

    <Board />
    <Player />
  </>
)

export default App
