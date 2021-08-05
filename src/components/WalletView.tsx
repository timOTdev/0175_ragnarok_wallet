import React from 'react';
import AppContext from './AppContext';

export default function WalletStats() {
  // @ts-ignore
  const { publicKey, balance } = React.useContext(AppContext);
  // @ts-ignore

  return (
    <>
      <h1>Wallet</h1>
      <h2>My public key:</h2>
      <p>{publicKey}</p>
      <h2>My private key:</h2>
      <h2>My current balance:</h2>
      <p>{balance} lamports</p>
    </>
  );
}
