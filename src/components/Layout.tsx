import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import React, { useState } from 'react';
import AppContext from './AppContext';

const ChildWrapper = styled.div`
  height: 100%;
`;

interface globalsContext {
  version: string;
  setVersion: React.Dispatch<React.SetStateAction<string>>;
  myPublicKey: string;
  setMyPublicKey: React.Dispatch<React.SetStateAction<string>>;
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
}

const Layout = ({ children }: any) => {
  const [version, setVersion] = useState('');
  const [myPublicKey, setMyPublicKey] = useState('');
  const [balance, setBalance] = useState(0);

  const globals: globalsContext = {
    version,
    setVersion,
    myPublicKey,
    setMyPublicKey,
    balance,
    setBalance,
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
