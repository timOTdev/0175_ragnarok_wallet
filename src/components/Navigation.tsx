import styled from 'styled-components';

const Div = styled.div`
  flex-basis: 50%;
`;

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
          <a href={`${process.env.PUBLIC_URL}/`}>Wallet</a>
        </li>
        <li>
          <a href={`${process.env.PUBLIC_URL}/send`}>Send</a>
        </li>
        <li>
          <a href={`${process.env.PUBLIC_URL}/receive`}>Receive</a>
        </li>
        <li>
          <a href={`${process.env.PUBLIC_URL}/transactions`}>Transactions</a>
        </li>
        {/* <li>
          <a href={`${process.env.PUBLIC_URL}/nfts`}>NFTs</a>
        </li> */}
      </Ul>
    </>
  );
}
