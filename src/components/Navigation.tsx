import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  width: 40%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  li {
    width: 20%;
  }
  a {
    color: var(--teal);
    text-decoration: none;
  }
`;

export default function Navigation(props: any) {
  return (
    <>
      <Ul>
        <li>
          <Link to='/'>Wallet</Link>
        </li>
        <li>
          <Link to='/send'>Send</Link>
        </li>
        <li>
          <Link to='/receive'>Receive</Link>
        </li>
        <li>
          <Link to='/transactions'>Transactions</Link>
        </li>
      </Ul>
    </>
  );
}
