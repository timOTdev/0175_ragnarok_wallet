import styled from 'styled-components';
import Ragnarok from '../images/ragnarok.png';

const A = styled.a`
  flex-basis: 25%;
`;
const Img = styled.img`
  max-width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

export default function Logo() {
  return (
    <A href='/'>
      <Img src={Ragnarok} alt='Ragnarok Wallet Logo' />
    </A>
  );
}
