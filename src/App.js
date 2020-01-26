import React from 'react'

import GlobalStyle from './Generic/general'
import Header from './Components/Header'
import Logo from './Objects/Logo'
import About from './Objects/Sobre'
import { Menu, Center } from './Objects/Menu'

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
  </>
)

export default App
