import React from 'react'

import GlobalStyle from './style/generic/general'
import Header from './components/Header'
import Board from './objects/Board'
import Label from './objects/Label'
import Input from './objects/Input'

const App = () => (
  <>
    <GlobalStyle />
    <Header />

    <Board />

    <Input />
    <Label>Mostrar eventos</Label>
  </>
)

export default App
