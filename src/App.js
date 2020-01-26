import React from 'react'

import GlobalStyle from './style/generic/general'
import Header from './components/Header'
import Board from './objects/Board'
import Label from './objects/Label'

const App = () => (
  <>
    <GlobalStyle />
    <Header />

    <Board />

    <Label>Mostrar eventos</Label>
  </>
)

export default App
