import React from 'react'
import styled from "styled-components";
import MovePlayer from '../../objects/MovePlayer';

const Wrapper = styled.section`
  margin-top: 50px;
  ${props => props.active ? 'transform: translateX(0)' : 'transform:translateX(1000%); position:absolute'};
  transition: transform 0.5s cubic-bezier(.65,-0.17,.38,1.54);

  @media (min-width: 740px) {
    margin-top: 0;
    transition: transform 0.5s linear;
  }
`

const MoveDisplay = ({ show, history }) => (
  <Wrapper active={show}>
    {history.map(item => (<MovePlayer content={item} />))}
  </Wrapper>
)

export default MoveDisplay
