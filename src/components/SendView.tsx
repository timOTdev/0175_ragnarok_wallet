import React, { useState } from 'react';
import AppContext from './AppContext';
import {
  Connection,
  PublicKey,
  SystemProgram,
  sendAndConfirmTransaction,
  Transaction,
} from '@solana/web3.js';
import { getTxExplorerURL } from '../lib/utils';
import { getRpcURL, getWebSocketURL } from '../lib/utils';

export default function WalletStats() {
  // @ts-ignore
  const { balance, myPublicKey } = React.useContext(AppContext);
  // @ts-ignore

  // Set up hoooks.
  const [recipientPubKey, setRecipientPubKey] = useState('');
  const [sendAmount, setSendAmount] = useState(0);
  const [fetching, setFetching] = useState(false);
  const [txSignature, setTxSignature] = useState('');
  const [transactionUrl, setTransactionUrl] = useState('');

  // Transfer function to move lamports.
  const transfer = (e: any) => {
    e.preventDefault();

    // Check if amount is not NaN.
    if (isNaN(sendAmount)) {
      alert('Send amount needs to be a valid number');
    }

    // Make a PublicKey instance from public keys.
    const fromPubKey = new PublicKey(myPublicKey);
    const toPubKey = new PublicKey(recipientPubKey);

    // Instructions to attach to the transfer.
    const instructions = SystemProgram.transfer({
      fromPubkey: fromPubKey,
      toPubkey: toPubKey,
      lamports: sendAmount,
    });

    // Grab the private key from env variables to sign transaction.
    const myPrivateKey = process.env.REACT_APP_PRIVATE_WALLET_KEY
      ? JSON.parse(process.env.REACT_APP_PRIVATE_WALLET_KEY)
      : '';

    // Set the signer array object.
    const signers = [
      {
        publicKey: fromPubKey,
        secretKey: new Uint8Array(myPrivateKey),
      },
    ];

    // Zero out the current signature and toggle fetching state.
    setTxSignature('');
    setFetching(true);

    // Create a transaction instance.
    const transaction = new Transaction();

    // Add instructions.
    transaction.add(instructions);

    // Get the url endpoint.
    const url = getRpcURL();

    // Check for valid url.
    const isValidUrl = url ? url : '';

    // make connection instance.
    const connection = new Connection(isValidUrl, {
      wsEndpoint: getWebSocketURL(),
    });

    // Call sendAndConfirmTransaction
    // Arguments: Connection, Transaction, Signer[], optional ConfirmOptions
    // Returns: Promise of TransactionSignature
    // A transaction signature sample - "4LUURhcd4h2LMjnMaERBS1Q6vPH5oSKzXLM89Pqv2aoPFjsnPfgNV2p5uXAfKn4aeAZba4VSNkxgQw6h2m35ttuS")
    // You can explore Solana Explorer (https://explorer.solana.com/)
    // See libs/utils.js for address format.
    sendAndConfirmTransaction(connection, transaction, signers)
      .then((signature) => {
        setTxSignature(signature);
        setTransactionUrl(getTxExplorerURL(signature));
        setFetching(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <form name='transfer' onSubmit={(e) => transfer(e)}>
      <h1>Send</h1>
      <h2>My current balance:</h2>
      <p>{balance} lamports</p>
      <h2>Where to send?</h2>
      <input
        name='receiver'
        type='string'
        value={recipientPubKey}
        placeholder='Receiver public address...'
        onChange={(e) => setRecipientPubKey(e.target.value)}
        required
      />
      <h2>How much lamports to send?</h2>
      <p>1 SOL = 1,000,000,000 Lamports</p>
      <p>0.000000001 SOL = 1 Lamport</p>
      <input
        name='amount'
        type='number'
        value={sendAmount}
        placeholder='Lamports to send...'
        onChange={(e) => setSendAmount(parseInt(e.target.value))}
        required
      />
      <h2>Ready to Submit?</h2>
      <button type='submit'>Submit Transfer</button>
      {fetching && <p>Making transfer...</p>}
      {transactionUrl && (
        <>
          <p>
            Success! Sent {sendAmount} lamports to {recipientPubKey}!
          </p>
          <p>
            See your transaction at{' '}
            <a href={transactionUrl} target='_blank' rel='noreferrer'>
              {txSignature}
            </a>
            .
          </p>
        </>
      )}
    </form>
  );
}
