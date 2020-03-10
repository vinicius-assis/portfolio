import styled from 'styled-components'
import Curriculum from '../../cv/Curriculum-09-10.pdf'

const DownloadButton = styled.a.attrs({
  href: Curriculum,
  download: 'Curriculo-Vinicius.pdf'
})`
  font-size: 1.25em;
  background-color: var(--color-zero);
  color: var(--color-negative);
  padding: 1em;
  border-radius: 4px;
  margin-top: 1em;
  text-decoration: none;
  font-weight: 600;
  transition: all .2s linear;

  &:hover {
    background-color: unset;
    color: var(--color-first);
    border: 1px solid var(--color-first);
  }
`

export default DownloadButton
