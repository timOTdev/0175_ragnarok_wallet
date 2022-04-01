import styled from 'styled-components';
import Sol16 from '../../images/sol_16_min.png';

const Article = styled.article`
  text-align: center;
  margin-bottom: 3rem;
`;

export default function Conversions() {
  return (
    <Article>
      <p>
        <img src={Sol16} alt='Solana Logo' />1 SOL = 1,000,000,000 Lamports
      </p>
      <p>
        <img src={Sol16} alt='Solana Logo' /> 0.000000001 SOL = 1 Lamport
      </p>
    </Article>
  );
}
