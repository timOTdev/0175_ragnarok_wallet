import styled from 'styled-components'
import Ragnarok from '../images/ragnarok.png'

const Div = styled.div`
  flex-basis: 33%;
`
const Img = styled.img`
  max-width: 150px;
  &:hover {
    cursor: pointer;
  }
`

export default function Logo() {
  return (
    <Div>
      <a href='#'>
        <Img src={Ragnarok} alt="Ragnarok Wallet Logo" />
      </a>
    </Div>
  )
}
