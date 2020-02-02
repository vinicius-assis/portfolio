import React from 'react'
import styled from "styled-components";
import MovePlayer from '../../objects/MovePlayer';

const Wrapper = styled.section`
  width: 100%;
  margin-top: 50px;
  transform: ${props => props.active ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.5s cubic-bezier(.65,-0.17,.38,1.54);
`

const MoveDisplay = ({ show }) => (
  <Wrapper active={show}>
    <MovePlayer content='x' />
    <MovePlayer content='x' />
    <MovePlayer content='x' />
    <MovePlayer content='x' />
    <MovePlayer content='x' />
    <MovePlayer content='x' />
    <MovePlayer content='x' />
    <MovePlayer content='x' />
    <MovePlayer content='x' />
  </Wrapper>
)

export default MoveDisplay
