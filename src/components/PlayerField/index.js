import React from 'react'
import styled from 'styled-components'
import Player from '../../objects/Player'

const Grid = styled.ul`
  display: grid;
  height: 100%;
  grid-template-columns: 33.333% 33.333% 33.333%;
  grid-template-rows: 33.333% 33.333% 33.333%;
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
