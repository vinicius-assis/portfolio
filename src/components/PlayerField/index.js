import React from 'react'
import styled from 'styled-components'
import Player from '../../objects/Player'

const Grid = styled.ul`
  display: grid;
  height: 100%;
  background-color: var(--color-third);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 4px;
  grid-row-gap: 4px;

  & > .grid-item {
    background-color: var(--color-zero);
    display: flex;
    justify-content: center;
  }
`

const Field = () => (
  <Grid>
    <li className="grid-item">
      <Player player="x" />
    </li>
    <li className="grid-item">
      <Player player="x" />
    </li>
    <li className="grid-item">
      <Player player="o" />
    </li>
    <li className="grid-item">
      <Player player="x" />
    </li>
    <li className="grid-item">
      <Player player="o" />
    </li>
    <li className="grid-item">
      <Player player="o" />
    </li>
    <li className="grid-item">
      <Player player="x" />
    </li>
    <li className="grid-item">
      <Player player="o" />
    </li>
    <li className="grid-item">
      <Player player="x" />
    </li>
  </Grid>
)

export default Field
