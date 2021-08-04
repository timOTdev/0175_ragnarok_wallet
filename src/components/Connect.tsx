import { useEffect, useState } from 'react';
import { getRpcURL } from '../lib/utils';
import { Connection } from '@solana/web3.js';

const Connect = () => {
  const [version, setVersion] = useState();

  useEffect(() => {
    getConnection();
  }, []);

  const getConnection = () => {
    // Grab the url from utils.
    const url = getRpcURL();

    // Get the API version.
    const myConnection =
      url !== undefined ? new Connection(url) : new Connection('');

    // Get the API version.
    myConnection
      .getVersion()
      .then((version: any) => {
        // Grab only the version number.
        setVersion(version['solana-core']);
      })
      .catch((error: Error) => console.error(error));
  };

  return (
    <>
      {version && <button>🟢 v{version} </button>}
      {!version && <button>🔴 Disconnected</button>}
    </>
  );
};

export default Connect;
