import React from 'react';
import AppContext from './AppContext';
import styled from 'styled-components';
import Twitter32 from '../images/twitter_32_min.png';
import Reddit32 from '../images/reddit_32_min.png';
import Sol32 from '../images/sol_32_min.png';
import Sol16 from '../images/sol_16_min.png';
import { numberWithCommas } from '../lib/utils';

const Section = styled.section`
  border: 1px solid #333333;
  width: 100%;
  border-radius: 5px;
  box-shadow: 1px 1px 7px var(--teal);
  background: rgb(33, 212, 170);
  background: linear-gradient(
    210deg,
    rgba(33, 212, 170, 1) 0%,
    rgba(109, 136, 204, 1) 50%,
    rgba(190, 54, 236, 1) 100%
  );
`;
const H1 = styled.h1`
  margin-left: 2rem;
`;
const Account = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 2rem;
  margin-bottom: 3rem;
`;
const Conversions = styled.article`
  text-align: center;
  margin-bottom: 3rem;
`;
const Hr = styled.hr`
  width: 70%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
`;
const Alpha = styled.article`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  margin-bottom: 2rem;
`;
const AlphaM = styled.div``;
const AlphaSides = styled.div``;
const Price = styled.p`
  font-size: 3rem;
  /* margin: 2rem 0; */
`;
const Rank = styled.p`
  font-size: 2rem;
  /* margin: 2rem 0; */
`;
const Links = styled.p`
  font-size: 1.6rem;
  margin: 2rem 0;
  * {
    margin: 0 0.5rem;
  }
`;
const Beta = styled.article`
  display: flex;
`;
const BetaColumns = styled.div`
  width: 50%;
`;
const BetaColumnsSeparator = styled.div`
  display: flex;
`;
const BetaColumnsValues = styled.div`
  margin: 0 auto;
  p {
    margin-bottom: 3rem;
  }
`;

export default function WalletStats() {
  // @ts-ignore
  const { myPublicKey, balance, data } = React.useContext(AppContext);
  // @ts-ignore
  const lamports = numberWithCommas(balance);
  const sol = balance / 1_000_000_000;
  const usd = (sol * data.currentPrice).toFixed(2);
  const circulatingPercent = (
    (data.circulatingSupply / data.maxSupply) *
    100
  ).toFixed(0);
  return (
    <Section>
      <H1 title={myPublicKey}>My Wallet</H1>

      <Account title={`${lamports} Lamports`}>
        <img src={Sol32} alt='Solana Logo' />
        <p>{sol} SOL</p>
        <p>${usd}</p>
      </Account>

      <Conversions>
        <p>
          <img src={Sol16} alt='Solana Logo' />1 SOL = 1,000,000,000 Lamports
        </p>
        <p>
          <img src={Sol16} alt='Solana Logo' /> 0.000000001 SOL = 1 Lamport
        </p>
      </Conversions>

      <Hr />

      <Alpha>
        <AlphaSides>
          <Price>${data.dayLow}</Price>
          <p>24hr Lo</p>
        </AlphaSides>
        <AlphaM>
          <Price>${data.currentPrice}</Price>
          <Rank>Rank: {data.rank}</Rank>
          <Links>
            <a
              href={`https://twitter.com/${data.twitterLink}`}
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <img src={Twitter32} alt='Twitter Logo' />
            </a>{' '}
            <a
              href={data.subredditLink}
              target='_blank'
              rel='noopener noreferrer nofollow'
            >
              <img src={Reddit32} alt='Reddit Logo' />
            </a>
          </Links>
        </AlphaM>
        <AlphaSides>
          <Price>${data.dayHigh}</Price>
          <p>24hr Hi</p>
        </AlphaSides>
      </Alpha>

      <Beta>
        <BetaColumns>
          <BetaColumnsSeparator>
            <BetaColumnsValues>
              <p>All Time High:</p>
              <p>Deviation:</p>
              <p>Date Achieved:</p>
            </BetaColumnsValues>
            <BetaColumnsValues>
              <p>${data.allTimeHigh}</p>
              <p>{data.allTimeHighPercent.toFixed(2)}%</p>
              <p>{new Date(data.allTimeHighDate).toDateString()}</p>
            </BetaColumnsValues>
          </BetaColumnsSeparator>
        </BetaColumns>
        <BetaColumns>
          <BetaColumnsSeparator>
            <BetaColumnsValues>
              <p>Circulating Supply: </p>
              <p>Max Supply: </p>
              <p>Sentiment: </p>
            </BetaColumnsValues>
            <BetaColumnsValues>
              <p>
                {numberWithCommas(data.circulatingSupply.toFixed(0))} (
                {circulatingPercent}%)
              </p>
              <p>{numberWithCommas(data.maxSupply)} (100%)</p>
              <p>
                {data.positiveSentiment.toFixed(0)}
                %👍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {data.negativeSentiment.toFixed(0)}%👎
              </p>
            </BetaColumnsValues>
          </BetaColumnsSeparator>
        </BetaColumns>
      </Beta>
    </Section>
  );
}
