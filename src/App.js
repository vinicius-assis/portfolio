import React from 'react'

import GlobalStyle from './style/generic/general'
import Header from './components/Header'
import Logo from './objects/Logo'
import About from './objects/Sobre'
import { Menu, Center } from './objects/Menu'
import Field from './components/PlayerField'
import Board from './objects/Board'

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

    <Board>
      <Field />
    </Board>
  </>
)

export default App
