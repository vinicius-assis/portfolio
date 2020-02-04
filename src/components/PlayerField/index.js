import React, { useState } from 'react'
import styled from 'styled-components'
import PlayerGame from '../../objects/PlayerGame'

const Grid = styled.ul`
  display: grid;
  height: 100%;
  background-color: var(--color-third);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  & > .grid-item {
    background-color: var(--color-zero);
    display: flex;
    justify-content: center;
  }

  & > .grid-item:nth-child(2),
  & > .grid-item:nth-child(4),
  & > .grid-item:nth-child(6),
  & > .grid-item:nth-child(8) {
    justify-content: space-between;
  }

  & > .grid-item:nth-child(4),
  & > .grid-item:nth-child(6) {
    flex-direction: column;
  }

  & > .grid-item:nth-child(2)::before,
  & > .grid-item:nth-child(2)::after,
  & > .grid-item:nth-child(4)::before,
  & > .grid-item:nth-child(4)::after,
  & > .grid-item:nth-child(6)::before,
  & > .grid-item:nth-child(6)::after,
  & > .grid-item:nth-child(8)::before,
  & > .grid-item:nth-child(8)::after {
    content: '';
    background-color: var(--color-third);
  }

  & > .grid-item:nth-child(2)::before,
  & > .grid-item:nth-child(2)::after,
  & > .grid-item:nth-child(8)::before,
  & > .grid-item:nth-child(8)::after {
    width: 4px;
    height: 100%;
  }

  & > .grid-item:nth-child(4)::before,
  & > .grid-item:nth-child(4)::after,
  & > .grid-item:nth-child(6)::before,
  & > .grid-item:nth-child(6)::after {
    width: 100%;
    height: 4px;
  }

  & > .grid-item:nth-child(2)::before,
  & > .grid-item:nth-child(2)::after {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  & > .grid-item:nth-child(4)::before,
  & > .grid-item:nth-child(4)::after {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  & > .grid-item:nth-child(6)::before,
  & > .grid-item:nth-child(6)::after {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  & > .grid-item:nth-child(8)::before,
  & > .grid-item:nth-child(8)::after {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  & > .grid-item:nth-child(5) {
    border: 4px solid var(--color-third);
  }
`

const Field = () => {
  const [nextPlayer, setNextPlayer] = useState('x')
  const [players, setPlayers] = useState([
    { id: 1, content: '' },
    { id: 2, content: '' },
    { id: 3, content: '' },
    { id: 4, content: '' },
    { id: 5, content: '' },
    { id: 6, content: '' },
    { id: 7, content: '' },
    { id: 8, content: '' },
    { id: 9, content: '' }])

  const handleClick = (id) => {
    setPlayers(old => old.map(player => player.id === id ? { id, content: nextPlayer } : player))

    setNextPlayer(old => old === 'x' ? 'o' : 'x')
  }

  return (
    <Grid>

      {players.map(({ id, content }) => (
        <li key={id} className="grid-item" onClick={() => handleClick(id)}>
          <PlayerGame id={id} player={content} />
        </li>
      ))}

    </Grid>
  )
}

export default Field
