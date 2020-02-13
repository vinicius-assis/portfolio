import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import BoardGame from '../../objects/BoardGame'
import InputGame from '../../objects/InputGame'
import MoveDisplay from '../MoveDisplay'

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  position: relative;
  flex-direction: column;

  @media (min-width: 740px) {
    flex-direction: row;
  }
`

const GameWrapper = () => {
  const [history, setHistory] = useState(['Start'])
  const [show, setShow] = useState(false)
  const [playerX, setPlayerX] = useState([])
  const [playerO, setPlayerO] = useState([])

  const [nextPlayer, setNextPlayer] = useState('x')
  const [round, setRound] = useState(0)

  const [historyGame, setHistoryGame] = useState([
    {
      round: 0,
      state: [
        { id: 1, content: '' },
        { id: 2, content: '' },
        { id: 3, content: '' },
        { id: 4, content: '' },
        { id: 5, content: '' },
        { id: 6, content: '' },
        { id: 7, content: '' },
        { id: 8, content: '' },
        { id: 9, content: '' }
      ]
    }
  ])

  const checkWinner = () => {
    let possibleWaysToWin = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ]

    possibleWaysToWin.forEach(item => {
      if (JSON.stringify(item) === JSON.stringify(playerX.sort())) {
        console.log('Player X venceu!')
        setHistory(old => [...old, 'X venceu!'])
      } else if (JSON.stringify(item) === JSON.stringify(playerO.sort())) {
        console.log('Player O venceu!')
        setHistory(old => [...old, 'O venceu!'])
      }
    })
  }

  const showDisplay = () => show ? setShow(false) : setShow(true)
  const addHistory = (player) => setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`])
  const changeHistory = (key) => {
    setRound(key)
    setHistory(old => old.slice(0, ++key))
    setHistoryGame(old => old.slice(0, ++key))
  }

  const handleClick = (id) => {
    setHistoryGame(old => [...old, {
      round: round + 1,
      state: old[round].state.map(player => player.id === id ? { id, content: nextPlayer } : player)
    }])

    setRound(old => old + 1)
    addHistory(nextPlayer)
    setNextPlayer(old => old === 'x' ? 'o' : 'x')

    if (nextPlayer === 'x') {
      setPlayerX(old => [...old, id])
    } else if (nextPlayer === 'o') {
      setPlayerO(old => [...old, id])
    }
  }

  useEffect(() => checkWinner(), [playerX, playerO])

  return (
    <Wrapper>
      <BoardGame show={show} historyGame={historyGame} onClick={handleClick} round={round} />

      <InputGame
        type="checkbox"
        content="Mostrar eventos"
        id="show"
        value="show"
        action={showDisplay}
      />

      <MoveDisplay show={show} history={history} action={changeHistory} />
    </Wrapper>
  )
}

export default GameWrapper
