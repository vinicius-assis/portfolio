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
  const [disabled, setDisabled] = useState(false)

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
  // function to show and hide profile
  const showDisplay = () => show ? setShow(false) : setShow(true)
  // function to set move display
  const addHistory = (player) => setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`])
  // function to back history, where key is equal item index
  const changeHistory = (key) => {
    // change round every time when the history change
    setRound(key)
    // remove history according with the key
    setHistory(old => old.slice(0, key + 1))
    // remove historyGame according with the key
    setHistoryGame(old => old.slice(0, key + 1))

    // set nextPlayer when back the history
    if (key % 2 === 0) {
      setNextPlayer('x')
    } else {
      setNextPlayer('o')
    }
  }
  // function to add player in field
  const handleClick = (id) => {
    // add last round and state in history game
    setHistoryGame(old => [...old, {
      round: round + 1,
      state: old[round].state.map(player => player.id === id ? { id, content: nextPlayer } : player)
    }])

    setRound(old => old + 1)
    addHistory(nextPlayer)
    setNextPlayer(old => old === 'x' ? 'o' : 'x')

    // Check the last history game and set playerX and playerO
    setPlayerX(historyGame[historyGame.length - 1].state.map(item => item.content === 'x' ? item.id : ''))
    setPlayerO(historyGame[historyGame.length - 1].state.map(item => item.content === 'o' ? item.id : ''))
  }




  useEffect(() => {
    // Arrays with all possible ways to win
    const possibleWaysToWin = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ]
    // function to check winner in the game
    possibleWaysToWin.forEach(possibles => {
      let countX = 0, countO = 0

      playerX.filter(item => possibles.includes(item) ? countX += 1 : '')

      playerO.filter(item => possibles.includes(item) ? countO += 1 : '')

      if (countO === 3) {
        setHistory(old => [...old, 'O ganhou!'])
        setDisabled(true)
      } else if (countX === 3) {
        setHistory(old => [...old, 'X ganhou!'])
        setDisabled(true)
      }
    })

  }, [playerO, playerX])

  return (
    <Wrapper>
      <BoardGame show={show} historyGame={historyGame} onClick={handleClick} round={round} disabled={disabled} />

      <InputGame
        type="checkbox"
        content="Mostrar eventos"
        id="show"
        value="show"
        action={showDisplay}
      />

      <MoveDisplay show={show} history={history} action={changeHistory} disabled={disabled} />
    </Wrapper>
  )
}

export default GameWrapper
