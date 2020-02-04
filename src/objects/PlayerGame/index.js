import React, { useState } from 'react'
import styled from 'styled-components'
import playerX from '../../img/X.png'
import playerO from '../../img/Circle.png'

const Image = styled.img.attrs(props => ({
  src: props.img === 'x' ? playerX : playerO,
  alt: `Image of player ${props.img.toUpperCase()}`
}))``

const Button = styled.button`
  flex-basis: 100%;
  background: none;
  border: none;
  cursor: pointer;
`


const PlayerGame = ({ player = false }) => {
  const [playerState, setPlayerState] = useState(player)

  const handleClick = () => !playerState
    ? setPlayerState('x')
    : playerState == 'x' ? setPlayerState('o') : ''

  return (
    <Button onClick={handleClick}>
      {playerState && <Image img='x' />}
    </Button>
  )
}


export default PlayerGame
