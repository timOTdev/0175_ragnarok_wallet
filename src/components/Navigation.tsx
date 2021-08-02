import styled from 'styled-components';

const Div = styled.div`
  flex-basis: 33%;
`

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  width: 100%;
  display: flex;
  justify-content: 'space-between';
  li {
    width: 25%;
  }
  a {
    text-decoration: none;
  }
`

export default function Navigation() {
  return (
    <Div>
      <Ul>
        <li><a href='wallet'>Wallet</a></li>
        <li><a href='send'>Send</a></li>
        <li><a href='receive'>Receive</a></li>
        <li><a href='directory'>Directory</a></li>
      </Ul>
    </Div>
  )
}
