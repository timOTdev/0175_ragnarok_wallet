import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import React, { useState } from 'react';
import AppContext from './AppContext';

interface CoinDataProp {
  currentPrice: number;
  rank: number;
  marketCap: number;
  allTimeHigh: number;
  allTimeHighPercent: number;
  alllTimeHighDate: Date;
  circulatingSupply: number;
  maxSupply: number;
  dayLow: number;
  dayHigh: number;
  positiveSentiment: number;
  negativeSentiment: number;
  subredditLink: string;
  twitterLink: string;
}

const ChildWrapper = styled.div`
  height: 100%;
  width: 70%;
  margin: 0 auto;
`;

interface globalsContext {
  version: string;
  setVersion: React.Dispatch<React.SetStateAction<string>>;
  myPublicKey: string;
  setMyPublicKey: React.Dispatch<React.SetStateAction<string>>;
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  data: CoinDataProp;
  setData: React.Dispatch<React.SetStateAction<CoinDataProp>>;
}

const Layout = ({ children }: any) => {
  const [version, setVersion] = useState('');
  const [myPublicKey, setMyPublicKey] = useState('');
  const [balance, setBalance] = useState(0);
  const [data, setData] = useState<CoinDataProp>({
    currentPrice: 0,
    rank: 0,
    marketCap: 0,
    allTimeHigh: 0,
    allTimeHighPercent: 0,
    alllTimeHighDate: new Date(),
    circulatingSupply: 0,
    maxSupply: 0,
    dayLow: 0,
    dayHigh: 0,
    positiveSentiment: 0,
    negativeSentiment: 0,
    subredditLink: '',
    twitterLink: '',
  });

  const globals: globalsContext = {
    version,
    setVersion,
    myPublicKey,
    setMyPublicKey,
    balance,
    setBalance,
    data,
    setData,
  };

  return (
    <AppContext.Provider value={globals}>
      <Header />
      <ChildWrapper>{children}</ChildWrapper>
      <Footer />
    </AppContext.Provider>
  );
};

export default Layout;
