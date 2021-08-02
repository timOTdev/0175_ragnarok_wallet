import styled from 'styled-components';
import Logo from './Logo'
import Navigation from './Navigation'
import Settings from './Settings'

const Wrapper = styled.header`
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`

export default function Header() {
  return (
    <Wrapper>
      <Logo />
      <Navigation />
      <Settings />
    </Wrapper>
  )
}
