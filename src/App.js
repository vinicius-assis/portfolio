import React from 'react'

import GlobalStyle from './style/generic/general'
import Header from './components/Header'
import Board from './objects/Board'
import Input from './objects/ShowEvents'

const App = () => (
  <>
    <GlobalStyle />
    <Header />

    <Board />

    <Input />
  </>
)

export default App
