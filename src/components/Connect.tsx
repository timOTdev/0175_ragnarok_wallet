import React from 'react';
import { getRpcURL } from '../lib/utils';
import { Connection, PublicKey } from '@solana/web3.js';
import AppContext from './AppContext';

const Connect = () => {
  // @ts-ignore
  const { version, setVersion, setMyPublicKey, setBalance } =
    React.useContext(AppContext);
  // @ts-ignore

  React.useEffect(() => {
    // Get public wallet key from env variables.
    const myPublicKey = process.env.REACT_APP_PUBLIC_WALLET_KEY
      ? process.env.REACT_APP_PUBLIC_WALLET_KEY
      : '';

    // Set the public key on global state for display.
    setMyPublicKey(myPublicKey);

    // Grab the url from utils.
    const url = getRpcURL();

    // Check if url is not undefined.
    const connection =
      url !== undefined ? new Connection(url) : new Connection('');

    // Get the API version.
    connection
      .getVersion()
      .then((result: any) => {
        // Grab only the version number.
        setVersion(result['solana-core']);
      })
      .catch((error: Error) => console.error(error));

    // Set up new instance for usage.
    const myAddress = new PublicKey(myPublicKey);

    // Call getBalance method of Connection class.
    // Takes in PublicKey instance and optional arg "Commitment" showing commitment desired when querying state.
    // Returns a promise with balance in lamports (number).
    connection
      .getBalance(myAddress)
      .then((result) => {
        setBalance(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [version, setMyPublicKey, setVersion, setBalance]);

  return (
    <>
      {version && <button>🟢 v{version} </button>}
      {!version && <button>🔴 Disconnected</button>}
    </>
  );
};

export default Connect;
