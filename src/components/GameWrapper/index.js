import styled from 'styled-components'

const GameWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  position: relative;
  flex-direction: column;

  @media (min-width: 740px) {
    flex-direction: row;
  }
`


export default GameWrapper
