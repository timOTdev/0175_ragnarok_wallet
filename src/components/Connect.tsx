import React from 'react';
import { getRpcURL } from '../lib/utils';
import { Connection, PublicKey } from '@solana/web3.js';
import AppContext from './AppContext';

const Connect = () => {
  // @ts-ignore
  const { version, setVersion, setMyPublicKey, setBalance, setData } =
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

  React.useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/solana')
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          console.error('notFound');
          return;
        }
        setData({
          currentPrice: data.market_data.current_price.usd,
          rank: data.market_cap_rank,
          marketCap: data.market_data.usd,
          allTimeHigh: data.market_data.ath.usd,
          allTimeHighPercent: data.market_data.ath_change_percentage.usd,
          allTimeHighDate: data.market_data.ath_date.usd,
          circulatingSupply: data.market_data.circulating_supply,
          maxSupply: data.market_data.max_supply,
          dayLow: data.market_data.low_24h.usd,
          dayHigh: data.market_data.high_24h.usd,
          positiveSentiment: data.sentiment_votes_up_percentage,
          negativeSentiment: data.sentiment_votes_down_percentage,
          subredditLink: data.links.subreddit_url,
          twitterLink: data.links.twitter_screen_name,
        });
      });
  }, [setData]);

  return (
    <>
      {version && <button>🟢 Devnet v{version} </button>}
      {!version && <button>🔴 Disconnected</button>}
    </>
  );
};

export default Connect;
