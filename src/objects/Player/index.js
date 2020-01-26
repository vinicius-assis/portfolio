import React from 'react'
import styled from 'styled-components'
import playerX from '../../img/X.png'
import playerO from '../../img/Circle.png'

const Image = props => (
  <img src={props.img === 'x' ? playerX : playerO} alt="Player indicator"></img>
)

const Button = styled.button`
  background: none;
  border: none;
`

const Player = ({ player }) => (
  <Button>
    <Image img={player} />
  </Button>
)

export default Player
