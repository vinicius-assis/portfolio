import React from 'react'
import styled from 'styled-components'
import playerX from '../../img/X.png'

const Image = styled.img.attrs({
  src: playerX,
  alt: 'Jogador X'
})``

const Button = styled.button`
  background: none;
  border: none;
`

const Player = () => (
  <Button>
    <Image />
  </Button>
)

export default Player
