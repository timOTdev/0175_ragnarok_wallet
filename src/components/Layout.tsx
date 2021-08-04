import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import React, { useState } from 'react';
import AppContext from './AppContext';

const ChildWrapper = styled.div`
  height: 100%;
`;

interface globalsContext {
  publicKey: string;
  setPublicKey: React.Dispatch<React.SetStateAction<string>>;
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  version: string;
  setVersion: React.Dispatch<React.SetStateAction<string>>;
}

const Layout = ({ children }: any) => {
  const [publicKey, setPublicKey] = useState('');
  const [balance, setBalance] = useState(0);
  const [version, setVersion] = useState('');

  const globals: globalsContext = {
    publicKey,
    setPublicKey,
    balance,
    setBalance,
    version,
    setVersion,
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
