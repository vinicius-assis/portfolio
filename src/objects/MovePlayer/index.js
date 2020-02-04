import React from 'react'
import styled from 'styled-components'

const Output = styled.output`
  display: block;
  margin: 0 auto 20px;
  width: 130px;
  height: 30px;
  border-radius: 15px;
  font-size: var(--size-small);
  color: var(--color-negative);
  background-color: var(--color-zero);
  padding: 5px 20px;
`

const MovePlayer = ({ content }) => (
  <>
    <Output>{content}</Output>
  </>
)

export default MovePlayer
